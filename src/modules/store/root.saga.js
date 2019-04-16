/**
 * Created By Nguyen Cong Thanh on 04/04/2019 09:34.
 *
 * Copyright Intelin 2019.
 */

import { delay } from 'redux-saga'
import { all } from 'redux-saga/effects'

import CounterSaga from './sagas/counter.saga'
import UserSaga from './sagas/user.saga'

export default function* rootSaga() {

  yield all([
    CounterSaga.watchIncrement(),
    UserSaga.watchGetAll(),
    UserSaga.watchCreate()
  ])

}
