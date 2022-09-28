import Controller from "./Controller/index.js"


export const dropDownOptions = [{
    title: '置顶',
    index: 0,
    handleFunction: Controller.handleSticky
  },
  {
    title: '取消已完成',
    index: 1,
    handleFunction: Controller.handleCancelDone
  },
  {
    title: '设置提醒',
    index: 2,
    handleFunction: Controller.handleRemind
  }
]
