# show-weather-nextjs-ts

[English](README.md) | [日本語](README.ja.md) | **简体中文**

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [show-weather-nextjs-ts](#show-weather-nextjs-ts)
  - [用法](#用法)
    - [运行](#运行)
    - [测试](#测试)
  - [演示](#演示)
  - [架构](#架构)
  - [策略](#策略)
  - [幕后](#幕后)
    - [印象比较深刻的几个困难](#印象比较深刻的几个困难)
  - [维护者](#维护者)
  - [许可证](#许可证)

欢迎。

这是一个使用 [Next.js](https://nextjs.org)、[React](https://react.dev) 和 [Cypress](https://www.cypress.io)，根据 [Weather API](https://www.weatherapi.com)，可以输入地名或经纬度来显示特定地点的天气。

## 用法

### 运行

要运行此项目，请使用 `npm` 在本地安装它：

```bash
cd ./show-weather-nextjs-ts
npm i
npm run start
```

然后就可以访问 [http://localhost:3000](http://localhost:3000) 了。

### 测试

要运行 `Cypress` 测试，请开启另一个终端执行下列命令：

```bash
npm run cy:run
```

稍后便会在终端输出结果。

或者也可以执行下列命令，进行手动测试：

```bash
npm run cy:open
```

## 演示

您可以访问 `Vercel` 中已部署的[演示](https://show-weather-nextjs-ts.vercel.app)。

## 架构

- 主要的 JavaScript 框架是 [React 18.2](https://react.dev) 版本。React 框架是 [Next.js 14.0.2](https://nextjs.org) 版本。
- 使用 [Cypress](https://www.cypress.io) 进行测试。
- 遵循 [TypeScript](https://www.typescriptlang.org/) 和 [ESLint](https://eslint.org/) 的类型检查和语法规范。
- 使用 [Prettier](https://prettier.io) 进行格式化代码。
- 适配 [Chrome 119](https://www.google.com/chrome) 版本。
- 适配桌面端和移动端的显示。（响应式设计）
- 使用 [Weather API](https://www.weatherapi.com) 中的 Endpoint 和 Response 信息。

## 策略

- `/app` 目录放入了 App 路由结构、Layout 和 Server 端的 Page 骨架。
- `/components` 目录下是页面中的 `Current`、`Detail`、`Forecast` 和 `Query` 组件。
  - `Current` 组件用于 `Current Weather` 部分的天气显示。
  - `Detail` 组件用于具体某一天的天气显示。
  - `Forecast` 是 `Next 10 Days` 部分的子组件，用于显示单一天的简略天气和链接。
  - `Query` 组件用于 Query 部分的表单显示、向浏览器请求地理位置权限，并且接收输入的内容。
- `/styles` 目录放入了上述组件个别的样式。
- `/utils` 目录放入了公共的部分。`getData.ts` 用到了异步获取数据的 `fetch` 方法。
- `/types` 目录放入了类型的定义。包括了所有的表单类型、组件 props 类型和 Response 数据类型。
- `/cypress/e2e` 目录放入了端到端的一些测试用例。
- 为了安全，`WEATHER_API_KEY` 的值需要事先设置 Node 的环境变量，从而进行获取。
- 通过指定的方式和 URL 向 `Weather API` 发送请求。将返回的数据根据要求渲染页面。
- 100% 的测试通过率。
  - 由于 `Cypress` 暂不支持 `14` 版本的 `Next.js`，所以没有进行组件单元测试，仅仅进行了端到端测试。
- 累计花费时间：约 `19` 小时。

## 幕后

这是我第一次用到了 `Next.js` 和 `Cypress`，前期查阅文档和过多次数的失败尝试耗费了较多的时间。

### 印象比较深刻的几个困难

1. 由于这次使用了最新的 `Next.js` 14 版本，一些教材和 `Stack Overflow` 上的问题案例甚至都还是 `Next.js` 10 版本和 `React` 17 版本的。我只能在官方文档中寻找相关的蛛丝马迹，然后自己慢慢摸索。
2. 原本想将项目部署在 `GitHub Pages` 上，但 `Next.js` 的环境变量问题比较难解决，有那么几次都想放弃 `Next.js` 直接换回熟悉的 `React` 了。尝试过几次后决定部署在 `Vercel` 上，没想到出奇的顺利，根本无需特殊处理环境变量。
3. 尽管用了最新版本的 `Cypress`，但它也仍然暂不支持 14 版本的 `Next.js`，所以没有进行组件单元测试，仅仅进行了端到端测试。

## 维护者

[@FantiGA](https://github.com/FantiGA)

## 许可证

[MIT](LICENSE) © 2023 [@FantiGA](https://github.com/FantiGA)
