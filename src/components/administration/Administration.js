import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

import './Administration.css';

export const Administration = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="admininstration-menu" >
            {user.userData.email === 'flamefenix@abv.bg' &&
                <Fragment>
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
                    </Fragment>

            }


                    {
                        user.userData.email !== 'flamefenix@abv.bg' &&
                        <p className="access-denied"> Access denied you should be administrator! </p>
                    }
                </div >

    );
}