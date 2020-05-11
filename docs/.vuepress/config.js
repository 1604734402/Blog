const nav = require('./config/nav/index')
const sidebar = require('./config/sidebar/index')

module.exports = {
    title: "个人博客",
    description: "我的个人博客",
    head: [["link", { rel: 'icon', href: '/L.png' }],],
    themeConfig: {
        nav,
        sidebar
    }
}