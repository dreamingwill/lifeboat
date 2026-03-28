# GEMINI.md - 骇浪求生 (Lifeboat) 攻略站

## 项目概览
本项目是一个为桌游《骇浪求生 (Lifeboat)》设计的静态攻略站。它提供了规则速查、角色指南以及一个交互式的终局计分器。

- **主要技术栈:** Vanilla JavaScript, CSS3 (Modern features like variables and clamp), HTML5.
- **核心功能:**
  - 规则与流程速查。
  - 6-8 名角色的数值与打法建议。
  - 自动化的爱恨关系与财宝得分计算。
  - 响应式设计，适配移动端与桌面端。

## 项目结构
- `index.html`: 页面入口，定义了基础骨架。
- `app.js`: 核心渲染逻辑。采用数据驱动的方式动态生成页面内容（如 `renderNav`, `renderSections`, `renderCharactersSection` 等）。
- `data.js`: 静态数据存储中心。包含 `siteMeta`, `heroData`, `overviewData`, `setupData`, `flowData`, `mechanicsData`, `charactersData` 等。
- `styles.css`: 样式文件。使用了大量的 CSS 变量进行主题控制，包含复杂的布局与交互动画。
- `docs/`: 存放项目规划与原始数据。
  - `game_guide_data.md`: 详尽的游戏规则与角色分析原文。
  - `lifeboat-guide-site-plan.md`: 网站开发计划与模块化建议。

## 开发与运行
本工程**无构建步骤**，可直接本地开发。

- **本地预览:** 直接用浏览器打开 `index.html`，或者为了避免跨域限制，使用简单的 HTTP 服务器：
  ```bash
  python3 -m http.server 8080
  ```
- **测试:** 暂无自动化测试脚本。修改 `data.js` 或 `app.js` 后手动刷新页面验证。
- **部署:** 托管于 Cloudflare Pages。推送到 `main` 分支后自动触发部署。

## 协作规范
- **数据与逻辑分离:** 游戏内容相关的修改应在 `data.js` 中进行；UI 渲染逻辑修改应在 `app.js` 中进行。
- **样式指南:** 遵循 `styles.css` 中定义的 CSS 变量和 BEM/组件化风格。
- **中文排版:** 文案注意中英文混排空格规范。
- **语义化:** 保持 `app.js` 中 HTML 字符串的语义化。

## 待办事项 (TODO)
- [ ] 完善 `data.js` 中的占位内容（映射 `docs/game_guide_data.md`）。
- [ ] 优化计分器在极小屏幕下的交互体验。
- [ ] 增加更多官方变体规则的支持。
