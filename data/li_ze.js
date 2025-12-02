window.storyData = window.storyData || {};
window.storyData.heroines = window.storyData.heroines || {};
window.storyData.scenes = window.storyData.scenes || {};

Object.assign(window.storyData.heroines, {
    "actress_mimi": { name: "蜜蜜", title: "当红小花", bio: "22岁，顶级流量明星。表面光鲜亮丽，实则是资本的玩物。渴望有人能看穿她的伪装。" },
    "secretary_wu": { name: "吴雨", title: "完美秘书", bio: "26岁，高冷干练。跟随李泽三年，处理过无数烂摊子。她是唯一能跟上李泽节奏的女人。" },
    "rival_ceo": { name: "叶冰", title: "商界铁娘子", bio: "29岁，竞争对手公司的CEO。冷酷无情，视男人为工具。李泽是她唯一认可的对手。" },
    "intern_girl": { name: "小雅", title: "单纯实习生", bio: "21岁，误入豪门的普通女孩。她的纯真在李泽看来是最大的诱惑，也是最大的谎言。" }
});

Object.assign(window.storyData.scenes, {
    // ==========================================
    // 李泽线 (Li Ze) - 金钱与真心的博弈
    // 第一阶段：蜜蜜 (Actress Mimi) - 虚荣的泡沫
    // ==========================================
    "intro_li_ze": {
        id: "intro_li_ze",
        text: "李氏集团总部，顶层办公室。你（李泽）站在落地窗前，俯瞰着脚下的城市。吴秘书敲门进来：“李总，今晚的慈善晚宴，蜜蜜小姐的经纪人又打来电话，问您能不能带她入场。另外，叶冰总监也会出席。”",
        location: "CEO办公室",
        speaker: "吴秘书",
        choices: [
            { text: "“告诉蜜蜜，我的入场券很贵。让她自己来拿。”", type: "alpha", nextScene: "lz_scene_1_mimi_call", effect: { frame: 5, attraction: 0 }, unlockHeroine: "actress_mimi" },
            { text: "“我对戏子没兴趣。帮我约叶冰，我想跟她谈谈收购的事。”", type: "alpha", nextScene: "lz_scene_1_rival_intro", effect: { frame: 10, attraction: 0 }, unlockHeroine: "rival_ceo" },
            { text: "“随便吧，安排一下。”", type: "beta", nextScene: "lz_scene_gameover_boring", effect: { frame: -5, attraction: -5 } }
        ]
    },

    // --- 分支：蜜蜜 (Mimi) ---
    "lz_scene_1_mimi_call": {
        id: "lz_scene_1_mimi_call",
        text: "半小时后，蜜蜜出现在你的办公室。她穿着低胸短裙，妆容精致，一进门就带着甜腻的香水味扑过来：“李总~ 您终于肯见人家了。今晚的晚宴对我真的很重要...”",
        location: "CEO办公室",
        speaker: "蜜蜜",
        choices: [
            { text: "坐在椅子上不动，指了指对面的沙发：“坐。给我一个带你去的理由。”", type: "alpha", nextScene: "lz_scene_2_mimi_test", feedback: "保持距离，建立奖赏框架。", effect: { frame: 10, attraction: 5 } },
            { text: "“只要你今晚听话，带你去也不是不行。”", type: "beta", nextScene: "lz_scene_2_mimi_transaction", feedback: "过早暴露需求，沦为交易。", effect: { frame: -5, attraction: 0 } }
        ]
    },
    "lz_scene_2_mimi_test": {
        id: "lz_scene_2_mimi_test",
        text: "蜜蜜咬了咬嘴唇，显然没料到你会这么冷淡。她走到你身边，试图帮你捏肩：“李总，只要您带我去，今晚...我都听您的。”",
        location: "CEO办公室",
        speaker: "蜜蜜",
        choices: [
            { text: "抓住她的手腕，冷冷地看着她：“收起这一套。我要的是价值，不是服务。你能给公司带来什么？”", type: "alpha", nextScene: "lz_scene_3_mimi_real", feedback: "打断施法，要求核心价值。", effect: { frame: 15, attraction: 10 } },
            { text: "享受她的服务：“这还差不多。”", type: "beta", nextScene: "lz_scene_gameover_sugar_daddy", feedback: "你只是个有钱的凯子。", effect: { frame: -10, attraction: -10 } }
        ]
    },
    "lz_scene_3_mimi_real": {
        id: "lz_scene_3_mimi_real",
        text: "蜜蜜愣住了，眼眶突然红了。她甩开你的手，声音变得尖锐：“价值？你们这些资本家眼里只有价值！我为了这个角色陪酒陪笑，还要被你们羞辱...行，我不去了！” 她转身要走。",
        location: "CEO办公室",
        speaker: "蜜蜜",
        choices: [
            { text: "“站住。这才是你真实的样子？比刚才那个假娃娃顺眼多了。”", type: "alpha", nextScene: "lz_scene_4_mimi_deal", feedback: "认可真实，反转局势。", effect: { frame: 10, attraction: 20 } },
            { text: "让她走。", type: "neutral", nextScene: "lz_scene_mimi_leave", feedback: "失去目标。", effect: { frame: 0, attraction: 0 } }
        ]
    },
    "lz_scene_4_mimi_deal": {
        id: "lz_scene_4_mimi_deal",
        text: "蜜蜜停下脚步，回头看着你，脸上挂着泪痕：“你什么意思？” 你站起身，递给她一张纸巾：“擦干。今晚做我的女伴，但不用演戏。做你自己，敢吗？”",
        location: "CEO办公室",
        speaker: "李泽",
        choices: [
            { text: "“如果你敢在晚宴上泼那个骚扰你的导演一杯酒，我就投你的下一部戏。”", type: "alpha", nextScene: "lz_scene_5_gala_drama", feedback: "给予挑战，激发野性。", effect: { frame: 20, attraction: 25 } },
            { text: "“今晚给我演一出好戏，我要看到那个真实的你。”", type: "alpha", nextScene: "lz_scene_5_gala_drama", feedback: "期待她的爆发。", effect: { frame: 20, attraction: 25 } }
        ]
    },
    "lz_scene_5_gala_drama": {
        id: "lz_scene_5_gala_drama",
        text: "晚宴上，那个油腻的导演果然又来纠缠蜜蜜。蜜蜜看了你一眼，你微微点头。她深吸一口气，拿起红酒泼在了导演脸上：“滚！” 全场死寂。",
        location: "慈善晚宴",
        speaker: "旁白",
        choices: [
            { text: "走上前，揽住蜜蜜的肩膀：“不好意思，我的女伴手滑了。张导，这件衣服算我的。”", type: "alpha", nextScene: "lz_scene_6_mimi_fall", feedback: "强势护短，确立所有权。", effect: { frame: 25, attraction: 30 } },
            { text: "冷冷地看着导演：“张导，看来我的女伴不太喜欢你。”", type: "alpha", nextScene: "lz_scene_6_mimi_fall", feedback: "冷酷地支持。", effect: { frame: 25, attraction: 30 } }
        ]
    },
    "lz_scene_6_mimi_fall": {
        id: "lz_scene_6_mimi_fall",
        text: "离开晚宴的车上，蜜蜜还在发抖，但眼神里充满了兴奋：“李泽，你疯了...我也疯了...但我好开心。” 她主动靠在了你的肩膀上。",
        location: "豪车后座",
        speaker: "蜜蜜",
        choices: [
            { text: "“记住这种感觉。以后在娱乐圈，只有我能欺负你，别人不行。”", type: "alpha", nextScene: "lz_scene_7_mimi_end", feedback: "霸道宣言。", effect: { frame: 10, attraction: 20 } },
            { text: "抚摸她的头发：“做得好，这才是我的女人。”", type: "alpha", nextScene: "lz_scene_7_mimi_end", feedback: "温柔的奖励。", effect: { frame: 10, attraction: 20 } }
        ]
    },
    "lz_scene_7_mimi_end": {
        id: "lz_scene_7_mimi_end",
        text: "【第一章·完】\n你撕碎了蜜蜜的伪装，却让她爱上了真实的自己...和你。但你的征途才刚刚开始。公司内部出现了内鬼，吴秘书似乎有话对你说。",
        location: "系统",
        speaker: "SYSTEM",
        choices: [
            { text: "进入第二章：完美秘书", type: "neutral", nextScene: "lz_chapter2_intro", effect: {} }
        ]
    },

    // ==========================================
    // 第二章：吴秘书 (Secretary Wu) - 禁欲与爆发
    // ==========================================
    "lz_chapter2_intro": {
        id: "lz_chapter2_intro",
        text: "深夜，公司。你刚送走蜜蜜，回到办公室处理文件。吴秘书还在加班，她端来一杯黑咖啡：“李总，财务报表有异常。有人在通过海外账户转移资产。”",
        location: "CEO办公室",
        speaker: "吴秘书",
        choices: [
            { text: "接过咖啡，触碰到她的手指：“这么晚了，为什么还不走？”", type: "alpha", nextScene: "lz_c2_touch", effect: { frame: 5, attraction: 5 }, unlockHeroine: "secretary_wu" },
            { text: "“查出来是谁了吗？”（公事公办）", type: "neutral", nextScene: "lz_c2_business", effect: { frame: 0, attraction: 0 } }
        ]
    },
    "lz_c2_touch": {
        id: "lz_c2_touch",
        text: "吴秘书像触电一样缩回手，低头推了推眼镜：“这是我的职责...李总。” 她的声音有一丝颤抖。",
        location: "CEO办公室",
        speaker: "吴秘书",
        choices: [
            { text: "绕过办公桌，走到她面前：“职责？还是因为...你不想留我一个人？”", type: "alpha", nextScene: "lz_c2_wall", feedback: "逼近，打破安全距离。", effect: { frame: 10, attraction: 15 } },
            { text: "“辛苦了。早点回去休息吧。”", type: "beta", nextScene: "lz_c2_retreat", feedback: "后撤，错失良机。", effect: { frame: -5, attraction: 0 } }
        ]
    },
    "lz_c2_wall": {
        id: "lz_c2_wall",
        text: "吴秘书退无可退，背靠在文件柜上。她抬起头，眼神里充满了挣扎：“李总，我是您的秘书，请您自重...”",
        location: "CEO办公室",
        speaker: "吴秘书",
        choices: [
            { text: "单手撑在她耳边：“现在是下班时间。吴雨，看着我。你喜欢我，对吗？”", type: "alpha", nextScene: "lz_c2_confess", feedback: "直球对决，强迫面对内心。", effect: { frame: 20, attraction: 25 } },
            { text: "捏住她的下巴：“看着我的眼睛，再说一遍让我自重。”", type: "alpha", nextScene: "lz_c2_confess", feedback: "强势逼问。", effect: { frame: 20, attraction: 25 } }
        ]
    },
    "lz_c2_confess": {
        id: "lz_c2_confess",
        text: "吴雨的心理防线崩塌了。她闭上眼睛，眼泪流了下来：“是...我喜欢你。从三年前入职那天起就喜欢。但我知道我不配...”",
        location: "CEO办公室",
        speaker: "吴秘书",
        choices: [
            { text: "帮她擦掉眼泪：“配不配，我说了算。从今天起，你不仅是我的秘书，也是我的女人。”", type: "alpha", nextScene: "lz_c2_office_romance", feedback: "确立关系。", effect: { frame: 15, attraction: 20 } },
            { text: "吻去她的泪水：“傻瓜，我也一直在等你。”", type: "alpha", nextScene: "lz_c2_office_romance", feedback: "温柔的回应。", effect: { frame: 15, attraction: 20 } }
        ]
    },
    "lz_c2_business": {
        id: "lz_c2_business",
        text: "“初步锁定是副总张强。”吴秘书恢复了冷静，“需要报警吗？”",
        location: "CEO办公室",
        speaker: "吴秘书",
        choices: [
            { text: "“不急。放长线钓大鱼。今晚你陪我去一趟张强的私人会所。”", type: "alpha", nextScene: "lz_c2_mission", feedback: "开启潜入任务。", effect: { frame: 10, attraction: 5 } },
            { text: "“报警太便宜他了。我要让他身败名裂。今晚跟我走。”", type: "alpha", nextScene: "lz_c2_mission", feedback: "复仇计划。", effect: { frame: 10, attraction: 5 } }
        ]
    },
    "lz_c2_mission": {
        id: "lz_c2_mission",
        text: "在会所，吴秘书换下了职业装，穿上了一件性感的晚礼服。她挽着你的手，紧张得手心出汗。你感觉到她在发抖。",
        location: "私人会所",
        speaker: "旁白",
        choices: [
            { text: "在她耳边低语：“放松。把这当成一场游戏。你是最棒的演员。”", type: "alpha", nextScene: "lz_c2_mission_success", feedback: "给予信心与掌控感。", effect: { frame: 10, attraction: 10 } },
            { text: "握紧她的手：“别怕，有我在。”", type: "alpha", nextScene: "lz_c2_mission_success", feedback: "给予安全感。", effect: { frame: 10, attraction: 10 } }
        ]
    },
    "lz_c2_mission_success": {
        id: "lz_c2_mission_success",
        text: "吴雨深吸一口气，瞬间进入状态。她配合你演了一出戏，成功套出了张强的口风。离开时，她在车里兴奋地抱住了你。",
        location: "豪车后座",
        speaker: "吴秘书",
        choices: [
            { text: "“做得好。这是奖励。”（吻她）", type: "alpha", nextScene: "lz_c2_end", feedback: "奖赏机制。", effect: { frame: 15, attraction: 25 } },
            { text: "“看来你很有天赋。以后这种任务都交给你了。”", type: "alpha", nextScene: "lz_c2_end", feedback: "认可她的能力。", effect: { frame: 15, attraction: 25 } }
        ]
    },
    "lz_c2_end": {
        id: "lz_c2_end",
        text: "【第二章·完】\n你征服了身边最亲近的人。吴雨成为了你绝对忠诚的伴侣。但外部的威胁依然存在。叶冰（竞争对手CEO）发来了战书。",
        location: "系统",
        speaker: "SYSTEM",
        choices: [
            { text: "进入第三章：商界铁娘子", type: "neutral", nextScene: "lz_chapter3_intro", effect: {} }
        ]
    },

    // ==========================================
    // 第三章：叶冰 (Rival CEO) - 强强对决
    // ==========================================
    "lz_chapter3_intro": {
        id: "lz_chapter3_intro",
        text: "叶冰的公司对李氏集团发起了恶意收购。董事会乱成一锅粥。你独自一人来到叶冰的办公室。她坐在皮椅上，手里转着一支钢笔：“李总，来求饶了？”",
        location: "叶氏集团",
        speaker: "叶冰",
        choices: [
            { text: "直接坐在她的办公桌上，俯视她：“我是来提亲的。把你的公司当嫁妆，怎么样？”", type: "alpha", nextScene: "lz_c3_proposal", feedback: "极度嚣张，反客为主。", effect: { frame: 20, attraction: 10 }, unlockHeroine: "rival_ceo" },
            { text: "“叶总，我们可以谈谈合作...”", type: "beta", nextScene: "lz_scene_gameover_boring", feedback: "示弱即死。", effect: { frame: -10, attraction: -10 } }
        ]
    },
    "lz_c3_proposal": {
        id: "lz_c3_proposal",
        text: "叶冰愣了一下，随即大笑起来：“李泽，你疯得不轻。不过...我喜欢疯子。想娶我？先赢过我再说。”",
        location: "叶氏集团",
        speaker: "叶冰",
        choices: [
            { text: "“赌局很简单。一个月内，谁的股价高，谁就听谁的。输的人，要在床上叫爸爸。”", type: "alpha", nextScene: "lz_c3_bet", feedback: "带有性张力的赌约。", effect: { frame: 25, attraction: 25 } },
            { text: "“那就来比比看。输的人，无条件服从赢家的一切命令。”", type: "alpha", nextScene: "lz_c3_bet", feedback: "绝对服从的赌约。", effect: { frame: 25, attraction: 25 } }
        ]
    },
    "lz_c3_bet": {
        id: "lz_c3_bet",
        text: "叶冰的脸红了一下，但眼神更加锐利：“成交。准备好你的膝盖吧，李泽。”",
        location: "叶氏集团",
        speaker: "叶冰",
        choices: [
            { text: "转身离开：“洗干净等我。”", type: "alpha", nextScene: "lz_c3_war", feedback: "留下背影。", effect: { frame: 10, attraction: 15 } },
            { text: "凑近她耳边：“我很期待你跪下的样子。”", type: "alpha", nextScene: "lz_c3_war", feedback: "最后的挑衅。", effect: { frame: 10, attraction: 15 } }
        ]
    },
    "lz_c3_war": {
        id: "lz_c3_war",
        text: "接下来的一个月，商战进入白热化。你利用吴秘书的情报和蜜蜜的舆论影响力，逐渐占据上风。最后一天，叶冰主动约你在酒店见面。",
        location: "五星级酒店",
        speaker: "旁白",
        choices: [
            { text: "推门而入，看着穿着浴袍的叶冰：“愿赌服输？”", type: "alpha", nextScene: "lz_c3_surrender", feedback: "收割胜利果实。", effect: { frame: 20, attraction: 30 } },
            { text: "敲了敲门，直接走进去：“叶总，我来收账了。”", type: "alpha", nextScene: "lz_c3_surrender", feedback: "霸气收账。", effect: { frame: 20, attraction: 30 } }
        ]
    },
    "lz_c3_surrender": {
        id: "lz_c3_surrender",
        text: "叶冰倒了两杯红酒，递给你一杯：“我输了。公司归你...我也归你。” 她低下了高傲的头颅。",
        location: "酒店房间",
        speaker: "叶冰",
        choices: [
            { text: "接过酒杯，抬起她的下巴：“公司我收下了。至于你...看表现。”", type: "alpha", nextScene: "lz_ending_choice", feedback: "彻底征服。", effect: { frame: 15, attraction: 20 } },
            { text: "一饮而尽，将她推倒在床上：“那就开始履行赌约吧。”", type: "alpha", nextScene: "lz_ending_choice", feedback: "享受战利品。", effect: { frame: 15, attraction: 20 } }
        ]
    },

    // --- 结局选择 ---
    "lz_ending_choice": {
        id: "lz_ending_choice",
        text: "【终章·抉择】\n你站在权力的巅峰。蜜蜜是你的金丝雀，吴雨是你的管家，叶冰是你的战利品。你想要什么样的未来？",
        location: "系统",
        speaker: "SYSTEM",
        choices: [
            { text: "【结局：商业帝国】与叶冰联姻，打造世界级财团。感情只是调剂。", type: "alpha", nextScene: "lz_end_empire", effect: {} },
            { text: "【结局：真爱无价】发现自己最爱的还是默默付出的吴雨，带她环游世界。", type: "alpha", nextScene: "lz_end_love", effect: {} },
            { text: "【结局：娱乐大亨】捧红蜜蜜，享受纸醉金迷的生活。", type: "alpha", nextScene: "lz_end_playboy", effect: {} },
            { text: "【隐藏结局：资本暴君】所有人都是棋子。你孤独地坐在王座上，俯瞰众生。", type: "alpha", nextScene: "lz_end_tyrant", effect: {} }
        ]
    },
    "lz_end_empire": {
        id: "lz_end_empire",
        text: "你与叶冰结婚了。这是一场世纪婚礼，也是一场完美的商业并购。你们貌合神离，但利益捆绑得比任何爱情都紧密。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "lz_end_love": {
        id: "lz_end_love",
        text: "你放弃了部分权力，把公司交给职业经理人。你牵着吴雨的手走在巴黎的街头。她终于不再叫你李总，而是叫你...老公。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "lz_end_playboy": {
        id: "lz_end_playboy",
        text: "你成为了娱乐圈的教父。蜜蜜是你最宠爱的收藏品。你身边永远不缺美女，但夜深人静时，你偶尔会感到空虚。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "lz_end_tyrant": {
        id: "lz_end_tyrant",
        text: "你抛弃了所有人。叶冰破产，蜜蜜被雪藏，吴雨伤心离去。你拥有了无尽的财富，却再也没有人敢对你说真话。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },

    // --- 失败结局 ---
    "lz_scene_gameover_boring": {
        id: "lz_scene_gameover_boring",
        text: "你的平庸让人乏味。蜜蜜找了新的金主，叶冰收购了你的公司。你成为了豪门败家子的典型。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "lz_scene_gameover_sugar_daddy": {
        id: "lz_scene_gameover_sugar_daddy",
        text: "你成为了蜜蜜的提款机。她花光了你的钱，然后转投了更年轻的富二代怀抱。你沦为笑柄。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "lz_c2_retreat": {
        id: "lz_c2_retreat",
        text: "吴雨失望地看着你离开。第二天，她递交了辞呈。你失去了一个最得力的助手，也失去了一颗真心。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} }]
    },

    // --- 补全缺失分支 ---
    "lz_scene_1_rival_intro": {
        id: "lz_scene_1_rival_intro",
        text: "你拨通了叶冰的电话。电话那头传来她冷淡的声音：“李总，如果是为了收购的事，我们没什么好谈的。除非...你愿意把你的股份卖给我。”",
        location: "CEO办公室",
        speaker: "叶冰",
        choices: [
            { text: "“叶总，话别说太满。今晚见。”", type: "alpha", nextScene: "lz_chapter3_intro", effect: { frame: 5, attraction: 5 } },
            { text: "挂断电话", type: "neutral", nextScene: "intro_li_ze", effect: {} }
        ]
    },
    "lz_scene_2_mimi_transaction": {
        id: "lz_scene_2_mimi_transaction",
        text: "蜜蜜开心地抱住你：“谢谢李总！您最好了！” 她虽然表现得很亲热，但你感觉到她眼底的冷漠。这只是一场交易。",
        location: "CEO办公室",
        speaker: "蜜蜜",
        choices: [
            { text: "带她去晚宴", type: "neutral", nextScene: "lz_scene_gameover_sugar_daddy", effect: {} }
        ]
    },
    "lz_scene_mimi_leave": {
        id: "lz_scene_mimi_leave",
        text: "蜜蜜摔门而去。你看着空荡荡的办公室，心里毫无波澜。或许，你真的不需要这种虚伪的关系。",
        location: "CEO办公室",
        speaker: "旁白",
        choices: [
            { text: "继续工作", type: "neutral", nextScene: "lz_chapter2_intro", effect: {} }
        ]
    },
    "lz_c2_office_romance": {
        id: "lz_c2_office_romance",
        text: "那一晚，办公室的灯亮了很久。吴雨不再是那个高冷的秘书，而在你怀里化作了一滩水。你们的关系从此改变了。",
        location: "CEO办公室",
        speaker: "旁白",
        choices: [
            { text: "第二天", type: "neutral", nextScene: "lz_c2_end", effect: {} }
        ]
    }
});