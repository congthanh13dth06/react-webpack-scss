/**
 * Created By Nguyen Cong Thanh on 03/04/2019 15:33.
 *
 * Copyright Intelin 2019.
 */

import React, { Component, Fragment } from 'react'

import AppRoutes from './app.routes'

import "./ui/app.css"

export default class AppComponent extends Component {

  render() {
    return (
      <Fragment>
        <AppRoutes/>
      </Fragment>
    )
  }

}
