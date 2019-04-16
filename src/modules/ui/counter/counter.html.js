/**
 * Created By Nguyen Cong Thanh on 03/04/2019 15:46.
 *
 * Copyright Intelin 2019.
 */

 import React, { Component } from 'react'

 import './counter.css'

 export default class CounterHtml extends Component {

   constructor(props) {
     super(props)
   }

   render() {

     const { onIncrement, onDecrement, times } = this.props;

     return (
       <div>
        <button onClick={() => {onIncrement(1)}}>Increment</button>
        <button onClick={() => {onDecrement(1)}}>Decrement</button>
        <h2>Times: {times}</h2>
       </div>
     )
   }

 }
