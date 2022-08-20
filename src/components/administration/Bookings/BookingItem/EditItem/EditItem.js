import { useContext, useState } from 'react';

import * as bookingService from '../../../../../services/bookingService';

import { AuthContext } from '../../../../../contexts/authContext';

import './EditItem.css'

export const EditItem = ({ _id, fullName, email, service, date, comment, closeTab, onSubmitHandler }) => {

    const { user } = useContext(AuthContext);

    const [formValues, setFormValues] = useState({
        fullName,
        email,
        service,
        date,
        comment
    });

    const submitHandler = (e) => {
        e.preventDefault();

        bookingService.editById(_id, formValues, user.userData.accessToken)
            .then(res => {
                onSubmitHandler(res);
            });

        closeTab();
    }

    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div id="overlay">
            <div className="editForm">
                <h1 className="text-white mb-4">Промяна на детайлите</h1>
                <form onSubmit={submitHandler}>
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <input
                                type="text"
                                className="form-control border-0"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={onChangeHandler}
                                placeholder="Въведете име"
                            />

                        </div>
                        <div className="col-12 col-sm-6">
                            <input
                                type="email"
                                className="form-control border-0"
                                name="email"
                                value={formValues.email}
                                onChange={onChangeHandler}
                                placeholder="Въведете имейл"
                            />
                        </div>

                        <div className="col-12 col-sm-6">
                            <select
                                className="form-select border-0"
                                name="service"
                                value={formValues.service}
                                onChange={onChangeHandler}
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
                                    value={formValues.date}
                                    onChange={onChangeHandler}
                                    placeholder="Service Date"
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <textarea
                                className="form-control border-0"
                                name="comment"
                                value={formValues.comment}
                                onChange={onChangeHandler}
                                placeholder="Коментар"
                            >
                            </textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-secondary w-100 py-3" type="submit">Промени</button>
                            <button className="btn btn-secondary w-100 py-3" onClick={closeTab}>Отказ</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}