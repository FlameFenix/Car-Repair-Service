import { useEffect } from "react";
import { useState } from "react";

import * as bookingService from '../../services/bookingService';
import { CatalogueItem } from "./CatalogueItem";

import './Catalogue.css'

export const Catalogue = () => {

    const [bookingCatalogue, setBookingCatalogue] = useState([]);

    const [filteredCatalogue, setFilteredCatalogue] = useState([]);

    const [searchValues, setSearchValues] = useState({
        inputText: '',
        criteria: ''
    });

    useEffect(() => {
        bookingService.listOfBooking()
            .then(res => {
                setBookingCatalogue(res)
                setFilteredCatalogue(res)
                console.log(res)
            })
            .catch(error => console.log(error))
    }, []);

    const onSubmitSearchHandler = (e) => {
        e.preventDefault();
        const inputText = searchValues.inputText;
        const criteria = searchValues.criteria;

        if (inputText === '' ||
            criteria === '') {
            return alert('Всички полета са задължителни')
        }

        setFilteredCatalogue(filteredCatalogue.filter(x => x[criteria] === inputText));


        console.log(e.target);
    }

    const onChangeSearchValues = (e) => {
        console.log(e.target.name, e.target.value);
        setSearchValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td className="searchBar" colSpan={'4'}>

                            <form action="" className="searchForm" onSubmit={onSubmitSearchHandler}>
                                <label htmlFor="inputText">Търсене:</label>
                                <input class="inputText" id="inputText" name="inputText" type="text" onChange={onChangeSearchValues} />
                                <label htmlFor="criteria">Филтър:</label>
                                <select name="criteria" className="criteria" id="criteria" onChange={onChangeSearchValues}>
                                    <option value="">Избери филтър</option>
                                    <option value="fullName">Име</option>
                                    <option value="service">Услуга</option>
                                    <option value="date">Дата</option>
                                </select>
                                <input type="submit" value={'Search'} className="searchBtn" />
                            </form>
                        </td>
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
        </div>
    );
}