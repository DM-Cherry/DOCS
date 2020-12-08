# 模版介绍

::: tip 说明
前端项目构建模板，为前端项目搭建提供统一的规范。
:::

### 项目安装

1. 下载

```
git clone ******
```

2. 进入到项目目录

```
cd **
```

### 项目配置

项目所有相关配置放在 package.json 文件中。

- 具体内容

```javascript
{
  "name": "template",
  "version": "1.0.0",
  "description": "a simple templet.",
  "main": "index.js",
  "private": true,
  "license": "MIT",
  "author": "cherry",
  "keywords": [
    "vue"
  ],
  "devDependencies": {
    "@babel/core": "^7.5.5",
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "@babel/plugin-proposal-decorators": "^7.4.4",
    "@babel/plugin-proposal-json-strings": "^7.2.0",
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.4.4",
    "@babel/plugin-proposal-optional-chaining": "^7.2.0",
    "@babel/plugin-syntax-dynamic-import": "^7.2.0",
    "@babel/plugin-syntax-import-meta": "^7.2.0",
    "@babel/plugin-transform-runtime": "^7.7.6",
    "@babel/preset-env": "^7.5.5",
    "@babel/runtime-corejs2": "^7.7.7",
    "@babel/runtime-corejs3": "^7.7.7",
    "@commitlint/cli": "8.3.5",
    "@commitlint/config-conventional": "8.3.4",
    "@vue/cli-plugin-babel": "~4.3.0",
    "@vue/cli-plugin-eslint": "^4.5.4",
    "@vue/cli-service": "~4.3.0",
    "@vue/eslint-config-airbnb": "^5.1.0",
    "@vue/eslint-config-prettier": "^6.0.0",
    "autoprefixer": "^9.6.1",
    "babel-eslint": "^10.0.2",
    "babel-loader": "^8.0.6",
    "babel-plugin-import": "^1.11.0",
    "babel-plugin-lodash": "^3.3.4",
    "clean-webpack-plugin": "^3.0.0",
    "compression-webpack-plugin": "~2.0",
    "copy-webpack-plugin": "^5.0.3",
    "cross-env": "^5.2.0",
    "css-loader": "~0.28",
    "cucumber": "^6.0.5",
    "eslint": "^6.7.1",
    "eslint-config-airbnb-base": "^14.2.0",
    "eslint-config-prettier": "^6.7.0",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-loader": "^3.0.2",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-prettier": "^3.1.1",
    "eslint-plugin-vue": "^6.0.1",
    "eventsource-polyfill": "0.9.6",
    "file-loader": "^4.0.0",
    "friendly-errors-webpack-plugin": "^1.7.0",
    "html-webpack-plugin": "^3.2.0",
    "husky": "^4.3.0",
    "less": "^3.9.0",
    "less-loader": "^4.1.0",
    "lint-staged": "^10.3.0",
    "mini-css-extract-plugin": "^0.8.0",
    "node-sass": "^4.12.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "postcss-comment": "^2.0.0",
    "postcss-loader": "^3.0.0",
    "postcss-preset-env": "^6.7.0",
    "prettier-eslint": "^9.0.2",
    "prettier-stylelint": "^0.4.2",
    "sass-loader": "~7.1",
    "selenium-webdriver": "^4.0.0-alpha.7",
    "skeleton-loader": "^2.0.0",
    "standard-version": "^7.1.0",
    "stylelint": "^13.7.0",
    "stylelint-config-prettier": "^8.0.2",
    "stylelint-config-standard": "^20.0.0",
    "stylelint-declaration-block-no-ignored-properties": "^2.3.0",
    "stylelint-order": "^4.1.0",
    "stylelint-scss": "^3.18.0",
    "stylelint-webpack-plugin": "^1.2.3",
    "uglifyjs-webpack-plugin": "~1.2",
    "url-loader": "0.6.2",
    "vue-loader": "~15.6",
    "vue-style-loader": "~4.1",
    "vue-template-compiler": "~2.6",
    "webpack": "^4.36.1",
    "webpack-bundle-analyzer": "^3.3.2",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.11.0",
    "webpack-hot-middleware": "^2.25.0",
    "webpack-merge": "^4.2.1"
  },
  "dependencies": {
    "@babel/polyfill": "~7.2",
    "@riophae/vue-treeselect": "^0.4.0",
    "@toast-ui/vue-editor": "^1.1.1",
    "add": "^2.0.6",
    "animate.css": "^3.6.1",
    "area-data": "^5.0.6",
    "axios": "^0.18.0",
    "babel-polyfill": "^6.26.0",
    "bootstrap": "^4.5.2",
    "bootstrap-vue": "^2.16.0",
    "choices.js": "^8.0.0",
    "codemirror": "^5.42.2",
    "cropperjs": "^1.3.2",
    "dayjs": "^1.8.15",
    "diff-match-patch": "^1.0.0",
    "dom-autoscroller": "^2.3.4",
    "dragula": "^3.7.2",
    "echarts": "^4.2.1",
    "echarts-liquidfill": "^2.0.5",
    "file-saver": "^2.0.2",
    "handsontable": "^8.0.0",
    "highlight.js": "^9.12.0",
    "html2canvas": "^1.0.0-rc.7",
    "jsbarcode": "^3.11.0",
    "jsqr": "^1.2.0",
    "jwt-decode": "^2.2.0",
    "leader-line": "^1.0.5",
    "localforage": "^1.6.0",
    "localforage-getitems": "^1.4.2",
    "perfect-scrollbar": "^1.3.0",
    "prettier": "^1.19.1",
    "printd": "^1.4.0",
    "promise.allsettled": "^1.0.2",
    "qrcodejs2": "^0.0.2",
    "qs": "^6.5.1",
    "sortablejs": "^1.9.0",
    "uppy": "^0.24.3",
    "url-search-params-polyfill": "^5.0.0",
    "uuid": "^3.3.2",
    "vee-validate": "^2.2.15",
    "view-design": "^4.3.2",
    "viewerjs": "^1.3.7",
    "vue": "^2.6.10",
    "vue-clamp": "^0.3.0",
    "vue-clickaway": "^2.2.2",
    "vue-echarts": "^4.0.3",
    "vue-froala-wysiwyg": "^3.2.1-1",
    "vue-howler": "^0.7.0",
    "vue-router": "^3.0.1",
    "vue-silentbox": "^0.1.1",
    "vue-sweetalert2": "^1.2.4",
    "vue-the-mask": "^0.11.1",
    "vue-video-player": "^5.0.2",
    "vuex": "^3.0.1",
    "websocket": "^1.0.31"
  },
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --progress",
    "build": "cross-env NODE_ENV=production webpack",
    "lint": "eslint --ext .js,.vue src",
    "lintcss:fix": "stylelint src/**/*.{scss,vue}",
    "lint:fix": "eslint -c .eslintrc.js src --ext .js,.vue --cache --fix",
    "commitmsg": "commitlint -e $GIT_PARAMS"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "src/**/*.{js,vue}": [
      "npm run lint:fix",
      "git add"
    ],
    "src/**/*.{vue,scss}": [
      "npm run lintcss:fix",
      "git add"
    ]
  },
  "repository": {
    "type": "git",
    "url": "git+https://gitee.com/wuxiaomengwalm/template.git"
  },
  
  "engines": {
    "node": ">= 8.9.4",
    "npm": ">= 5.6.0"
  }
}

```
- 字段说明

  - 基础信息

  ```javascript
  // 项目名称
  "name": "template", 
  // 项目版本号
  "version": "1.0.0", 
  // 项目说明
  "description": "a simple templet.",
  // 入口文件 
  "main": "index.js",
  // 是否私人项目 
  "private": true,
  // 包的作者 
  "author": "cherry", 
  // 默认是 [MIT],项目许可证，让使用者知道是如何被允许使用此项目。
  "license": "MIT", 
  // 关键字
  "keywords": [ 
    "vue"
  ],
  // 包代码的repo信息，包括type和URL，type可以是git或者svn，url则是包的repo地址。
  "repository": { 
    "type": "git",
    "url": "git+https://gitee.com/wuxiaomengwalm/template.git"
  },
  // 声明项目需要的node或npm版本范围
  "engines": {
    "node": ">= 8.9.4",
    "npm": ">= 5.6.0"
  }
  // 生产环境依赖包列表
  "dependencies": {
    ...
  }
  // 开发环境依赖包列表
  "devDependencies": {
    ...
  }
  ```
  - scripts 项目的环境，有运行环境，有测试环境等

  ```javascript
   {
     // 运行项目
    "dev": "cross-env NODE_ENV=development webpack-dev-server --progress",
    // 打包项目
    "build": "cross-env NODE_ENV=production webpack",
    // 批量检测代码
    "lint": "eslint --ext .js,.vue src",
    // 检测css相关代码并修复
    "lintcss:fix": "stylelint src/**/*.{scss,vue}",
    // 检测js相关代码并修复
    "lint:fix": "eslint -c .eslintrc.js src --ext .js,.vue --cache --fix",
    // 检测commit messages
    "commitmsg": "commitlint -e $GIT_PARAMS"
  }
  ```
  - 代码提交检测`husky（没错，是哈士奇的英文）`和`lint-staged（文件过滤器）`

  **husky继承了Git下所有的钩子，在触发钩子的时候，husky可以阻止不合法的commit,push等等**

  ::: tip 注意
  注意使用husky之前，必须先将代码放到git 仓库中，否则本地没有.git文件，就没有地方去继承钩子了。
  :::
  

  ```javascript

    "husky": {
      "hooks": {
        // git commit的时候会触发commlint
        "pre-commit": "lint-staged",
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
      }
    },
    // 运行lint-staged命令，执行eslint指令（只检测暂存区的文件）
    "lint-staged": {
      "src/**/*.{js,vue}": [
        "npm run lint:fix",
        "git add"
      ],
      "src/**/*.{vue,scss}": [
        "npm run lintcss:fix",
        "git add"
      ]
    },
  ```
  **当文件变化，我们`git commit`它们，`pre-commit`钩子会启动，执行`lint-staged`命令,对本次被commited中的所有.js、.vue等文件，执行两个指令，前者的的目的是格式化，后者是对格式化之后的代码重新提交。**

