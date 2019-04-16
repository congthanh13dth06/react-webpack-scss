/**
 * Created By Nguyen Cong Thanh on 03/04/2019 15:52.
 *
 * Copyright Intelin 2019.
 */

import { connect } from 'react-redux';

import CounterComponent from './counter.component'

import CounterAction from '../../store/actions/counter'

const mapStateToProps = ({ counterReducer }) => {
  return {
    times: counterReducer ? counterReducer : 0
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement: (times) => {
      dispatch(CounterAction.decreaseAction(times))
    },
    onIncrement: (times) => {
      dispatch(CounterAction.increaseAction(times))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)
