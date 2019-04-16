/**
 * Created By Nguyen Cong Thanh on 03/04/2019 16:08.
 *
 * Copyright Intelin 2019.
 */

import ActionType from './type'

export default class CounterAction {

  static increaseAction(times) {
    return {
      type: ActionType.COUNTER_TYPE_INCREMENT,
      times: times
    }
  }

  static decreaseAction(times) {
    return {
      type: ActionType.COUNTER_TYPE_DECREMENT,
      times: times
    }
  }

}
