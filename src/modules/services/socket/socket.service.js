/**
 * Created By Nguyen Cong Thanh on 03/04/2019 16:25.
 *
 * Copyright Intelin 2019.
 */

class SocketService {

  constructor() {
    if (!SocketService.instance) {
      SocketService.instance = this
    }
    return SocketService.instance
  }

  connect() {

  }

}

export default new SocketService()
