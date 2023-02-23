// var host = "http://localhost";
var host = "https://www.escook.cn";
var config={
  host,
  loginUrl: host + "/api/login",
  // getswiperList: host + "/api/getswiperList",
  getSwiperList: host + "/slides",
  getGridList: host + "/categories"
}

// 输出配置
module.exports = config