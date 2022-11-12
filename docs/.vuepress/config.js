const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Record of Ragnarok',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Manga',
        link: '/manga/',
      },
    ],
    sidebar: {
      
      '/manga/': [
        {
          title: 'Manga',
          collapsable: false,
          children: [
            '',
            'chapter-51',
            'chapter-52',
            'chapter-53',
            'chapter-54',
            'chapter-55',
            'chapter-56',
            'chapter-57',
            'chapter-58',
            'chapter-59',
            'chapter-60',
            'chapter-61',
            'chapter-62',
            'chapter-63',
            'chapter-64',
            'chapter-65',
            'chapter-66',
            'chapter-67',
            'chapter-68',
            'chapter-69',
            'chapter-70',
          ]
        }
      ],
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': 'assets/image'
      }
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
