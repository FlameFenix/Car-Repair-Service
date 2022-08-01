import './register.css'
import { NavLink, useNavigate } from 'react-router-dom';
import * as userService from '../../services/userService';

function Register() {

    const navigate = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault();

        const { email, password } =
            Object.fromEntries(new FormData(e.target));

        userService.registerUser({ email, password });

        userService.loginUser({email, password});

        navigate('/');
    }

    return (
        <div className="register-form">
            <form onSubmit={registerHandler}>
                <div className="container">
                    <h1>Регистрация</h1>
                    <p>Всички полета са задължителни!</p>

                    <label htmlFor="email"><b>Имейл</b></label>
                    <input type="text" placeholder="Въведете имейл" name="email" id="email" required />

                    <label htmlFor="psw"><b>Парола</b></label>
                    <input type="password" placeholder="Въведете парола" name="password" id="password" required />

                    <label htmlFor="psw-repeat"><b>Повтори парола</b></label>
                    <input type="password" placeholder="Въведете парола отново" name="psw-repeat" id="psw-repeat" required />
                    <p>By creating an account you agree to our <a href="#">Terms and Privacy</a>.</p>
                    <input type="submit" className="registerbtn" value="Регистрация" />

                    <p>Already have an account? <NavLink to="/Login">Sign in</NavLink>.</p>
                </div>
            </form>
        </div>
    );
}

export default Register;