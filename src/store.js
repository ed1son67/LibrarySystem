import {createStore, combineReducers} from 'redux';

import {reducer as LoginReducer} from './pages/LoginPage/'


// 一个应用只有一个reducer，可以通过combineReducer将模块的reducer组合起来
const reducer = combineReducers({
    Login: LoginReducer,

})

export default createStore(reducer);