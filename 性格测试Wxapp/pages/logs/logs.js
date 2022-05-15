// logs.js

Page({
  data: {
    isindex: 0,
    logsarr: [],
    sz: [],
    tjobj:{},
    jieguozimu:'',
    logs: [
      [{
          text: '富于冒险：愿意面对新事物并敢于下决心掌握的人',
          type: 'D'
        },
        {
          text: '适应力强：轻松自如适应任何环境',
          type: 'S'
        },
        {
          text: '生动：充满活力，表情生动，多手势',
          type: 'I'
        },
        {
          text: '善于分析：喜欢研究各部分之间的逻辑和正确的关系',
          type: 'C'
        }
      ],
      [{
          text: '坚持不懈：要完成现有的事才能做新的事情；',
          type: 'C'
        },
        {
          text: '喜好娱乐：开心充满乐趣与幽默感',
          type: 'I'
        },
        {
          text: '善于说服：用逻辑和事实而不用威严和权利服人',
          type: 'D'
        },
        {
          text: '平和：在冲突中不受干扰，保持平静。',
          type: 'S'
        }
      ],
      [{
          text: '顺服：易接受他人的观点和喜好，不坚持己见',
          type: 'S'
        },
        {
          text: '自我牺牲：为他人利益愿意放弃个人意见',
          type: 'C'
        },
        {
          text: '善于社交：认为与人相处是好玩，而不是挑战或者商业机会',
          type: 'I'
        },
        {
          text: '意志坚定：决心以自己的方式做事。',
          type: 'D'
        }
      ],
      [{
          text: '使人认同：因人格魅力或性格使人认同',
          type: 'I'
        },
        {
          text: '体贴：关心别人的感受与需要',
          type: 'C'
        },
        {
          text: '竞争性：把一切当作竞赛，总是有强烈的赢的欲望',
          type: 'D'
        },
        {
          text: '自控性：控制自己的情感，极少流露。',
          type: 'S'
        }
      ],
      [{
          text: '使人振作：给他人清新振奋的刺激；',
          type: 'I'
        },
        {
          text: '尊重他人：对人诚实尊重；',
          type: 'C'
        },
        {
          text: '善于应变：对任何情况都能作出有效的反应；',
          type: 'D'
        },
        {
          text: '含蓄：自我约束情绪与热忱。',
          type: 'S'
        }
      ],
      [{
          text: '生机勃勃：充满生命力与兴奋；',
          type: 'I'
        },
        {
          text: '满足：容易接受任何情况与环境；',
          type: 'S'
        },
        {
          text: '敏感：对周围的人事过分关心；',
          type: 'C'
        },
        {
          text: '自立：独立性强，只依靠自己的能力、判断、与才智。',
          type: 'D'
        }
      ],
      [{
          text: '富于冒险：愿意面对新事物并敢于下决心掌握的人',
          type: 'D'
        },
        {
          text: '适应力强：轻松自如适应任何环境',
          type: 'S'
        },
        {
          text: '生动：充满活力，表情生动，多手势',
          type: 'I'
        },
        {
          text: '善于分析：喜欢研究各部分之间的逻辑和正确的关系',
          type: 'C'
        }
      ],
      [{
          text: '坚持不懈：要完成现有的事才能做新的事情；',
          type: 'C'
        },
        {
          text: '喜好娱乐：开心充满乐趣与幽默感',
          type: 'I'
        },
        {
          text: '善于说服：用逻辑和事实而不用威严和权利服人',
          type: 'D'
        },
        {
          text: '平和：在冲突中不受干扰，保持平静。',
          type: 'S'
        }
      ],
      [{
          text: '顺服：易接受他人的观点和喜好，不坚持己见',
          type: 'S'
        },
        {
          text: '自我牺牲：为他人利益愿意放弃个人意见',
          type: 'C'
        },
        {
          text: '善于社交：认为与人相处是好玩，而不是挑战或者商业机会',
          type: 'I'
        },
        {
          text: '意志坚定：决心以自己的方式做事。',
          type: 'D'
        }
      ],
      [{
          text: '使人认同：因人格魅力或性格使人认同',
          type: 'I'
        },
        {
          text: '体贴：关心别人的感受与需要',
          type: 'C'
        },
        {
          text: '竞争性：把一切当作竞赛，总是有强烈的赢的欲望',
          type: 'D'
        },
        {
          text: '自控性：控制自己的情感，极少流露。',
          type: 'S'
        }
      ],

    ],
  },
  // 统计功能
  btntongji() {
    let arr = this.data.sz;
    let D = 0,
      I = 0,
      S = 0,
      C = 0;
    for (let index = 0; index < arr.length; index++) {
      switch (arr[index]) {
        case "D":
          ++D
          break;
        case "I":
          ++I
          break;
        case "S":
          ++S
          break;
        case "C":
          ++C
          break;


      }
      this.setData({
        tjobj:{D,I,S,C}
      })

    }
  },
  
  //点击按钮
  funtext(s) {

    //数据改动
    this.setData({
      isindex: ++this.data.isindex,
      logsarr: this.data.logs[this.data.isindex]
    })
    console.log(this.data.isindex);
    this.data.sz.push(s.currentTarget.dataset.aaa.type)
    console.log(this.data.sz);
    this.btntongji()
    // 如果下标大于9 进行判断
    if (this.data.isindex>this.data.logs.length-1) {
      this.jisuanjieguo()
      
    }

  },
    // 判断数组
 jisuanjieguo(){
       // 编写方法，实现冒泡
       var arr = [29,45,51,68,72,97];
       var dataobj=[
         {
           type:'D',
           num:this.data.tjobj.D
         },
         {
          type:'I',
          num:this.data.tjobj.I
        },
        {
          type:'S',
          num:this.data.tjobj.S
        },
        {
          type:'C',
          num:this.data.tjobj.C
        },
       ]
       //外层循环，控制趟数，每一次找到一个最大值
       for (var i = 0; i < dataobj.length - 1; i++) {
           // 内层循环,控制比较的次数，并且判断两个数的大小
           for (var j = 0; j < dataobj.length - 1 - i; j++) {
               // 白话解释：如果前面的数大，放到后面(当然是从小到大的冒泡排序)
               if (dataobj[j].num > dataobj[j + 1].num) {
                   var temp = dataobj[j];
                   dataobj[j] = dataobj[j + 1];
                   dataobj[j + 1] = temp;
               }
           }
       }
       console.log(dataobj);
       this.setData({
        jieguozimu:dataobj[3].type
       })
       console.log(this.data.jieguozimu);
 },




  onLoad() {
  
    //初始赋值
    this.setData({

      logsarr: this.data.logs[this.data.isindex]
    })

  },
  //上道题
  funbut() {
    this.setData({
      isindex: --this.data.isindex,
      logsarr: this.data.logs[this.data.isindex]

    });
    this.data.sz.pop()
    console.log(this.data.sz);

  },
  //返回首页
  funbutton() {
    wx.navigateBack({
      delta: 1
    })
  },

})