# Love in Control - 剧情开发文档

## 1. 项目结构

- `index.html`: 游戏入口文件
- `style.css`: 游戏样式表
- `engine.js`: 游戏核心引擎（状态管理、UI渲染、逻辑控制）
- `editor.html`: 剧情编辑器（可视化编辑剧情）
- `data/`: 剧情数据文件夹
    - `common.js`: 通用配置
    - `characters.js`: 角色定义
    - `jiang_feng.js`: 江枫线剧情
    - `chen_mo.js`: 陈默线剧情
    - `li_ze.js`: 李泽线剧情
    - `wang_meng.js`: 王猛线剧情

## 2. 剧情数据结构

所有的剧情数据都挂载在 `window.storyData` 对象上。

### 2.1 场景 (Scene)

场景是游戏的基本单元。每个场景对象包含以下字段：

```javascript
"scene_id": {
    id: "scene_id",          // 场景唯一ID (字符串)
    text: "场景描述文本...",   // 剧情正文 (支持 \n 换行)
    location: "地点名称",     // 显示在界面上的地点
    speaker: "说话人",        // 当前说话的角色名字 (如 "旁白", "苏小小")
    choices: [               // 选项数组
        {
            text: "选项文本",
            type: "alpha",   // 选项类型: "alpha"(强势/进攻), "beta"(弱势/讨好), "neutral"(中立)
            nextScene: "next_scene_id", // 点击后跳转的场景ID
            feedback: "反馈文本",       // (可选) 点击后的简短反馈提示
            effect: {                  // (可选) 属性影响
                frame: 10,             // 增加/减少 框架值 (Frame)
                attraction: 5          // 增加/减少 吸引力 (Attraction)
            },
            unlockHeroine: "heroine_id" // (可选) 解锁的女主角ID
        }
    ]
}
```

### 2.2 角色 (Heroine)

角色定义在 `window.storyData.heroines` 中：

```javascript
"heroine_id": {
    name: "姓名",
    title: "称号",
    bio: "简介"
}
```

## 3. 如何添加新剧情

1.  **使用编辑器**: 打开 `editor.html`，可以可视化地查看和修改现有剧情，或创建新场景。编辑器会生成 JSON 代码，你需要将其复制回对应的 `.js` 文件中。
2.  **手动编辑**:
    -   在 `data/` 目录下找到对应的角色文件（或新建文件）。
    -   使用 `Object.assign(window.storyData.scenes, { ... })` 扩展场景。
    -   确保 `nextScene` 指向有效的场景 ID。

## 4. 命名规范

- **场景ID**: 建议使用 `前缀_章节_描述` 的格式。
    - 江枫线: `jf_` (如 `jf_1_library`)
    - 陈默线: `cm_` (如 `cm_intro`)
    - 李泽线: `lz_`
    - 王猛线: `wm_`
- **变量名**: 使用驼峰命名法 (camelCase)。

## 5. 调试

- 在浏览器控制台输入 `game.loadScene('scene_id')` 可直接跳转到指定场景。
- 输入 `gameState` 可查看当前游戏状态。
