import { useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

import './booking.css'

function Booking() {

    const { user } = useContext(AuthContext);

    const [values, setValues] = useState({
        fullName: '',
        email: user.userData.email,
        service: '0',
        date: '',
        comment: '',
    });

    const [errors, SetErrors] = useState('');

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;

    const valuesHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (values.service === "0") {
            return alert('Трябва да изберете услуга!');
        }

        if (values.date === '') {
            return alert('Трябва да изберете дата!');
        }

        console.log(values);
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

    return (
        <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s" >
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-6 py-5">
                        <div className="py-5">
                            <h1 className="text-white mb-4">Certified and Award Winning Car Repair Service Provider</h1>
                            <p className="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                            <h1 className="text-white mb-4">Book For A Service</h1>
                            <form onSubmit={submitHandler}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control border-0"
                                            name="fullName"
                                            value={values.fullName}
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
                                            value={values.email}
                                            onChange={(e) => valuesHandler(e)}
                                            onBlur={(e) => emailValidationHandler(e)}
                                            placeholder="Въведете имейл"
                                        />

                                        {errors.email &&
                                            < p className="form-error">
                                                Невалиден имейл адрес!
                                            </p>
                                        }
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <select
                                            className="form-select border-0"
                                            name="service"
                                            value={values.service}
                                            onChange={(e) => valuesHandler(e)}
                                            onBlur={(e) => serviceValidationHandler(e)}
                                        >
                                            <option value="0">Избери услуга</option>
                                            <option value="1">Диагностика</option>
                                            <option value="2">Обслужване</option>
                                            <option value="3">Service 3</option>
                                        </select>

                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date1" data-target-input="nearest">
                                            <input
                                                type="date"
                                                className="form-control border-0 datetimepicker-input"
                                                name="date"
                                                value={values.date}
                                                onChange={(e) => valuesHandler(e)}
                                                placeholder="Service Date"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            className="form-control border-0"
                                            name="comment"
                                            value={values.comment}
                                            onChange={(e) => valuesHandler(e)}
                                            placeholder="Коментар"
                                        >
                                        </textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-secondary w-100 py-3" type="submit">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Booking;