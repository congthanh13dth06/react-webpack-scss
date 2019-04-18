/**
 * Created By Nguyen Cong Thanh on 11/04/2019 14:30.
 *
 * Copyright Intelin 2019.
 */

class LocalizeService {

  constructor() {
    if (!LocalizeService.instance) {
      LocalizeService.instance = this
    }
    return LocalizeService.instance
  }

}

export default new LocalizeService()
