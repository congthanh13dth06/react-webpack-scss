/**
 * Created By Nguyen Cong Thanh on 09/04/2019 17:27.
 *
 * Copyright Intelin 2019.
 */

import Config from '../../../config/config.json'

export default class TimeoutService {

  constructor() {
    this.key = '';
    this.status = false;
    this.field = '';
    this.message = '';
    this.timeout = null;
  }

  funcTimeout() {
    this.status = false
    this.field = ''
    this.message = 'System is busy'
    console.log('Key', this.key)
    console.log('Message', this.message)
  }

  setTimeout(key = '', status = true, field = '', message = '') {
    this.key = key
    this.status = status
    this.field = field
    this.message = message
    clearTimeout(this.timeout)
    if (status) {
      this.timeout = setTimeout(this.funcTimeout.bind(this), Config.APP.REQUEST_TIME_OUT)
    }
  }

}
