/**
 * Created By Nguyen Cong Thanh on 05/04/2019 16:24.
 *
 * Copyright Intelin 2019.
 */

 import { put, takeLatest } from 'redux-saga/effects'

 import ActionType from '../actions/type'
 import AppServices from '../../services/app.services'

 export default class UserSaga {

   static* getAll() {
     try {
       const data = yield AppServices.api.user.getAll()
       yield put({ type: ActionType.USER_TYPE_GET_ALL_SUCCESS, payload: data })
     } catch (e) {
        console.log('Get User Error', e)
     }
   }

   static* watchGetAll() {
     yield takeLatest(ActionType.USER_TYPE_GET_ALL, this.getAll)
   }

   static* create(action) {
     try {
       console.log(action.key)
       const data = yield AppServices.api.user.create(action.payload)
       yield put({ type: ActionType.USER_TYPE_CREATE_SUCCESS, payload: data })
     } catch (e) {
       console.log('Create User Error', e)
     }
   }

   static* watchCreate() {
     yield takeLatest(ActionType.USER_TYPE_CREATE, this.create)
   }

 }
