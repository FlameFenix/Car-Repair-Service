import './register.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as userService from '../../services/userService';
import { AuthContext } from '../../contexts/authContext';
import { useContext } from 'react';

function Register() {

    const navigate = useNavigate();

    const { onLogin } = useContext(AuthContext);

    const [values, setValues] = useState({
        email: '',
        password: '',
        pswRepeat: '',
    });

    const [errors, setErrors] = useState('');

    const onChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
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

    const registerHandler = (e) => {
        e.preventDefault();

        if (values.password !== values.pswRepeat) {
            return alert('Password and confirm password are different')
        }
        userService.registerUser(values);

        userService.loginUser(values)
            .then(res => {
                onLogin(res)
                navigate('/')
            });

        navigate('/');
    }

    return (
        <div className="register-form">
            <form onSubmit={registerHandler}>
                <div className="container">
                    <h1>Регистрация</h1>
                    <p>Всички полета са задължителни!</p>

                    <label htmlFor="email"><b>Имейл</b></label>
                    <input type="email"
                        placeholder="Въведете имейл"
                        name="email"
                        id="email"
                        onBlur={(e) => dataValidateHandler(e, 6)}
                        onChange={onChangeHandler}
                        value={values.email}
                        required
                    />

                    {errors.email &&
                        < p className="form-error">
                            Имейла трябва да съдържа минимум 6 символа!
                        </p>
                    }

                    <label htmlFor="psw"><b>Парола</b></label>
                    <input type="password"
                        placeholder="Въведете парола"
                        name="password"
                        id="password"
                        onBlur={(e) => dataValidateHandler(e, 4)}
                        onChange={onChangeHandler}
                        value={values.password}
                        required
                    />

                    {errors.password &&
                        <p className="form-error">
                            Паролата трябва да съдържа минимум 4 символа!
                        </p>
                    }

                    <label htmlFor="pswRepeat"><b>Повтори парола</b></label>
                    <input
                        type="password"
                        placeholder="Въведете парола отново"
                        name="pswRepeat"
                        id="pswRepeat"
                        onBlur={(e) => dataValidateHandler(e, 4)}
                        onChange={onChangeHandler}
                        value={values.pswRepeat}
                        required
                    />

                    {errors.password &&
                        <p className="form-error">
                            Паролата трябва да съдържа минимум 4 символа!
                        </p>
                    }

                    <p>By creating an account you agree to our <Link to="/privacy">Terms and Privacy</Link>.</p>
                    <input type="submit" className="registerbtn" value="Регистрация" />

                    <p>Already have an account? <NavLink to="/Login">Sign in</NavLink>.</p>
                </div>
            </form>
        </div>
    );
}

export default Register;