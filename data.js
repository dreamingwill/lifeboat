const siteMeta = {
  title: "骇浪求生 Lifeboat 攻略站",
  description: "模块 1 骨架版：用于承载后续静态内容、角色系统与计分模拟器。",
  sections: [
    { id: "hero", label: "Hero", title: "欢迎页", placeholder: "后续模块会补上 Hero 的完整视觉与摘要信息。" },
    { id: "overview", label: "游戏简介", title: "游戏简介", placeholder: "后续映射 docs/game_guide_data.md 中的一、二部分内容。" },
    { id: "setup", label: "游戏准备", title: "游戏准备", placeholder: "后续填入准备步骤、人数建议与救生艇初始位置。" },
    { id: "flow", label: "回合流程", title: "回合流程", placeholder: "后续拆成补给、行动、航行三个阶段的可读结构。" },
    { id: "mechanics", label: "核心机制", title: "核心机制", placeholder: "后续补入口渴、战斗、落水、伤害与爱恨系统。" },
    { id: "characters", label: "角色指南", title: "角色指南", placeholder: "模块 4 会把现有角色 widget 迁移到这里。" },
    { id: "scoring", label: "计分规则", title: "计分规则", placeholder: "模块 5 会在这里加入计分说明与模拟器。" },
    { id: "strategy", label: "策略进阶", title: "策略进阶", placeholder: "后续整理各角色打法与终局判断。" },
    { id: "variants", label: "变体扩展", title: "变体与扩展", placeholder: "后续加入官方变体、扩展包与版本差异。" },
    { id: "faq", label: "FAQ", title: "常见问题", placeholder: "后续整理官方 FAQ 与裁定规则。" }
  ]
};

const overviewData = {};
const setupData = {};
const flowData = {};
const mechanicData = {};
const scoringRules = {};
const strategyTabs = [];
const variantCards = [];
const faqItems = [];

