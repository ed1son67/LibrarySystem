// const base = 'api';
const base = 'http://localhost:8080/db';

const URL = {
    login: base + '/user/login',
    quit: base + '/quit',
    getBookStore: base + '/book/getAllBook',
    getBookRecommend: base + '/book/getBookList',
    queryBook: base + '/book/search?content='
}


export default URL;
