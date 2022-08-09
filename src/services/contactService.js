import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/contacts'


export const listOfMessages = async () => {
    return await request.get(baseUrl);
}

export const getMessageById = async (id) => {
    return await request.get(baseUrl + `/${id}`);
}

export const sendMessage = async (userData) => {
    return await request.post(baseUrl, userData);
}

export const deleteMessage = async (id) => {
    return await fetch(baseUrl + `/${id}`, {
        method: 'DELETE',
    });
}