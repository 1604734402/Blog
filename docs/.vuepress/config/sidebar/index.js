module.exports = {
    '/views/': [
        '',
        {
            title: '随笔',   // 必要的
            path: '/views/随笔/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            children: []
        },
        {
            title: '前端',   // 必要的
            path: '/views/前端/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            children: [
                '/views/前端/JS/',
                "/views/前端/vue/"
            ]
        },
        {
            title: '后端',   // 必要的
            path: '/views/后端/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            children: [
                '/views/后端/java/',
                "/views/后端/spring/"
            ]
        }
    ]
}