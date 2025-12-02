// editor.js

const app = {
    data: window.storyData.scenes || {},
    currentSceneId: null,

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.renderList();
    },

    cacheDOM() {
        this.dom = {
            sceneList: document.getElementById('scene-list'),
            searchInput: document.getElementById('search-input'),
            sceneForm: document.getElementById('scene-form'),
            emptyState: document.getElementById('empty-state'),
            sceneIdDisplay: document.getElementById('scene-id-display'),
            
            // Form Fields
            fieldId: document.getElementById('field-id'),
            fieldLocation: document.getElementById('field-location'),
            fieldSpeaker: document.getElementById('field-speaker'),
            fieldText: document.getElementById('field-text'),
            choicesContainer: document.getElementById('choices-container'),

            // Buttons
            btnNew: document.getElementById('btn-new-scene'),
            btnAddChoice: document.getElementById('btn-add-choice'),
            btnCopy: document.getElementById('btn-copy-json'),
            btnSave: document.getElementById('btn-save-local')
        };
    },

    bindEvents() {
        this.dom.searchInput.addEventListener('input', () => this.renderList());
        this.dom.btnNew.addEventListener('click', () => this.createNewScene());
        this.dom.btnAddChoice.addEventListener('click', () => this.addChoiceHTML({}));
        this.dom.btnSave.addEventListener('click', () => this.saveCurrentScene());
        this.dom.btnCopy.addEventListener('click', () => this.copyJSON());
    },

    renderList() {
        const filter = this.dom.searchInput.value.toLowerCase();
        this.dom.sceneList.innerHTML = '';

        Object.values(this.data).forEach(scene => {
            if (scene.id.toLowerCase().includes(filter) || scene.text.toLowerCase().includes(filter)) {
                const li = document.createElement('li');
                li.className = `scene-item ${this.currentSceneId === scene.id ? 'active' : ''}`;
                li.innerHTML = `
                    <span class="id">${scene.id}</span>
                    <span class="preview">${scene.text.substring(0, 30)}...</span>
                `;
                li.addEventListener('click', () => this.loadScene(scene.id));
                this.dom.sceneList.appendChild(li);
            }
        });
    },

    loadScene(id) {
        this.currentSceneId = id;
        const scene = this.data[id];

        // UI Update
        this.dom.emptyState.classList.add('hidden');
        this.dom.sceneForm.classList.remove('hidden');
        this.dom.sceneIdDisplay.textContent = id;
        
        // Highlight list item
        this.renderList(); 

        // Populate Form
        this.dom.fieldId.value = scene.id;
        this.dom.fieldLocation.value = scene.location || '';
        this.dom.fieldSpeaker.value = scene.speaker || '';
        this.dom.fieldText.value = scene.text || '';

        // Populate Choices
        this.dom.choicesContainer.innerHTML = '';
        if (scene.choices && scene.choices.length > 0) {
            scene.choices.forEach(choice => this.addChoiceHTML(choice));
        }
    },

    createNewScene() {
        const newId = "new_scene_" + Date.now();
        this.data[newId] = {
            id: newId,
            text: "新场景内容...",
            location: "未知地点",
            speaker: "旁白",
            choices: []
        };
        this.loadScene(newId);
    },

    addChoiceHTML(choiceData) {
        const div = document.createElement('div');
        div.className = 'choice-item';
        div.innerHTML = `
            <div class="choice-header">
                <span>选项</span>
                <button type="button" class="btn-remove">删除</button>
            </div>
            <div class="form-group">
                <label>文本 (Text)</label>
                <input type="text" class="c-text" value="${choiceData.text || ''}">
            </div>
            <div class="form-row">
                <div class="form-group half">
                    <label>类型 (Type)</label>
                    <select class="c-type">
                        <option value="neutral" ${choiceData.type === 'neutral' ? 'selected' : ''}>中立 (Neutral)</option>
                        <option value="alpha" ${choiceData.type === 'alpha' ? 'selected' : ''}>强势 (Alpha)</option>
                        <option value="beta" ${choiceData.type === 'beta' ? 'selected' : ''}>弱势 (Beta)</option>
                    </select>
                </div>
                <div class="form-group half">
                    <label>跳转场景ID (Next Scene)</label>
                    <input type="text" class="c-next" value="${choiceData.nextScene || ''}">
                </div>
            </div>
            <div class="form-group">
                <label>反馈 (Feedback)</label>
                <input type="text" class="c-feedback" value="${choiceData.feedback || ''}">
            </div>
            <div class="form-row">
                <div class="form-group half">
                    <label>Frame (+/-)</label>
                    <input type="number" class="c-frame" value="${choiceData.effect?.frame || 0}">
                </div>
                <div class="form-group half">
                    <label>Attraction (+/-)</label>
                    <input type="number" class="c-attr" value="${choiceData.effect?.attraction || 0}">
                </div>
            </div>
        `;

        div.querySelector('.btn-remove').addEventListener('click', () => div.remove());
        this.dom.choicesContainer.appendChild(div);
    },

    saveCurrentScene() {
        if (!this.currentSceneId) return;

        const newId = this.dom.fieldId.value;
        
        // Construct object
        const sceneObj = {
            id: newId,
            text: this.dom.fieldText.value,
            location: this.dom.fieldLocation.value,
            speaker: this.dom.fieldSpeaker.value,
            choices: []
        };

        // Collect choices
        const choiceItems = this.dom.choicesContainer.querySelectorAll('.choice-item');
        choiceItems.forEach(item => {
            sceneObj.choices.push({
                text: item.querySelector('.c-text').value,
                type: item.querySelector('.c-type').value,
                nextScene: item.querySelector('.c-next').value,
                feedback: item.querySelector('.c-feedback').value,
                effect: {
                    frame: parseInt(item.querySelector('.c-frame').value) || 0,
                    attraction: parseInt(item.querySelector('.c-attr').value) || 0
                }
            });
        });

        // Update data
        if (newId !== this.currentSceneId) {
            delete this.data[this.currentSceneId]; // ID changed, remove old
        }
        this.data[newId] = sceneObj;
        this.currentSceneId = newId;
        
        this.renderList();
        alert('场景已暂存到内存中 (刷新页面会丢失，请及时复制JSON)');
    },

    copyJSON() {
        if (!this.currentSceneId) return;
        const scene = this.data[this.currentSceneId];
        
        // Format as a JS object property string
        const jsonString = `    "${scene.id}": ${JSON.stringify(scene, null, 4)},`;
        
        navigator.clipboard.writeText(jsonString).then(() => {
            alert('JSON 已复制到剪贴板！\n请打开对应的 data/*.js 文件粘贴。');
        });
    }
};

// Start
document.addEventListener('DOMContentLoaded', () => app.init());
