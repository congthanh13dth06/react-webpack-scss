/**
 * Created By Nguyen Cong Thanh on 11/04/2019 11:29.
 *
 * Copyright Intelin 2019.
 */

import crypto from 'crypto-js'

class HelperService {

  constructor() {
    if (!HelperService.instance) {
      HelperService.instance = this
    }
    return HelperService.instance
  }

  hashMD5(string = '') {
    return crypto.MD5(string).toString()
  }

  generateKey() {
    return this.hashMD5(this.hashMD5(`${new Date().getTime()}-${Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)}-${Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)}-${new Date().getTime()}`))
  }

  encodeBase64(string) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      (match, p1) => {
        return String.fromCharCode('0x' + p1);
      }));
  }

  decodeBase64(string) {
    return decodeURIComponent(atob(str).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

}

export default new HelperService()
