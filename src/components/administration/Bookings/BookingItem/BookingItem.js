export const BookingItem = (
    {   _id,
        fullName,
        email,
        comment,
        service,
        date,
        editAction,
        deleteAction }
) => {

    return (
        <tr className="user-information">
            <th className="user-name">{fullName}</th>
            <th className="email">{email}</th>
            <th className="comment">{comment}</th>
            <th className="service"> {service}</th>
            <th className="date">{date}</th>
            <th className="button">
                <button className="editBtn" onClick={(e) => editAction(e, _id)}>Промяна</button>
                <button className="deleteBtn" onClick={(e) => deleteAction(e, _id)} >Премахване</button>
            </th>
        </tr>
    );

}