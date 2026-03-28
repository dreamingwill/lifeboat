# 骇浪求生攻略站

《骇浪求生（Lifeboat）》规则参考、角色打法与终局计分器。

**在线地址：** https://lifeboat-8op.pages.dev/

## 功能

- 规则速查：游戏流程、行动选项、关键机制
- 角色卡：6–8 名角色的数值、打法要点与社交关系
- 终局计分器：支持 4–8 人局，自动计算爱恨关系与财宝得分

## 本地开发

无构建步骤，直接在浏览器打开 `index.html`，或用本地服务器避免部分浏览器的跨域限制：

```bash
python3 -m http.server 8080
# 浏览器访问 http://localhost:8080
```

## 文件结构

```
index.html   入口页面
app.js       渲染逻辑与交互绑定
data.js      角色、规则、计分数据
styles.css   样式
docs/        策划笔记与内容草稿
```

## 部署

托管于 [Cloudflare Pages](https://pages.cloudflare.com/)，推送到 `main` 分支后自动部署。
