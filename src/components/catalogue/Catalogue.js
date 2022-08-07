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
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>More details</th>
                    </tr>
                </thead>

                <tbody>
                    {bookingCatalogue 
                        ? bookingCatalogue.map(x => <CatalogueItem key={x._id} {...x} />)
                        : <tr><td>There are no records</td></tr>}
                </tbody>
            </table>
        </div>
    );
}