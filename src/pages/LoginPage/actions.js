import {LOGIN_SUCCESS} from "./actionTypes";

export const loginSuccess = (userInfo) => ({
    type: 'LOGIN_SUCCESS',
    data: userInfo
})