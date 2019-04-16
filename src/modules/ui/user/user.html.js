/**
 * Created By Nguyen Cong Thanh on 05/04/2019 14:04.
 *
 * Copyright Intelin 2019.
 */

 import React, { Component } from 'react'

 import './user.css'

 export default class UserHtml extends Component {

   constructor(props) {
     super(props)
   }

   render() {

     const { model, data, handleChange, handleSubmit } = this.props;

     const list = data.map((item, key) => {
       return [
         <tr key={key}>
          <td>{key + 1}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
         </tr>
       ]
     })

     return (
       <div>
         <form>
           First Name: <input type="text" name="firstName" placeholder="First Name" value={model.firstName} onChange={handleChange} />
           Last Name: <input type="text" name="lastName" placeholder="Class Name" value={model.lastName} onChange={handleChange} />
           <button onClick={handleSubmit}>Submit</button>
         </form>
         <table>
          <thead>
            <tr>
               <th>No</th>
               <th>Firstname</th>
               <th>Lastname</th>
             </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
         </table>
       </div>
     )
   }

 }
