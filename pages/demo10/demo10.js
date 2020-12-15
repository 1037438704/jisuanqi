// pages/demo10/demo10.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    operand1: null,
    operand2: null,
    operator: null,
    result: null,
    digits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,'AC','=']

  },
  //数字点击事件
  sumOnTap(e) {
    // console.log(this.data);
    // if (this.data.operation === null) {
    //   this.setData({
    //     sumValue: this.data.sumValue + e.currentTarget.dataset.operation + "",
    //     sum1: this.data.sumValue + e.currentTarget.dataset.operation + ""
    //   })
    // } else {
    //   if(this.data.sum2 === 0){
    //     this.setData({
    //       sumValue: 0,
    //     })
    //     this.setData({
    //       sumValue: this.data.sumValue + e.currentTarget.dataset.operation + "",
    //       sum2: this.data.sumValue + e.currentTarget.dataset.operation + ""
    //     })
    //   }else{
    //     this.setData({
    //       sumValue: this.data.sumValue + e.currentTarget.dataset.operation + "",
    //       sum2: this.data.sumValue + e.currentTarget.dataset.operation + ""
    //     })
    //   }
    // }
  },
  //功能按键  加减乘除 等于号
  operationOnTap(e) {
    // this.setData({
    //   sum2: this.data.sum1,
    //   operation: e.target.dataset.operation
    // })
  },
  //清空按键
  acOnTap() {
    // this.setData({
    //   operation: null,//判断是否点击了运算按钮
    //   company: null,//是否添加了单位 + / -
    //   sumValue: 0, //显示的值
    //   sum1:0,
    //   sum2:null,
    // })
    // console.log(this.data);
  },
  //等于号
  resultOnTap() {
    // if(this.data.operation == "+"){  
    //     this.setData({
    //       sumValue: parseInt(this.data.sum1) + parseInt(this.data.sum2)
    //     })
    // }else if(this.data.operation == "-"){
    //   this.setData({
    //     sumValue:this.data.sum1-this.data.sum2
    //   })
    // }else if(this.data.operation == "*"){
    //   this.setData({
    //     sumValue:this.data.sum1*this.data.sum2
    //   })
    // }else if(this.data.operation == "/"){
    //   this.setData({
    //     sumValue:this.data.sum1/this.data.sum2
    //   })
    // }
    // console.log(this.data);
  }
})