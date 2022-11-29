// pages/check/check.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: [
            {value: 'redcheck', name: '待审核',checked: 'true'},
            {value: 'checked', name: '审核通过',},
            {value: 'uncheck', name: '未通过'},
         
          ],
          songarr: [{
            songname: "你好—玩笑啊",
            greeting: '祝你看看新大大大大大大大大大大大大大大大大大大大dadadadadadadadadada',
            time: "9:00",
            type: "redcheck"
        },
        {
            songname: "你好—玩笑啊",
            greeting: '祝你看看新大大大大大大大大大大大大大大大大大大大dadadadadadadadadada',
            time: "9:00",
            type: "redcheck"
        },
        {
            songname: "你好—玩s笑啊",
            greeting: '祝你看看新大大大大大大大大大大大大大大大大大大大dadadadadadadadadada',
            time: "9:00",
            type: "uncheck"
        },
        {
            songname: "你好—玩笑啊6",
            greeting: '祝你看看新大大大大大大大大大大大大大大大大大大大dadadadadadadadadada',
            time: "9:00",
            type: "checked"
        },
    ],

          status:'redcheck',
          redcheck:[],
          uncheck:[],
          checked:[]
    },
    radioChange(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    
        const items = this.data.items
        for (let i = 0, len = items.length; i < len; ++i) {
          items[i].checked = items[i].value === e.detail.value
        }
    
        this.setData({
          items,
          status:e.detail.value
        }) 
        var arr=this.data.songarr
        if (this.data.status=='redcheck') {
        this.setData({
          redcheck:  arr.filter(item => item.type==='redcheck' )
        })
         console.log(1);
        }else if(this.data.status=='checked'){
          this.setData({
            checked:  arr.filter(item => item.type==='checked' )
          })
          console.log(2);
        }else{
          this.setData({
            uncheck:  arr.filter(item => item.type==='uncheck' )
          })
        }
     
       
     },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var arr=this.data.songarr
      this.setData({
        redcheck:  arr.filter(item => item.type==='redcheck' )
      })
    
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