import axios from 'axios';
import url from "./config";

export function login(data) {
    return axios({
        data: data,
        url: url.login,
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        withCredentials:true
    })
}

export function getBookRecommend() {
    return axios({
        url: url.getBookRecommend,
        method: 'get',
        withCredentials:true
    })
}

export function getBookStore() {
    return axios({
        url: url.getBookStore,
        method: 'get',
        withCredentials:true
    })
}

export function queryBook(bookName = '') {
    return axios({
        url: url.queryBook + bookName,
        method: 'get',
        withCredentials: true
    })
}