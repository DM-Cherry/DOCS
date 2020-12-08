module.exports = {
  // theme: 'awesome',
  title: "文档管理",
  description: "这是一条测试，哈哈",
  base: "./",
  themeConfig: {
    nav: [{ text: "首页", link: "/home/description" }],
    sidebar: [
      {
        title: "模版说明",
        collapsable: false,
        children: [
          ["/home/description", "模版介绍"],
          ["/home/conformation", "模版架构"],
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
          ["/tool/SourceTree", "SourceTree 相关配置"],
        ],
      },
    ],
  },
};
