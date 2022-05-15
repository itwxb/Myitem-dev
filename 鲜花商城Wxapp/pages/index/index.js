// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
   goodsflarr:[],
   motuo:[],
   tuiguang1:[],
   tuiguang2:[],
   tuiguang3:[],
   goods1:[],
   goods2:[],
   goods3:[],
  },
  // 事件处理函数

  onLoad() {
    this.getswiper()
    this.getgoodsfl()
    this.getmotuo()
    this.gettuiguang1()
    this.gettuiguang2()
    this.gettuiguang3()
    this.getgoods1()
 
  },
  getswiper(){
    var that=this
    wx.request({
      url: 'https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/banner', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        that.setData({
          background:res.data.data
        })
        
      }
    })
  },
  getgoodsfl(){
    var that=this
    wx.request({
      url: 'https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/cates', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        that.setData({
          goodsflarr:res.data.data
        })
        
      }
    })
  },
  getmotuo(){
    var that=this
    wx.request({
      url: 'https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/tu', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        that.setData({
          motuo:res.data.data
        })
        
      }
    })
  },
  gettuiguang1(){
    var that=this
    wx.request({
      url: 'https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/pushcate', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        that.setData({
          tuiguang1:res.data.data
        })
        
      }
    })
  },
  gettuiguang2(){
    var that=this
    wx.request({
      url: 'https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/xll', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        that.setData({
          tuiguang2:res.data.data
        })
        
      }
    })
  },
  gettuiguang3(){
    var that=this
    wx.request({
      url: 'https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/xu', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        that.setData({
          tuiguang3:res.data.data
        })
        
      }
    })
  },
  getgoods1(){
    var that=this
    wx.request({
      url: 'https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/goods/1', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        that.setData({
          goods1:res.data.data
        })
        
      }
    })
    wx.request({
      url: 'https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/goods/2', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        that.setData({
          goods2:res.data.data
        })
        
      }
    })
    wx.request({
      url: 'https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/goods/3', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        that.setData({
          goods3:res.data.data
        })
        
      }
    })
  },
  toDetailsTap(e){
    console.log('2',e.currentTarget.dataset.id);
    const id =e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/goode_detial/index?id=${id}`,
    })
  }
  

})
