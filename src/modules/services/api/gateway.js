/**
 * Created By Nguyen Cong Thanh on 08/04/2019 09:43.
 *
 * Copyright Intelin 2019.
 */

import axios from 'axios'

import Config from '../../../config/config.json'

class GatewayAPIService {

  constructor() {
    if (!GatewayAPIService.instance) {
      this.url = Config.ENV[Config.APP.ENV].API
      GatewayAPIService.instance = this
    }
    return GatewayAPIService.instance
  }

  request(option) {
    try {
      option.url = `${this.url}${option.url}`
      option.timeout = Config.APP.REQUEST_TIME_OUT
      return axios(option)
    } catch (e) {
      console.error(e)
    }
  }

}

export default new GatewayAPIService()
