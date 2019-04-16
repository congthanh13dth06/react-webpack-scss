/**
 * Created By Nguyen Cong Thanh on 08/04/2019 12:01.
 *
 * Copyright Intelin 2019.
 */

import AppError from './error'

class ValidatorService {

  constructor() {
    if (!ValidatorService.instance) {
      ValidatorService.instance = this
    }
    return ValidatorService.instance
  }

  validate(field, value, message, rules) {
    try {
      if (!Array.isArray(rules)) {
        throw new AppError(field, 'rules is not array')
      }
      rules.map((rule) => {
        this[rule](field, value.trim(), message)
      })
    } catch (e) {
      throw new AppError(e.field, e.message)
    }
  }

  isString(field, value, message) {
    try {
      value = value.trim()
      if (typeof value !== 'string') {
        throw new AppError(field, message)
      }
    } catch (e) {
      throw new AppError(e.field, e.message)
    }
  }

  isNotEmpty(field, value, message) {
    try {
      value = value.trim()
      if (typeof value === 'undefined') {
        throw new AppError(field, message)
      }
      if (value === null) {
        throw new AppError(field, message)
      }
      if (value === '') {
        throw new AppError(field, message)
      }
    } catch (e) {
      throw new AppError(e.field, e.message)
    }
  }

  // isNumber(field, message) {
  //   try {
  //     if (typeof value !== 'number') {
  //       throw new Error('Is Not Number')
  //     }
  //   } catch (e) {
  //     throw new Error(e.message)
  //   }
  // }
  //
  // isInt(value) {
  //   try {
  //     if (!Number.isInteger(value)) {
  //       throw new Error('Is Not Integer')
  //     }
  //   } catch (e) {
  //     throw new Error(e.message)
  //   }
  // }
  //
  // isObject(object) {
  //   try {
  //     this.isNotEmpty(object)
  //     if (typeof object !== "object") {
  //       throw new Error('Is Not Object')
  //     }
  //   } catch (e) {
  //     throw new Error(e.message)
  //   }
  // }
  //
  // isProperty(object, property) {
  //   try {
  //     this.isObject(object)
  //     this.isNotEmpty(property)
  //     if (!object.hasOwnProperty(property)) {
  //       throw new Error('Object is not property')
  //     }
  //   } catch (e) {
  //     throw new Error(e.message)
  //   }
  // }

}

export default new ValidatorService()
