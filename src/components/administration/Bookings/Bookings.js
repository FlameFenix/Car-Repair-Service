import { useState } from "react";
import { useContext } from "react";
import { BookingContext } from "../../../contexts/bookingContext";
import { BookingItem } from "./BookingItem/BookingItem";
import { DeleteItem } from "./BookingItem/DeleteItem/DeleteItem";
import { EditItem } from "./BookingItem/EditItem/EditItem";

import './Bookings.css'

export const Bookings = () => {

    const { bookings, onEditHandler, onDeleteHandler } = useContext(BookingContext);

    const [userAction, setUserAction] = useState({
        edit: false,
        delete: false
    });

    const [bookingItem, setBookingItem] = useState({});

    const onEditAction = (e, id) => {
        e.preventDefault();

        setUserAction(state => ({
            ...state,
            edit: true
        }))

        setBookingItem(bookings.find(x => x._id === id));
    }

    const onDeleteAction = (e, id) => {

        e.preventDefault();

        setUserAction({
            edit: false,
            delete: true
        });

        setBookingItem(bookings.find(x => x._id === id));
    }

    const closeTab = () => {
        setUserAction({
            edit: false,
            delete: false
        });
    }

    const onSubmitHandler = (data) => {
        setBookingItem(data);
        onEditHandler(data);
    }

    const DeleteHandler = (e, id) => {
        e.preventDefault();
        onDeleteHandler(id);
    }

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
                        ? bookings.map(x => <BookingItem key={x._id} {...x} editAction={onEditAction} deleteAction={onDeleteAction} />)
                        : <tr className="noRecords"><td colSpan={'4'}>There are no records yet</td></tr>}
                </tbody>
            </table>

            {userAction.edit &&
                <EditItem {...bookingItem} closeTab={closeTab} onSubmitHandler={onSubmitHandler} />
            }

            {userAction.delete &&
                <DeleteItem {...bookingItem} closeTab={closeTab} DeleteHandler={DeleteHandler} />
            }

        </div>
    );
}