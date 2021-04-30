## PureComponent

[PureComponent](https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent)

1. 实现性能优化，PureComponentPage.js

```js
import React, { Component, PureComponent } from "react";
// export default class PureComponentPage extends Component {
// PureComponent 内置shouldComponentUpdate方法
export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  setCount = () => {
    this.setState({
      count: 100,
    });
  };
  // shouldComponentUpdate 默认行为是 state 每次发生变化组件都会重新渲染
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return nextState.count !== this.state.count;
  // };
  // 赋予React组件相同的props和state，render()会渲染相同的内容
  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.setCount}>{count}</button>
      </div>
    );
  }
}
```

2. PureComponent 优缺点

- 缺点： 必须要用 class 形式，而且要注意是浅比较
- 与 Component 对比
  > React.PureComponent 和 React.Component 很相似。两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，而 Component 很相似。两者的区别在于 React.PureComponent 中以浅层对比 props 和 state 的方式实现了该函数。
- 浅比较

  > React.PureComponent 中的`shouldComponentUpdate()`仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的对比结果。仅在你的 props 和 state 较为简单时，才使用`React.PureComponent`，或者在深层数据结构发生变化时，调用`forceUpdate`来确保组件被正确的更新。也可以考虑用[immutable](https://immutable-js.github.io/immutable-js/)加速嵌套数据的比较。

  > 此外，`React.PureComponent`和`shouldComponentUpdate()`将跳过所有子组件树的 prop 更新。因此，请确保所有子组件也都是”纯“组件。
