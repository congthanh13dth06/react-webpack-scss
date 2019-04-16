/**
 * Created By Nguyen Cong Thanh on 08/04/2019 13:51.
 *
 * Copyright Intelin 2019.
 */

import ValidatorService from '../validation/validator'

import AppError from '../validation/error'

export default class UserModel {

  constructor() {
    this.firstName = {
      value: '',
      validator: []
    }

    this.lastName = {
      value: '',
      validator: ['isNotEmpty', 'isString']
    }
  }

  getValue() {
    return {
      firstName: this.firstName.value,
      lastName: this.lastName.value
    }
  }

  set(field, value, message, property) {
    try {
      ValidatorService.validate(field, value.trim(), message, property.validator)
      property.value = value
    } catch (e) {
      throw new AppError(e.field, e.message)
    }
  }

  setFirstName(field, value, message = '') {
    this.set(field, value.trim(), message, this.firstName)
  }

  setLastName(field, value, message = '') {
    this.set(field, value.trim(), message, this.lastName)
  }

}