// 先保留现有角色数据，供后续模块 4 迁移角色 widget 使用。
const chars = [
  {
    id: "captain",
    icon: "⚓",
    name: "船长 The Captain",
    en: "The Captain",
    color: "#993C1D",
    bg: "#FAECE7",
    bgt: "#F5C4B3",
    size: 7,
    hp: 7,
    sv: 2,
    type: "⚔ 进攻型",
    special: "现金得分×2",
    pos: "初始位置 #3",
    tags: ["进攻型", "财富型", "高体型"],
    verdict: "综合实力最强的财富型战士。掌控船头是最高优先级，拿到现金打折换取武器，中期积累现金底牌，末期带着一大堆现金上岸。",
    verdictColor: "#FAECE7",
    verdictBorder: "#993C1D",
    tips: [
      "第一回合立刻换到船头，优先拿补给牌中的武器和现金",
      "体型 7 是第二高，抢座和抢劫胜率极高，但要留意大副",
      "现金得分翻倍，优先囤积现金，其他玩家的现金也有抢夺价值",
      "高体型角色更容易承受口渴压力，注意持续储水",
      "大副体型 8 比你更强，打架要靠武器弥补差距",
      "后期体力消耗大时，保住自己上岸通常比强杀仇人更稳"
    ],
    threat: "大副是唯一能正面压制你的角色，早期最好先结盟或先下手。",
    ally: "体力低的角色更愿意依附强者，可拉拢他们形成补给与情报同盟。"
  },
  {
    id: "mate",
    icon: "🪝",
    name: "大副 First Mate",
    en: "First Mate",
    color: "#3C3489",
    bg: "#EEEDFE",
    bgt: "#CECBF6",
    size: 8,
    hp: 8,
    sv: 1,
    type: "⚔ 进攻型",
    special: "无特殊能力（纯战力）",
    pos: "初始位置 #4",
    tags: ["最高体型", "打手型", "无能力缺陷"],
    verdict: "体型最高但没有特殊得分能力，必须靠战斗威慑、财宝和爱恨分补足优势，否则很容易出现打遍全场却输给高生存分角色的尴尬局面。",
    verdictColor: "#EEEDFE",
    verdictBorder: "#3C3489",
    tips: [
      "第一回合争取靠近船头，用体型 8 的威慑力垄断补给优先权",
      "没有专属翻倍财宝，核心不是拿对牌，而是拿得足够多",
      "展示武器本身就是威慑，能减少不必要的硬拼",
      "高体型也意味着更高的水资源压力，别把自己耗死在口渴上",
      "生存分很低，单靠活到最后通常不够赢",
      "最怕全桌围殴，后期要主动分化弱者联盟"
    ],
    threat: "所有弱小角色联合起来针对你，是大副最危险的局面。",
    ally: "船长是天然盟友，两人联手几乎能压制整条船。"
  },
  {
    id: "frenchy",
    icon: "🥖",
    name: "水手 Frenchy",
    en: "Frenchy",
    color: "#854F0B",
    bg: "#FAEEDA",
    bgt: "#FAC775",
    size: 6,
    hp: 6,
    sv: 3,
    type: "⚔ 综合型",
    special: "落水时免受1点伤害",
    pos: "初始位置 #5",
    tags: ["综合最强", "防御特性", "高性价比"],
    verdict: "综合素质最均衡的角色。能打、能活、还能吃到落水免伤红利，在混乱局面中往往是最能顺势获利的那一个。",
    verdictColor: "#FAEEDA",
    verdictBorder: "#854F0B",
    tips: [
      "落水免 1 伤让你比其他角色多一层容错，不怕危险局面",
      "体型 6 足够参与大多数战斗，可以灵活站队换利益",
      "生存分中等，上岸和拖局都可行，应随爱恨关系动态调整",
      "必要时可故意落水转移注意力，再利用特性保存实力",
      "水手非常适合做中间人，在冲突双方之间左右逢源",
      "帮别人参战时别白帮，尽量换到承诺、资源或情报"
    ],
    threat: "如果被全场孤立，水手的综合优势会很难兑现。",
    ally: "弱角色很需要你的保护，你则可以从他们那里换到站队收益。"
  },
  {
    id: "stephen",
    icon: "🎨",
    name: "斯蒂芬先生 Sir Stephen",
    en: "Sir Stephen",
    color: "#0F6E56",
    bg: "#E1F5EE",
    bgt: "#9FE1CB",
    size: 5,
    hp: 5,
    sv: 4,
    type: "💰 财富型",
    special: "美术品得分×2",
    pos: "初始位置 #2",
    tags: ["中立战力", "美术品王", "谈判高手"],
    verdict: "游戏里最适合做交易和制衡的角色。体型不弱，生存分也不错，再加上美术品翻倍，使他非常适合把战力变成谈判筹码。",
    verdictColor: "#E1F5EE",
    verdictBorder: "#0F6E56",
    tips: [
      "美术品翻倍意味着每张高价值美术品都值得你优先争取",
      "体型 5 够用，但别轻易把自己打成别人收割的目标",
      "可以用“把美术品给我，我帮你对付某人”这类交易换资源",
      "初始位置不错，早期应尽快建立自己的资源节奏",
      "与其硬刚船长或大副，不如充当制衡者获利",
      "中期稳定存活是你的最大资本，别为了短期冲突透支自己"
    ],
    threat: "有人专门卡你拿美术品时，你的成长曲线会被明显压制。",
    ally: "弱势角色和摇摆角色都容易接受你的交易提议。"
  },
  {
    id: "lauren",
    icon: "💎",
    name: "罗伦小姐 Lady Lauren",
    en: "Lady Lauren",
    color: "#72243E",
    bg: "#FBEAF0",
    bgt: "#F4C0D1",
    size: 4,
    hp: 4,
    sv: 5,
    type: "💎 财富型",
    special: "珠宝得分×2",
    pos: "初始位置 #1（船头）",
    tags: ["最弱战力", "最高生存分", "珠宝女王"],
    verdict: "最脆弱但极具上限的外交型角色。她靠船头起手、珠宝翻倍和高生存分吃饭，核心不是打赢，而是让所有人都觉得保护她更划算。",
    verdictColor: "#FBEAF0",
    verdictBorder: "#72243E",
    tips: [
      "起手就在船头，第一回合应优先摸珠宝或信号枪这类关键牌",
      "体型 4 很难硬碰硬，尽量用协商代替拒绝与对抗",
      "珠宝翻倍让你可以围绕珠宝展开大量交易",
      "要主动塑造“保护我有利可图”的印象，别只被动求生",
      "如果拿到信号枪，公开展示本身就会改变桌面态度",
      "高生存分意味着保命优先级永远排在前面"
    ],
    threat: "你是非常理想的抢劫目标，必须时刻找到保护伞。",
    ally: "船长、大副、水手都可能成为你的保镖，关键是给出足够理由。"
  },
  {
    id: "kid",
    icon: "🎒",
    name: "小孩 The Kid",
    en: "The Kid",
    color: "#27500A",
    bg: "#EAF3DE",
    bgt: "#C0DD97",
    size: 3,
    hp: 3,
    sv: 6,
    type: "🕵 隐身型",
    special: "偷窃手牌不触发战斗",
    pos: "初始位置 #6（船尾）",
    tags: ["最高生存分", "偷窃大师", "隐身猥琐流"],
    verdict: "生存分极高，偷牌还不会触发战斗，是最容易被低估的角色之一。小孩不靠正面对抗，而是靠低存在感和偷窃慢慢把局面导向自己。",
    verdictColor: "#EAF3DE",
    verdictBorder: "#27500A",
    tips: [
      "偷窃手牌不触发战斗，是全游戏最安全的资源获取手段之一",
      "优先偷信号枪或高价值财宝，这类牌最能改变你的天花板",
      "体型 3 不适合参战，很多时候让步反而更赚",
      "你很适合利用划船和座位变化去低调控节奏",
      "高生存分让你天然具备终局优势，别轻易把自己暴露成仇恨点",
      "信息差是你的武器，终局公开时常常能突然反超"
    ],
    threat: "一旦别人开始提防并公开管理手牌，你的偷窃空间会急剧缩水。",
    ally: "不一定需要固定盟友，但装作依附强者通常很有用。"
  }
];
