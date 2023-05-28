export default {
  title: "极宇", //站点标题
  description: "学习随笔", //mate标签description，多用于搜索引擎抓取摘要
  base: "/jiyu-blog/",
  themeConfig: {
    siteTitle: "极宇",
    logo: "/logo.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/wuxiaoyu666" },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
    nav: [
      { text: "前端", link: "/articles/组件库环境搭建" },
      { text: "后端", link: "/articles/组件库环境搭建" },
      { text: "大数据", link: "/articles/组件库环境搭建" },
      { text: "运维", link: "/articles/组件库环境搭建" },
      { text: "微服务", link: "/articles/组件库环境搭建" },
      { text: "技术点汇总", link: "/articles/组件库环境搭建" },
      { text: "我的博客", link: "/articles/组件库环境搭建" },
    ],
    sidebar: {
    },
  },
};
