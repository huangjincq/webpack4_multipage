
## 项目介绍
本项目是一个基于[webpack4](https://webpack.js.org/)基础配置，专为 `多页应用（multiple page application）` 开发而搭建的。随着web应用越来越复杂，前端工程师们如今大多时候都在开发 `单页应用（single page application）`。但是其实有时候我们还是需要开发一些多页面的web应用程序，比如说公司官网等。像官网这种如果做成spa类型，对seo不友好，当然也可以做成基于spa的服务端渲染，那又小题大做了。所以做成一个多页应用是一个不错的选择。

## 项目运行
```
git clone

cd webpack4_multipage

npm install or yarn install(推荐使用yarn)

npm start（开发环境）

npm run build（生产打包）

npm run build:analyze（生成打包并且用 webpack-bundle-analyzer 分析构建结果）
```
npm start 运行完成之后，浏览器输入 http://127.0.0.1:9001 + 自己的页面所在目录名 + .html，就可以访问了。
比如pages下面有个page1目录，page1目录下面有index.html和index.js，那么访问路径就是http://127.0.0.1:9001/page1.html
## 项目结构（重要）
```
.
├── README.md
├── src
│   ├── assets
│   │   ├── images
│   │   └── styles
│   │       ├── common.less
│   │       └── reset.css
│   └── pages
│       ├── index
│       │   ├── index.html
│       │   ├── index.js
│       │   ├── index.less
│       │   └── test.js
│       └── page1
│           ├── index.html
│           ├── index.js
│           └── index.less
├── configs
│   ├── env.js
│   ├── module.js
│   ├── optimization.js
│   ├── plugins.js
│   ├── webpack.config.babel.js
│   └── webpackDevServer.config.babel.js
├── dist
├── package.json
└── yarn.lock
```
