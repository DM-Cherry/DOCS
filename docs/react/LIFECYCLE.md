## 生命周期

[组件的生命周期](https://zh-hans.reactjs.org/docs/react-component.html#the-component-lifecycle)

[生命周期的图谱](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

1. 生命周期方法

   用于在组件不同阶段执行自定义功能。在组件被创建并插入到 DOM 时（即挂载中阶段（mounting）），组件更新时，组件取消挂载或从 DOM 中删除时，都有可以使用的生命周期方法。

2. React V16.3 之前的生命周期 LifeCyclePage.js

```js
import React, { Component } from "react";
import PropTypes from "prop-types";
export default class LifeCyclePage extends Component {
  static defaultProps = {
    // msg: "omg",
  };
  static propTypes = {
    // msg: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { count } = nextState;
    console.log("shouldComponentUpdate", nextState, this.state);
    return count !== 3;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("render", this.props);
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>改变count</button>
        {/* {count % 2 && <Child count={count} />} */}
        <Child count={count} />
      </div>
    );
  }
}

class Child extends Component {
  // 初次渲染的时候不会执行，只有在已挂载的组件接收新的props的时候，才会执行
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("child render");
    const { count } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    );
  }
}
```

3. V17 生命周期

- 可能会被废除的三个生命周期函数用 getDerivedStateFormProps 替代，目前使用的话需要加上`UNSAFE_`:

  - componentWillMount
  - componentWillReceiveProps
  - componentWillUpdate

如果不想手动给将要废弃的生命周期添加`UNSAFE_`前缀，可以用下面的命令:

```js
npx react-codemod rename-unsafe-lifecycles <path>
```

- 引入两个新的生命周期函数:

  - getDerivedStateFromProps

  ```js
  	static getDerivedStateFromProps(props,state)
  ```

  > getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它会返回一个对象来更新 state，如果返回 null 则不更新任何内容。
  > 注意:不管原因是什么，都会在每次渲染前触发此方法。这与`UNSAFE_componentWillReceiveProps`形成对比，后者仅在父组件重新渲染时触发，而不是内部调用 setState 时。

  - getSnapshotBeforeUpdate

  ```js
  	static getSnapshotBeforeUpdate(prevProps,prevState)
  ```

  > getSnapshotBeforeUpdate 在 render 之后，在 componentDidUpdate 之前，在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate(prevProps,prevState,snapshot)。

- React V16.3 之后的生命周期 LifeCyclePage.js

```js
import React, { Component } from "react";
import PropTypes from "prop-types";
export default class LifeCyclePage extends Component {
  static defaultProps = {
    // msg: "omg",
  };
  static propTypes = {
    // msg: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    const { count } = state;
    return count > 5 ? { count: 0 } : null;
  }
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { count } = nextState;
    console.log("shouldComponentUpdate", nextState, this.state);
    return count !== 3;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return {
      msg: "我是getSnapshotBeforeUpdate",
    };
  }
  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("render", this.props);
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>改变count</button>
        {/* {count % 2 && <Child count={count} />} */}
        <Child count={count} />
      </div>
    );
  }
}

class Child extends Component {
  // 初次渲染的时候不会执行，只有在已挂载的组件接收新的props的时候，才会执行
  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps", nextProps);
  // }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("child render");
    const { count } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    );
  }
}
```
