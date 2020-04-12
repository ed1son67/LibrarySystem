// const base = 'api';
const base = 'http://localhost:8081/db';

const URL = {
    login: base + '/user/login',
    logout: base + '/user/logout',
    getLendInfo: base + '/user/getLendInfo',
    getUserInfo: base + '/user/getUserInfo',
    editUserInfo: base + '/user/editUserInfo',
    editPassword: base + '/user/editPassword',
    getBookStore: base + '/book/getBookStore',
    queryBook: base + '/book/search?content=',
    getNotReturnRecord: base + '/book/getNotReturnRecord?content=',
    borrowBook: base + '/book/lendBook',
    returnBook: base + '/book/returnBook',
    upload: base + '/book/upload',
    payTicket: base + '/ticket/payTicket',
    getAllTickets: base + '/ticket/getAllTickets',
    getTicket: base + '/ticket/getTicket'
}

export default URL;
