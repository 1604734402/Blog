const nav = require('./config/nav/index')
const sidebar = require('./config/sidebar/index')
const plugins = require('./config/plugins/index')

module.exports = {
  base: '/',
  title: "月下荧光",
  description: "白茶清欢无别事，我在等风也等你",
  head: [["link", { rel: 'icon', href: '/lym-icon.ico' }],],
  //插件
  plugins,
  // extend: '@vuepress/theme-default',
  //主题
  theme: 'reco',
  evergreen: true,
  //主题设置
  themeConfig: {
    // type: 'blog',
    smoothScroll: false,
    //左上logo
    logo: '/head.jpg',
    //导航栏
    nav,
    activeHeaderLinks: true,
    //侧边栏
    sidebar,
    //h123456 在侧边栏的最大深度
    sidebarDepth: 2,
    //华为文案
    huawei: true,
    author: '月下荧光',
    valineConfig: {
      appId: 'w4ofSRBXY0IeKb3MxCqc4PqW-gzGzoHsz',// your appId
      appKey: 'G2HUpb5VjAu1lKkuK2Wpg8gk', // your appKey
      notify: true, // 邮件提醒
      verify: true, // 验证码
      recordIP: true
    },
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },
    record: '鲁ICP备20020600号-1',
    recordLink: 'http://beian.miit.gov.cn/publish/query/indexFirst.action',
    // 项目开始时间，只填写年份
    startYear: '2020'
  },
}
