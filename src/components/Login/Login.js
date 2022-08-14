import './login.css';

import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import * as userService from '../../services/userService';
import { AuthContext } from '../../contexts/authContext';

function Login() {

    const navigate = useNavigate();

    const { onLogin } = useContext(AuthContext);

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState('');

    const onChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        userService.loginUser(values)
            .then(res => {
                if(res === undefined) {
                    return alert('Wrong email or password')
                }
                onLogin(res)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                navigate('/login')
            });

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
                        type="email"
                        placeholder="Въведете имейл"
                        value={values.email}
                        onChange={(e) => onChangeHandler(e)}
                        onBlur={(e) => dataValidateHandler(e, 6)}
                        name="email" id="email"
                        required
                    />

                    {errors.email &&
                        <p className="form-error">
                            Имейла трябва да съдържа минимум 6 символа!
                        </p>
                    }

                    <label htmlFor="password"><b>Парола</b></label>
                    <input
                        type="password"
                        placeholder="Въведете парола"
                        value={values.password}
                        onChange={(e) => onChangeHandler(e)}
                        onBlur={(e) => dataValidateHandler(e, 4)}
                        name="password"
                        id="password"
                        required
                    />
                    {errors.password &&
                        <p className="form-error">
                            Паролата трябва да съдържа минимум 4 символа!
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