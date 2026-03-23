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
    tags: ["进攻型", "财富型", "高体型"]
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
    tags: ["最高体型", "打手型", "无能力缺陷"]
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
    tags: ["综合最强", "防御特性", "高性价比"]
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
    tags: ["中立战力", "美术品王", "谈判高手"]
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
    tags: ["最弱战力", "最高生存分", "珠宝女王"]
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
    tags: ["最高生存分", "偷窃大师", "隐身猥琐流"]
  }
];
