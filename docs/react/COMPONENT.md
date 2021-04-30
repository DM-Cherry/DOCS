## 组件

两种形式：`class`组件和`function`组件

1. class 组件

- 拥有状态和生命周期，继承于 Component，实现 render 方法。用 class 组件创建一个 Clock

```javascript
import React, { Component } from "react";
export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    // 使用state属性维护状态，在构造函数中初始化状态
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    // 组件挂载之后启动定时器每秒更新状态
    this.timer = setInterval(() => {
      // 使用setState方法更新状态
      this.setState({ date: new Date() });
    }, 1000);
  }
  componentWillUnMount() {
    // 组件卸载前停止定时器
    clearInterval(this.timer);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
```

2. function 组件

- 函数组件通常`无状态`，仅`关注内容展示`，返回渲染结果即可，（从 React16.8 开始引入了 hooks，函数组件也能够拥有状态）。用 function 组件创建一个 Clock

```javascript
import React, { useState, useEffect } from "react";

export function FunctionComponent(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // 相当于componentDidMount、componentDidUpdate、componentWillUnmount的集合
    const timer = setInterval(() => {
      setDate(new Date());
      return () => clearInterval(timer); // 组件卸载之前执行
    }, 1000);
  }, []);
  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
```
