import { useEffect } from "react";
import { useState } from "react";

import * as bookingService from '../../services/bookingService';
import { CatalogueItem } from "./CatalogueItem";

import './Catalogue.css'
import { SearchBar } from "./searchBar/SearchBar";
import { CatalogueContext } from "../../contexts/catalogueContext";

export const Catalogue = () => {

    const [bookingCatalogue, setBookingCatalogue] = useState([]);

    const [filteredCatalogue, setFilteredCatalogue] = useState([]);


    useEffect(() => {
        bookingService.listOfBooking()
            .then(res => {
                setBookingCatalogue(res)
                setFilteredCatalogue(res)
            })
            .catch(error => console.log(error))
    }, []);

    const onSearchHandler = (filteredItems) => {
        setFilteredCatalogue(filteredItems);
    }

    return (
        <div>
            <CatalogueContext.Provider value={{ bookingCatalogue, onSearchHandler }}>

                <table>
                    <thead>
                        <tr>
                            <SearchBar />
                        </tr>
                        <tr>
                            <th>Име</th>
                            <th>Услуга</th>
                            <th>Дата</th>
                            <th>Повече информация</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredCatalogue
                            ? filteredCatalogue.map(x => <CatalogueItem key={x._id} {...x} />)
                            : <tr className="noRecords"><td colSpan={'4'}>There are no records yet</td></tr>}
                    </tbody>
                </table>
            </CatalogueContext.Provider>
        </div>
    );
}