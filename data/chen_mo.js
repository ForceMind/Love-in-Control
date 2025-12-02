window.storyData = window.storyData || {};
window.storyData.heroines = window.storyData.heroines || {};
window.storyData.scenes = window.storyData.scenes || {};

Object.assign(window.storyData.heroines, {
    "streamer_kiki": { name: "Kiki", title: "人气主播", bio: "在镜头前是女神，私下里却很邋遢。" },
    "cosplayer_yuki": { name: "Yuki", title: "二次元少女", bio: "分不清现实和幻想。" },
    "guild_master": { name: "公会会长", title: "网游大姐大", bio: "在游戏里呼风唤雨。" },
    "neighbor_girl": { name: "邻家女孩", title: "清纯学生", bio: "不知道隔壁住着黑客大神。" },
    "ai_researcher": { name: "AI研究员", title: "高智商御姐", bio: "对陈默的技术很感兴趣。" }
});

Object.assign(window.storyData.scenes, {
    "intro_chen_mo": {
        id: "intro_chen_mo",
        text: "黑暗的房间，只有显示器的蓝光。你刚刚黑进了当红主播Kiki的私人摄像头。你发现她在直播间甜美可人，私下里却在抽烟，还在骂粉丝是傻X。",
        location: "黑客基地",
        speaker: "旁白",
        choices: [
            { text: "匿名给她发一条私信：“我知道你的秘密，Kiki。”", type: "alpha", nextScene: "cm_scene_1_threat", effect: { frame: 10, attraction: 0 }, unlockHeroine: "streamer_kiki" },
            { text: "默默关掉，觉得幻灭了。", type: "neutral", nextScene: "cm_scene_gameover", effect: { frame: 0, attraction: 0 } }
        ]
    },
    "cm_scene_1_threat": {
        id: "cm_scene_1_threat",
        text: "Kiki在直播中脸色瞬间变白。她匆匆下播，给你回信：“你是谁？你想干什么？要钱吗？”",
        location: "网络聊天",
        speaker: "Kiki",
        choices: [
            { text: "“我不要钱。我要你现在穿上那件蓝色的裙子，给我跳支舞。只给我一个人。”", type: "alpha", nextScene: "end_demo", feedback: "建立绝对的心理支配。", effect: { frame: 15, attraction: 5 } },
            { text: "“别紧张，我只是想提醒你注意隐私。”", type: "beta", nextScene: "cm_scene_gameover", feedback: "好人卡预定。", effect: { frame: -10, attraction: -10 } }
        ]
    },
    "cm_scene_gameover": {
        id: "cm_scene_gameover",
        text: "你选择了退缩。在这个残酷的世界里，没有行动力的人注定孤独。",
        location: "结局",
        speaker: "系统",
        choices: [
            { text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} }
        ]
    }
});