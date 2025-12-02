window.storyData = window.storyData || {};
window.storyData.heroines = window.storyData.heroines || {};
window.storyData.scenes = window.storyData.scenes || {};

Object.assign(window.storyData.heroines, {
    "doctor_zhang": { name: "张医生", title: "高冷外科医", bio: "对王猛的肉体充满医学和私人的兴趣。" },
    "housewife_mrs_liu": { name: "刘太太", title: "寂寞贵妇", bio: "丈夫常年不在家，渴望激情的滋润。" },
    "cafe_owner": { name: "咖啡店老板", title: "文艺女青年", bio: "喜欢王猛这种粗犷的男人。" },
    "designer_zoe": { name: "Zoe", title: "时尚设计师", bio: "寻找灵感缪斯。" },
    "police_officer": { name: "女警", title: "正义警花", bio: "不打不相识。" }
});

Object.assign(window.storyData.scenes, {
    "intro_wang_meng": {
        id: "intro_wang_meng",
        text: "修车厂。你满手油污，正在修理一辆红色的法拉利。车主是一位穿着紧身裙的贵妇（刘太太），她正嫌弃地看着周围的环境，用手帕捂着鼻子。",
        location: "修车厂",
        speaker: "旁白",
        choices: [
            { text: "无视她的嫌弃，脱掉上衣继续干活。", type: "alpha", nextScene: "wm_scene_1_work", effect: { frame: 5, attraction: 5 }, unlockHeroine: "housewife_mrs_liu" },
            { text: "“不好意思啊姐，这儿有点脏，您去休息室坐坐？”", type: "beta", nextScene: "wm_scene_1_apology", effect: { frame: -10, attraction: -5 }, unlockHeroine: "housewife_mrs_liu" }
        ]
    },
    "wm_scene_1_work": {
        id: "wm_scene_1_work",
        text: "你赤裸的上身满是汗水，肌肉线条分明。你感觉到刘太太的目光不再游离，而是死死盯着你的背肌。她走近了一步：“师傅，这车还要修多久呀？我都热了。”",
        location: "修车厂",
        speaker: "刘太太",
        choices: [
            { text: "转过身，直视她的眼睛：“热就把外套脱了。车还得修一小时。”", type: "alpha", nextScene: "wm_scene_2_tension", feedback: "直接回应她的潜台词，并发出指令。", effect: { frame: 10, attraction: 10 } },
            { text: "“马上就好，马上就好。”（加快速度）", type: "beta", nextScene: "wm_scene_gameover", feedback: "你不仅没接住信号，还表现得像个服务员。", effect: { frame: -5, attraction: -5 } }
        ]
    },
    "wm_scene_gameover": {
        id: "wm_scene_gameover",
        text: "刘太太看你唯唯诺诺的样子，失去了兴趣。她付了钱，开着车绝尘而去。",
        location: "结局",
        speaker: "系统",
        choices: [
            { text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} }
        ]
    }
});