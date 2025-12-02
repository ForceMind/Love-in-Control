window.storyData = window.storyData || {};
window.storyData.heroines = window.storyData.heroines || {};
window.storyData.scenes = window.storyData.scenes || {};

// ============================================================
// 角色定义：江枫线 (贫困生逆袭)
// ============================================================
Object.assign(window.storyData.heroines, {
    "su_xiaoxiao": { 
        name: "苏小小", 
        title: "绿茶校花", 
        bio: "20岁，艺术系女神。习惯了男人的讨好，却对唯一无视她的江枫产生了扭曲的征服欲。" 
    },
    "lin_waner": { 
        name: "林婉儿", 
        title: "财阀千金", 
        bio: "19岁，学生会主席，校董的女儿。高傲冷艳，认为金钱可以衡量一切价值，直到遇见无法被收买的江枫。" 
    },
    "teacher_li": { 
        name: "李雅", 
        title: "知性辅导员", 
        bio: "28岁，江枫的辅导员。外表严厉古板，内心却渴望被强势的力量打破生活的平静。" 
    }
});

// ============================================================
// 场景定义
// ============================================================
Object.assign(window.storyData.scenes, {
    // ============================================================
    // 序章：图书馆的博弈
    // ============================================================
    "intro_jiang_feng": {
        id: "intro_jiang_feng",
        text: "午后的大学图书馆，空气中弥漫着陈旧纸张和廉价香水的混合味道。阳光透过落地窗洒在你的旧笔记本电脑上，屏幕上密密麻麻的代码是你唯一的信仰。\n\n你是江枫，一个连学费都要靠奖学金和外包代码凑齐的贫困生。在这个看脸和看钱的校园里，你本该是透明人。但今天，平静被打破了。\n\n一阵骚动从门口传来。苏小小，那个被称为“纯欲天花板”的艺术系校花，穿着一件设计感十足的露肩毛衣和短裙，在一群男生的簇拥下走了进来。她四处张望了一下，目光穿过人群，竟然直直地落在了你——这个角落里唯一没有抬头看她的人身上。\n\n她径直走到你对面，拉开椅子坐下，一股甜腻的桃子味香水瞬间包围了你。她故意把书摔在桌上，发出“啪”的一声，然后托着下巴，眨着那双无辜的大眼睛看着你。",
        location: "图书馆角落",
        speaker: "旁白",
        choices: [
            { 
                text: "（专注）完全无视，手指在键盘上飞舞，仿佛她是空气。", 
                type: "alpha", 
                nextScene: "jf_1_ignore", 
                effect: { frame: 10, attraction: 0 } 
            },
            { 
                text: "（嘲讽）停下动作，冷冷地瞥她一眼：“同学，你挡住我的光了。”", 
                type: "alpha", 
                nextScene: "jf_1_mock", 
                effect: { frame: 15, attraction: 5 } 
            },
            { 
                text: "（礼貌）抬头看她一眼，点点头，然后继续工作。", 
                type: "beta", 
                nextScene: "jf_1_polite", 
                effect: { frame: 0, attraction: 0 } 
            }
        ]
    },

    // 分支 1：无视
    "jf_1_ignore": {
        id: "jf_1_ignore",
        text: "你的无视显然超出了苏小小的认知范围。在她的世界里，只要她出现，男人就该像哈巴狗一样围上来。她咬了咬嘴唇，不甘心地伸出修长的手指，轻轻敲了敲你的键盘空格键，强行打断了你的代码。\n\n“喂，你是木头人吗？本小姐坐在这里五分钟了，你连看都不看一眼？”她娇嗔道，声音大得足以让周围的男生对你投来嫉妒和愤怒的目光，“我电脑坏了，听说你是计算机系的第一名，帮我修修嘛。”\n\n她说着，身体前倾，领口若隐若现，试图用她最擅长的武器攻破你的防线。",
        location: "图书馆",
        speaker: "苏小小",
        choices: [
            { 
                text: "“我很贵。一小时500，先付后教，概不赊账。”", 
                type: "alpha", 
                nextScene: "jf_2_deal", 
                feedback: "将暧昧转化为交易，建立高价值框架。",
                effect: { frame: 10, attraction: 10 },
                unlockHeroine: "su_xiaoxiao"
            },
            { 
                text: "“修电脑找网管，我是写代码的，不是修破烂的。”", 
                type: "alpha", 
                nextScene: "jf_2_reject", 
                feedback: "极度高傲，彻底激起她的征服欲。",
                effect: { frame: 20, attraction: 15 },
                unlockHeroine: "su_xiaoxiao"
            },
            { 
                text: "“好吧，拿来我看看。”（叹气）", 
                type: "beta", 
                nextScene: "jf_2_friendzone", 
                feedback: "你成为了她的工具人。",
                effect: { frame: -10, attraction: -5 } 
            }
        ]
    },

    // 分支 2：嘲讽
    "jf_1_mock": {
        id: "jf_1_mock",
        text: "苏小小愣住了，随即脸上浮现出一抹红晕——不是害羞，是气愤。她从小到大还没被人嫌弃过“挡光”。\n\n“你这人怎么这样！我好心想认识你，你居然……”她眼眶瞬间红了，演技堪称影后级别，“人家只是想请教你几个问题，你至于这么凶吗？”\n\n周围的“护花使者”们开始蠢蠢欲动，似乎想上来教训你这个不知好歹的穷小子。苏小小嘴角闪过一丝不易察觉的得意，她在等你的道歉。",
        location: "图书馆",
        speaker: "苏小小",
        choices: [
            { 
                text: "站起来，居高临下地看着她：“收起你的眼泪。在逻辑的世界里，眼泪是最无用的变量。”", 
                type: "alpha", 
                nextScene: "jf_2_logic", 
                feedback: "用绝对理性碾压感性。",
                effect: { frame: 15, attraction: 20 },
                unlockHeroine: "su_xiaoxiao"
            },
            { 
                text: "无视她，对着周围的男生说：“谁想当英雄？排队领号，我赶时间。”", 
                type: "alpha", 
                nextScene: "jf_2_fight", 
                feedback: "展示雄性领袖气质。",
                effect: { frame: 20, attraction: 10 }
            },
            { 
                text: "“对不起，我刚才心情不好。”", 
                type: "beta", 
                nextScene: "jf_2_friendzone", 
                feedback: "道歉即输。",
                effect: { frame: -15, attraction: -10 } 
            }
        ]
    },

    // 分支 3：礼貌 (过渡)
    "jf_1_polite": {
        id: "jf_1_polite",
        text: "你的反应平平无奇，这让苏小小感到无趣。她撇了撇嘴，觉得你不过是个只会读书的书呆子。但就在她准备离开时，你的手机响了。是辅导员李雅的电话。\n\n“江枫，马上来我办公室一趟。关于你奖学金的事情，有人举报你校外兼职违规。”\n\n苏小小听到了电话内容，眼睛一亮，似乎抓住了你的把柄：“哎呀，学霸要倒霉了？需不需要姐姐帮你求求情？”",
        location: "图书馆",
        speaker: "苏小小",
        choices: [
            { 
                text: "“管好你自己。” 收拾东西直接离开。", 
                type: "alpha", 
                nextScene: "jf_1_5_cafeteria", 
                effect: { frame: 5, attraction: 0 } 
            },
            { 
                text: "“你想怎么样？”", 
                type: "beta", 
                nextScene: "jf_2_deal", 
                effect: { frame: -5, attraction: 5 } 
            }
        ]
    },

    // ============================================================
    // 扩展场景：食堂风波 (连接图书馆与办公室)
    // ============================================================
    "jf_1_5_cafeteria": {
        id: "jf_1_5_cafeteria",
        text: "离开图书馆后，你并没有直接去办公室，而是先去了食堂。你需要冷静一下。食堂里人声鼎沸，但当你端着最便宜的套餐坐下时，周围的议论声却异常清晰。\n\n“就是他吧？听说为了赚钱什么都干。”\n“装什么清高，还不是被苏小小拒绝了。”\n\n谣言传播的速度比病毒还快。就在这时，几个体育生故意撞翻了你的餐盘，汤汁溅了你一身。带头的正是苏小小的头号追求者，张强。",
        location: "大学食堂",
        speaker: "张强",
        choices: [
            { 
                text: "（反击）捡起地上的不锈钢筷子，瞬间抵住他的喉咙：“道歉。现在。”", 
                type: "alpha", 
                nextScene: "jf_1_5_fight_win", 
                feedback: "展示极度的暴力美学与控制力。",
                effect: { frame: 20, attraction: 10 } 
            },
            { 
                text: "（隐忍）默默蹲下收拾残局，眼神却死死盯着他，记住了他的脸。", 
                type: "beta", 
                nextScene: "jf_3_office", 
                feedback: "隐忍是为了更狠的报复，但现在你显得很弱。",
                effect: { frame: -5, attraction: 0 } 
            },
            { 
                text: "（智取）大声说：“张强，你上周作弊的小抄还在我这，想让全校都知道吗？”", 
                type: "alpha", 
                nextScene: "jf_1_5_smart_win", 
                feedback: "掌握信息差，不战而屈人之兵。",
                effect: { frame: 15, attraction: 5 } 
            }
        ]
    },

    "jf_1_5_fight_win": {
        id: "jf_1_5_fight_win",
        text: "张强被你眼中的杀气吓住了。他没想到平时沉默寡言的你竟然这么狠。周围一片死寂。他颤抖着说了声对不起，落荒而逃。\n\n你拍了拍身上的灰尘，转身离开。人群自动为你让开了一条路。远处，苏小小正拿着手机录下了这一幕，嘴角微微上扬。",
        location: "大学食堂",
        speaker: "旁白",
        choices: [
            { text: "整理一下衣服，前往辅导员办公室", type: "neutral", nextScene: "jf_3_office", effect: {} },
            { text: "冷哼一声，无视众人的目光离开", type: "alpha", nextScene: "jf_3_office", effect: { frame: 5 } }
        ]
    },

    "jf_1_5_smart_win": {
        id: "jf_1_5_smart_win",
        text: "张强的脸色瞬间变得惨白。他当然知道你手里有什么。他恶狠狠地瞪了你一眼，带着人灰溜溜地走了。\n\n这场闹剧让你明白，在这个学校，要么有钱，要么有权，要么……就要比别人更狠。",
        location: "大学食堂",
        speaker: "旁白",
        choices: [
            { text: "前往辅导员办公室", type: "neutral", nextScene: "jf_3_office", effect: {} },
            { text: "吹个口哨，潇洒地离开食堂", type: "alpha", nextScene: "jf_3_office", effect: { frame: 5 } }
        ]
    },

    // ============================================================
    // 第一章：办公室的博弈 (李雅)
    // ============================================================
    "jf_3_office": {
        id: "jf_3_office",
        text: "辅导员办公室里冷气开得很足。李雅穿着一身职业套装，黑框眼镜下是严厉的目光。她手里拿着一份举报信，那是你竞争对手写的，指控你在校外接私活，违反了贫困生助学金的规定。\n\n“江枫，解释一下吧。”李雅敲着桌子，“虽然你成绩第一，但原则就是原则。如果这事坐实了，你的奖学金就没了。我知道你家里的情况……”\n\n她的语气中带着一丝不易察觉的关切，但更多的是公事公办的冷漠。她靠在椅背上，双手抱胸，等待着你的乞求。",
        location: "辅导员办公室",
        speaker: "李雅",
        choices: [
            { 
                text: "“李老师，我靠自己的技术赚钱，不偷不抢。如果学校觉得这违规，那这笔钱我不要也罢。”", 
                type: "alpha", 
                nextScene: "jf_3_pride", 
                feedback: "展示骨气，不卑不亢。",
                effect: { frame: 15, attraction: 10 },
                unlockHeroine: "teacher_li"
            },
            { 
                text: "走到她办公桌前，双手撑在桌面上，俯视她：“李老师，你真的忍心毁掉一个天才的前途吗？还是说，你想用这种方式引起我的注意？”", 
                type: "alpha", 
                nextScene: "jf_3_seduce", 
                feedback: "极度大胆的性张力试探。",
                effect: { frame: 25, attraction: 20 },
                unlockHeroine: "teacher_li"
            },
            { 
                text: "“老师，求求你，我不能没有这笔钱……”", 
                type: "beta", 
                nextScene: "jf_3_beg", 
                feedback: "示弱虽然能解决问题，但会失去尊严。",
                effect: { frame: -20, attraction: 0 } 
            }
        ]
    },

    "jf_3_pride": {
        id: "jf_3_pride",
        text: "李雅愣住了。她见过无数学生在她面前哭诉、撒谎、求情，但从未见过像你这样硬气的。她眼中的严厉逐渐消散，取而代之的是一种欣赏。\n\n“你……脾气还挺倔。”她叹了口气，把举报信撕碎扔进垃圾桶，“这次我当没看见。但你得帮我个忙。学生会的网络系统瘫痪了，林婉儿主席正在发火。你去修好它，这事就算翻篇。”",
        location: "辅导员办公室",
        speaker: "李雅",
        choices: [
            { 
                text: "“成交。不过，这是最后一次。”", 
                type: "alpha", 
                nextScene: "jf_3_5_dorm", 
                effect: { frame: 10, attraction: 10 } 
            },
            { 
                text: "“谢谢老师！”", 
                type: "beta", 
                nextScene: "jf_3_5_dorm", 
                effect: { frame: -5, attraction: 5 } 
            }
        ]
    },

    "jf_3_seduce": {
        id: "jf_3_seduce",
        text: "李雅的脸瞬间红到了耳根。她慌乱地推了推眼镜，试图维持教师的威严，但呼吸明显变得急促：“江枫！你……你在胡说什么！这里是办公室！”\n\n但她没有推开你，也没有喊人。空气中弥漫着禁忌的味道。\n\n“去……去学生会把网络修好。”她声音颤抖，“这件事我们晚上再……再谈。”",
        location: "辅导员办公室",
        speaker: "李雅",
        choices: [
            { 
                text: "嘴角上扬，在她耳边低语：“遵命，李老师。”", 
                type: "alpha", 
                nextScene: "jf_3_5_dorm", 
                effect: { frame: 30, attraction: 30 } 
            }
        ]
    },

    // ============================================================
    // 扩展场景：宿舍准备 (连接办公室与学生会)
    // ============================================================
    "jf_3_5_dorm": {
        id: "jf_3_5_dorm",
        text: "回到宿舍，你打开电脑，准备应对学生会的烂摊子。你并没有急着去修，而是先入侵了学生会的内网，查看了日志。\n\n果然，不是系统故障，而是有人故意植入了病毒。而这个病毒的签名，你很熟悉——是计算机系副主席的手笔。看来这是一场针对林婉儿的权力斗争。\n\n你手里现在握着两张牌：一是修好系统，二是揭露真相。",
        location: "男生宿舍",
        speaker: "旁白",
        choices: [
            { 
                text: "只修好系统，深藏功与名。", 
                type: "beta", 
                nextScene: "jf_4_council", 
                feedback: "稳妥但平庸。",
                effect: { frame: 0, attraction: 0 } 
            },
            { 
                text: "备份病毒源码作为证据，准备在关键时刻给林婉儿一份“大礼”。", 
                type: "alpha", 
                nextScene: "jf_4_council_prepared", 
                feedback: "未雨绸缪，掌控全局。",
                effect: { frame: 10, attraction: 5 } 
            }
        ]
    },

    // ============================================================
    // 第二章：学生会的交锋 (林婉儿)
    // ============================================================
    "jf_4_council": {
        id: "jf_4_council",
        text: "学生会办公室比校长的办公室还要豪华。真皮沙发、进口咖啡机，还有坐在主位上的林婉儿。她是校董的女儿，真正的天之骄女。此刻，她正对着几个技术部的男生发火。\n\n“一群废物！连个防火墙都搞不定？明天就是校园祭了，系统要是还没恢复，你们全给我滚蛋！”\n\n她看到了进来的你，上下打量了一番你廉价的T恤，眼中闪过一丝不屑：“李老师说的救兵就是你？一个贫困生？你会用电脑吗？”",
        location: "学生会办公室",
        speaker: "林婉儿",
        choices: [
            { 
                text: "不发一言，直接推开挡路的技术部长，坐到主控电脑前，开始敲击代码。", 
                type: "alpha", 
                nextScene: "jf_4_hack", 
                feedback: "用实力说话，无视她的嘲讽。",
                effect: { frame: 15, attraction: 10 },
                unlockHeroine: "lin_waner"
            },
            { 
                text: "“林主席，如果我修好了，你要为你刚才的无礼道歉。”", 
                type: "alpha", 
                nextScene: "jf_4_bet", 
                feedback: "建立赌约，强迫她低头。",
                effect: { frame: 20, attraction: 20 },
                unlockHeroine: "lin_waner"
            },
            { 
                text: "“我会尽力的，林主席。”", 
                type: "beta", 
                nextScene: "jf_4_slave", 
                feedback: "唯唯诺诺，只能当一辈子下人。",
                effect: { frame: -10, attraction: -10 } 
            }
        ]
    },

    "jf_4_council_prepared": {
        id: "jf_4_council_prepared",
        text: "你走进办公室，面对林婉儿的怒火和质疑，你只是淡淡一笑。\n\n“林主席，系统瘫痪不是技术问题，是人祸。”你把打印好的病毒源码扔在桌上，“这是副主席电脑里发出的指令。你想先修电脑，还是先清理门户？”\n\n林婉儿看着那份文件，眼神瞬间变得锐利。她挥手让其他人出去，只留下了你。",
        location: "学生会办公室",
        speaker: "林婉儿",
        choices: [
            { 
                text: "“现在，我们可以谈谈报酬了吗？”", 
                type: "alpha", 
                nextScene: "jf_4_bet", 
                feedback: "你不仅是技术人员，更是她的战略盟友。",
                effect: { frame: 25, attraction: 25 },
                unlockHeroine: "lin_waner"
            },
            { 
                text: "“我的条件很简单，我要你……”", 
                type: "alpha", 
                nextScene: "jf_4_bet", 
                feedback: "直接提出条件，掌控节奏。",
                effect: { frame: 25, attraction: 25 },
                unlockHeroine: "lin_waner"
            }
        ]
    },

    "jf_4_hack": {
        id: "jf_4_hack",
        text: "五分钟。仅仅五分钟，屏幕上红色的警报全部转绿。你顺手还优化了他们的垃圾代码，系统运行速度提升了三倍。\n\n你站起身，拍了拍手：“搞定。记得付钱给李老师，算我的奖学金。”\n\n整个办公室鸦雀无声。林婉儿看着屏幕，又看着你，眼神从不屑变成了震惊，最后变成了一种猎人看到猎物的光芒。",
        location: "学生会办公室",
        speaker: "林婉儿",
        choices: [
            { 
                text: "转身就走，不带走一片云彩。", 
                type: "alpha", 
                nextScene: "jf_4_5_preparation", 
                effect: { frame: 10, attraction: 15 } 
            },
            { 
                text: "看着她：“现在，谁是废物？”", 
                type: "alpha", 
                nextScene: "jf_4_5_preparation", 
                effect: { frame: 20, attraction: 25 } 
            }
        ]
    },

    "jf_4_bet": {
        id: "jf_4_bet",
        text: "林婉儿气极反笑：“好啊。你要是修好了，我不仅道歉，还答应你一个条件。要是修不好，你就给我跪下擦鞋。”\n\n结局毫无悬念。当你按下回车键的那一刻，系统恢复了完美运行。\n\n你转过椅子，看着脸色苍白的林婉儿：“林主席，愿赌服输。”",
        location: "学生会办公室",
        speaker: "江枫",
        choices: [
            { 
                text: "“我的条件是：今晚的校园祭舞会，你要做我的舞伴。”", 
                type: "alpha", 
                nextScene: "jf_4_5_preparation", 
                feedback: "公开宣示主权，打破阶级壁垒。",
                effect: { frame: 30, attraction: 40 } 
            },
            { 
                text: "“道歉就不必了。以后对我客气点。”", 
                type: "beta", 
                nextScene: "jf_4_5_preparation", 
                feedback: "错失了进一步控制她的机会。",
                effect: { frame: 0, attraction: 10 } 
            }
        ]
    },

    // ============================================================
    // 扩展场景：舞会前夕 (连接学生会与终章)
    // ============================================================
    "jf_4_5_preparation": {
        id: "jf_4_5_preparation",
        text: "校园祭当晚，整个学校都沸腾了。你回到宿舍换衣服，却发现床上放着一套昂贵的高定西装。没有署名，但你知道是谁送的。\n\n手机震动，三条消息同时进来：\n苏小小：“我在礼堂门口等你，不见不散哦~”\n林婉儿：“西装合身吗？别给我丢人。”\n李雅：“今晚……我在办公室等你，如果你想来的话。”\n\n你穿上西装，看着镜子里的自己。那个贫困生江枫已经死了，今晚，是新王的加冕礼。",
        location: "男生宿舍",
        speaker: "旁白",
        choices: [
            { 
                text: "整理领带，大步走向礼堂。", 
                type: "alpha", 
                nextScene: "jf_5_climax", 
                feedback: "迎接最终的修罗场。",
                effect: { frame: 10, attraction: 10 } 
            },
            { 
                text: "深吸一口气，推开宿舍大门。", 
                type: "neutral", 
                nextScene: "jf_5_climax", 
                feedback: "平静地迎接命运。",
                effect: { frame: 0, attraction: 0 } 
            }
        ]
    },

    // ============================================================
    // 终章：校园祭的修罗场
    // ============================================================
    "jf_5_climax": {
        id: "jf_5_climax",
        text: "校园祭的夜晚，灯火通明。你站在礼堂中央，成为了全场的焦点。因为你不仅解决了系统危机，还同时引起了三个女人的注意。\n\n苏小小穿着华丽的礼服，端着酒杯向你走来，眼神里充满了占有欲；\n林婉儿站在二楼的VIP台上，目光紧紧锁着你，仿佛在看自己的私有财产；\n李雅老师在角落里，默默地注视着你，眼神复杂而炽热。\n\n今晚，你将选择谁？",
        location: "校园祭礼堂",
        speaker: "旁白",
        choices: [
            { 
                text: "走向苏小小，接受这个妖精的投怀送抱。", 
                type: "alpha", 
                nextScene: "jf_end_su", 
                effect: { frame: 10, attraction: 10 } 
            },
            { 
                text: "走上二楼，牵起林婉儿的手，征服这个高傲的女王。", 
                type: "alpha", 
                nextScene: "jf_end_lin", 
                effect: { frame: 10, attraction: 10 } 
            },
            { 
                text: "走向角落的李雅，在这个喧嚣的夜晚给她一个承诺。", 
                type: "alpha", 
                nextScene: "jf_end_li", 
                effect: { frame: 10, attraction: 10 } 
            },
            { 
                text: "“小孩子才做选择。”（全员攻略路线开启）", 
                type: "alpha", 
                nextScene: "jf_end_harem", 
                effect: { frame: 50, attraction: 50 } 
            }
        ]
    },

    // 结局分支
    "jf_end_su": {
        id: "jf_end_su",
        text: "【结局：驯服妖精】\n苏小小彻底沦陷了。她不再是那个玩弄人心的绿茶，而是你身边最听话的小猫。她为你挡掉了所有烂桃花，只为了博你一笑。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "jf_end_lin": {
        id: "jf_end_lin",
        text: "【结局：入赘豪门？不，是掌权者】\n你没有成为林家的赘婿，而是凭借才华和手段，成为了林婉儿背后的真正掌权人。她依然高傲，但在你面前，她只是一个小女人。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "jf_end_li": {
        id: "jf_end_li",
        text: "【结局：禁忌之恋】\n你和李雅的关系成为了校园里公开的秘密。她依然是那个严厉的辅导员，但在无人的办公室里，她是属于你的温柔乡。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },
    "jf_end_harem": {
        id: "jf_end_harem",
        text: "【结局：校园之王】\n你没有做出选择，因为你不需要选择。苏小小的崇拜、林婉儿的资源、李雅的关怀，你全部都要。在这个校园里，你就是唯一的王。",
        location: "结局",
        speaker: "系统",
        choices: [{ text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }]
    },

    // 补全缺失分支
    "jf_2_logic": {
        id: "jf_2_logic",
        text: "苏小小被你冰冷的逻辑噎得说不出话来。她擦了擦眼角的泪水，眼神中竟然闪过一丝兴奋——她从未见过如此理智到近乎冷酷的男人。\n\n“好……好样的。”她咬着牙笑了，“江枫，你成功引起了我的注意。逻辑是吧？我会让你知道，感情才是这个世界上最无解的算法。”\n\n她转身离开，留下一个意味深长的背影。",
        location: "图书馆",
        speaker: "苏小小",
        choices: [
            { text: "继续写代码，直到肚子饿了", type: "neutral", nextScene: "jf_1_5_cafeteria", effect: {} },
            { text: "摇摇头，感叹人类的非理性", type: "alpha", nextScene: "jf_1_5_cafeteria", effect: { frame: 5 } }
        ]
    },
    "jf_2_fight": {
        id: "jf_2_fight",
        text: "几个男生被你凌厉的眼神震慑住了。他们互相对视了一眼，谁也不敢做那个出头鸟。毕竟，你虽然穷，但打架不要命的传闻他们也听过。\n\n“切，一群怂包。”苏小小不屑地看了那些男生一眼，然后转头看向你，眼中满是欣赏，“够狂。本小姐喜欢。”\n\n她踩着高跟鞋离开了，但你知道，这只是暴风雨前的宁静。",
        location: "图书馆",
        speaker: "苏小小",
        choices: [
            { text: "收拾东西去吃饭", type: "neutral", nextScene: "jf_1_5_cafeteria", effect: {} },
            { text: "眼神扫视全场，无人敢对视", type: "alpha", nextScene: "jf_1_5_cafeteria", effect: { frame: 5 } }
        ]
    },

    // 失败/普通分支的后续（避免无结果）
    "jf_2_reject": {
        id: "jf_2_reject",
        text: "苏小小被你气走了。但第二天，你的桌上多了一份早餐和一张纸条：“本小姐不信搞不定你。”\n看来，你的拒绝反而激起了她的斗志。游戏才刚刚开始。",
        location: "教室",
        speaker: "旁白",
        choices: [
            { text: "继续保持高冷", type: "alpha", nextScene: "jf_1_5_cafeteria", effect: { frame: 5, attraction: 5 } },
            { text: "吃掉早餐", type: "beta", nextScene: "jf_1_5_cafeteria", effect: { frame: -5, attraction: 0 } }
        ]
    },
    "jf_2_deal": {
        id: "jf_2_deal",
        text: "苏小小愣住了，显然没见过跟她谈钱的男生。她咬咬牙，转给你500块：“行，本小姐有的是钱。但你要是教不会，我就赖上你了。”\n你收了钱，开始专业教学，全程无视她的肢体接触。这反而让她对你更感兴趣了。",
        location: "图书馆",
        speaker: "苏小小",
        choices: [
            { text: "结束教学，去食堂吃饭", type: "neutral", nextScene: "jf_1_5_cafeteria", effect: {} },
            { text: "数了数钱，满意地离开", type: "alpha", nextScene: "jf_1_5_cafeteria", effect: { frame: 5 } }
        ]
    },
    "jf_2_friendzone": {
        id: "jf_2_friendzone",
        text: "你帮她修好了电脑，她笑着说了声谢谢，然后转身就和别的男生去吃饭了。你看着她的背影，意识到自己只是个备胎。\n但生活还得继续，辅导员的电话打破了你的自怨自艾。",
        location: "图书馆",
        speaker: "旁白",
        choices: [
            { text: "接电话", type: "neutral", nextScene: "jf_3_office", effect: {} },
            { text: "叹了口气，接起电话", type: "beta", nextScene: "jf_3_office", effect: { frame: -5 } }
        ]
    },
    "jf_3_beg": {
        id: "jf_3_beg",
        text: "李雅看着你卑微的样子，眼中闪过一丝失望。她摆摆手：“行了，这次就算了。以后注意点。”\n虽然保住了奖学金，但你失去了她的尊重。不过，机会总是有的，学生会那边似乎出了点问题……",
        location: "办公室",
        speaker: "旁白",
        choices: [
            { text: "去学生会看看", type: "neutral", nextScene: "jf_4_council", effect: {} }
        ]
    },
    "jf_4_slave": {
        id: "jf_4_slave",
        text: "你唯唯诺诺的态度让林婉儿很满意，但也很轻视。你修好了电脑，她扔给你几张钞票：“干得不错，赏你的。”\n你拿着钱，心里五味杂陈。这不是你想要的逆袭，但至少你活下来了。",
        location: "结局",
        speaker: "系统",
        choices: [
            { text: "重新开始，找回尊严", type: "neutral", nextScene: "intro_jiang_feng", effect: {} }
        ]
    }
});
