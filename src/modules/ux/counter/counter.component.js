/**
 * Created By Nguyen Cong Thanh on 03/04/2019 15:52.
 *
 * Copyright Intelin 2019.
 */

 import React, { Component } from 'react'

 import CounterHtml from '../../ui/counter/counter.html'

 export default class CounterComponent extends Component {

   constructor(props) {
     super(props)
   }

   render() {
     return (
       <CounterHtml
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          times={this.props.times}
        />
     )
   }

 }
