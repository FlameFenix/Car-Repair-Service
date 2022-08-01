import * as request from './requester';

const baseUrl = 'http://localhost:3030/users'

export const registerUser = (userData) => {
    request.post(baseUrl + '/register', userData);
}

export const loginUser = (userData) => {
    request.post(baseUrl + '/login', userData);
}