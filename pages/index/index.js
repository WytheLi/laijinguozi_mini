// pages/index/index.js
var config = require('../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放轮播图数据的数组
    swiperList: [],
    // 导航栏
    tableBox: [],
    tableBox: [],
    // 商品宫格
    gridList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTableBox(),
    this.getSwiperList(),
    this.getGridList()

  },

  // 获取某个类别的水果列表
  getFruitsByCategory () {
    
  },

  // table栏
  getTableBox () {
    let tableBox = [
      {
         "id": 1,
         "icon": "../../images/index/哈密瓜.svg",
         "name": "西瓜/蜜瓜"
      },
      {
        "id": 2,
        "icon": "../../images/index/山竹.svg",
        "name": "山竹/火龙果"
      },
      {
        "id": 3,
        "icon": "../../images/index/橙子.svg",
        "name": "柑橘橙柚"
      },
      {
        "id": 4,
        "icon": "../../images/index/火龙果.svg",
        "name": "葡提梅果"
      },
      {
        "id": 5,
        "icon": "../../images/index/猕猴桃.svg",
        "name": "苹果蕉梨"
      },
    ]
    this.setData({
      tableBox: tableBox
    })
  },

  // 获取轮播图数据的方法
  getSwiperList () {
    wx.request({
      url: config.getSwiperList,
      method: "GET",
      success: (res) => {
        console.log(res.data);
        // [{"id": 1, "image": "https://1.jpg", "link": "/pages/list/list?cat=10"}, ]
        this.setData({
          swiperList: res.data
        })
      }
    })
  },

  // 获取宫格数据
  getGridList () {
    wx.request({
      url: config.getGridList,
      method: 'GET',
      success: (res) => {
        console.log(res.data);
        // 
        this.setData({
          gridList: res.data
        })
      }
    })
  },

  // 搜索
  goSearch () {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})