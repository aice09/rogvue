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
            'chapter-20',
            'chapter-20-1',
            'chapter-21',
            'chapter-21-1',
            'chapter-22',
            'chapter-23',
            'chapter-23-5',
            'chapter-23-6',
            'chapter-24',
            'chapter-25',
            'chapter-26',
            'chapter-27',
            'chapter-28',
            'chapter-29',
            'chapter-30',
            'chapter-31',
            'chapter-32',
            'chapter-33',
            'chapter-34',
            'chapter-35',
            'chapter-36',
            'chapter-37',
            'chapter-38',
            'chapter-39',
            'chapter-40',
            'chapter-41',
            'chapter-42',
            'chapter-43',
            'chapter-44',
            'chapter-45',
            'chapter-46',
            'chapter-47',
            'chapter-48',
            'chapter-49',
            'chapter-50',
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
            'chapter-61-2',
            'chapter-61-5',
            'chapter-62',
            'chapter-63',
            'chapter-64',
            'chapter-65',
            'chapter-66',
            'chapter-67',
            'chapter-68',
            'chapter-69',
            'chapter-70',
            'chapter-71',
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
