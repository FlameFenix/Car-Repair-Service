import { Link } from "react-router-dom";

import './Administration.css';

export const Administration = () => {
    return (
        <div className="admininstration-menu">
            <h2>Administration Menu</h2>
            <ul className="list-items">
                <li className="list-item">
                    <Link to='/Administration/Contacts/Messages'>
                        Contacts Messages
                    </Link>
                </li>

                <li className="list-item">
                    <Link to='/Administration/Bookings'>
                        Bookings
                    </Link>
                </li>
            </ul>

        </div>
    );
}