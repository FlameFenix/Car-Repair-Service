import * as request from './requester';

const baseUrl = 'http://localhost:3030/users'

export const registerUser = async (userData) => {
    return await request.post(baseUrl + '/register', userData);
}

export const loginUser = async (userData) => {
    return await request.post(baseUrl + '/login', userData);
}

export const logoutUser = async (accessToken) => {
    try {
        const res = await fetch(baseUrl + '/logout', {
            headers: {
                'X-Authorization': accessToken
            }
        })
    } catch (error) {
        console.log(error);
    }
}