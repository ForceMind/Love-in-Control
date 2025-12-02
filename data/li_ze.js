window.storyData = window.storyData || {};
window.storyData.heroines = window.storyData.heroines || {};
window.storyData.scenes = window.storyData.scenes || {};

Object.assign(window.storyData.heroines, {
    "actress_mimi": { name: "蜜蜜", title: "当红小花", bio: "表面光鲜，实则被资本裹挟。" },
    "secretary_wu": { name: "吴秘书", title: "完美秘书", bio: "李泽的左膀右臂，暗恋李泽多年。" },
    "rival_ceo": { name: "叶冰", title: "竞争对手CEO", bio: "商界铁娘子，李泽唯一的对手。" }
});

Object.assign(window.storyData.scenes, {
    "intro_li_ze": {
        id: "intro_li_ze",
        text: "豪华办公室。窗外是城市的霓虹。吴秘书拿着一叠文件进来，还有一张今晚慈善晚宴的邀请函。“李总，今晚蜜蜜小姐也会去，她托人问您能不能做她的舞伴。另外，竞争对手公司的叶冰总监也会出席。”",
        location: "CEO办公室",
        speaker: "吴秘书",
        choices: [
            { text: "“告诉蜜蜜我很忙。但我会对叶冰感兴趣。”", type: "alpha", nextScene: "lz_scene_1_rival", effect: { frame: 10, attraction: 0 }, unlockHeroine: "rival_ceo" },
            { text: "“既然是当红明星，那就给个面子吧。”", type: "beta", nextScene: "lz_scene_1_actress", effect: { frame: -5, attraction: -5 }, unlockHeroine: "actress_mimi" },
            { text: "“今晚不想去，帮我约个心理医生。”", type: "neutral", nextScene: "lz_scene_1_doctor", effect: { frame: 0, attraction: 0 } }
        ]
    },
    "lz_scene_1_rival": {
        id: "lz_scene_1_rival",
        text: "晚宴现场。叶冰穿着一身干练的黑色晚礼服，正被一群恭维者包围。她看到了你，举起酒杯遥遥致意，眼神中带着挑衅。",
        location: "慈善晚宴",
        speaker: "旁白",
        choices: [
            { text: "径直走过去，无视其他人：“叶总，今晚的酒配不上你。”", type: "alpha", nextScene: "lz_scene_2_confront", feedback: "直接开场，打压环境抬高对方。", effect: { frame: 10, attraction: 5 } },
            { text: "站在远处观察，等她落单。", type: "neutral", nextScene: "lz_scene_2_wait", feedback: "稳健但缺乏侵略性。", effect: { frame: 0, attraction: 0 } },
            { text: "走过去礼貌打招呼：“叶总，久仰大名。”", type: "beta", nextScene: "lz_scene_2_boring", feedback: "太商务，太无聊。", effect: { frame: -5, attraction: -5 } }
        ]
    },
    "lz_scene_2_confront": {
        id: "lz_scene_2_confront",
        text: "叶冰笑了：“李总嘴真甜。不过听说你们公司最近股价不太稳啊？” 她一上来就是商业攻击。",
        location: "慈善晚宴",
        speaker: "叶冰",
        choices: [
            { text: "“股价是给韭菜看的。我只在乎今晚能不能赢走你的心...或者你的公司。”", type: "alpha", nextScene: "end_demo", feedback: "将商业攻击转化为调情。", effect: { frame: 15, attraction: 15 } },
            { text: "“市场波动很正常，我们有信心...”", type: "beta", nextScene: "lz_scene_2_boring", feedback: "你开始解释了，你输了。", effect: { frame: -10, attraction: -10 } }
        ]
    },
    "lz_scene_2_boring": {
        id: "lz_scene_2_boring",
        text: "叶冰礼貌地笑了笑，借口去洗手间离开了。你被归类为“无聊的商务男”。",
        location: "结局",
        speaker: "系统",
        choices: [
            { text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} }
        ]
    }
});