/**
 * Created By Nguyen Cong Thanh on 03/04/2019 15:33.
 *
 * Copyright Intelin 2019.
 */

import { combineReducers } from 'redux'

import counterReducer from './reducers/counter.reducer'
import userReducer from './reducers/user.reducer'

export default combineReducers({
  counterReducer,
  userReducer
})
