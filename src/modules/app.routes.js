/**
 * Created By Nguyen Cong Thanh on 03/04/2019 15:33.
 *
 * Copyright Intelin 2019.
 */

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import UserComponent from './ux/user/user.container'
import CounterComponent from './ux/counter/counter.container'

export default class AppRoutes extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">User</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={UserComponent} />
          <Route path="/counter" component={CounterComponent} />
        </div>
      </Router>
    )
  }

}
