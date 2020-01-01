import * as actionsTypes from './actionTypes';

const initState = {
    islogin: true,
    userName: '',
    isAdmin: 1 // 0是学生，1是管理员，两者显示的菜单不一样
}
export default (state = initState, action) => {
    switch(action.type) {
        case actionsTypes.LOGIN_SUCCESS: {
            return {
                islogin: true,
                isAdmin: action.data.identity,
                userName: action.data.userName
            }
        }
        default: {
            return state;
        }
    }
};