(function () {
  var appId = 'wx97dbf4f0bdc7e291'
  var appUrl = 'https://api.dndnyun.com'
  var siteUrl = 'https://s.dndnyun.com'
  var u = window.navigator.userAgent
  window.appConfig = {
    appId: appId,
    appUrl: appUrl,
    siteUrl: siteUrl,
    isWx: /MicroMessenger/.test(u),
    isiOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    wxAuth: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appId + '&redirect_uri=' + siteUrl + '/auth.html&response_type=code&scope=snsapi_userinfo&state=app#wechat_redirect',
    getWxAuth: function (_state) {
      return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appId + '&redirect_uri=' + siteUrl + '/auth.html&response_type=code&scope=snsapi_userinfo&state=' + _state + '#wechat_redirect'
    },
    getToken: function () {
      var userInfo = window.localStorage.getItem('DD_X_USER_INFO')
      if (userInfo) {
        userInfo = JSON.parse(userInfo)
      }
      return userInfo
    }
  }
})()
