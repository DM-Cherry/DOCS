## Redux

[Redux 中文文档](https://www.redux.org.cn/)

> Redux 是负责组织 state 的工具，但你也要考虑它是否适合你的情况。

1. 什么时候需要用到 Redux
   在下面的场景中，引入 Redux 比较明智：

- 有大量的、随时间变化的数据；
- state 需要有一个单一可靠的数据来源；
- 把所有的 state 放在最顶层组件中已经无法满足需求了
- 某个组件的状态需要共享

2. Redux 的基本使用

- 安装

```js
npm install redux --save
```

- 举例（累加器）

1. 需要一个 store 来存储数据，创建 store，src/store/ReduxStore.js

2. store 里的 reducer 初始化 state 并定义 state 修改规则

```js
import { createStore } from "redux";
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
```

3. 通过 dispatch 一个 action 来提交对数据的更改，创建 ReduxPage

4. action 提交到 reducer 函数里，根据传入的 action 的 type，返回新的 state

```js
import React, { Component } from 'react'
import store from '../store/ReduxStore'

export default class ReduxPage extends Components {
   componentDidMount() {
      store.subscribe(() => {
         console.log('state发生变化啦')
         this.forceUpdate()
      })

   }
   add = () => {
      store.dispatch({type: 'ADD'})
   }
   minus = () => {
      store.dispatch({type: 'MINUS'})
   }
   render() {
      return (
         <div>ReduxPage</div>
         <p>{store.getState()}</p>
         <button onClick={this.add}>add</button>
         <button onClick={this.minus}>minus</button>
      )
   }
}
```

## react-redux

[react-redux 文档](https://www.redux.org.cn/docs/react-redux/)

2. react-redux 的基本使用

- 安装

```js
npm install react-redux --save
```

- 使用

react-redux 提供了两个 api

1. Provider 为后代组件提供 store
2. connect 为组件提供数据和变更方法

- 举例（累加器）

1. 全局提供 store，index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector("#root")
);
```

2. 获取状态数据，ReactReduxPage.js

```js
import React, { Component } from "react";
import { connect } from "react-redux";

class ReactReduxPage extends Component {
  render() {
    const { num, add, minus } = this.props;
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{num}</p>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
      </div>
    );
  }
}

// mapStateToProps 把state映射到props
const mapStateToProps = (state) => {
  return {
    num: state,
  };
};

// mapDispatchToProps 把dispatch映射到props
const mapDispatchToProps = {
  add: () => {
    return { type: "ADD" };
  },
  minus: () => {
    return { type: "MINUS" };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage);
```
