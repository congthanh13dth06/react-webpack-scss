/**
 * Created By Nguyen Cong Thanh on 09/04/2019 13:43.
 *
 * Copyright Intelin 2019.
 */

import ApiConstant from './constants/api'

import UserApiService from './api/user'

import UserModel from './model/user'

import LoggerService from './logger/logger.service'
import HelperService from './helper/helper.service'
import TimeoutService from './validation/timeout'
import ValidatorService from './validation/validator'
import SocketService from './socket/socket.service'

export default {
  constant: {
    api: ApiConstant
  },
  api: {
    user: UserApiService
  },
  services: {
    socket: SocketService,
    validator: ValidatorService,
    timeout: TimeoutService,
    helper: HelperService,
    logger: LoggerService
  },
  models: {
    user: UserModel
  }
}
