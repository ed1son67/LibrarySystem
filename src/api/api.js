import axios from './server';
import url from "./config";

export function login(data) {
    return axios({
        data: data,
        url: url.login,
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
    })
}

export function lendBook(data) {
    return axios({
        data: data,
        url: url.borrowBook,
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    })
}

export function returnBook(data) {
    return axios({
        data: data,
        url: url.returnBook,
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    })
}

export function logout() {
    return axios({
        url: url.logout,
        method: 'post'
    })
}

export function getUserInfo() {
    return axios({
        url: url.getUserInfo,
        method: 'post'
    })
}

export function editUserInfo(data) {
    return axios({
        data: data,
        url: url.editUserInfo,
        method: 'post'
    })
}

export function editPassword(data) {
    return axios({
        data: data,
        url: url.editPassword,
        method: 'post'
    })
}


export function getBookRecommend() {
    return axios({
        url: url.getBookRecommend,
        method: 'get'
    })
}

export function getBookStore() {
    return axios({
        url: url.getBookStore,
        method: 'get'
    })
}

export function queryBook(bookName = '') {
    return axios({
        url: url.queryBook + bookName,
        method: 'get',
        withCredentials: true
    })
}

export function getNotReturnRecord(userAccount = '') {
    return axios({
        url: url.getNotReturnRecord + userAccount,
        method: 'get',
        withCredentials: true
    })
}

export function getLendInfo() {
    return axios({
        url: url.getLendInfo,
        method: 'post',
        withCredentials: true
    })
}

export function payTicket(data) {
    return axios({
        url: url.payTicket,
        data: data,
        method: 'post',
        withCredentials: true
    })
}
export function getTicket(data) {
    return axios({
        url: url.getTicket,
        data: data,
        method: 'post',
        withCredentials: true
    })
}

export function getAllTickets() {
    return axios({
        url: url.getAllTickets,
        method: 'post',
        withCredentials: true
    })
}

