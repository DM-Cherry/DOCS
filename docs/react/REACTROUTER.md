## react-router

[react-router](https://reactrouter.com/web/guides/quick-start)
[react-router 中文文档](https://react-guide.github.io/react-router-cn/index.html)

> react-router 包含 3 个库，react-router、react-router-dom 和 react-router-native。react-router 提供最基本的路由功能，实际使用的时候我们不会直接安装 react-router，而是根据应用运行的环境选择安装 react-router-dom（在浏览器中使用）或 react-router-native（在 rn 中使用）。react-router-dom 和 react-router-native 都依赖 react-router。所以在安装时，react-router 也会自动安装，创建 web 应用。

- 安装

```js
npm install --save react-router-dom
```

- 使用

react-router 中奉行一切皆组件的思想

- 实现路由跳转

1. 创建 RouterPage.js

```js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>

          {/* 添加Switch表示仅匹配一个 */}
          <Switch>
            {/* 根路由要添加exact，实现精确匹配 */}
            <Route
              path="/"
              exact
              component={HomePage}
              childer={() => {
                <div>childer</div>;
              }}
              render={() => {
                <div>render</div>;
              }}
            ></Route>
            <Route path="/user" component={UserPage}></Route>
            <Route component={EmptyPage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    );
  }
}

class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}

class EmptyPage extends Component {
  render() {
    return (
      <div>
        <h3>EmptyPage-404</h3>
      </div>
    );
  }
}
```

2. Route 渲染内容的三种方式

优先级： children > component > render
这三种互斥，只能选择一种

- children：func

  > 不管 localtion 是否匹配，都需要渲染一些内容，这时候可以使用 children，除了不管 localtion 是否匹配都会被渲染外，工作方法和 render 一样。

- render：func

  > 当你用 render 的时候，你调用的只是一个函数。只在 location 匹配的时候渲染。

- component：component
  > 只有在 location 匹配的时候渲染
