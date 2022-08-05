import { useEffect } from "react";
import { useState } from "react";

import * as bookingService from '../../services/bookingService';
import { CatalogueItem } from "./CatalogueItem";

import './Catalogue.css'

export const Catalogue = () => {

    const [bookingCatalogue, setBookingCatalogue] = useState([]);

    useEffect(() => {
        bookingService.listOfBooking()
            .then(res => {
                setBookingCatalogue(res)
                console.log(res)
            })
    }, []);

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>More details</th>
                </tr>
                {bookingCatalogue.length !== 0
                    ? bookingCatalogue.map(x => <CatalogueItem key={x._id} {...x} />)
                    : <div>There are no records</div>}
            </table>
        </div>
    );
}