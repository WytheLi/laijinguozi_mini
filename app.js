// app.js
var config = require("./config.js");

App({
  onLaunch() {
    // 展示本地存储能力
    
    // 将全局域名缓存起来
    wx.setStorageSync('config', config);

    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
