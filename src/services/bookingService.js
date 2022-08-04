import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/booking'

export const bookForService = async (bookingData, accessToken) => {
    return await request.post(baseUrl, bookingData, accessToken);
}

export const listOfBooking = async () => {
    return await request.get(baseUrl);
}