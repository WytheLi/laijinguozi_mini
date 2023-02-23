// pages/wx_login/wx_login.js
var config = require('../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },

  wxLogin() {
    console.log(this.data.canIUseGetUserProfile);
    if (this.data.canIUseGetUserProfile) {
      this.getUserProfile()
    } else {
      this.getUserInfo()
    }
  },

  // 获取微信用户信息
  getUserProfile() {
    wx.getUserProfile({
      desc: '授权登录，获取用户信息！',
      success: (res) => {
        // 缓存微信用户信息
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        }),
        // 签发token
        console.log(res.userInfo);
        this.getToken(res.userInfo)
      }
    })
  },

  getUserInfo(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    }),
    
    // 签发token
    this.getToken(e.detail.userInfo)
  },

  getToken(e) {
    // 获取code
    wx.login({
      success: (res) => {
        // 发起用户注册请求，后台创建用户，并签发token
        wx.request({
          url: config.loginUrl,
          data: {
            code: res.code,
            nike_name: e.nikeName,
            gender: e.gender,
            avatar_url: e.avatarUrl
          },
          success: (res) => {
            console.log(res.data);
          }
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 版本兼容，开发者工具中仅 2.10.4 及以上版本可访问 wx.getUserProfile 接口
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})