// pages/goode_detial/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiper: [],
        goodsarr:[],
        goods_id:"",
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        num:1
    },
    onLoad: function (option) {
        console.log(option.id);
        this.setData({
            goods_id:option.id
        })
        this.getmoney()

        console.log("55252",this.data.goods_id);
            },
  
      getmoney(){
        var ids=this.data.goods_id
        console.log('dala1dsa',this.data.goods_id,'3');

        var that=this
        wx.request({
          url: `https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/qing/${ids}`, //仅为示例，并非真实的接口地址
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
              swiper:res.data.data.swiper,
              goodsarr:res.data.data
            })
            
          }
        })
      },
      onChange(event) {
        this.setData({
          num:event.detail
        })
      },
      addcar(){
        console.log(this.data.goodsarr);
        var addid=this.data.goods_id
        var addname=this.data.goodsarr.pushName
        var addnum=this.data.num
        var addprice=this.data.goodsarr.pushTxtlin
        console.log('sss',addnum);
        wx.request({
          url: 'https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/addgoods', //仅为示例，并非真实的接口地址
          method:"POST",
          data: {
            id: addid,
            name:addname,
            num:addnum,
            price:addprice
            
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
            console.log(res);
          
          
            
          }
        })
      },

    /**
     * 生命周期函数--监听页面加载
     */
    

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