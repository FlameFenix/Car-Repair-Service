import './login.css';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState('');

    const loginDataHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        const formData = { ...values }

        console.log(formData);
    }

    const dataValidateHandler = (e, bound) => {
        if (e.target.value.length < bound) {
            setErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        } else {
            setErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        }
    }

    return (
        <div className="login-form">
            <form onSubmit={loginSubmitHandler}>
                <div className="container">
                    <label htmlFor="email"><b>Имейл</b></label>
                    <input
                        type="text"
                        placeholder="Въведете имейл"
                        value={values.email}
                        onChange={(e) => loginDataHandler(e)}
                        onBlur={(e) => dataValidateHandler(e, 3)}
                        name="email" id="email"
                        required
                    />

                    {errors.email &&
                        < p className="form-error">
                            Имейла трябва да съдържа минимум 3 символа!
                        </p>
                    }

                    <label htmlFor="password"><b>Парола</b></label>
                    <input
                        type="password"
                        placeholder="Въведете парола"
                        value={values.password}
                        onChange={(e) => loginDataHandler(e)}
                        onBlur={(e) => dataValidateHandler(e, 3)}
                        name="password"
                        id="password"
                        required
                    />
                    {errors.password &&
                        <p className="form-error">
                            Паролата трябва да съдържа минимум 3 символа!
                        </p>
                    }

                    <button type="submit" className="loginbtn">Вход</button>

                    <p>Нямаш акаунт? <NavLink to="/Register">Създаване на нов</NavLink>.</p>
                </div>
            </form>
        </div>
    );
}

export default Login;