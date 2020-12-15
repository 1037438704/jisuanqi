
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0
  },
  //输入框input事件的执行逻辑
  handleInput(e) {
    console.log(e.detail.value);
    this.setData({
      num: e.detail.value
    })
  },
//加减按钮点击事件
  handletap(e){
    console.log(e.currentTarget.dataset.operation);
    this.setData({
      num: this.data.num + e.currentTarget.dataset.operation
    })
  }

})