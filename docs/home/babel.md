::: tip 说明
选择能够切实提升生产率的工具无疑至关重要，下面提供的是一些常用的NPM 软件包清单。
:::

## [Autoprefixer ](https://github.com/postcss/autoprefixer)
> 可以自动在样式中添加浏览器厂商前缀，避免手动处理样式兼容问题

1. 安装
```javascript
npm install autoprefixer --save-dev
or
yarn add autoprefixer
```

2. 引入
```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

3. 在webpack中配置autoprefixer
```javascript
// webpack.config.common.js
{
  test: /\.css$/,
  use: [
    isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: isDev,
        alias: {
          '../images': helpers.root('static/images')
        }
      }
    },
    {
      loader: 'postcss-loader'
    }
  ]
}
```

## [Choices](https://github.com/jshjohnson/Choices)
> 轻量级标签

1. 安装
```javascript
npm install choices.js --save-dev
or
yarn add choices.js
```
   
2. 引入
```javascript
import Choices from 'choices.js'
```

3. 使用
```javascript
let firstElement = document.getElementById('demo-1');
let choices1 = new Choices(firstElement, {
  delimiter: ',',
  editItems: true,
  maxItems: 5,
  removeButton: true
});
```

## [Codemirror](https://codemirror.net/index.html)
> 可以在线编辑代码，风格包括js, java, php, c++等等100多种语言,比较强大可以自行配置语言模式

1. 安装
```javascript
npm install Codemirror --save-dev
or
yarn add Codemirror
```

2. 引入
```javascript
import _CodeMirror from 'codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/lesser-dark.css'
const CodeMirror = window.CodeMirror || _CodeMirror
```

3. 使用
```javascript
<textarea  ref="textarea" />
let cmOptions = {
  /**
   * 实现JavaScript高亮
  */  
  mode: 'text/javascript',
  /**
   * 显示行号
  */
  lineNumbers: true,
  /**
   * 设置主题
  */
  theme: 'lesser-dark',
}
// 初始化编辑器
this.codemirror = CodeMirror.fromTextArea(this.$refs.textarea, cmOptions)
```

## [Cropper.js](https://github.com/fengyuanchen/cropperjs)
> 可以在线编辑代码，风格包括js, java, php, c++等等100多种语言,比较强大可以自行配置语言模式

1. 安装
```javascript
npm install cropperjs --save-dev
or
yarn add cropperjs
```

2. 引入
```javascript
import Cropper from 'cropperjs'
```

3. 使用
```javascript
<b-img ref="image" />
this.cropper = new Cropper(this.$refs.image, {
  /**
  * 允许初始化时自动的裁剪图片
  * default: true
  */
  autoCrop: true, 
  /**
   * 拖拽图片模式
   * crop(形成新的裁剪框) | move(图片可移动) | none
  */
  dragMode: 'move',
  /**
    * 是否在容器内显示网格状的背景
    * default: true
  */
  background: false, 
  /**
   * 视图控制
   * 0(无限制) | 1 (限制裁剪框不能超出图片的范围) 
   * 2 (限制裁剪框不能超出图片的范围 且图片填充模式为 cover 最长边填充)
   * 3 (限制裁剪框不能超出图片的范围 且图片填充模式为 contain 最短边填充)
  */  
  viewMode: 1, 
  /**
   * 设置裁剪区域占图片的大小
   * 值为 0-1
   * default: 0.8 表示 80%的区域
  */  
  autoCropArea: 1, 
  /**
   * 检查图片是否跨域
   * default: true
   */
  checkCrossOrigin: true, 
  /**
   * 检查图片的方向信息（仅JPEG图片有）
   * default: true
  */
  checkOrientation: false,
  /**
   * 改变裁剪区域的宽高比
  */
  aspectRatio: 16 / 9
})
```

## [dom-autoscroller](https://github.com/hollowdoor/dom_autoscroller)
> 自动滚动条

## [dragula](https://www.izhangchao.com/internet/internet_228841.html)
> 拖放功能插件

1. 安装
```javascript
npm install dom-autoscroller --save-dev
npm install dragula
or
yarn add dom-autoscroller --save-dev
yarn add dragula
```

2. 引入
```javascript
import dragula from 'dragula/dragula'
import 'dragula/dist/dragula.css'
import autoScroll from 'dom-autoscroller'
```

3. 使用
```javascript
let self = this
let containers = [
   document.querySelector('#pendings-list-container'), 
   document.querySelector('#archives-list-container')
]
this.dnd = dragula(containers, {
 revertOnSpill: true,
 // eslint-disable-next-line no-unused-vars
  moves: function(el, container, handle) {
    return !el.classList.contains('no-dnd')
  }
})
this.scroller = autoScroll(
  [
    document.querySelector('#pendings-list-container'),
    document.querySelector('#archives-list-container')
  ],
  {
     margin: 20,
     maxSpeed: 8,
     scrollWhenOutside: true,
     autoScroll: function() {
        //Only scroll when the pointer is down, and there is a child being dragged.
        return this.down && self.dnd.dragging
     }
  }
)
```

## [FileSaver](https://github.com/eligrey/FileSaver.js)
> 是在客户端保存文件的解决方案，非常适合需要生成文件，或者保存不应该发送到外部服务器的敏感信息的 web App

1. 安装
```javascript
npm install file-saver --save-dev
or
yarn add file-saver
```

2. 引入
```javascript
import { saveAs } from 'file-saver'
```

3. 使用
```javascript
saveAs(
  new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"}),
  "hello world.txt"
)
```

## [Html2canvas](http://html2canvas.hertzen.com/)
> html2canvas 能够实现在用户浏览器端直接对整个或部分页面进行截屏

1. 安装
```javascript
npm install html2canvas --save-dev
or
yarn add html2canvas
```

2. 引入
```javascript
import html2canvas from 'html2canvas'
```

3. 使用
```javascript
<div id="print_box_2"></div>
html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});
```

## [JsBarcode](https://lindell.me/JsBarcode/)
> JsBarcode是一个用于生成条形码的js库，支持浏览器和node.js，浏览器端使用不依赖于其他库

1. 安装
```javascript
npm install jsbarcode --save-dev
or
yarn add jsbarcode
```

2. 引入
```javascript
import JsBarcode from 'jsbarcode'
```

3. 使用
```javascript
<div ref="barcode" />
let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg.setAttribute('jsbarcode-format', 'CODE128')
svg.setAttribute('jsbarcode-value', code)
svg.setAttribute('jsbarcode-width', 1)
svg.setAttribute('jsbarcode-height', 25)
svg.setAttribute('jsbarcode-fontsize', 10)
svg.baseVal = 'barcode'
this.$refs.barcode.appendChild(svg)
JsBarcode('.barcode').init()
```

## [Jsqr](https://www.npmjs.com/package/jsqr)
> jsQR 是一个纯 JavaScript 二维码解析库。该库读取原始图像或者是摄像头，并将定位，提取和解析其中的任何QR码

1. 安装
```javascript
npm install jsqr --save-dev
or
yarn add jsqr
```

2. 引入
```javascript
import jsQR from 'jsqr'
```

3. 使用
```javascript
// 拍摄照片并解析二维码
let imageData = this.canvas2d.getImageData(
  0,
  0,
  this.canvasWidth,
  this.canvasHeight
)
let code = jsQR(
  imageData.data, 
  imageData.width, 
  imageData.height, 
  {
    inversionAttempts: 'dontInvert'
  }
)
```

## [jwt-decode](https://www.npmjs.com/package/jwt-decode)
> 信息加密

1. 安装
```javascript
npm install jwt-decode --save-dev
or
yarn add jwt-decode
```

2. 引入
```javascript
import jwtDecode from 'jwt-decode'
```

3. 使用
```javascript
const jwt = jwtDecode(jwtToken.substr(7))
```

## [LeaderLine](https://anseki.github.io/leader-line/)
> 绘制指引线

## [skeleton-loader](https://www.npmjs.com/package/skeleton-loader)
> 定义一些自己想要的程序


1. 安装
```javascript
npm install skeleton-loader --save-dev
npm install leader-line --save-dev
or
yarn add skeleton-loader
yarn add leader-line
```

2. 引入
```javascript
// webpack.config.common.js
{
 test: helpers.root('node_modules/leader-line/'),
 use: [
   {
     loader: 'skeleton-loader',
     options: {
       procedure: content => `${content}export default LeaderLine`
     }
   }
  ]
}

