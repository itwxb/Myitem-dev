// index.js
// 获取应用实例
const app = getApp()
const util = require('../../utils/util')
Page({
  data: {
    background: ['https://img0.baidu.com/it/u=3457174851,2073041431&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889', 'https://img0.baidu.com/it/u=3457174851,2073041431&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889', 'https://img0.baidu.com/it/u=3457174851,2073041431&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    //输入框
    diansong: "",
    jiesong: "",
    songname: "",
    say: "",
    shurudate: '',
    lastArea: 200

  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  // 事件处理函数

  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {

  },
  // 提交按钮
  btn_submit() {
    var obj = {};
    obj.diansong = this.data.diansong;
    obj.jiesong = this.data.jiesong;

    obj.songname = this.data.songname;
    obj.say = this.data.say;
    this.submit_a(obj)
    if (this.submit_a(obj)) {
      console.log('不为空');
    }

  },
  submit_a(obj) {
    var obj1 = {
      diansong: '点歌人',
      jiesong: '接歌人',

      songname: '歌名',
      say: '想说的话',
    };

    for (const key in obj) {
      if (!obj[key]) {
        let text = obj1[key] + '不能为空'
        wx.showToast({
          title: text,
          icon: 'success',
          duration: 2000,

          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        });
        return false

      }
    }
    return true
  },
  //提交按钮
  // btn_submit() {
  //   // 获取时间
  //   this.setData({
  //     shurudate: util.formatTime(new Date())
  //   })
  //   var _this = this
  //   if (_this.data.songname.length > 0 && _this.data.diansong.length > 0 && _this.data.jiesong.length > 0 && _this.data.say.length > 0) {
  //     wx.request({
  //       url: 'example.php', //仅为示例，并非真实的接口地址
  //       data: {
  //         diange: _this.data.diansong,
  //         jiege: _this.data.jiesong,
  //         geming: _this.data.songname,
  //         hua: _this.data.say,
  //         time: _this.data.shurudate
  //       },
  //       header: {
  //         'content-type': 'application/json' // 默认值
  //       },
  //       success(res) {
  //         console.log(res.data)
  //         console.log(this.data);
  //       },
  //     })
  //     console.log(_this.data.diansong, _this.data.jiesong, _this.data.songname, _this.data.say, _this.data.shurudate);
  //     wx.showToast({
  //       title: '已提交',
  //       icon: 'success',
  //       duration: 2000
  //     })
  //   } else {
  //     wx.showToast({
  //       title: '表单不能为空',
  //       icon: 'error',
  //       duration: 2000
  //     })
  //   }

  // },
  //清空按钮
  btn_empty() {
    this.setData({
      jiesong: '',
      diansong: '',
      songname: "",
      say: '',
      lastArea: 200
    })
  },
  // 或取输入长度
  getDataBindTap(e) {
    // console.log('1');
    var value = e.detail.detail.cursor;
    // console.log(e.detail.detail.cursor);
    var lastArea = 200 - value;
    this.setData({
      lastArea: lastArea
    })
  },

  handleClick() {
    console.log('1');
  }
})