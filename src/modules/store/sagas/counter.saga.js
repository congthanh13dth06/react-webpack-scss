/**
 * Created By Nguyen Cong Thanh on 04/04/2019 09:34.
 *
 * Copyright Intelin 2019.
 */

import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

import CounterAction from '../actions/counter'

export default class CounterSaga {

  static increament() {
    // console.log('this is increment saga')
  }

  static* watchIncrement() {
    yield takeEvery(CounterAction.increaseAction, this.increament)
  }

}