// 页面引入
import LeaderLine from 'leader-line'
```

3. 使用
```javascript
new LeaderLine(
  document.getElementById(`start`),
  document.getElementById('end'),
  {
    startSocket: 'right',
    endSocket: 'left',
    size: 4,
    startPlug: 'square',
    endPlug: 'hand',
    dash: { animation: true }
  }
)
```

## [localforage ](http://localforage.docschina.org/)
> localForage 是一个 JavaScript 库，通过简单类似 localStorage API 的异步存储来改进你的 Web 应用程序的离线体验

1. 安装
```javascript
npm install localforage --save-dev
or
yarn add localforage
```

2. 引入
```javascript
import localForage from 'localforage'
import 'localforage-getitems'
```

3. 使用
```javascript
localforage.setItem('key', 'value').then(doSomethingElse);
```

## [perfect-scrollbar ](https://github.com/mdbootstrap/perfect-scrollbar#scrollingthreshold-number)
> 自定义scrollbar的样式。注（除非不得不使用自定义滚动条，否则始终建议使用浏览器自带的滚动条。）

1. 安装
```javascript
npm install perfect-scrollbar --save-dev
or
yarn add perfect-scrollbar
```

2. 引入
```javascript
import PS from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
```

3. 使用
```javascript
<div id="container"></div>
new PerfectScrollbar('#container', {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
})
```
