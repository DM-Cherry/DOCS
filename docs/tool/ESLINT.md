# 相关配置

## 安装

- 全局安装

  ```javascript
  npm i -g eslint
  ```

- 项目安装（推荐）

  ```javascript
  npm i -D eslint
  ```

## 初始化

  安装完成后，接下来新建一个配置文件`.eslintrc.js`，或者使用如下命令来自动生成，命令如下
 
  ```javascript
  eslint --init
  ```

## 配置

- 配置文件.eslintrc.js

  ```javascript
  /** .eslintrc.js */
  module.exports = {
   "extends": "airbnb"
  };
  ```

  extends 中包含了 ESLint 的共享机制,实际上这里的airbnb 是[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)的简写。从源码中可以看到[如下内容](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/index.js)：

  ```javascript
  module.exports = {
  	extends: [
  	  'eslint-config-airbnb-base',
  	  'eslint-config-airbnb-base/rules/strict',
  	  './rules/react',
  	  './rules/react-a11y'
  	].map(require.resolve),
  	rules: {}
  }
  ```

  `.eslintrc.js`配置中的`"extends": "airbnb"`相当于告诉ESLint，把eslint-config-airbnb 的规则做为拓展引用到我们自己的项目中来。

  ::: tip 拓展
  ESLint源码中是怎么解析配置文件中的`extends`关键字的呢？参考下述链接指向的源码：[config-file.js - applyExtends](https://github.com/eslint/eslint/blob/caeb223c4f7b0b6fe35e5348ae0df4c6446b5bed/lib/config/config-file.js#L399)
  :::

  `extends`可以是一个字符串，也可以是一个数组。大致分以下几种：
  - 以`eslint:`开头的字符串（如：`eslint:recommended`），这样写意味着应用ESLint的推荐配置，具体规则请移步[eslint-recommended.js](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
  - 以`plugin:`开头的字符串（如：`plugin:react/recommended`），这样写意味着应用第三方插件，[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)的所有推荐规则[详见](https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js#L116)
  - 以`eslint-config-`开头的包，这其实是第三方规则的集合，由于eslint中添加了[额外的处理](https://github.com/eslint/eslint/blob/258b6541f61dc3a9ae64e200680766a11c3dd316/lib/config/config-file.js#L458)，我们也可以省略`eslint-config`，如`eslint-config-airbnb-base`也可以写作`airbnb-base`
  - `本地路径`，指向本地的`ESLint`配置，如`./rules/react`

  ::: tip 注意
  extends中的每一项内容最终都指向了一个和ESLint本身配置规则相同的对象
  :::

- 相关配置模块
  
  我们可以在[npm](https://www.npmjs.com/)中搜索`eslint-config-`可以发现有大量的ESLint拓展配置模块，我们可以直接通过这些模块在ESLint中使用，当然也可以把自己的配置封装成一个模块，供以后复用，修改。

 <img :src="$withBase('/images/module.png')"  alt="mixureSecure">

  我们现在对`extends`有一个大致的了解，那么ESLint的工作机制是怎么样的？我们现在来拆分一下上面[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)的`extends`中用到[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)，其主要内容如下：

  ```javascript
  module.exports = {
  	extends: [
  	  './rules/best-practices',
  	  './rules/errors',
  	  './rules/node',
  	  './rules/style',
  	  './rules/variables',
  	  './rules/es6',
  	  './rules/imports',
  	].map(require.resolve),
  	parserOptions: {
  	  ecmaVersion: 2018,
  	  sourceType: 'module',
  	},
  	rules: {
  	  strict: 'error',
  	}
  }
  ```  
  
  除了`extends`，配置文件中出现了`parserOptions`和`rules`。通过`parserOptions`我们可以告知ESLint我们想要支持什么版本的JS语法（ecmaVersion），源码类型`sourceType`，以及是否启用其他一些语法相关的特性（如`jsx`），想了解更多关于`parserOptions`请点击[这里](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)

  下面我们再来看一下`extends`，这里的内容和官方文档`rules`的类别一一对应（除了`./rules/imports`），下面我们来看一下[./rules/best-practices](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js)的内容，这有利于帮助我们更好的理解rule。

  > ./rules/best-practices 是ESLint的一个配置文件，但是比较纯粹，只有`rules`一项。

  ```javascript
  module.exports = {
  	rules: {
  	  // enforces getter/setter pairs in objects
      'accessor-pairs': 'off',

      // enforces return statements in callbacks of array's methods
      // https://eslint.org/docs/rules/array-callback-return
      'array-callback-return': ['error', { allowImplicit: true }],

      // treat var statements as if they were block scoped
      'block-scoped-var': 'error',

      // specify the maximum cyclomatic complexity allowed in a program
      complexity: ['off', 11],

      // enforce that class methods use "this"
      // https://eslint.org/docs/rules/class-methods-use-this
      'class-methods-use-this': ['error', {
        exceptMethods: [],
       }],

       // require return statements to either always or never specify values
       'consistent-return': 'error',
       ...
  	}
  }
  ```


- 自定义配置
  - `root` 
  默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。

  ```javascript
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true 
  ```

  - `env`环境变量

  ```javascript
  env: {
    // 启用除了modules以外的所有ECMAScript6特性（该选项会自动设置ecmaVersion解析器选项为6）
    es6: true, 
    // Node.js全局变量和Node.js作用域
    node: true,
    // 浏览器环境中的全局变量
    browser: true,
    ...
  }
  ```

  一个环境定义了一组预定义的全局变量。这些环境并不是互斥的，所以可以同时定义多个[详细配置可见](https://eslint.bootcss.com/docs/user-guide/configuring)
 
  - `globals`全局变量

  ```javascript
  globals: {
    uni: true,
    wx: true,
    App: true,
    ...
  }
  ```
  
  当访问当前源文件内为定义的变量时，[no-undef](https://eslint.bootcss.com/docs/rules/no-undef)规则将发出警告。如果想在一个源文件里使用全局变量，推荐你在ESLint中定义这些全局变量，这样ESLint就不会发出警告了

- `plugins`第三方插件

  ```javascript
  plugins: ['vue'],
  ```
 
  ESLint支持使用第三方插件。在使用插件前，必须使用npm安装它。在配置文件里配置插件时，可以使用`plugins`关键字来存放插件名字的列表。插件名称可以省略`eslint-plugin-`前缀

- `rules`规则

  ```javascript
  rules: {
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': 'off',
    // 禁用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 禁用 console
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 强制 generator 函数中 * 号周围有空格
    'generator-star-spacing': 0,
    'import/extensions': [
       'error',
       'ignorePackages',
       {
         js: 'never',
         vue: 'never',
       },
    ],
    // vuex 禁止对 function 的参数进行重新赋值
    'no-param-reassign': [
      'error',
      {
      	// 对参数的任何属性的修改，该规则都将发出警告
      	props: true, 
      	// 数组中有该参数的话，不会发出警告
      	ignorePropertyModificationsFor: [
      	  'state',
      	  'acc',
      	  'e',
      	  'ctx',
      	  'req',
      	  'request',
      	  'res',
      	  'response',
      	  '$scope',
      	]
      }
    ],
    // vuex
    'no-shadow': ['error', { allow: ['state'] }],
    // 禁止使用 var
    'no-var': 2,
    // 忽略属性连字
    'vue/attribute-hyphenation': 2, 
    // template在标签的右括号之前需要或不允许使用空格
    'vue/html-closing-bracket-spacing': 2,
    // 强制结束标签样式
    'vue/html-end-tags': 2,
    // 忽略html标签自闭合
    'vue/html-self-closing': [
      2,
      {
      	html: {
      	 void: 'always',
      	 normal: 'always',
      	 component: 'always',	
      	},
      	svg: 'always',
      	math: 'always',
      }
    ],
    // 每行最大属性
    'vue/max-attributes-per-line': 0, 
    'vue/no-template-shadow': 2,
    // 单行html元素内容在新的一行
    'vue/singleline-html-element-content-newline': 0,
    // 强制执行v-bind指令样式
    'vue/v-bind-style': 2,
    // 强制执行v-on指令样式
    'vue/v-on-style': 2,
    // 强制属性顺序
    'vue/attributes-order': 0,
    // 禁止在模板中使用this
    'vue/this-in-template': 2,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'consistent-return': 0,
    // 在多行元素的内容之前和之后需要换行
    'vue/multiline-html-element-content-newline': 0,
    // 不使用v-html
    'vue/no-v-html': 0, 
    // html右括号在新的一行
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    // 忽略html标签自闭合
    'vue/html-self-closing': 0,
    'prettier/prettier': [
      2,
      {
      	// 声明结尾使用分号（默认true）
      	semi: true,
      	// 是否使用尾逗号，三个可选之一'（none/es5/all）'
      	trailingComma: 'all',
      	// 字符串是否用单引号。默认 false 使用双引号
      	singleQuote: true,
      	// 一行的字符数，如果超过会进行换行。默认80
      	printWidth: 100,
      	// tab 使用 2 个空格
      	tabWidth: 2,
      	htmlWhitespaceSensitivity: 'ignore',
      	endOfLine: 'auto',
      	ignorePath: '.prettierignore',
      }
    ]
  }
  ```


- `Parser Options` 允许你指定你想要支持的 JavaScript 语言选项

  ```javascript
  parserOptions: {
  	// 表明使用该 npm 模块作为你的解析器
    parser: 'babel-eslint',
    // 指定你想要使用的 ECMAScript 版本
    ecmaVersion: 2019,
    // 指定源代码存在的位置
    sourceType: 'module',
  },
  ```
  默认情况下，ESLint 支持 ECMAScript 5 语法。你可以覆盖该设置，以启用对 ECMAScript 其它版本和 JSX 的支持。

- `settings` 自定义规则

  ```javascript
  settings: {
  	 // 解析alias别名@的路径可以通过配置webpack字段来解决
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': path.join(__dirname, 'src'),
            },
            extensions: ['.js', '.jsx', '.ts', '.vue'],
          },
        },
      },
    },
  },
  ```

  ESLint 支持在配置文件添加共享设置。你可以添加 settings 对象到配置文件，它将提供给每一个将被执行的规则。




















































































> [中文文档](https://eslint.bootcss.com/docs/user-guide/getting-started)

> [英文文档](https://eslint.org/docs/user-guide/getting-started)













