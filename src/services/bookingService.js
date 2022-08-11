import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/booking'

export const bookForService = async (bookingData, accessToken) => {
    return await request.post(baseUrl, bookingData, accessToken);
}

export const listOfBooking = async () => {
    return await request.get(baseUrl);
}

export const getOneById = async (id) => {
    return await request.get(baseUrl + `/${id}`);
}

export const editById = async (id, data, accessToken) => {
    return await request.put(baseUrl + `/${id}`, data, accessToken);
}

export const deleteById = async(id, data, accessToken) => {
    return await request.del(baseUrl + `/${id}`, data, accessToken);
}