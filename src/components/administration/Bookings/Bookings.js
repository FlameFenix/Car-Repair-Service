import { useContext } from "react";
import { BookingContext } from "../../../contexts/bookingContext";
import { BookingItem } from "./BookingItem/BookingItem";

import './Bookings.css'

export const Bookings = () => {
    const { bookings } = useContext(BookingContext);

    return (
        <div>
            <table className="admin-panel-bookings">
                <thead>
                    <tr>

                    </tr>
                    <tr>
                        <th>Име</th>
                        <th>Имейл</th>
                        <th>Услуга</th>
                        <th>Съобщение</th>
                        <th>Дата</th>
                        <th>Повече информация</th>
                    </tr>
                </thead>

                <tbody>
                    {bookings
                        ? bookings.map(x => <BookingItem key={x._id} {...x} />)
                        : <tr className="noRecords"><td colSpan={'4'}>There are no records yet</td></tr>}
                </tbody>
            </table>
    </div>
    );
}