### 相关文档

- 代码格式化
  - [Eslint](https://eslint.bootcss.com/) 可组装的JavaScript和JSX检查工具即代码检测工具，保证代码的一致性和避免错误

  - [Prettier](https://prettier.io/) 代码格式化工具,能够使输出的代码保持风格一致，更好的理解Prettier请移步[这里](https://zhuanlan.zhihu.com/p/81764012?from_voters_page=true)，不过最好还是捋一遍官方文档，毕竟这才是[原配](https://prettier.io/)

  - [Postcss](https://www.postcss.com.cn/) 是一个用 JavaScript 工具和插件转换 CSS 代码的工具 
    -  [Autoprefixer](https://github.com/postcss/autoprefixer) 插件：自动获取浏览器的流行度和能够支持的属性，并根据这些数据帮你自动为 CSS 规则添加前缀
    - [Stylelint](https://stylelint.io/)插件：stylelint 是一个现代化 CSS 代码检查工具。它支持最新的 CSS 语法，也包括类似 CSS 的语法，例如 SCSS。
    - ...

- 代码规范
  - [Airbnb](https://github.com/airbnb) 前端编码规范，用更合理的方式编写代码

- 提交规范
  - [Husky](https://www.npmjs.com/package/husky) Git hooks 工具，可以防止错误的 git commit ， git push，中文文档[参见](https://www.breword.com/typicode-husky)
  - [lint-staged](https://www.npmjs.com/package/lint-staged) 前端文件过滤的工具，一个仅仅过滤出Git代码暂存区文件(被committed的文件)的工具



