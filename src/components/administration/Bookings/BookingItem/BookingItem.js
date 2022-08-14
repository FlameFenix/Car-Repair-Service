import { Link } from 'react-router-dom';

export const BookingItem = ({ _id, fullName, email, comment, service, date }) => {
    return (
        <tr className="user-information">
            <th className="user-name">{fullName}</th>
            <th className="email">{email}</th>
            <th className="comment">{comment}</th>
            <th className="service"> {service}</th>
            <th className="date">{date}</th>
            <th className="button">
                <Link className="editBtn" to={`/Administration/Bookings/EditItem/${_id}`}>Промяна</Link>
                <Link className="deleteBtn" to={`/Administration/Bookings/DeleteItem/${_id}`}>Премахване</Link>
            </th>
        </tr>
    );

}