## 认识 Hook

[Hook 简介](https://reactjs.org/docs/hooks-intro.html)

[视频介绍](https://www.youtube.com/watch?v=V-QO-KO90iQ&t=3060s)

1. 知识要点

- 认识 Hook

  > Hook 是什么？Hook 是一个特殊的函数。它可以让你”钩入“React 的特性。例如，useState 是允许你在 React 函数组件中添加 state 的 Hook。

  > 什么时候会用到？如果你在编写组件并意识到需要向其添加一些 state，以前的做法是必须将其转化为 class。现在你可以在现有的函数组件中使用 Hook。

- 基础用法（累加器）

```JS
import React, { useState, useEffect} from react;

export default function HookPage(props) {
	// 定义一个叫count的state变量，初始值为0
	const [count, setCount] = useState(0)

	return (
		<div>
			<h3>HookPage</h3>
			<div>{count}</div>
			<button onClick={() => setCount(count + 1)}>add</button>
		</div>
	)

}
```

- 使用 Effect Hook

  > Effect Hook 可以让你在函数组件中执行副作用操作。

  > 数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用。

  - 基础用法（修改 title）

  ```JS
  import React, { useState, useEffect} from react;

  export default function HookPage(props) {
  	// 定义一个叫count的state变量，初始值为0
  	const [count, setCount] = useState(0)
  	// 与componentDidMount、componentDidUpdate相似
  	useEffect(() => {
  		console.log('effect')
  		// 更新title
  		document.title = `点击了${count}次`
  	})
  	return (
  		<div>
  			<h3>HookPage</h3>
  			<div>{count}</div>
  			<button onClick={() => setCount(count + 1)}>add</button>
  		</div>
  	)

  }
  ```

  > 在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。

  > 使用 useEffect 完成副作用操作。赋值给 useEffect 的函数会在组件渲染到屏幕之后执行。你可以把 effect 看作从 React 的纯函数式世界通往命令式世界的逃生通道。

  > 默认情况下，effect 将在每轮渲染结束后执行，但你可以选择让它在[某些值改变](https://zh-hans.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect)的时候才执行

- effect 的条件执行

  > 默认情况下，effect 会在每轮组件渲染完成后执行。这样的话，一旦 effect 的依赖发生变化，它就会被重新渲染

  > 有时候我们不需要在每次组件更新时都创建新的订阅，而是仅需要在 source props 改变时重新创建。

  > 要实现这一点，可以给 useEffect 传递第二个参数，它是 effect 所依赖的值数组。

  ```JS
  import React, { useState, useEffect} from react;

  export default function HookPage(props) {
  	// 定义一个叫count的state变量，初始值为0
  	const [count, setCount] = useState(0)
  	const [date, setDate] = useState(new Date())
  	// 与componentDidMount、componentDidUpdate相似
  	useEffect(() => {
  		console.log('effect')
  		// 更新title
  		document.title = `点击了${count}次`
  	},count)

  	useEffect(() => {
  		setInterval(() => {
  			setDate(new Date())
  		},1000)
  	},[])
  	return (
  		<div>
  			<h3>HookPage</h3>
  			<div>{count}</div>
  			<button onClick={() => setCount(count + 1)}>add</button>
  			<p>{date.toLocaleTimeString()}</p>
  		</div>
  	)
  }
  ```

  > 此时，只有当 useEffect 第二个参数数组里的数值改变后才会重新创建订阅。

- 清除 effect

  > 通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，useEffect 函数需返回一个清除函数，以防止内存泄漏，清除函数会在组件卸载前执行。

  ```JS
  useEffect(() => {
  	const timer = setInterval(() => {
  		setDate(new Date());
  	},1000)
  	return () => clearInterval(timer);
  },[]);
  ```

2. 自定义 Hook

[自定义](https://zh-hans.reactjs.org/docs/hooks-custom.html)

[Hook 规则](https://zh-hans.reactjs.org/docs/hooks-rules.html)

- 有时候我们会想在组件之间重用一些状态逻辑。目前为止，有两种解决办法：[高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html)和[render props](https://zh-hans.reactjs.org/docs/render-props.html)。自定义 Hook 可以让你在不增加组件的情况下达到同样的目的。

- 自定义 Hook 是一个函数，其名称以"use"开头，函数内部可以调用其他的 Hook。

```JS
import React, { useState, useEffect} from react;

export default function CustomHookPage(props) {
	// 定义一个叫count的state变量，初始值为0
	const [count, setCount] = useState(0)

	// 和didMount、didUpdate相似
	useEffect(() => {
		console.log('count effect')
		document.title = `点击了${count}次`
	},[count])
	return (
		<div>
			<h3>CustomHookPage</h3>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>加1</button>
			<p>{useClock().toLocaleTimeString()}</p>
		</div>
	)
}

function useClock() {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {setDate(new Date())}, 1000)
		return () => clearInterval(timer)
	},[])

	return date
}
```

- Hook 的使用规则
  Hook 就是 JavaScript 函数，但是有两个额外的规则：
  - 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
  - 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook--自定义 Hook 中）

3. Hook API-useMemo

- 把“创建”函数和依赖项数组作为参数传入`useMemo`，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。

```JS
import React, { useState, useMemo } from "react";

export default function UseMemoPage(props) {
  const [count, setCount] = useState(0);

  // 当前计算只和count有关系
  const expensive = useMemo(() => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
    // 只有count改变时，当前函数才会重新执行
  }, [count]);

  const [value, setValue] = useState("");
  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>count: {count}</p>
      <p>expensive: {expensive}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
    </div>
  );
}

```

4. Hook API-useCallback

- 把内联回调函数及依赖项数组作为参数传入`useCallback`，它将返回该回调函数的 memoized 的版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如`shouldComponentUpdate`）的子组件时，它将非常有用。

```JS
import React, { useState, PureComponent, useCallback } from "react";

export default function UseMemoPage(props) {
  const [count, setCount] = useState(0);

  const addClick = useCallback(() => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  const [value, setValue] = useState("");
  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Child addClick={addClick} />
    </div>
  );
}

class Child extends PureComponent {
  render() {
    console.log("child render");
    const addClick = this.props;
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    );
  }
}

```

- useCallback(fn, deps)相当于 useMemo(() => fn, deps)
