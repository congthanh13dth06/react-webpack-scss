/**
 * Created By Nguyen Cong Thanh on 03/04/2019 15:50.
 *
 * Copyright Intelin 2019.
 */

import ActionType from '../actions/type'

const counterReducer = (times = 0, action) => {

  switch (action.type) {
    case ActionType.COUNTER_TYPE_INCREMENT:
      return times + action.times;
    case ActionType.COUNTER_TYPE_DECREMENT:
      return times - action.times;
    default:
      return times
  }
}

export default counterReducer
