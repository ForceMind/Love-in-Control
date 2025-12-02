window.storyData = window.storyData || {};
window.storyData.heroines = window.storyData.heroines || {};
window.storyData.scenes = window.storyData.scenes || {};

// Helper to get char prefix
window.getCharPrefix = function(charId) {
    if (charId === 'jiang_feng') return 'jf_';
    if (charId === 'li_ze') return 'lz_';
    if (charId === 'wang_meng') return 'wm_';
    if (charId === 'chen_mo') return 'cm_';
    return '';
};

Object.assign(window.storyData.scenes, {
    "root_menu": {
        id: "root_menu",
        text: "系统已重置。请返回主菜单。",
        location: "SYSTEM",
        speaker: "SYSTEM",
        choices: [
            { text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }
        ]
    },
    "end_demo": {
        id: "end_demo",
        text: "【演示版本结束】\n你已体验了该角色的序章。在完整版中，你将深入攻略5位不同的女性，并解锁隐藏的交叉剧情。",
        location: "系统",
        speaker: "SYSTEM",
        choices: [
            { text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }
        ]
    },
    // --- 新手引导 / 角色选择剧情 ---
    "intro_main": {
        id: "intro_main",
        text: "【系统启动中...】\n意识在虚无中漂浮。你感觉不到身体的存在，只有无数的数据流在眼前飞速掠过。\n\n“欢迎来到L.I.C.系统。” 一个冰冷的机械女声在你脑海中响起，“这里是现实世界的镜像，也是欲望的角斗场。”",
        location: "虚拟空间",
        speaker: "引导者",
        choices: [
            { text: "“你是谁？这是哪里？”", type: "neutral", nextScene: "intro_q1", effect: {} },
            { text: "“少废话，告诉我怎么赢。”", type: "alpha", nextScene: "intro_q1_alpha", effect: { frame: 5 } }
        ]
    },
    "intro_q1": {
        id: "intro_q1",
        text: "“我是系统的引导者。这里是你的潜意识深处。”\n\n引导者的声音没有起伏，“在现实中，你可能是一个失败者，也可能是一个成功者。但在爱情的博弈中，你是否掌握了真正的主导权？”",
        location: "虚拟空间",
        speaker: "引导者",
        choices: [
            { text: "“主导权？我认为爱情应该是平等的。”", type: "beta", nextScene: "intro_q2_beta", effect: { frame: -5 } },
            { text: "“当然。没有主导权，就只能做猎物。”", type: "alpha", nextScene: "intro_q2_alpha", effect: { frame: 5 } }
        ]
    },
    "intro_q1_alpha": {
        id: "intro_q1_alpha",
        text: "“很好。直接，有野心。”\n\n引导者似乎对你的态度很满意，“在这个世界里，赢就是一切。爱情不是童话，而是一场关于权力、心理和欲望的零和博弈。”",
        location: "虚拟空间",
        speaker: "引导者",
        choices: [
            { text: "“我准备好了。开始吧。”", type: "alpha", nextScene: "intro_q2_alpha", effect: { frame: 5 } }
        ]
    },
    "intro_q2_beta": {
        id: "intro_q2_beta",
        text: "“平等？多么天真的想法。”\n\n周围的数据流变成了红色的警告色，“在这个残酷的丛林里，追求平等只会让你成为强者的盘中餐。你需要学会如何狩猎，而不是等待被施舍。”",
        location: "虚拟空间",
        speaker: "引导者",
        choices: [
            { text: "“我明白了。教我怎么做。”", type: "neutral", nextScene: "intro_select_pre", effect: {} }
        ]
    },
    "intro_q2_alpha": {
        id: "intro_q2_alpha",
        text: "“看来你已经具备了成为顶级猎手的潜质。”\n\n数据流汇聚成四张不同的人脸，悬浮在你的面前，“现在，你需要选择一个载体。不同的身份，意味着不同的起点，也意味着不同的挑战。”",
        location: "虚拟空间",
        speaker: "引导者",
        choices: [
            { text: "审视这些身份。", type: "neutral", nextScene: "intro_select_pre", effect: {} }
        ]
    },
    "intro_select_pre": {
        id: "intro_select_pre",
        text: "四张面孔逐渐清晰。\n\n第一张年轻而冷峻，眼神中透着不屑；\n第二张英俊而疲惫，似乎看透了繁华；\n第三张粗犷而野性，充满原始的力量；\n第四张隐藏在阴影中，只有一双眼睛在发光。\n\n“告诉我，你是谁？”",
        location: "虚拟空间",
        speaker: "引导者",
        choices: [
            { text: "我是江枫：高智商穷学生，用逻辑看透人心。", type: "neutral", nextScene: "intro_confirm_jiang_feng", effect: {} },
            { text: "我是李泽：财阀继承人，在虚伪中寻找真实。", type: "neutral", nextScene: "intro_confirm_li_ze", effect: {} },
            { text: "我是王猛：野性蓝领，用荷尔蒙征服一切。", type: "neutral", nextScene: "intro_confirm_wang_meng", effect: {} },
            { text: "我是陈默：暗网黑客，在阴影中操控现实。", type: "neutral", nextScene: "intro_confirm_chen_mo", effect: {} }
        ]
    },
    // --- 扩展引导剧情 ---
    "intro_q1_alpha": {
        id: "intro_q1_alpha",
        text: "“很好。直接，有野心。”\n\n引导者似乎对你的态度很满意，“在这个世界里，赢就是一切。爱情不是童话，而是一场关于权力、心理和欲望的零和博弈。”",
        location: "虚拟空间",
        speaker: "引导者",
        choices: [
            { text: "“我准备好了。开始吧。”", type: "alpha", nextScene: "intro_q2_alpha", effect: { frame: 5 } }
        ]
    },
    "intro_q2_alpha": {
        id: "intro_q2_alpha",
        text: "“看来你已经具备了成为顶级猎手的潜质。”\n\n数据流汇聚成四张不同的人脸，悬浮在你的面前，“现在，你需要选择一个载体。不同的身份，意味着不同的起点，也意味着不同的挑战。”",
        location: "虚拟空间",
        speaker: "引导者",
        choices: [
            { text: "审视这些身份。", type: "neutral", nextScene: "intro_select_pre", effect: {} }
        ]
    },
    "intro_confirm_jiang_feng": {
        id: "intro_confirm_jiang_feng",
        text: "【角色档案：江枫】\n21岁，计算机系天才。家境贫寒，自尊心极强。\n\n特长：逻辑分析、心理博弈。\n弱点：物质基础薄弱。\n\n“爱情？不过是多巴胺和催产素的化学反应。只要计算出公式，我就能得到任何人。”\n\n确定选择这个身份吗？",
        location: "档案读取",
        speaker: "系统",
        choices: [
            { text: "确认接入：开始江枫的故事。", type: "alpha", nextScene: "intro_jiang_feng", effect: {}, action: "startGame:jiang_feng" },
            { text: "我再想想。", type: "neutral", nextScene: "intro_select_pre", effect: {} }
        ]
    },
    "intro_confirm_li_ze": {
        id: "intro_confirm_li_ze",
        text: "【角色档案：李泽】\n29岁，跨国集团执行董事。富有、英俊，但内心空虚。\n\n特长：资源碾压、社会地位。\n弱点：多疑、难以交付真心。\n\n“她们爱的不是我，是我的钱。既然如此，我就用钱买下她们的灵魂。”\n\n确定选择这个身份吗？",
        location: "档案读取",
        speaker: "系统",
        choices: [
            { text: "确认接入：开始李泽的故事。", type: "alpha", nextScene: "intro_li_ze", effect: {}, action: "startGame:li_ze" },
            { text: "我再想想。", type: "neutral", nextScene: "intro_select_pre", effect: {} }
        ]
    },
    "intro_confirm_wang_meng": {
        id: "intro_confirm_wang_meng",
        text: "【角色档案：王猛】\n25岁，地下拳手兼修车工。充满原始野性，不修边幅。\n\n特长：性张力、安全感。\n弱点：社会地位低、缺乏文化。\n\n“那些穿西装的软蛋懂什么女人？她们渴望的是真正的男人。”\n\n确定选择这个身份吗？",
        location: "档案读取",
        speaker: "系统",
        choices: [
            { text: "确认接入：开始王猛的故事。", type: "alpha", nextScene: "intro_wang_meng", effect: {}, action: "startGame:wang_meng" },
            { text: "我再想想。", type: "neutral", nextScene: "intro_select_pre", effect: {} }
        ]
    },
    "intro_confirm_chen_mo": {
        id: "intro_confirm_chen_mo",
        text: "【角色档案：陈默】\n23岁，顶级黑客。重度社恐，但在网络上是神。\n\n特长：信息掌控、降维打击。\n弱点：现实社交障碍。\n\n“在网络世界，我就是神。而你们，都是我的提线木偶。”\n\n确定选择这个身份吗？",
        location: "档案读取",
        speaker: "系统",
        choices: [
            { text: "确认接入：开始陈默的故事。", type: "alpha", nextScene: "intro_chen_mo", effect: {}, action: "startGame:chen_mo" },
            { text: "我再想想。", type: "neutral", nextScene: "intro_select_pre", effect: {} }
        ]
    }
});