window.storyData = window.storyData || {};
window.storyData.heroines = window.storyData.heroines || {};
window.storyData.scenes = window.storyData.scenes || {};

Object.assign(window.storyData.heroines, {
    "housewife_mrs_liu": { name: "刘太太", title: "寂寞贵妇", bio: "34岁，丈夫常年海外经商。住在豪宅里，内心空虚，渴望被粗暴地填满。" },
    "doctor_zhang": { name: "张医生", title: "高冷外科医", bio: "29岁，拥有完美的手术刀技术和洁癖。对王猛的身体构造有着近乎痴迷的医学兴趣。" },
    "police_officer": { name: "陈警官", title: "暴躁警花", bio: "24岁，正义感爆棚。在地下拳场卧底时与王猛不打不相识。" },
    "cafe_owner": { name: "林小雅", title: "文艺店主", bio: "26岁，喜欢读诗，却爱上了野兽。" }
});

Object.assign(window.storyData.scenes, {
    // ==========================================
    // 王猛线 (Wang Meng) - 荷尔蒙的原始征服
    // 第一阶段：刘太太 (Mrs. Liu) - 豪宅里的野兽
    // ==========================================
    "intro_wang_meng": {
        id: "intro_wang_meng",
        text: "修车厂。午后的阳光毒辣。你（王猛）满手油污，正在修理一辆红色的法拉利。车主是一位穿着紧身裙的贵妇（刘太太），她正嫌弃地看着周围的环境，用手帕捂着鼻子。",
        location: "修车厂",
        speaker: "旁白",
        choices: [
            { text: "无视她的嫌弃，脱掉上衣，露出满身汗水和肌肉。", type: "alpha", nextScene: "wm_scene_1_work", effect: { frame: 5, attraction: 5 }, unlockHeroine: "housewife_mrs_liu" },
            { text: "“不好意思啊姐，这儿有点脏，您去休息室坐坐？”", type: "beta", nextScene: "wm_scene_1_apology", effect: { frame: -10, attraction: -5 }, unlockHeroine: "housewife_mrs_liu" },
            { text: "“车坏得挺厉害，得加钱。”", type: "neutral", nextScene: "wm_scene_1_money", effect: { frame: 0, attraction: 0 } }
        ]
    },
    "wm_scene_1_work": {
        id: "wm_scene_1_work",
        text: "你赤裸的上身满是汗水，肌肉线条分明，还有几道显眼的伤疤。你感觉到刘太太的目光不再游离，而是死死盯着你的背肌，喉咙动了一下。她走近了一步：“师傅，这车还要修多久呀？我都热了。”",
        location: "修车厂",
        speaker: "刘太太",
        choices: [
            { text: "转过身，直视她的眼睛：“热就把外套脱了。车还得修一小时。”", type: "alpha", nextScene: "wm_scene_2_tension", feedback: "直接回应她的潜台词，并发出指令。", effect: { frame: 10, attraction: 10 } },
            { text: "“马上就好，马上就好。”（加快速度）", type: "beta", nextScene: "wm_scene_gameover_servant", feedback: "你不仅没接住信号，还表现得像个服务员。", effect: { frame: -5, attraction: -5 } }
        ]
    },
    "wm_scene_2_tension": {
        id: "wm_scene_2_tension",
        text: "刘太太脸红了，但真的脱掉了外套，露出里面的吊带衫。她靠在工作台上，眼神迷离：“师傅，你这身肌肉...是在健身房练的吗？”",
        location: "修车厂",
        speaker: "刘太太",
        choices: [
            { text: "把扳手扔在地上，发出哐当一声：“健身房练不出这种。这是打出来的。” 逼近她。", type: "alpha", nextScene: "wm_scene_3_danger", feedback: "展示危险性，激发她的斯德哥尔摩倾向。", effect: { frame: 15, attraction: 15 } },
            { text: "“是啊，我每天都举铁。”", type: "beta", nextScene: "wm_scene_friendzone_chat", feedback: "变成了无聊的健身教练。", effect: { frame: -5, attraction: 0 } }
        ]
    },
    "wm_scene_3_danger": {
        id: "wm_scene_3_danger",
        text: "你身上混合着机油和汗水的味道包围了她。刘太太有些害怕，但更多的是兴奋。她从包里拿出一张名片塞进你的裤兜：“车修好了...给我送回家。地址在上面。晚上我在家。”",
        location: "修车厂",
        speaker: "刘太太",
        choices: [
            { text: "拿出名片看了一眼，随手扔在桌上：“看我心情。”", type: "alpha", nextScene: "wm_scene_4_home_visit", feedback: "不可预测性是最大的诱惑。", effect: { frame: 20, attraction: 20 } },
            { text: "拍了拍裤兜：“知道了。晚上见。”", type: "alpha", nextScene: "wm_scene_4_home_visit", feedback: "接受邀请。", effect: { frame: 20, attraction: 20 } }
        ]
    },
    "wm_scene_4_home_visit": {
        id: "wm_scene_4_home_visit",
        text: "晚上十点。你骑着摩托车来到半山别墅。刘太太穿着丝绸睡衣给你开门，眼神里既有期待又有恐惧：“你真的来了...我老公今晚不在。”",
        location: "刘太太家",
        speaker: "刘太太",
        choices: [
            { text: "径直走进屋，坐在真皮沙发上：“我渴了。倒水。”", type: "alpha", nextScene: "wm_scene_5_domination", feedback: "反客为主，把豪宅当成自己家。", effect: { frame: 15, attraction: 15 } },
            { text: "靠在门框上，上下打量她：“怎么，不请我进去？”", type: "alpha", nextScene: "wm_scene_5_domination", feedback: "充满侵略性的眼神。", effect: { frame: 15, attraction: 15 } }
        ]
    },
    "wm_scene_5_domination": {
        id: "wm_scene_5_domination",
        text: "刘太太乖乖地去倒水。她平时颐指气使惯了，第一次遇到敢命令她的男人。她端着水杯走过来，手有些抖。",
        location: "刘太太家",
        speaker: "刘太太",
        choices: [
            { text: "一把拉过她，让她坐在你腿上：“我不喝水。我饿了。”", type: "alpha", nextScene: "wm_scene_6_end_chapter1", feedback: "直接表达欲望。", effect: { frame: 20, attraction: 25 } },
            { text: "接过水杯放在一边，直接吻了上去：“水太淡了，我想尝尝别的。”", type: "alpha", nextScene: "wm_scene_6_end_chapter1", feedback: "行动胜过语言。", effect: { frame: 20, attraction: 25 } }
        ]
    },
    "wm_scene_6_end_chapter1": {
        id: "wm_scene_6_end_chapter1",
        text: "【第一章·完】\n你在豪宅里彻底征服了这位寂寞贵妇。她成为了你的提款机和温柔乡。但你的野性注定不会被困在笼子里。一场地下拳赛正在等待你。",
        location: "系统",
        speaker: "SYSTEM",
        choices: [
            { text: "进入第二章：地下拳王", type: "neutral", nextScene: "wm_chapter2_intro", effect: {} }
        ]
    },

    // ==========================================
    // 第二章：张医生 (Dr. Zhang) - 伤痕与治愈
    // ==========================================
    "wm_chapter2_intro": {
        id: "wm_chapter2_intro",
        text: "地下拳场。你刚赢下一场死斗，浑身是血。对手被抬了下去，你也受了重伤。在更衣室，一个穿着白大褂的女人走了进来。是张医生，拳场的特聘医师。",
        location: "拳场更衣室",
        speaker: "旁白",
        choices: [
            { text: "坐在长凳上，点了一根烟：“怎么，来看我死了没有？”", type: "alpha", nextScene: "wm_c2_smoke", effect: { frame: 5, attraction: 5 }, unlockHeroine: "doctor_zhang" },
            { text: "“医生，快帮我看看，疼死我了。”", type: "beta", nextScene: "wm_c2_weak", effect: { frame: -10, attraction: -10 } }
        ]
    },
    "wm_c2_smoke": {
        id: "wm_c2_smoke",
        text: "张医生皱着眉夺过你的烟掐灭：“这里是医疗区，禁止吸烟。还有，你的肋骨可能断了两根，不想死就躺下。” 她的声音冷冰冰的，但动作很麻利。",
        location: "拳场更衣室",
        speaker: "张医生",
        choices: [
            { text: "抓住她的手腕，把她拉近：“你身上的消毒水味真好闻。”", type: "alpha", nextScene: "wm_c2_flirt", feedback: "在脆弱时依然保持侵略性。", effect: { frame: 10, attraction: 10 } },
            { text: "乖乖躺下。", type: "neutral", nextScene: "wm_c2_treatment", feedback: "听话的病人。", effect: { frame: 0, attraction: 0 } }
        ]
    },
    "wm_c2_flirt": {
        id: "wm_c2_flirt",
        text: "张医生没有挣脱，而是冷冷地看着你：“肾上腺素分泌过剩会导致性冲动。这是生理反应，不是爱情。放手。”",
        location: "拳场更衣室",
        speaker: "张医生",
        choices: [
            { text: "“那你心跳加速也是生理反应？张医生，你的手在抖。”", type: "alpha", nextScene: "wm_c2_expose", feedback: "揭穿她的冷静伪装。", effect: { frame: 15, attraction: 20 } },
            { text: "“生理反应？那我们来验证一下。”", type: "alpha", nextScene: "wm_c2_expose", feedback: "大胆的挑衅。", effect: { frame: 15, attraction: 20 } }
        ]
    },
    "wm_c2_expose": {
        id: "wm_c2_expose",
        text: "张医生深吸一口气，拿出针管：“我要给你缝针了。没麻药，忍着点。” 她在报复你的轻薄。",
        location: "拳场更衣室",
        speaker: "张医生",
        choices: [
            { text: "看着她的眼睛，一声不吭地让她缝合：“手艺不错。下次还找你。”", type: "alpha", nextScene: "wm_c2_tough_guy", feedback: "展示超乎常人的忍耐力。", effect: { frame: 20, attraction: 25 } },
            { text: "咬着牙笑：“来吧，让我看看你的手段。”", type: "alpha", nextScene: "wm_c2_tough_guy", feedback: "享受痛楚。", effect: { frame: 20, attraction: 25 } }
        ]
    },
    "wm_c2_tough_guy": {
        id: "wm_c2_tough_guy",
        text: "缝合结束，你满头大汗，但始终没哼一声。张医生看着你的眼神变了，那是对强者的本能崇拜。她递给你一张纸巾擦汗。",
        location: "拳场更衣室",
        speaker: "张医生",
        choices: [
            { text: "“今晚去你家换药？这里太脏了，容易感染。”", type: "alpha", nextScene: "wm_c2_home_invite", feedback: "利用她的洁癖和职业道德。", effect: { frame: 15, attraction: 15 } },
            { text: "“谢了。不过比起纸巾，我更需要一个干净的地方休息。”", type: "alpha", nextScene: "wm_c2_home_invite", feedback: "暗示去她家。", effect: { frame: 15, attraction: 15 } }
        ]
    },
    "wm_c2_home_invite": {
        id: "wm_c2_home_invite",
        text: "张医生犹豫了一下，最终点了点头：“...仅此一次。而且不许弄脏我的地板。”",
        location: "拳场更衣室",
        speaker: "张医生",
        choices: [
            { text: "邪魅一笑：“放心，我会很‘干净’的。”", type: "alpha", nextScene: "wm_c2_end", feedback: "双关语。", effect: { frame: 10, attraction: 10 } },
            { text: "“遵命，医生。”", type: "alpha", nextScene: "wm_c2_end", feedback: "假装顺从。", effect: { frame: 10, attraction: 10 } }
        ]
    },
    "wm_c2_end": {
        id: "wm_c2_end",
        text: "【第二章·完】\n你闯入了高冷医生的私人领地。在洁白无瑕的公寓里，你这个充满野性的闯入者成为了她无法抗拒的病毒。但你的过去找上门来了。",
        location: "系统",
        speaker: "SYSTEM",
        choices: [
            { text: "进入第三章：暴躁警花", type: "neutral", nextScene: "wm_chapter3_intro", effect: {} }
        ]
    },

    // ==========================================
    // 第三章：陈警官 (Police Officer) - 猫鼠游戏
    // ==========================================
    "wm_chapter3_intro": {
        id: "wm_chapter3_intro",
        text: "警方突袭了地下拳场。一片混乱中，你被一个身手矫健的女警（陈警官）按在墙上。她反剪你的双手：“老实点！王猛，我盯你很久了。”",
        location: "拳场后巷",
        speaker: "陈警官",
        choices: [
            { text: "不再挣扎，反而把身体贴向她：“警官，这么用力，我会以为你喜欢我。”", type: "alpha", nextScene: "wm_c3_tease", feedback: "在被捕时依然调情。", effect: { frame: 10, attraction: 5 }, unlockHeroine: "police_officer" },
            { text: "“警官饶命！我只是路过的！”", type: "beta", nextScene: "wm_scene_gameover_jail", feedback: "毫无骨气。", effect: { frame: -10, attraction: -10 } }
        ]
    },
    "wm_c3_tease": {
        id: "wm_c3_tease",
        text: "陈警官脸一红，加大了手上的力度：“少贫嘴！跟我回局里！” 但因为距离太近，你感觉到了她的呼吸变得急促。",
        location: "拳场后巷",
        speaker: "陈警官",
        choices: [
            { text: "突然发力挣脱束缚，反手将她壁咚在墙上：“抓我？你还嫩了点。”", type: "alpha", nextScene: "wm_c3_fight", feedback: "展示武力值压制。", effect: { frame: 20, attraction: 15 } },
            { text: "顺势倒在她怀里：“警官，我头晕，能不能做人工呼吸？”", type: "alpha", nextScene: "wm_c3_fight", feedback: "无赖的调情。", effect: { frame: 20, attraction: 15 } }
        ]
    },
    "wm_c3_fight": {
        id: "wm_c3_fight",
        text: "你们在狭窄的巷子里过了几招。她虽然受过专业训练，但在你的实战经验面前显得有些稚嫩。最后，你制服了她，两人的身体紧紧贴在一起。",
        location: "拳场后巷",
        speaker: "旁白",
        choices: [
            { text: "在她耳边吹气：“这次放过你。下次再来抓我，记得多带点人...或者，穿得性感点。”", type: "alpha", nextScene: "wm_c3_escape", feedback: "羞辱+调情，极致的坏男人。", effect: { frame: 25, attraction: 30 } },
            { text: "松开手，帮她整理了一下衣领：“警官，你的枪法不错，但格斗还得练练。”", type: "alpha", nextScene: "wm_c3_escape", feedback: "强者的指点。", effect: { frame: 25, attraction: 30 } }
        ]
    },
    "wm_c3_escape": {
        id: "wm_c3_escape",
        text: "你放开她，消失在夜色中。陈警官靠在墙上，大口喘气，看着你消失的方向，眼神复杂。她发誓一定要亲手抓住你。",
        location: "拳场后巷",
        speaker: "陈警官",
        choices: [
            { text: "进入终章：野兽之王", type: "neutral", nextScene: "wm_chapter4_intro", effect: {} },
            { text: "回头看一眼，消失在黑暗中", type: "neutral", nextScene: "wm_chapter4_intro", effect: {} }
        ]
    },

    // ==========================================
    // 终章：野兽之王 (The Finale)
    // ==========================================
    "wm_chapter4_intro": {
        id: "wm_chapter4_intro",
        text: "一个月后。地下拳王争霸赛决赛。刘太太在贵宾席为你呐喊，张医生在场边为你准备急救箱，陈警官...穿着便衣混在人群中，目光紧锁着你。",
        location: "拳王争霸赛",
        speaker: "旁白",
        choices: [
            { text: "赢下比赛，向全场宣告你的胜利。", type: "alpha", nextScene: "wm_c4_victory", effect: { frame: 10, attraction: 10 } },
            { text: "看着台下的三个女人，握紧拳头：“今晚，我要赢下一切。”", type: "alpha", nextScene: "wm_c4_victory", effect: { frame: 10, attraction: 10 } }
        ]
    },
    "wm_c4_victory": {
        id: "wm_c4_victory",
        text: "你KO了对手，举起金腰带。全场沸腾。三个女人同时走向你。刘太太想带你去庆功，张医生想检查你的伤口，陈警官拿出了手铐。",
        location: "拳台中央",
        speaker: "旁白",
        choices: [
            { text: "走向刘太太，跟她回豪宅。", type: "alpha", nextScene: "wm_end_rich", effect: {} },
            { text: "走向张医生，让她为你疗伤。", type: "alpha", nextScene: "wm_end_doctor", effect: {} },
            { text: "伸出双手给陈警官：“我输了。这辈子都归你管。”", type: "alpha", nextScene: "wm_end_police", effect: {} },
            { text: "跳下拳台，骑上摩托车独自离开：“老子属于自由。”", type: "alpha", nextScene: "wm_end_freedom", effect: {} }
        ]
    },

    // --- 结局 ---
    "wm_end_rich": {
        id: "wm_end_rich",
        text: "【结局：豪门软饭王】\n你住进了刘太太的别墅，过上了锦衣玉食的生活。虽然失去了自由，但你拥有了无尽的财富和肉体享受。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "wm_end_doctor": {
        id: "wm_end_doctor",
        text: "【结局：被驯服的野兽】\n你和张医生在一起了。她治好了你所有的伤，也治好了你的戾气。你开了一家正规的健身房，过上了平静的生活。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "wm_end_police": {
        id: "wm_end_police",
        text: "【结局：铁窗泪与爱】\n你入狱了，但陈警官每周都来看你。她说等你出来就结婚。你在狱中成为了老大，依然是那个野兽。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "wm_end_freedom": {
        id: "wm_end_freedom",
        text: "【结局：孤狼】\n你谁也没选。你骑着摩托车驶向远方。你是都市传说，是所有女人得不到的梦。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },

    // --- 失败结局 ---
    "wm_scene_gameover_servant": {
        id: "wm_scene_gameover_servant",
        text: "刘太太把你当成了普通的修车工。她付了小费，把你忘得一干二净。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "wm_scene_gameover_jail": {
        id: "wm_scene_gameover_jail",
        text: "你被抓进了监狱，因为表现懦弱，在里面受尽欺负。你的一生都毁了。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "wm_c2_weak": {
        id: "wm_c2_weak",
        text: "张医生最讨厌软弱的男人。她给你随便包扎了一下就走了。你失去了她的尊重。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} }]
    },

    // --- 补全缺失分支 ---
    "wm_scene_1_apology": {
        id: "wm_scene_1_apology",
        text: "刘太太嫌弃地看了你一眼，转身走进了休息室。你修好了车，她让助理来取车，连面都没露。你只是个卑微的修车工。",
        location: "修车厂",
        speaker: "旁白",
        choices: [
            { text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} },
            { text: "叹了口气，继续干活", type: "neutral", nextScene: "root_menu", effect: {} }
        ]
    },
    "wm_scene_1_money": {
        id: "wm_scene_1_money",
        text: "刘太太皱了皱眉：“钱不是问题。快点修好。” 她付了双倍的钱，但对你毫无兴趣。你赚了钱，但失去了故事。",
        location: "修车厂",
        speaker: "旁白",
        choices: [
            { text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} },
            { text: "数钱，下班", type: "neutral", nextScene: "root_menu", effect: {} }
        ]
    },
    "wm_scene_friendzone_chat": {
        id: "wm_scene_friendzone_chat",
        text: "刘太太笑了笑：“挺好的，健康最重要。” 气氛变得尴尬而客套。她穿上外套，付钱离开了。",
        location: "修车厂",
        speaker: "旁白",
        choices: [
            { text: "重新开始", type: "neutral", nextScene: "root_menu", effect: {} },
            { text: "看着她的车尾灯消失", type: "neutral", nextScene: "root_menu", effect: {} }
        ]
    },
    "wm_c2_treatment": {
        id: "wm_c2_treatment",
        text: "张医生帮你处理了伤口，动作专业而冷漠：“好了，你可以走了。下次别再受伤了。” 她把你当成了普通的病人。",
        location: "拳场更衣室",
        speaker: "张医生",
        choices: [
            { text: "离开", type: "neutral", nextScene: "wm_chapter3_intro", effect: {} },
            { text: "“谢谢医生。”", type: "neutral", nextScene: "wm_chapter3_intro", effect: {} }
        ]
    }
});