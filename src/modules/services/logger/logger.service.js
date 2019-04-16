/**
 * Created By Nguyen Cong Thanh on 11/04/2019 15:01.
 *
 * Copyright Intelin 2019.
 */

import Config from '../../../config/config.json'

const getTime = () => {

   return ``

}

class LoggerService {

  constructor() {
    if (!LoggerService.instance) {
      this.logs = Config.ENV[Config.APP.ENV].LOG
      LoggerService.instance = this
    }
    return LoggerService.instance
  }

  info(content) {
    if (this.logs.includes('INFO')) {
      console.info(content)
    }
  }

  debug(content) {
    if (this.logs.includes('INFO')) {
      console.debug(content)
    }
  }

  trace(content) {
    console.trace(content)
  }

  warn(content) {
    console.warn(content)
  }

  error(content) {
    console.error(content)
  }

}

export default new LoggerService()
