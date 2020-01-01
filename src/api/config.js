// const base = 'api';
const base = 'http://localhost:8081/db';

const URL = {
    login: base + '/user/login',
    logout: base + '/user/logout',
    getLendInfo: base + '/user/getLendInfo',
    getUserInfo: base + 'getMessage',
    editUserInfo: base + 'editMessage',
    editPassword: base + 'editPassword',
    getBookStore: base + '/book/getBookStore',
    queryBook: base + '/book/search?content=',
    getNotReturnRecord: base + '/book/getNotReturnRecord?content=',
    borrowBook: base + '/book/lendBook',
    returnBook: base + '/book/returnBook',
    upload: base + '/book/upload'
}


export default URL;
