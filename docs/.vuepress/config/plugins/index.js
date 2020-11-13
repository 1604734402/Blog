module.exports = [
  '@vuepress-reco/vuepress-plugin-back-to-top',
  [
    "cursor-effects",
    {
      size: 3,                    // size of the particle, default: 2
      shape: ['star'],  // shape of the particle, default: 'star'
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    }
  ],
  [
    '@vuepress-reco/comments',
      {
    solution: 'valine',
    options: {
      appId: 'w4ofSRBXY0IeKb3MxCqc4PqW-gzGzoHsz',// your appId
      appKey: 'G2HUpb5VjAu1lKkuK2Wpg8gk', // your appKey
      placeholder: '欢迎交流，不定时回复~',
      visitor: true,
      avatar: 'robohash',
      idVal: 'valine',
      flagTitle: '嘿嘿',
      bgimage: '/01.jpg'
    }
  }],

]
