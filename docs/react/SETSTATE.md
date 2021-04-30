## 正确使用

1. 参数：setState(partialState,callback)

- partialState： object | function
  用于产生与当前 state 合并的子集
- callback：function
  state 更新之后被调用

2. 需要了解的三件事情

- 不要直接修改 State
  例如：此代码不会重新渲染组件

```javascript
// 错误示范
this.state.comment = "Hello";
```

应该使用`setState`

```javascript
this.setState({ comment: "Hello" });
```

- State 的更新`可能`是异步的
  出于性能考虑，React 可能会把多个`setState()`合并成一个调用

  例如：counter+1

  ```JavaScript
  import React, { Component } from 'react';
  export default class SetState extends Component {
  	constructor(props) {
  		super(props)
  		this.state = {
  			counter: 0
  		}
  	}
  	changeValue = (v) => {
  		this.setState({ counter: this.state.counter + v})
  		console.log('counter', this.state.counter)
  	}
  	setCounter = () => {
  		this.changeValue(1)
  	}
  	render() {
  		return (
  			<div>
  				<h3>SetState</h3>
  				<button onClick={this.setCounter}>{this.state.counter}</button>
  			</div>
  		)
  	}
  }
  ```

  获取最新的状态值：

  1.  在回调中获取状态值

  ```javascript
  changeValue = (v) => {
    this.setState(
      {
        counter: this.state.counter + v,
      },
      () => {
        console.log("counter", this.state.counter);
      }
    );
  };
  ```

  2.  在生命周期中调用

  ```javascript
   componentDidMount() {this.changeValue(1);}
  ```

  > 注：setState 在合成事件和生命周期中是异步的，异步是指批量更新，达到了优化性能的目的

  3. 使用定时器

  ```javascript
  setTimeout(() => {
    this.setCounter();
  }, 0);
  ```

  4.  原生事件中修改状态

  ```javascript
  <button id="test">{this.state.counter}</button>
  componentDidMount() {
  	document.getElementById('test').addEventListener('click', this.changValue, false)
  }
  ```

  > 注：setState 在 setTimeout 和原生事件中是同步的

- State 的更新会被合并

```javascript
changeValue = (v) => {
  this.setState({
    counter: this.state.counter + v,
  });
};

setCounter = () => {
  this.changeValue(1);
  this.changeValue(2);
};
```

链式更新 state：

```javascript
changeValue = (v) => {
  this.setState((state) => {
    counter: this.state.counter + v;
  });
};

setCounter = () => {
  this.changeValue(1);
  this.changeValue(2);
};
```
