/**
 * Created By Nguyen Cong Thanh on 05/04/2019 14:08.
 *
 * Copyright Intelin 2019.
 */

import ActionType from '../actions/type'

const userReducer = (state = [], action) => {

  switch (action.type) {
    case ActionType.USER_TYPE_GET_ALL_SUCCESS:
      return action.payload;
    case ActionType.USER_TYPE_CREATE_SUCCESS:
      return [...state, action.payload];
    default:
      return state
  }
}

export default userReducer
