export const data = [{
    id: 1,
    time: "2022-09-05 13:34",
    title: "数据库概论论论论-456班",
    desc: "这是一段简短的描述，这是一段简短的描述，这是一段简短的描述",
    tag: ["作业二"],
    ddl: "2022-09-06 13:34",
    grade: "danger"
  },
  {
    id: 2,
    time: "2022-09-05 13:34:22",
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: "2022-09-06 13:34:22",
    grade: "danger"
  },
  {
    id: 3,
    time: "2022-09-05 13:34:22",
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: "2022-09-06 13:34:22",
    grade: "normal"
  },
  {
    id: 4,
    time: "2022-09-05 13:34:22",
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: "2022-09-06 13:34:22",
    grade: "normal"
  },
  {
    id: 5,
    time: "2022-09-05 13:34:22",
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: "2022-09-06 13:34:22",
    grade: "normal"
  },
  {
    id: 6,
    time: "2022-09-05 13:34:22",
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: "2022-09-06 13:34:22",
    grade: "normal"
  },
  {
    id: 7,
    time: "2022-09-05 13:34:22",
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: "2022-09-06 13:34:22",
    grade: "normal"
  },
  {
    id: 8,
    time: "2022-09-05 13:34:22",
    title: "数据库概论",
    desc: "这是一段简短的描述",
    tag: ["作业二"],
    ddl: "2022-09-06 13:34:22",
    grade: "normal"
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
