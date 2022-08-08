import { Link } from 'react-router-dom';
import './CatalogueItem.css'

export const CatalogueItem = ({ _id, fullName, service, date }) => {
    return (
        <tr className="user-information">
            <th className="user-name">{fullName}</th>
            <th className="service"> {service}</th>
            <th className="date">{date}</th>
            <th className="button">
                <Link className="detailsBtn" to={`/Details/${_id}`}>Информация</Link>
            </th>
        </tr>
    );

}