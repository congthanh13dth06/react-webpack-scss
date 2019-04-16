/**
 * Created By Nguyen Cong Thanh on 05/04/2019 14:05.
 *
 * Copyright Intelin 2019.
 */

import ActionType from './type'

export default class  UserAction {

  static getAll(payload) {
    return {
      type: ActionType.USER_TYPE_GET_ALL
    }
  }

  static create(key, data) {
    return {
      type: ActionType.USER_TYPE_CREATE,
      key: key,
      payload: data
    }
  }

}
