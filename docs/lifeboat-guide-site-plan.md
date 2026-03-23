# 计划：骇浪求生攻略网站（拆文件版，分模块执行）

## 目标
将 `game_guide_data.md` 的完整攻略内容做成一个可交互的静态网站，支持直接部署到 Cloudflare Pages。

## 交付文件
- `index.html`：页面结构与挂载点
- `styles.css`：全局样式、布局、Hero、响应式、组件样式
- `data.js`：角色数据 `chars[]`、FAQ、策略与静态内容映射
- `app.js`：页面交互逻辑与渲染逻辑

可选后续拆分：
- `score-simulator.js`
- `widget.js`

## 保留与约束
- 保留 `lifeboat_game_guide.svg`，但不引用
- 不使用外部 CDN、外部字体、外部框架
- 所有页面内容来源于 `game_guide_data.md`
- 角色数据来源于现有 `index.html` 的 `chars[]`
- 产物仍以 `index.html` 为入口，但允许引用本地 `styles.css` / `data.js` / `app.js`

---

## 模块拆分与执行顺序

### 模块 1：项目骨架
目标：
- 建立多文件结构
- 让页面先能正常打开
- 预留各 section 的锚点与容器

产出：
- `index.html`
- `styles.css`
- `data.js`
- `app.js`

完成标准：
- 浏览器直接打开 `index.html` 无报错
- sticky nav 和 10 个 section 占位结构存在
- 本地脚本和样式已正确引用

---

### 模块 2：设计系统与全局布局
目标：
- 建立视觉系统与响应式基础
- 完成 Hero 的静态视觉

范围：
- 全局颜色、间距、字体、阴影、圆角变量
- sticky nav
- Hero 深海风格背景
- 页面 section 的基础布局
- 768px 以下响应式框架

完成标准：
- 页面已有完整视觉基调
- 桌面与移动端布局都可读
- Hero 不依赖 SVG 也能成立

---

### 模块 3：静态内容区块
目标：
- 先完成不依赖复杂交互的内容呈现

范围：
- Section 2 游戏简介
- Section 3 游戏准备中的静态说明
- Section 4 回合流程中的静态流程概览
- Section 5 核心机制
- Section 9 变体与扩展
- Section 10 FAQ 的静态内容

完成标准：
- `game_guide_data.md` 的主要内容已被映射到页面
- 版式清晰，不是纯大段文本堆叠
- 内容组织适合扫描阅读

---

### 模块 4：角色系统迁移
目标：
- 从旧版 `index.html` 迁移角色数据和角色 widget

范围：
- 抽取并迁移 `chars[]`
- 在 `data.js` 中统一维护角色数据
- 将原 widget 改造成页面中的一个 section
- 对 widget 样式做作用域隔离，避免污染全局

完成标准：
- Section 6 角色指南正常渲染
- 标签切换正常
- widget 样式不影响其他 section

---

### 模块 5：计分模拟器
目标：
- 单独实现最复杂的业务逻辑

范围：
- 当前角色选择
- 存活、爱、恨目标设置
- 现金 / 珠宝 / 艺术品输入
- Narcissist / Psychopath / Ambivalent 特殊逻辑
- 实时得分明细与总分展示

完成标准：
- 规则实现与计划描述一致
- 至少验证以下样例：
  - 船长存活 + 现金 5 => 现金得分 10
  - 大副恨小孩且小孩死亡 => 含 3 分体型
  - 自恋 + 自己存活 => 生存分翻倍

---

### 模块 6：页面交互增强
目标：
- 在结构稳定后统一接入轻交互

范围：
- sticky nav 当前 section 高亮
- 移动端汉堡菜单
- 救生艇座位点击提示
- 回合流程手风琴
- Section 8 策略标签页
- FAQ 展开 / 收起 / 全部展开

完成标准：
- 交互自然，逻辑清晰
- 无明显样式冲突
- 移动端可用

---

### 模块 7：联调与收口
目标：
- 修边角、做验收、保证可交付

检查项：
- 锚点跳转正常
- 375px 下布局正常
- 没有明显的 JS 报错
- 样式无大面积溢出
- widget 和计分模块都正常工作
- 文案、标题、section 顺序统一

完成标准：
- 页面可直接部署
- 浏览器直接打开即可完整使用
- 没有依赖构建工具

---

## 页面结构
- Sticky Nav
- Section 1 Hero
- Section 2 游戏简介
- Section 3 游戏准备
- Section 4 回合流程
- Section 5 核心机制
- Section 6 角色指南
- Section 7 计分规则
- Section 8 策略进阶
- Section 9 变体与扩展
- Section 10 FAQ
- Footer

---

## 数据分层建议

### `data.js`
负责：
- `chars[]`
- FAQ 数据
- 变体 / 扩展数据
- 策略标签页数据
- 如有需要，可加入从 `game_guide_data.md` 整理出来的结构化内容对象

建议结构：
```js
const chars = [ ... ];
const faqItems = [ ... ];
const variantCards = [ ... ];
const strategyTabs = [ ... ];
