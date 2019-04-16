/**
 * Created By Nguyen Cong Thanh on 03/04/2019 15:28.
 *
 * Copyright Intelin 2019.
 */

import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import combineReducers from './store/root.reducer'
import rootSaga from './store/root.saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));

store.subscribe(() => {
 	console.log(store.getState());
})

sagaMiddleware.run(rootSaga)

export default store
