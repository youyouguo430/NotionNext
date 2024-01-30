const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-01-25', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
      { title: '欢迎来到西西和歪歪的小站', url: '' },
      { title: 'Welcome to CC and YY\'s website', url: '' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '西西和歪歪',
  HEO_HERO_TITLE_2: '',
  HEO_HERO_TITLE_3: '',
  HEO_HERO_TITLE_4: '但愿我和你',
  HEO_HERO_TITLE_5: '是一支唱不完的歌',
  HEO_HERO_TITLE_LINK: '这里没想好',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我们是',
  ],
  HEO_INFO_CARD_URL: 'https://github.com/tangly1024/NotionNext', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'Star',
      img_1: '/images/heo/star.webp',
      color_1: '#5a3822',
      title_2: 'Music',
      img_2: '/images/heo/music.webp',
      color_2: '#e9decb'
    },
    {
      title_1: 'Cat',
      img_1: '/images/heo/cat.webp',
      color_1: '#e9838f',
      title_2: 'Paw',
      img_2: '/images/heo/paw.webp',
      color_2: '#ad6a6b'
    },
    {
      title_1: 'Chat',
      img_1: '/images/heo/chat.webp',
      color_1: '#ece2d6',
      title_2: 'Hand',
      img_2: '/images/heo/hand.webp',
      color_2: '#a58e9e'
    },
    {
      title_1: 'Blossom',
      img_1: '/images/heo/blossom.webp',
      color_1: '#4e0e0f',
      title_2: 'Bear',
      img_2: '/images/heo/bear.webp',
      color_2: '#cd937f'
    },
    {
      title_1: 'Lamb',
      img_1: '/images/heo/lamb.webp',
      color_1: '#e5c3c1',
      title_2: 'Wand',
      img_2: '/images/heo/balala.webp',
      color_2: '#b8373b'
    },
    {
      title_1: 'Icecream',
      img_1: '/images/heo/icecream.webp',
      color_1: '#b4b4b4',
      title_2: 'Wings',
      img_2: '/images/heo/wings.webp',
      color_2: '#cf8566'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#9d5157',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#6f6185'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  //HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  //HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  //HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  //HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
