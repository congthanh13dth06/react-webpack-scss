/**
 * Created By Nguyen Cong Thanh on 03/04/2019 16:27.
 *
 * Copyright Intelin 2019.
 */

 import GatewayAPIService from './gateway'

 import ApiConstant from '../constants/api'

 class UserApiService {

   constructor() {
     if (!UserApiService.instance) {
       UserApiService.instance = this
     }
     return UserApiService.instance
   }

   getAll = function* getAll() {
     try {
       let data = []
       yield GatewayAPIService.request({
         method: 'GET',
         headers: { 'content-type': 'application/json' },
         url: ApiConstant.USER
       }).then((response) => {
         data = JSON.parse(response.data)
       })
       return data
     } catch (e) {
       console.log('User API Get', e)
     }
   }

   create = function* create(user) {
     try {
       let data = {}
       yield GatewayAPIService.request({
         method: 'POST',
         headers: { 'content-type': 'application/json' },
         url: ApiConstant.USER,
         data: user
       }).then((response) => {
         data = JSON.parse(response.data)
       })
       return data
     } catch (e) {
       console.log('User API Post', e)
     }
   }

 }

export default new UserApiService()
