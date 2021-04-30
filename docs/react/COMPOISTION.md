## 组件复合

1. 了解组合和继承
   [组合和继承](https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html)

   > 复合组件给予你足够的敏捷去定义自定义组件的外观和行为，这种方式更加明确和安全。如果组件间有公用的非 UI 逻辑，将它们抽取为 JS 模块导入（import）而不是继承（extend）它。

2. 不具名

- Layout.js

```javascript
import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

export default class Layout extends Component {
	componentDidMount() {
		const {title = '商城'} = this.props;
		document.title = title;
	}
	render(
		const {children,showTopBar,showBottomBar} = this.props
		<div>
			{showTopBar && <TopBar />}
			{children.content}
			{children.txt}
			<button onClick={children.btnClick}>点击</button>
			{showBottomBar && <BottomBar />}
		</div>
	)
}
```

- HomePage.js

```js
import React, { Component } from "react";
import Layout from "./Layout";

export default class HomePage extends Component {
  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title={"商城首页"}>
        <div>
          <h3>HomePage</h3>
        </div>
      </Layout>
    );
  }
}
```

3. 具名

传个对象进去

- HomePage.js

```javascript
import React, { Component } from "react";
import Layout from "./Layout";

export default class HomePage extends Component {
  render() {
    return {
      /* <div>
          <h3>HomePage</h3>
				</div> */

			{{
				content: (
					<div>
						<h3>HomePage</h3>
					</div>
				),
				txt: '这是一个文本',
				btnClick: () => {
					console.log('btnClick')
				}
			}}
    };
  }
}
```

4. 实现一个复合组件，如 antD 的 Card
