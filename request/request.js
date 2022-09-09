import {
  addAttribute,
  copyObject
} from "@/utils/shared/handleObj.js";

import {
  handleRequestRes
} from "@/utils/shared/handleStatus.js"

export default class Request {
  constructor(instance, options) {
    this.instance = instance.request;
    this.uni = instance;
    this.request = {};
  }

  async sendRequest(options, flag) {
    const inpOptions = addAttribute(options)
    const option = Object.assign(inpOptions, this.request);
    const res = await this.instance.call(this, option)
    if (flag) {
      return handleRequestRes(this.uni, res)
    }
    return res
  }

  interceptor(options) {
    this.request = options;
  }
}
