(function () {
  let appId = 'wx97dbf4f0bdc7e291'
  let appUrl = 'http://dd.chongdingdahui.com'
  window.appConfig = {
    appId: appId,
    appUrl: appUrl,
    isWx: /MicroMessenger/.test(window.navigator.userAgent),
    wxAuth: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appId + '&redirect_uri=' + appUrl + '/auth.html&response_type=code&scope=snsapi_userinfo&state=dndnyun#wechat_redirect',
    getToken: function () {
      var userInfo = window.localStorage.getItem('DD_X_USER_INFO')
      if (userInfo) {
        userInfo = JSON.parse(userInfo)
      }
      return userInfo
    }
  }
})()
