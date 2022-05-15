// pages/fenlei/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeKey:0,
        leftlist:[],
        rightlist:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
this.getleft()
    },
getleft(){
   
        let that=this
        wx.request({
          url: 'https://mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/flowercates', //仅为示例，并非真实的接口地址
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
              leftlist:res.data.data
            })
            let obj=that.data.leftlist[that.data.activeKey].id
            console.log('456',obj);
            that.funlist(obj)
          }
        });
        
        
        // this.funlist(obj)
   
},
getright(){
   


},
onChange(res){
console.log('res',res);
// var arr=this.data.leftlist
// console.log('arr',arr);
console.log('list',this.data.leftlist);
var obj=this.data.leftlist[res.detail].id
console.log('11154',obj);
this.funlist(obj)
},
funlist(obj){
var that=this

    wx.request({
        url: `https://mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/flowercate/${obj}`, //仅为示例，并非真实的接口地址
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
            rightlist:res.data.data
          })
          console.log('3oro40',that.data.rightlist);
          
        }
      })
},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    // towx(){
    //   console.log('3',"adda");
    //   var that=this;
    //   wx.navigateTo({
    //     url: '/pages/car/index',
    //     events: {
    //       // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
    //       acceptDataFromOpenedPage: function(data) {
    //         console.log(data)
    //       },
    //       someEvent: function(data) {
    //         console.log(data)
    //       }
          
    //     },
    //     success: function(res) {
    //       // 通过eventChannel向被打开页面传送数据
    //       res.eventChannel.emit('acceptDataFromOpenerPage', { data: that.data.activeKey })
    //     }
    //   })
    // },

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