window.storyData = window.storyData || {};
window.storyData.heroines = window.storyData.heroines || {};
window.storyData.scenes = window.storyData.scenes || {};

// 定义陈默线的女主角
Object.assign(window.storyData.heroines, {
    "streamer_kiki": { name: "Kiki", title: "双面主播", bio: "镜头前是清纯女神，镜头后是满口脏话的太妹。把柄被你握在手里。" },
    "neighbor_xiao_rou": { name: "小柔", title: "邻家女孩", bio: "住在隔壁的大学生，单纯善良，完全不知道自己生活在你的监控之下。" },
    "dr_lin": { name: "林博士", title: "网络安全专家", bio: "试图追踪你的踪迹，却反过来掉进了你的陷阱。" }
});

// 定义陈默线的场景
Object.assign(window.storyData.scenes, {
    // ============================================================
    // 序章：暗网之王
    // ============================================================
    "intro_chen_mo": {
        id: "intro_chen_mo",
        text: "房间里没有灯，只有六块显示器发出的幽幽蓝光映在你的脸上。你是陈默，代号“Ghost”。在这个网络连接一切的时代，你就是神。\n\n今晚的猎物是谁？",
        location: "陈默的基地",
        speaker: "旁白",
        choices: [
            { 
                text: "入侵那个当红女主播Kiki的私人摄像头。", 
                type: "alpha", 
                nextScene: "cm_kiki_1_spy", 
                effect: { frame: 5, attraction: 0 },
                unlockHeroine: "streamer_kiki"
            },
            { 
                text: "检查隔壁小柔的电脑，看看她最近在烦恼什么。", 
                type: "beta", 
                nextScene: "cm_rou_1_monitor", 
                effect: { frame: 0, attraction: 5 },
                unlockHeroine: "neighbor_xiao_rou"
            }
        ]
    },

    // ============================================================
    // 第一章：双面主播 Kiki
    // ============================================================
    "cm_kiki_1_spy": {
        id: "cm_kiki_1_spy",
        text: "屏幕上，Kiki刚刚结束直播。她在镜头前甜美地说了晚安，关掉直播流的瞬间，她点了一根烟，对着电话大骂：“那群死宅男真恶心，刷那点礼物就想听我叫老公？做梦吧！”\n\n你录下了全过程。",
        location: "Kiki的房间（监控）",
        speaker: "Kiki",
        choices: [
            { 
                text: "把视频发到她的私人邮箱，附言：“你的粉丝会喜欢这个吗？”", 
                type: "alpha", 
                nextScene: "cm_kiki_2_panic", 
                feedback: "直接击碎她的心理防线。",
                effect: { frame: 10, attraction: 0 } 
            },
            { 
                text: "黑掉她的直播间标题，改成“我是个骗子”。", 
                type: "beta", 
                nextScene: "cm_kiki_fail", 
                feedback: "这只是恶作剧，无法建立真正的控制。",
                effect: { frame: -5, attraction: -5 } 
            }
        ]
    },
    "cm_kiki_fail": {
        id: "cm_kiki_fail",
        text: "Kiki以为是平台故障，很快联系客服解决了。你失去了一个完美的把柄。",
        location: "陈默的基地",
        speaker: "旁白",
        choices: [
            { text: "重新寻找目标", type: "neutral", nextScene: "intro_chen_mo", effect: {} },
            { text: "愤怒地砸了一下键盘", type: "neutral", nextScene: "intro_chen_mo", effect: {} }
        ]
    },
    "cm_kiki_2_panic": {
        id: "cm_kiki_2_panic",
        text: "Kiki看着邮件，脸色惨白。她颤抖着回复：“你是谁？你要多少钱？求求你别发出去，我会身败名裂的！”",
        location: "网络聊天",
        speaker: "Kiki",
        choices: [
            { 
                text: "“我不要钱。我要你现在打开直播，只给我一个人看。穿上那件你最讨厌的女仆装。”", 
                type: "alpha", 
                nextScene: "cm_kiki_3_submit", 
                feedback: "剥夺她的尊严，建立主奴关系。",
                effect: { frame: 15, attraction: 10 } 
            },
            { 
                text: "“以后直播老实点，别骗人。”", 
                type: "beta", 
                nextScene: "cm_kiki_friend", 
                feedback: "你成了她的道德导师，但这有什么乐趣？",
                effect: { frame: -10, attraction: 5 } 
            }
        ]
    },
    "cm_kiki_friend": {
        id: "cm_kiki_friend",
        text: "Kiki松了一口气，把你当成了好人。虽然她不再骂人，但你只是她列表里的一个普通朋友。",
        location: "结局",
        speaker: "旁白",
        choices: [
            { text: "这不够刺激，重来", type: "neutral", nextScene: "intro_chen_mo", effect: {} },
            { text: "默默关注她", type: "neutral", nextScene: "intro_chen_mo", effect: {} }
        ]
    },
    "cm_kiki_3_submit": {
        id: "cm_kiki_3_submit",
        text: "Kiki照做了。在专属的加密直播间里，她含着泪，穿着女仆装，按照你的指令做出各种羞耻的动作。她知道，屏幕后的这双眼睛，掌握着她的生杀大权。\n\n“主人……这样可以了吗？”",
        location: "专属直播间",
        speaker: "Kiki",
        choices: [
            { 
                text: "“很好。记住这种感觉。现在，去处理一下隔壁小柔遇到的麻烦。”", 
                type: "alpha", 
                nextScene: "cm_rou_1_monitor", 
                feedback: "利用Kiki的影响力来解决现实问题。",
                effect: { frame: 20, attraction: 20 },
                unlockHeroine: "neighbor_xiao_rou"
            },
            { 
                text: "“乖狗狗。现在我有任务给你，去帮我查一个人。”", 
                type: "alpha", 
                nextScene: "cm_rou_1_monitor", 
                feedback: "将她彻底工具化。",
                effect: { frame: 20, attraction: 20 },
                unlockHeroine: "neighbor_xiao_rou"
            }
        ]
    },

    // ============================================================
    // 第二章：邻家女孩 小柔
    // ============================================================
    "cm_rou_1_monitor": {
        id: "cm_rou_1_monitor",
        text: "你把视线转向隔壁。小柔是你的邻居，一个单纯的大学生。通过监控，你发现她最近在哭。原来她在学校论坛被匿名造谣包养，遭到了网络暴力。",
        location: "小柔的房间（监控）",
        speaker: "旁白",
        choices: [
            { 
                text: "查出造谣者的IP，黑掉他的设备，并把他的丑事公之于众。", 
                type: "alpha", 
                nextScene: "cm_rou_2_hero", 
                feedback: "以暴制暴，这是你的正义。",
                effect: { frame: 10, attraction: 10 } 
            },
            { 
                text: "匿名给小柔发私信安慰她。", 
                type: "beta", 
                nextScene: "cm_rou_friend", 
                feedback: "温柔的安慰无法解决根本问题。",
                effect: { frame: -5, attraction: 5 } 
            }
        ]
    },
    "cm_rou_friend": {
        id: "cm_rou_friend",
        text: "小柔很感激你的安慰，但谣言依然存在，她最终选择了休学搬家。你失去了她。",
        location: "结局",
        speaker: "旁白",
        choices: [
            { text: "我不接受这个结局", type: "neutral", nextScene: "cm_rou_1_monitor", effect: {} },
            { text: "只能这样了", type: "neutral", nextScene: "cm_rou_1_monitor", effect: {} }
        ]
    },
    "cm_rou_2_hero": {
        id: "cm_rou_2_hero",
        text: "第二天，造谣者在全校面前社死，不得不退学。谣言不攻自破。小柔在日记里写道：“好像有一个看不见的守护神在帮我……”\n\n你决定：",
        location: "陈默的基地",
        speaker: "旁白",
        choices: [
            { 
                text: "制造一次“偶遇”，让她知道那个守护神就在她身边。", 
                type: "alpha", 
                nextScene: "cm_rou_3_meet", 
                feedback: "从幕后走向台前，收割她的感激与爱慕。",
                effect: { frame: 15, attraction: 15 } 
            },
            { 
                text: "继续默默守护，不让她知道。", 
                type: "beta", 
                nextScene: "cm_rou_silent", 
                feedback: "深情但无用。",
                effect: { frame: 0, attraction: 10 } 
            }
        ]
    },
    "cm_rou_silent": {
        id: "cm_rou_silent",
        text: "你做了一辈子的无名英雄。小柔后来嫁给了一个普通人，你只能在监控里看着她幸福。",
        location: "结局",
        speaker: "旁白",
        choices: [
            { text: "我要拥有她", type: "neutral", nextScene: "cm_rou_2_hero", effect: {} },
            { text: "祝福她", type: "neutral", nextScene: "cm_rou_2_hero", effect: {} }
        ]
    },
    "cm_rou_3_meet": {
        id: "cm_rou_3_meet",
        text: "你在楼道里“偶然”帮她修好了声控灯。小柔看着你，突然脸红了：“陈先生，其实我一直觉得……那个帮我的人就是你。你的眼神，和我在梦里见到的一样。”\n\n就在这时，你的手机响了，是一个加密号码。",
        location: "公寓楼道",
        speaker: "小柔",
        choices: [
            { 
                text: "接通电话，准备迎接最后的挑战。", 
                type: "alpha", 
                nextScene: "cm_lin_1_track", 
                feedback: "真正的对手出现了。",
                effect: { frame: 10, attraction: 10 },
                unlockHeroine: "dr_lin"
            },
            { 
                text: "对小柔做个噤声的手势，接起电话。", 
                type: "alpha", 
                nextScene: "cm_lin_1_track", 
                feedback: "保持神秘感。",
                effect: { frame: 10, attraction: 10 },
                unlockHeroine: "dr_lin"
            }
        ]
    },

    // ============================================================
    // 第三章：猎手与猎物 林博士
    // ============================================================
    "cm_lin_1_track": {
        id: "cm_lin_1_track",
        text: "“Ghost，终于找到你了。”电话那头是一个冷静的女声，“我是网络安全局的林博士。你最近闹出的动静太大了（Kiki和小柔的事）。我们做个交易吧。”",
        location: "电话",
        speaker: "林博士",
        choices: [
            { 
                text: "“我从不和条子做交易。有本事就来抓我。”挂断并启动反追踪程序。", 
                type: "alpha", 
                nextScene: "cm_lin_2_duel", 
                feedback: "挑衅权威，激发她的征服欲。",
                effect: { frame: 15, attraction: 5 } 
            },
            { 
                text: "“你想怎么样？”", 
                type: "beta", 
                nextScene: "cm_lin_negotiate", 
                feedback: "示弱会让你处于被动。",
                effect: { frame: -10, attraction: 0 } 
            }
        ]
    },
    "cm_lin_negotiate": {
        id: "cm_lin_negotiate",
        text: "林博士提出让你为她工作，你失去了自由，成为了体制内的工具人。",
        location: "结局",
        speaker: "旁白",
        choices: [
            { text: "我不甘心", type: "neutral", nextScene: "cm_lin_1_track", effect: {} },
            { text: "重新来过", type: "neutral", nextScene: "cm_lin_1_track", effect: {} }
        ]
    },
    "cm_lin_2_duel": {
        id: "cm_lin_2_duel",
        text: "一场无声的战争在网络世界爆发。她封锁你的端口，你绕过她的防火墙。你发现她虽然技术高超，但过于依赖系统规则。你利用一个逻辑陷阱，反向控制了她的电脑。",
        location: "网络空间",
        speaker: "旁白",
        choices: [
            { 
                text: "在她的屏幕上弹出一个窗口：“林博士，你的系统漏洞百出，就像你今晚穿的睡衣一样。”", 
                type: "alpha", 
                nextScene: "cm_lin_3_conquer", 
                feedback: "彻底击溃她的骄傲。",
                effect: { frame: 20, attraction: 20 } 
            },
            { 
                text: "直接黑掉她的摄像头，把画面传给她：“笑一个，林博士。”", 
                type: "alpha", 
                nextScene: "cm_lin_3_conquer", 
                feedback: "展示绝对的控制权。",
                effect: { frame: 20, attraction: 20 } 
            }
        ]
    },
    "cm_lin_3_conquer": {
        id: "cm_lin_3_conquer",
        text: "林博士看着自己被锁定的电脑，以及摄像头传回的画面，第一次感到了恐惧和……兴奋。“你赢了，Ghost。你想要什么？”",
        location: "林博士的办公室",
        speaker: "林博士",
        choices: [
            { 
                text: "“我要你成为我的‘防火墙’。帮我掩盖一切痕迹，做我的共犯。”", 
                type: "alpha", 
                nextScene: "cm_finale_god", 
                feedback: "收服最强的对手。",
                effect: { frame: 25, attraction: 25 } 
            },
            { 
                text: "“我要你。从身体到灵魂，全部归我。”", 
                type: "alpha", 
                nextScene: "cm_finale_god", 
                feedback: "直接占有。",
                effect: { frame: 25, attraction: 25 } 
            }
        ]
    },

    // ============================================================
    // 终章：神之眼
    // ============================================================
    "cm_finale_god": {
        id: "cm_finale_god",
        text: "Kiki是你的傀儡，为你提供金钱和舆论；小柔是你的港湾，给你现实的温暖；林博士是你的盾牌，为你抵挡法律的制裁。\n\n你坐在黑暗的房间里，看着无数个屏幕。整个城市都在你的监控之下。",
        location: "陈默的基地",
        speaker: "旁白",
        choices: [
            { 
                text: "这就是我想要的——绝对的控制。", 
                type: "alpha", 
                nextScene: "cm_end_king", 
                feedback: "达成完美结局。",
                effect: { frame: 100, attraction: 100 } 
            },
            { 
                text: "也许我该走出房间，去晒晒太阳。", 
                type: "beta", 
                nextScene: "cm_end_normal", 
                feedback: "回归平凡。",
                effect: { frame: 0, attraction: 0 } 
            }
        ]
    },
    "cm_end_king": {
        id: "cm_end_king",
        text: "【结局：赛博之神】\n你成为了网络世界的无冕之王。没有人知道你的名字，但所有人都活在你的阴影之下。女人们敬畏你、爱慕你、服从你。你是Ghost，你是神。",
        location: "结局",
        speaker: "系统",
        choices: [
            { text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }
        ]
    },
    "cm_end_normal": {
        id: "cm_end_normal",
        text: "【结局：阳光之下】\n你销毁了所有数据，和小柔过上了普通人的生活。虽然偶尔会怀念那种掌控一切的感觉，但牵着她的手散步也很不错。",
        location: "结局",
        speaker: "系统",
        choices: [
            { text: "返回主菜单", type: "neutral", nextScene: "root_menu", effect: {} }
        ]
    }
});
