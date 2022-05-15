// pages/car/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        result: [],
        checked: false,
        carlist: [],
        status:false
    },
    allonChange(event) {
        this.setData({
            checked: event.detail,
        });
      if (this.data.checked) {
        var arr1 = this.data.carlist
        var arr = []
        // 添加值到全选数组 进行全选
        for (let index = 0; index < arr1.length; index++) {
            const id = arr1[index].id;
            arr.push(String(id) ) //转换为字符串
           

        }
        this.setData({
            result: arr
        })
        console.log('11',arr,'222',this.data.result);
          
      }else{
          this.setData({
              result:''
          })
      }
    },
    onChange(event) {
        this.setData({
            result: event.detail,
        });
   console.log('result',this.data.result);
//    全选
        if (this.data.result.length == this.data.carlist.length) {
            this.setData({
                checked: true
            })

        } else {
            this.setData({
                checked: false
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (option) {
        //test.js


        // const eventChannel = this.getOpenerEventChannel()

        // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
        // eventChannel.on('acceptDataFromOpenerPage', function(data) {
        //   console.log(data)
        // })

        this.getcarlist()

    },
//     delete(){



//         /**

//  */
 
//         console.log(this.data.result);
//         var arr4=this.data.result;
//         var arr3=this.data.carlist;
//         console.log('arr3',arr3,'arr4',arr4);
        
    
//      let res= arr3.filter(function(item,index){
//             //元素值，元素的索引，原数组。
//             console.log('lll',index);
//             return (item.id!=arr4[index]);
//         });
//        this.setData({
//            result:'',
//            checked:""
//        })
//        console.log('444',res);
//        this.setData({
//            carlist:res
//        })

//     },
 // 购物车删除
 delete() {
    // goods 和list 存在浅拷贝问题,可以查看深浅拷贝知识点
    let goods = this.data.carlist
    let list = this.data.carlist
    let result = this.data.result;
    for (let x = 0; x < goods.length; x++) {
        const element = goods[x];
        for (let i = 0; i < result.length; i++) {
            const ele = result[i];
            if (element.id == ele) {
                // console.log('3333',element,list);
                var y = list.indexOf(element);
                // console.log('444',y);
                if (y > -1) {
                    // 将选中的数据替换成  false
                    list.splice(y, 1,false);
                }
                // console.log('11111', goods);
            }

        }
    }
    // console.log('2222', list);
    // 使用深拷贝，对 ccc 数组进行删除false元素
    let bbb = JSON.parse(JSON.stringify(list));
    let ccc = JSON.parse(JSON.stringify(list));
    for (let index = 0; index < bbb.length; index++) {
        const element = bbb[index];
        //筛选 数组中所有 false 选项
        if (element == false) {
            //找到  false在ccc中的下标
            let u =ccc.indexOf(element);
            //删除
            if (u>-1) {
                ccc.splice(u,1)
            }
        }
    }       
    this.setData({
        // 对商品列表重新赋值
        carlist: ccc,
        // 选中复选框，清除
        result:[],
        // 全选框  取消选中状态
        checked: false
    });

},
    getcarlist() {
        var that = this
        wx.request({
            url: "https://console-mock.apipost.cn/app/mock/project/735a2577-da8b-467d-b76c-09349f9d8f3c/cart", //仅为示例，并非真实的接口地址
            data: {
                x: '',
                y: ''
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                console.log(res.data)
                that.setData({
                    carlist: res.data.data[0].goods,
                    status:true
                })
                console.log(that.data.carlist, );

            }
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