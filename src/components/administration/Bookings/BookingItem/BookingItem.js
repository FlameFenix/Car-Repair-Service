import { Link } from 'react-router-dom';

export const BookingItem = ({ _id, fullName, email, comment, service, date, editAction }) => {
    
    return (
        <tr className="user-information">
            <th className="user-name">{fullName}</th>
            <th className="email">{email}</th>
            <th className="comment">{comment}</th>
            <th className="service"> {service}</th>
            <th className="date">{date}</th>
            <th className="button">
                <button className="editBtn" onClick={(e) => editAction(e, _id)}>Промяна</button>
                <Link className="deleteBtn" to={`/Administration/Bookings/DeleteItem/${_id}`}>Премахване</Link>
            </th>
        </tr>
    );

}