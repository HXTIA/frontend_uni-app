export const data = [{
    id: 1,
    time: Date.now("2022-09-23 07:10"),
    title: "数据库概论论论论-456班",
    desc: "这是一段简短的描述，这是一段简短的描述，这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 0
  },
  {
    id: 2,
    time: Date.now(),
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 1
  },
  {
    id: 3,
    time: Date.now(),
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 1
  },
  {
    id: 4,
    time: Date.now(),
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 1
  },
  {
    id: 5,
    time: Date.now(),
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 2
  },
  {
    id: 6,
    time: Date.now(),
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 0
  },
  {
    id: 7,
    time: Date.now(),
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 0
  },
  {
    id: 8,
    time: Date.now(),
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: Date.now(),
    flag: 0
  }
]

import Controller from "./Controller/index.js"


export const dropDownOptions = [{
    title: '置顶',
    index: 0,
    handleFunction: Controller.handleSticky
  }, {
    title: '查看详情',
    index: 1,
    handleFunction: Controller.handleDetail
  },
  {
    title: '设置提醒',
    index: 2,
    handleFunction: Controller.handleRemind
  }
]
