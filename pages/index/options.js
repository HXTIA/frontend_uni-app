export const data = [{
    id: 1,
    time: Date.now("2022-09-23 07:10"),
    title: "我是id1",
    desc: "这是一段简短的描述，这是一段简短的描述，这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 2,
    isTips: false
  },
  {
    id: 2,
    time: Date.now(),
    title: "我是id2",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 2,
    isTips: false
  },
  {
    id: 3,
    time: Date.now(),
    title: "我是id3",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 1,
    isTips: false
  },
  {
    id: 4,
    time: Date.now(),
    title: "我是id4",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 1,
    isTips: false
  },
  {
    id: 5,
    time: Date.now(),
    title: "我是id5",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 2,
    isTips: false
  },
  {
    id: 6,
    time: Date.now(),
    title: "我是id6",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 0,
    isTips: false
  },
  {
    id: 7,
    time: Date.now(),
    title: "我是id7",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 0,
    isTips: false
  },
  {
    id: 8,
    time: Date.now(),
    title: "我是id8",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 0,
    isTips: false
  }
]

import Controller from "./Controller/index.js"


export const dropDownOptions = [{
    title: '置顶',
    index: 0,
    handleFunction: Controller.handleSticky
  }, {
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
