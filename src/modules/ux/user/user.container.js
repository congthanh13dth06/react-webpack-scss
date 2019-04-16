/**
 * Created By Nguyen Cong Thanh on 03/04/2019 09:58.
 *
 * Copyright Intelin 2019.
 */

 import { connect } from 'react-redux';

 import UserComponent from './user.component'

 import UserAction from '../../store/actions/user'

 const mapStateToProps = ({ userReducer }) => {
   return {
     userReducer: userReducer
   }
 };

 const mapDispatchToProps = (dispatch) => {
   return {
     get: () => {
       dispatch(UserAction.getAll())
     },
     create: (key, data) => {
       dispatch(UserAction.create(key, data))
     }
   }
 };

 export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)
