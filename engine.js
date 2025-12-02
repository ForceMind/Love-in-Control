// Engine State
const gameState = {
    characterId: null,
    frameScore: 50,
    attractionScore: 0,
    currentSceneId: null,
    history: [],
    harem: {} // { heroineId: { status: 'met', attraction: 0 } }
};

// UI Controller
window.ui = {
    screens: ['menu', 'game', 'profile', 'harem', 'system'],
    
    toggleMenu: () => {
        const nav = document.getElementById('nav-menu');
        nav.classList.toggle('active');
    },

    showScreen: (screenName) => {
        // Force hide all screens first using direct style manipulation for safety
        ui.screens.forEach(s => {
            const el = document.getElementById(`screen-${s}`);
            if (el) {
                el.classList.remove('active');
                el.style.display = 'none'; // Force hide
            }
        });
        
        // Show target screen
        const target = document.getElementById(`screen-${screenName}`);
        if (target) {
            target.style.display = 'flex'; // Force show
            // Small timeout to allow display:flex to apply before adding active class for animation
            setTimeout(() => {
                target.classList.add('active');
            }, 10);
        }
        
        // Update nav active state
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        
        // Toggle Menu Button Visibility
        const menuBtn = document.getElementById('menu-toggle');
        // Hide menu button on main menu AND system screen (if accessed from main menu context, usually safer)
        if (screenName === 'menu') {
            menuBtn.classList.add('hidden');
        } else {
            menuBtn.classList.remove('hidden');
        }

        // Refresh content if needed
        if (screenName === 'profile') ui.renderProfile();
        if (screenName === 'harem') ui.renderHarem();
    },

    renderProfile: () => {
        const grid = document.getElementById('character-select-grid');
        grid.innerHTML = '';
        Object.values(storyData.characters).forEach(char => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h3>${char.name}</h3><p>${char.title}</p>`;
            card.onclick = () => {
                ui.selectCharacter(char);
            };
            grid.appendChild(card);
        });
    },

    selectCharacter: (char) => {
        const infoDiv = document.getElementById('current-character-info');
        infoDiv.classList.remove('hidden');
        document.getElementById('char-name').innerText = char.name;
        document.getElementById('char-bio').innerText = char.bio;
        
        // Store selected char temporarily or start immediately
        gameState.tempCharId = char.id;
    },

    renderHarem: () => {
        const grid = document.getElementById('harem-grid');
        grid.innerHTML = '';
        
        // If no character selected, show all or none
        if (!gameState.characterId) {
            grid.innerHTML = '<p>请先开始游戏选择身份。</p>';
            return;
        }

        const charData = storyData.characters[gameState.characterId];
        if (!charData) return;

        charData.heroines.forEach(hId => {
            const hData = storyData.heroines[hId];
            const hState = gameState.harem[hId] || { status: 'unknown', attraction: 0 };
            
            const card = document.createElement('div');
            card.className = 'card';
            card.style.borderColor = hState.status === 'met' ? '#3399ff' : '#333';
            
            let statusText = hState.status === 'met' ? `吸引力: ${hState.attraction}` : '未解锁';
            
            card.innerHTML = `
                <h3>${hData.name}</h3>
                <p>${hData.title}</p>
                <p style="color: ${hState.status === 'met' ? '#fff' : '#666'}">${statusText}</p>
            `;
            grid.appendChild(card);
        });
    },

    updateStats: () => {
        document.getElementById('val-frame').innerText = gameState.frameScore;
        document.getElementById('bar-frame').style.width = `${Math.min(100, Math.max(0, gameState.frameScore))}%`;
        
        document.getElementById('val-attraction').innerText = gameState.attractionScore;
        document.getElementById('bar-attraction').style.width = `${Math.min(100, Math.max(0, gameState.attractionScore))}%`;
    },

    showToast: (title, message, type = 'neutral') => {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        `;
        container.appendChild(toast);
        
        // Remove after animation
        setTimeout(() => {
            toast.remove();
        }, 3000);
    },

    showFeedback: (choice) => {
        // Show feedback as toast instead of modal
        let type = 'neutral';
        let title = "系统分析";
        
        if (choice.type === 'alpha') {
            title = "主导权确立 (ALPHA)";
            type = 'alpha';
        } else if (choice.type === 'beta') {
            title = "好人卡警告 (BETA)";
            type = 'beta';
        }

        // Show main feedback
        if (choice.feedback) {
            ui.showToast(title, choice.feedback, type);
        }

        // Show stat changes
        if (choice.effect) {
            if (choice.effect.frame !== 0) {
                const val = choice.effect.frame;
                ui.showToast("框架变化", `FRAME ${val > 0 ? '+' : ''}${val}`, val > 0 ? 'gain' : 'loss');
            }
            if (choice.effect.attraction !== 0) {
                const val = choice.effect.attraction;
                ui.showToast("吸引力变化", `ATTRACTION ${val > 0 ? '+' : ''}${val}`, val > 0 ? 'gain' : 'loss');
            }
        }

        // Proceed to next scene immediately (or with slight delay if desired)
        if (choice.nextScene === 'root_menu') {
            ui.showScreen('menu');
        } else if (choice.nextScene) {
            game.loadScene(choice.nextScene);
        }
    },

    closeFeedback: () => {
        // Deprecated
    }
};

// Game Controller
window.game = {
    startIntro: () => {
        ui.showScreen('game');
        game.loadScene('intro_main');
    },

    restartWithCharacter: (charId) => {
        const id = charId || gameState.tempCharId;
        if (!id) return;
        
        gameState.characterId = id;
        gameState.frameScore = 50;
        gameState.attractionScore = 0;
        gameState.harem = {};
        
        // Initialize harem for this char
        const charData = storyData.characters[gameState.characterId];
        if (charData) {
            charData.heroines.forEach(hId => {
                gameState.harem[hId] = { status: 'locked', attraction: 0 };
            });
        }

        // Start Intro
        const introScene = `intro_${gameState.characterId}`;
        ui.showScreen('game');
        game.loadScene(introScene);
    },

    loadScene: (sceneId) => {
        const scene = storyData.scenes[sceneId];
        if (!scene) {
            console.error("Scene missing:", sceneId);
            return;
        }

        gameState.currentSceneId = sceneId;

        // Update UI
        document.getElementById('location-tag').innerText = `LOCATION: ${scene.location || 'UNKNOWN'}`;
        document.getElementById('scene-visual-text').innerText = scene.location || "";
        document.getElementById('speaker-tag').innerText = scene.speaker || "SYSTEM";
        document.getElementById('dialogue-text').innerText = scene.text;

        // Generate Choices
        const choicesContainer = document.getElementById('choices-container');
        choicesContainer.innerHTML = '';
        
        scene.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerText = choice.text;
            
            // Add type indicator class
            if (choice.type === 'alpha') btn.classList.add('alpha-hint'); // Optional: visual hint
            
            btn.onclick = () => game.handleChoice(choice);
            choicesContainer.appendChild(btn);
        });

        ui.updateStats();
    },

    handleChoice: (choice) => {
        // Apply effects
        if (choice.effect) {
            gameState.frameScore += (choice.effect.frame || 0);
            gameState.attractionScore += (choice.effect.attraction || 0);
        }

        // Unlock Heroine if specified
        if (choice.unlockHeroine) {
            game.unlockHeroine(choice.unlockHeroine);
        }

        // Special Actions
        if (choice.action) {
            if (choice.action.startsWith('startGame:')) {
                const charId = choice.action.split(':')[1];
                game.restartWithCharacter(charId);
                return; // restartWithCharacter handles scene loading
            }
        }

        // Show feedback
        ui.showFeedback(choice);
    },

    unlockHeroine: (heroineId) => {
        if (!gameState.harem[heroineId]) {
            // If it's a cross-over heroine not in original list
            gameState.harem[heroineId] = { status: 'met', attraction: 0 };
        } else {
            gameState.harem[heroineId].status = 'met';
        }
        // Optional: Notification
        console.log(`Unlocked heroine: ${heroineId}`);
    },

    quitGame: () => {
        // Clear temp state if needed, but keep save data
        gameState.characterId = null;
        gameState.currentSceneId = null;
        ui.showScreen('menu');
    }
};

// Save System
window.saveSystem = {
    saveGame: () => {
        localStorage.setItem('lic_save_data', JSON.stringify(gameState));
        ui.showToast("系统", "保存成功！", "gain");
    },
    
    loadGame: () => {
        const data = localStorage.getItem('lic_save_data');
        if (data) {
            const loadedState = JSON.parse(data);
            Object.assign(gameState, loadedState);
            
            if (gameState.currentSceneId) {
                ui.showScreen('game');
                game.loadScene(gameState.currentSceneId);
            } else {
                ui.showScreen('profile');
            }
            ui.showToast("系统", "读取成功！", "gain");
        } else {
            ui.showToast("系统", "无存档记录。", "loss");
        }
    },

    clearData: () => {
        localStorage.removeItem('lic_save_data');
        location.reload();
    }
};

// Init
window.onload = () => {
    ui.showScreen('menu'); // Start at main menu
    initParticles();
};

// Particle System
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];
    
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resize);
    resize();
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
            this.alpha = Math.random() * 0.5;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }
        
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
}
