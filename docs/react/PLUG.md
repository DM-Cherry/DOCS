## antd

了解[antd](https://ant.design/index-cn)

1. 安装

```js
yarn add antd
```

2. 范例

```JS
import Button from "antd/es/button";
import "antd/dist/antd.css";
function App() {
	return (
		<div className="App"><Button type="primary">click</Button></div>
	)
}

export default App;
```

3. 配置按需加载

> 配置主题，需要对 create-react-app 的默认配置进行自定义，我们使用[react-app-rewired](https://github.com/timarney/react-app-rewired)（一个对 create-react-app 进行自定义配置的社区解决方案）。

> 引入 react-app-rewired 并修改 package.json 里的启动配置。由于新的react-app-rewired@2.x 版本的缘故，还需要安装[customize-cra](https://github.com/arackaf/customize-cra)

> [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)是一个用于按需加载组件代码和样式的 babel 插件

```JS

yarn add react-app-rewired customize-cra babel-plugin-import

```

- 根目录创建 config-overrides.js，修改默认配置

```JS
 const { override, fixBabelImports } = require("customize-cra");
 module.exports = override( fixBabelImports("import", {//antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
}) );
```

- package.json（可参考）

```JS
{
  "name": "learn",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@pmmmwh/react-refresh-webpack-plugin": "0.4.2",
    "@svgr/webpack": "5.4.0",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@typescript-eslint/eslint-plugin": "^4.5.0",
    "@typescript-eslint/parser": "^4.5.0",
    "antd": "^4.10.2",
    "babel-eslint": "^10.1.0",
    "babel-jest": "^24.9.0",
    "babel-loader": "8.1.0",
    "babel-plugin-import": "^1.13.0",
    "babel-plugin-named-asset-import": "^0.3.7",
    "babel-preset-react-app": "^10.0.0",
    "bfj": "^7.0.2",
    "camelcase": "^6.1.0",
    "case-sensitive-paths-webpack-plugin": "2.3.0",
    "css-loader": "4.3.0",
    "customize-cra": "^0.9.1",
    "less": "^3.11.1",
    "less-loader": "^5.0.0",
    "dotenv": "8.2.0",
    "dotenv-expand": "5.1.0",
    "eslint": "^6.6.0",
    "eslint-config-react-app": "^6.0.0",
    "eslint-plugin-flowtype": "^5.2.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jest": "^24.1.0",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-react": "^7.21.5",
    "eslint-plugin-react-hooks": "^4.2.0",
    "eslint-plugin-testing-library": "^3.9.2",
    "eslint-webpack-plugin": "^2.1.0",
    "file-loader": "6.1.1",
    "fs-extra": "^9.0.1",
    "html-webpack-plugin": "4.5.0",
    "identity-obj-proxy": "3.0.0",
    "jest": "24.9.0",
    "jest-circus": "24.9.0",
    "jest-resolve": "24.9.0",
    "jest-watch-typeahead": "0.6.1",
    "mini-css-extract-plugin": "0.11.3",
    "optimize-css-assets-webpack-plugin": "5.0.4",
    "pnp-webpack-plugin": "1.6.4",
    "postcss-flexbugs-fixes": "4.2.1",
    "postcss-loader": "3.0.0",
    "postcss-normalize": "8.0.1",
    "postcss-preset-env": "6.7.0",
    "postcss-safe-parser": "5.0.2",
    "prompts": "2.4.0",
    "react": "^16.13.1",
    "react-app-polyfill": "^2.0.0",
    "react-app-rewired": "^2.1.6",
    "react-dev-utils": "^11.0.1",
    "react-dom": "^16.13.1",
    "react-scripts": "^3.4.1",
    "react-redux": "^7.2.2",
    "react-refresh": "^0.8.3",
    "react-router-dom": "^5.2.0",
    "redux": "^4.0.5",
    "resolve-url-loader": "^3.1.2",
    "sass-loader": "8.0.2",
    "style-loader": "1.3.0",
    "terser-webpack-plugin": "4.2.3",
    "ts-pnp": "1.2.0",
    "url-loader": "4.1.1",
    "web-vitals": "^0.2.4",
    "webpack": "4.42.0",
    "webpack-dev-server": "3.11.0",
    "webpack-manifest-plugin": "2.2.0",
    "workbox-webpack-plugin": "5.1.4"
  },
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "jest": {
    "roots": [
      "<rootDir>/src"
    ],
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts"
    ],
    "setupFiles": [
      "react-app-polyfill/jsdom"
    ],
    "setupFilesAfterEnv": [
      "<rootDir>/src/setupTests.js"
    ],
    "testMatch": [
      "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
      "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    "testEnvironment": "jsdom",
    "testRunner": "/Users/cherry/Code/kkb/react/learn-one/learn/node_modules/jest-circus/runner.js",
    "transform": {
      "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
      "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ],
    "modulePaths": [],
    "moduleNameMapper": {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": [
      "web.js",
      "js",
      "web.ts",
      "ts",
      "web.tsx",
      "tsx",
      "json",
      "web.jsx",
      "jsx",
      "node"
    ],
    "watchPlugins": [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname"
    ],
    "resetMocks": true
  },
  "babel": {
    "presets": [
      "react-app"
    ]
  },
  "devDependencies": {
    "@babel/core": "^7.12.3",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "resolve": "^1.18.1",
    "semver": "^7.3.2"
  }
}

```

- App.js

```JS
import React, { Component } from 'react'
import {Button} from 'antd'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
) }
}
export default App

```

4. 使用 less

- 安装

  ```JS
  yarn add less less-loader
  ```

- 自定义主题

> 按照[配置主题](https://ant.design/docs/react/customize-theme-cn)的要求，自定义主题需要用到 less 变量覆盖功能。我们可以引入 customize-cra 中提供的 less 相关的函数 addLessLoader 来帮助加载 less 样式，同时修改 config-overrides.js 文件，如下：

```JS
// 根目录创建overrides.js 文件，修改默认配置
const { override, fixBabelImports, addLessLoader } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    // antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "red",
      "@border-color-base": "green",
      "link-color": "orange",
    },
  })
);
```

> 修改后重启 yarn start/npm run start ，如果看到一个红色的按钮就说明配置成功了。
