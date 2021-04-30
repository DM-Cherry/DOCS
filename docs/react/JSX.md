## 基本使用 index.js

1. 表达式{}

```javascript
const name = "react study";

const jsx = <div>hello，{name}</div>;
```

2. 函数

```javascript
const user = {
  firstName: "Cherry",
  lastName: "Harvey",
};

function formatName(name) {
  return name.firstName + " " + name.lastName;
}

const jsx = <div>{formatName(user)}</div>;
```

3. 对象

```javascript
const greet = <div>good</div>;

const jsx = <div>{greet}</div>;
```

4. 条件语句

```javascript
const show = false;

const greet = <div>good</div>;

const jsx = (
  <div>
    {/* 条件语句 */}
    {show ? greet : "登录"}
    {show && greet}
  </div>
);
```

5. 数组

```javascript
const a = [1, 2, 3, 4, 5];

const jsx = (
  <div>
    {/* 数组 */}
    <ul>
      {/* diff的时候，首先比较type，然后是key，所以同级同类型元素，key值必须得唯一 */}
      {a.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);
```

6. 属性

```javascript
import logo from "./logo.svg";

const jsx = (
  <div>
    {/* 属性：静态值用双引号，动态值用花括号； class、for等要特殊处理*/}
    <img src={logo} style={{ width: 100 }} className="img" />
  </div>
);
```

7. 模块化

```javascript
/* css 模块化 创建index.module.css */
import style from "./index.module.css";
<img className={style.logo} />;

/* 或者引入scss npm install sass -D */
import style from "./index.module.scss";
<img className={style.logo} />;
```
