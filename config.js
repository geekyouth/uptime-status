// 配置
window.Config = {

  // 站点名
  SiteName: '站点状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两种 Api Key
  ApiKeys: [
    'ur804242-90d1eb90zcc82624bcaed27a'
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '项目主页',
      url: 'https://www.xiongmx.com'
    },
    {
      text: 'WA',
      url: 'https://wa.xiongmx.com'
    },
    {
      text: 'JP',
      url: 'https://jp.xiongmx.com'
    },
    {
      text: 'OC',
      url: 'https://oc.xiongmx.com'
    },
    {
      text: 'OC2',
      url: 'https://oc2.xiongmx.com'
    },
    {
      text: 'USA',
      url: 'https://usa.xiongmx.com'
    },
    {
      text: 'UK',
      url: 'https://uk.xiongmx.com'
    }
  ]
};
