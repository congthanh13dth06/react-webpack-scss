/**
 * Created By Nguyen Cong Thanh on 03/04/2019 09:58.
 *
 * Copyright Intelin 2019.
 */

 import React, { Component } from 'react';

 import UserHtml from '../../ui/user/user.html';
 import AppServices from '../../services/app.services';

 export default class UserComponent extends Component {

   constructor(props) {
     super(props);

     this.state = {
       data: new AppServices.models.user().getValue(),
       timeout: new AppServices.services.timeout()
     }

     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }

  //  componentDidMount() {
  //    this.props.get()
  //  }

   handleChange(event) {
     this.setState({
       data: {
         ...this.state.data,
         [event.target.name]: event.target.value
       }
     });
   }

   handleSubmit(event) {
     AppServices.services.logger.info('Info dfsfdsd fsd fds sdf dsa fsaf')
     // AppServices.services.logger.debug('debug')
     // AppServices.services.logger.trace('Info')
     // AppServices.services.logger.warn('warn')
     // AppServices.services.logger.error('error')
     try {
       event.preventDefault();
       const key = AppServices.services.helper.generateKey()
       this.state.timeout.setTimeout(key)
       const user = new AppServices.models.user();
       user.setFirstName('firstName', this.state.data.firstName.trim(), 'First name invalid')
       user.setLastName('lastName', this.state.data.lastName.trim(), 'Last name invalid')
       this.props.create(key, user.getValue())
     } catch (e) {
       this.state.timeout.setTimeout(e.key, false, e.field, e.message)
       AppServices.services.logger.error(e.message)
     }
   }

   render() {
     return (
       <UserHtml
        model={this.state.data}
        data={this.props.userReducer}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
     )
   }

 }
