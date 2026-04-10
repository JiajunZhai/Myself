# 🌌 Kian's Digital Garden Template

一个专为极客开发者打造的破茧级个人数字花园与博客模板。基于极为现代底层的 **Astro v6** 构建，搭载极致性能的 **TailwindCSS v4**，并内置了酷炫而优雅的 **Keystatic CMS** —— 让你即使身处断网离线的开发环境，也能通过优雅的可视化界面专注于文字写作！

## ✨ 核心极客特性

- ⚡️ **突破引擎的性能**: 得益于 Astro 登峰造极的纯静态生成策略 (SSG)，天然保障 100/100 Lighthouse 满分满帧加载。
- 🎨 **炸裂的赛博美学 UI**: 这不是一个简单的文本博客。首页融合了响应式的 **3D 物理倾斜便当盒 (Vanilla Tilt Bento)**，赛博光斑网格呼吸背景、原生纯 CSS 驱动的无尽技术跑马灯，以及一处**包含真实响应逻辑的伪黑客终端 (Interactive Terminal)** 彩蛋。
- 📝 **开箱即用的可视化后台 (CMS)**: 告别必须强绑数据库的臃肿后台。只要你的本地运行，访问 `http://localhost:4321/keystatic` 就能直接弹出如 Notion 般顺滑的大型富文本面板。所敲所写直接双向同步至库中的物理 `.mdx` 源文件，将你的内容 100% 牢牢攥在自己手里。
- 🌐 **天然的双语深层国际化**: 架构级别内置且完全打通的的中英双语切换，连 404 页面都在掌控之中。
- 💬 **零负载沉浸式评论区**: 内置深度调教版的 Giscus 组件，基于 Github API，绝不拖累首屏性能。
- 📊 **智能组件挂载**: 整合 Github 仓库读取能力展示开源成果，甚至还能接入你无意识的 WakaTime 代码心流记录。
- 🚀 **生而柔顺的页面过渡组件 (View Transitions)**: Astro 极强的底座实现让每个版块的跳转仿佛在切屏操作最高端的 iOS App，彻底消除白屏撕裂。

## 🚀 极客使用指南

### 1. 克隆与基建注入
将源代码打捞至你的本地终端机，并接管全部深层依赖包：
```bash
git clone <repository-url>
cd <repository-dir>
npm install
```

### 2. 构建私有环境变量指纹 (.env)
为了激活各种高阶挂载功能，请在根目录新建对应的 `.env` 文件并填入你的数据指纹：
```env
# GitHub 授权节点 (用于解锁便当盒高亮开源计划)
GITHUB_USERNAME="your_github_username"
GITHUB_TOKEN="your_personal_access_token" # (选填: 防止高频刷新遭受 API 请求风暴阻断)

# Giscus 核心评论区授权管道
PUBLIC_GISCUS_REPO="你的Github名/你的仓库名"
PUBLIC_GISCUS_REPO_ID="你的_repo_id"
PUBLIC_GISCUS_CATEGORY="Announcements"
PUBLIC_GISCUS_CATEGORY_ID="你的_category_id"
```

### 3. 释放引擎与开启宇宙通道
向系统提交启动请求：
```bash
npm run dev
```

数字花园的第一株枝芽现已破土而出，请直连观测点: [http://localhost:4321](http://localhost:4321)

## ✍️ 潜入中枢写作控制台 (CMS)

我彻底舍弃第三方外链数据库。当极客的开发服务器运转时，即刻敲入神秘地址：
**👉 [http://localhost:4321/keystatic](http://localhost:4321/keystatic)**

系统将即刻解锁一个完全可视化的超级编辑大盘：
- **点击发布博文，无感直接操作原生的 Markdown / MDX 源码结构。**
- 原生地上传图片、修改各种前置元数据（日期、作者、状态、语言标识）。
- 绝不产生数据库锁定：你的所有文字将在按下控制台保存命令的瞬间，被完全封存在你的 `src/content/blog/` 文件目录作为纯文本保留！

## 🛠️ 地下管线架构清单

- `src/components/home/*` - 包含了所有重金砸设的首屏全特效视觉挂件 (Terminal, Marquee, BentoGrid, 瀑布流, 信条语录)。
- `src/i18n/` - 中枢神经束：调控目前 `en` / `zh` 双层世界词典的切换逻辑。
- `keystatic.config.ts` - CMS 工作台的核心配置文件规范。如果不想让系统发神经，请在这里改你的配置表。

| 后台交互权限令      | 终端行动响应                                      |
| :------------------ | :----------------------------------------------- |
| `npm run dev`       | 以最大开销极速启动本地服务器，并且 **全面放行 CMS 的后台特权**。|
| `npm run build`     | 强行抹杀所有 CMS 动态特性与 API 残留，将页面暴力压缩转化为绝对无坚不摧的纯静态 `./dist/` 数据包！|
| `npm run preview`   | 在本地模拟上线后的真空包装状态。         |

## 📄 架构协议
本机由数字空间 MIT 协议进行约束，对原代码的各种修改甚至用于你的极致装逼与商用完全豁免。"Talk is cheap. Show me the code."
