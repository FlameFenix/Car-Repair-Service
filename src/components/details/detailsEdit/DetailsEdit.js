import { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import * as bookingService from '../../../services/bookingService';

import './DetailsEdit.css';

import { AuthContext } from '../../../contexts/authContext';
import { BookingContext } from '../../../contexts/bookingContext';

export const DetailsEdit = () => {

    const itemId = useParams();

    const { user } = useContext(AuthContext);

    const { onEditHandler } = useContext(BookingContext);

    const navigate = useNavigate();

    const [catalogueItem, setCatalogueItem] = useState({});

    useEffect(() => {
        bookingService.getOneById(itemId.id).then(res => {
            setCatalogueItem(res);
            console.log(res);
        })
    }, []);

    const [errors, SetErrors] = useState('');

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;

    const valuesHandler = (e) => {
        setCatalogueItem(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (catalogueItem.service === "0") {
            return alert('Трябва да изберете услуга!');
        }

        if (catalogueItem.date === '') {
            return alert('Трябва да изберете дата!');
        }

        bookingService.editById(itemId.id, catalogueItem, user.userData.accessToken);
        onEditHandler(catalogueItem);
        navigate('/Catalogue');
    }

    const nameValidationHandler = (e, bound) => {
        if (e.target.value.length < bound) {
            SetErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        } else {
            SetErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        }
    }

    const emailValidationHandler = (e) => {
        if (!emailRegex.test(e.target.value)) {
            SetErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        } else {
            SetErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        }
    }

    const serviceValidationHandler = (e) => {
        if (e.target.value === '0') {
            SetErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        } else {
            SetErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        }
    }

    const onCancelHandler = (e, id) => {
        e.preventDefault();
        return navigate(`/Details/${id}`)
    }

    return (
        <div className="editForm">
            <h1 className="text-white mb-4">Промяна на детайлите</h1>
            <form onSubmit={submitHandler}>
                <div className="row g-3">
                    <div className="col-12 col-sm-6">
                        <input
                            type="text"
                            className="form-control border-0"
                            name="fullName"
                            value={catalogueItem.fullName}
                            onChange={(e) => valuesHandler(e)}
                            onBlur={(e) => nameValidationHandler(e, 3)}
                            placeholder="Въведете име"
                        />

                        {errors.fullName &&
                            < p className="form-error">
                                Името трябва да съдържа минимум 3 символа!
                            </p>
                        }

                    </div>
                    <div className="col-12 col-sm-6">
                        <input
                            type="email"
                            className="form-control border-0"
                            name="email"
                            value={catalogueItem.email}
                            onChange={(e) => valuesHandler(e)}
                            onBlur={(e) => emailValidationHandler(e)}
                            placeholder="Въведете имейл"
                        />

                        {errors.email &&
                            <p className="form-error">
                                Невалиден имейл адрес!
                            </p>
                        }
                    </div>

                    <div className="col-12 col-sm-6">
                        <select
                            className="form-select border-0"
                            name="service"
                            value={catalogueItem.service}
                            onChange={(e) => valuesHandler(e)}
                            onBlur={(e) => serviceValidationHandler(e)}
                        >
                            <option value="0">Избери услуга</option>
                            <option value="Диагностика">Диагностика</option>
                            <option value="Обслужване">Обслужване</option>
                            <option value="Трансмисия">Трансмисия</option>
                            <option value="Ходова част">Ходова част</option>
                            <option value="Климатична система">Климатична система</option>
                        </select>

                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="date" id="date1" data-target-input="nearest">
                            <input
                                type="date"
                                className="form-control border-0 datetimepicker-input"
                                name="date"
                                value={catalogueItem.date}
                                onChange={(e) => valuesHandler(e)}
                                placeholder="Service Date"
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <textarea
                            className="form-control border-0"
                            name="comment"
                            value={catalogueItem.comment}
                            onChange={(e) => valuesHandler(e)}
                            placeholder="Коментар"
                        >
                        </textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-secondary w-100 py-3" type="submit">Промени</button>
                        <button className="btn btn-secondary w-100 py-3" onClick={(e) => onCancelHandler(e, catalogueItem._id)}> Отказ </button>
                    </div>
                </div>
            </form>
        </div>
    );
}