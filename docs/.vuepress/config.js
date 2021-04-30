module.exports = {
  // theme: 'awesome',
  title: "文档管理", // 设置网站标题
  dest: "./dist", // 设置输出目录
  base: "/DOCS/", // 设置站点根路径
  repo: "https://github.com/DM-Cherry/DOCS", // 添加 github 链接
  description: "这是一条测试，哈哈", // 项目描述
  // 页面路由配置
  themeConfig: {
    // 导航栏
    nav: [{ text: "首页", link: "/home/description" }],
    // 侧边栏
    sidebar: [
      {
        title: "模版说明",
        collapsable: false, // 是否自动展开
        children: [
          ["/home/description", "模版介绍"],
          ["/home/conformation", "模版架构"],
          ["/home/babel", "依赖包介绍"],
        ],
      },
      {
        title: "编码规范",
        collapsable: false,
        children: [
          ["/specification/CODE", "相关介绍"],
          ["/specification/JAVASCRIPT_STYLE", "JavaScript 相关规范"],
          ["/specification/CSS_STYLE", "CSS & Scss 相关规范"],
          ["/specification/NAMING", "命名约定"],
          ["/specification/COMMIT_STYLE", "Git 提交规范"],
          ["/specification/GIT_BRANCH_FLOW", "Git 版本管理规范"],
        ],
      },
      {
        title: "工具配置",
        collapsable: false,
        children: [
          ["/tool/ESLINT", "Eslint 相关配置"],
          // ["/tool/SourceTree", "SourceTree 相关配置"],
        ],
      },
      {
        title: "框架（React）",
        collapsable: false,
        children: [
          ["/react/START", "起步"],
          ["/react/JSX", "JSX"],
          ["/react/COMPONENT", "组件"],
          ["/react/SETSTATE", "如何正确使用setState"],
          ["/react/COMPOISTION", "组件复合"],
          ["/react/REDUX", "Redux"],
          ["/react/REACTROUTER", "react-router"],
          ["/react/PURECOMPONENT", "PureComponent"],
          ["/react/LIFECYCLE", "生命周期"],
          ["/react/PLUG", "antd基础配置"],
          ["/react/HOOK", "认识hook"],
          ["/react/DIALOG", "弹窗类组件设计与实现"],
        ],
      },
    ],
  },
};
