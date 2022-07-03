import './login.css';
import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <div className="login-form">
            <form action="action_page.php">
                <div className="container">
                    <label htmlFor="email"><b>Имейл</b></label>
                    <input type="text" placeholder="Въведете имейл" name="email" id="email" required />

                    <label htmlFor="psw"><b>Парола</b></label>
                    <input type="password" placeholder="Въведете парола" name="psw" id="psw" required />

                    <button type="submit" className="loginbtn">Вход</button>

                    <p>Нямаш акаунт? <NavLink to="/Register">Създаване на нов</NavLink>.</p>
                </div>
            </form>
        </div>
    );
}

export default Login;