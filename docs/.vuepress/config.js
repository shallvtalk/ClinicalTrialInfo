const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)

  title: "CTDoc",
  description: '为临床研究者及相关从业者提临床试验设计、数据分析、伦理法规等信息 ',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'vuepress,theme,blog,vdoing' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '临床试验简史', link: '/pages/075814/',items:[
          {text:'前言',link:'/pages/075814/'},
          {text:'方法论发展史',items:[
            {text:'对照试验',link:'/pages/77076e/'},
            {text:'盲法试验',link:'/pages/b0e5ff/'},
            {text:'随机试验',link:'/pages/de6f3e/'},
            {text:'重复试验',link:'/pages/f69ef3/'},
          ]},
          {
            text:'伦理法规发展史',items:[
              {text:'前言',link:'/pages/19c76d/'},
              {text:'《丛林》与《纯净食品和药品法案》',link:'/pages/662785/'},
              {text:'“磺胺”与《食品、药品、化妆品法》',link:'/pages/8b89e0/'},
              {text:'“反应停”与《科夫沃-哈里斯修正案》',link:'/pages/4d5e1d/'},
              {text:'医生审判与《纽伦堡法典》',link:'/pages/d6dba5/'},
              {text:'《赫尔辛基宣言》',link:'/pages/1cdba6/'},
              {text:'贝尔蒙报告》',link:'/pages/cd26f4/'},
              {text:'药物临床试验质量管理规范GCP的诞生》',link:'/pages/db697e/'},
            ]
          },
          {
            text:'产业化与工业革命发展史',items:[
              {text:'前言',link:'/pages/289e7f/'},
              {text:'CRO,SMO,CRA,CRC的诞生',link:'/pages/60f385/'},
              {text:'GCP的国际化与ICH-GCP',link:'/pages/500026/'},
              {text:'ICH-GCP的核心原则',link:'/pages/de85e0/'},
              {text:'临床试验的全球化',link:'/pages/4481d3/'},
              {text:'国际医学科学组织理事会CIOMS',link:'/pages/0296ef/'},
              {text:'信息化',link:'/pages/1a315a/'},
              {text:'适应性设计与精准医学',link:'/pages/e03ac8/'},
              {text:'在阳光下博弈',link:'/pages/906f3d/'},
              {text:'技术革命',link:'/pages/78800f/'},
            ]
          },
        ]
      },
      {
        text: 'ICH-GCP', link: '/pages/893f6d/',items: [
          { text: '术语', link: '/pages/893f6d/' },
          { text: 'ICH GCP 的原则', link: '/pages/75f28a/' },
          { text: '机构评审委员会、独立的伦理委员会(IRB、IEC)', link: '/pages/093009/' },
          { text: '研究者', link: '/pages/317f4e/' },
          { text: '申办者', link: '/pages/6c338b/' },
          { text: '临床试验方案和方案的修改', link: '/pages/a714ac/' },
          { text: '研究者手册', link: '/pages/02d370/' },
          { text: '临床试验必需文件', link: '/pages/0a1c05/' },
        ]
      },
      { text: '创作', link: '/pages/1645f0/',items: [
        { text: '创作文档', link: '/pages/1645f0/' },
        { text: 'Markdown 使用教程', link: '/pages/ad247c4332211551/' },
      ] },
      { text: '资源', link: '/pages/dd41f9/' },
      { text: '致谢', link: '/pages/e85fa7/' },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'Weithurd', // 必需
    },
    // footer: { // 页脚信息
    //   createYear: 2023, // 博客创建年份
    //   copyrightInfo: 'Weithurd ', // 博客版权信息，支持a标签
    // },
    htmlModules,
  },

  // 插件
  plugins: [

    ['fulltext-search'], // 全文搜索
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode || '01293bffa6c3962016c08ba685c79d78'
      }
    ],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],

  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}
