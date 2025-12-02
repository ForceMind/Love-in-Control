// Game State
let gameState = {
    identity: null,
    frameScore: 50,
    currentHeroine: null,
    attraction: 0,
    currentSceneId: null
};

// DOM Elements
const dialogueText = document.getElementById('dialogue-text');
const speakerName = document.getElementById('speaker-name');
const choicesContainer = document.getElementById('choices-container');
const statsBar = document.getElementById('stats-bar');
const frameScoreEl = document.getElementById('frame-score');
const currentTargetEl = document.getElementById('current-target');
const attractionScoreEl = document.getElementById('attraction-score');
const feedbackOverlay = document.getElementById('feedback-overlay');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackReason = document.getElementById('feedback-reason');
const feedbackStatChange = document.getElementById('feedback-stat-change');
const visualText = document.getElementById('visual-text');

// Initialize Game
function startGame(identityKey) {
    gameState.identity = identityKey;
    gameState.frameScore = 50; // Reset
    gameState.attraction = 0;
    
    // Load identity specific intro
    const identity = gameData.identities[identityKey];
    
    // Update UI
    statsBar.classList.remove('hidden');
    updateStats();
    
    // Start first scene based on identity
    const introSceneId = `intro_${identityKey}`;
    if (gameData.scenes[introSceneId]) {
        loadScene(introSceneId);
    } else {
        // Fallback
        loadScene('meeting_lin_wan');
    }
}

function updateStats() {
    frameScoreEl.innerText = `框架值: ${gameState.frameScore}`;
    if (gameState.currentHeroine) {
        currentTargetEl.innerText = `当前目标: ${gameData.heroines[gameState.currentHeroine].name}`;
        attractionScoreEl.innerText = `吸引力: ${gameState.attraction}`;
    } else {
        currentTargetEl.innerText = "当前目标: 无";
        attractionScoreEl.innerText = "";
    }
}

function loadScene(sceneId) {
    const scene = gameData.scenes[sceneId];
    if (!scene) {
        console.error("Scene not found:", sceneId);
        return;
    }
    
    gameState.currentSceneId = sceneId;
    
    // Set Heroine context if scene specifies it
    if (scene.heroine) {
        gameState.currentHeroine = scene.heroine;
    }

    // Update Visuals
    visualText.innerText = scene.location || "场景";

    // Update Dialogue
    speakerName.innerText = scene.speaker || "旁白";
    dialogueText.innerText = scene.text;

    // Generate Choices
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = choice.text;
        btn.onclick = () => handleChoice(choice);
        choicesContainer.appendChild(btn);
    });

    updateStats();
}

function handleChoice(choice) {
    // Apply effects
    if (choice.effect) {
        gameState.frameScore += (choice.effect.frame || 0);
        gameState.attraction += (choice.effect.attraction || 0);
    }

    // Show feedback
    showFeedback(choice);
}

function showFeedback(choice) {
    feedbackOverlay.classList.remove('hidden');
    
    let title = "";
    let titleClass = "";
    
    if (choice.type === 'alpha') {
        title = "主导权确立";
        titleClass = "alpha-move";
    } else if (choice.type === 'beta') {
        title = "好人卡警告";
        titleClass = "good-guy-card";
    } else {
        title = "普通反应";
        titleClass = "";
    }

    feedbackTitle.innerText = title;
    feedbackTitle.className = titleClass;
    
    feedbackReason.innerText = choice.feedback || "";
    
    let statText = "";
    if (choice.effect) {
        if (choice.effect.frame) statText += `框架值 ${choice.effect.frame > 0 ? '+' : ''}${choice.effect.frame} `;
        if (choice.effect.attraction) statText += `吸引力 ${choice.effect.attraction > 0 ? '+' : ''}${choice.effect.attraction}`;
    }
    feedbackStatChange.innerText = statText;

    // Store next scene to load after closing feedback
    feedbackOverlay.dataset.nextScene = choice.nextScene;
}

function closeFeedback() {
    feedbackOverlay.classList.add('hidden');
    const nextScene = feedbackOverlay.dataset.nextScene;
    
    if (nextScene === 'restart') {
        location.reload();
        return;
    }

    // Check for Game Over or Win conditions
    if (gameState.frameScore <= 0) {
        alert("你彻底失去了框架，沦为舔狗。游戏结束。");
        location.reload();
        return;
    }

    if (nextScene) {
        loadScene(nextScene);
    }
}
