## 构建

1. 创建项目

```
npx create-react-app my-app
```

2. 打开项目

```
cd my-app
```

3. 启动项目

```
npm run start
```

4. 暴露配置项

```
npm run eject
```

## cra 文件结构

```javascript
|-- README.md      					文档
|-- public         					静态资源
|	|-- favicon.ico
|	|-- index.html
|	|-- manifest.json
|-- src            					源码
|	|-- App.css
|	|-- App.js       			    根组件
|	|-- App.test.js
|	|-- index.css    			    全局样式
|	|-- index.js     			    入口文件
|	|-- logo.svg
|	|-- serviceWorker.js            pwa支持
|-- package.json                    npm依赖
```

## 入口文件定义

```javascript
// webpack.config.js
entry: [
  isEnvDevelopment && !shouldUseReactRefresh
    ? [webpackDevClientEntry, paths.appIndexJs]
    : // 应用程序入口：src/index
      paths.appIndexJs,
];
```

cra 支持 ts、sass 以及 css 模块化

```javascript
// Check if TypeScript is setup
const useTypeScript = fs.existsSync(paths.appTsConfig);

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
```

## React 和 ReactDom

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello React</h1>, document.querySelector("#root"));
```

- React 负责逻辑控制，数据 -> VDOM
- ReactDOM 渲染实际 DOM VDOM -> DOM
- React 使用 JSX 来描述 UI
- babel-loader 把 JSX 编译成相应的 JS 对象，React.createElement 再把这个 JS 对象构造成 React 需要的虚拟 DOM
