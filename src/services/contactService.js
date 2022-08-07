import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/contacts'


export const listOfMessages = async () => {
    return await request.get(baseUrl);
}

export const sendMessage = async (userData) => {
    return await request.post(baseUrl, userData);
}