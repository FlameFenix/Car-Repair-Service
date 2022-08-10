import { useContext, useState } from "react";
import { CatalogueContext } from "../../../contexts/catalogueContext";

export const SearchBar = () => {

    const { bookingCatalogue, onSearchHandler } = useContext(CatalogueContext);

    const onSubmitSearchHandler = (e) => {
        e.preventDefault();
        const inputText = searchValues.inputText;
        const criteria = searchValues.criteria;

        if (inputText === '' ||
            criteria === '') {
            return onSearchHandler(bookingCatalogue);
        }

        onSearchHandler(bookingCatalogue.filter(x => x[criteria] === inputText));
    }

    const onChangeSearchValues = (e) => {
        setSearchValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const [searchValues, setSearchValues] = useState({
        inputText: '',
        criteria: ''
    });

    return (
        <td className="searchBar" colSpan={'4'}>

            <form action="" className="searchForm" onSubmit={onSubmitSearchHandler}>
                <label htmlFor="inputText">Търсене:</label>
                <input className="inputText" id="inputText" name="inputText" type="text" onChange={onChangeSearchValues} />
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
    );
}
