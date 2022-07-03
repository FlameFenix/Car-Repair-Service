import './register.css'
import { NavLink } from 'react-router-dom';

function Register() {
    return (
        <div className="register-form">
            <form action="action_page.php">
                <div className="container">
                    <h1>Регистрация</h1>
                    <p>Всички полета са задължителни!</p>

                    <label htmlFor="email"><b>Имейл</b></label>
                    <input type="text" placeholder="Въведете имейл" name="email" id="email" required />

                    <label htmlFor="psw"><b>Парола</b></label>
                    <input type="password" placeholder="Въведете парола" name="psw" id="psw" required />

                    <label htmlFor="psw-repeat"><b>Повтори парола</b></label>
                    <input type="password" placeholder="Въведете парола отново" name="psw-repeat" id="psw-repeat" required />
                    <p>By creating an account you agree to our <a href="#">Terms and Privacy</a>.</p>
                    <button type="submit" className="registerbtn">Регистрация</button>
                    
                    <p>Already have an account? <NavLink to="/Login">Sign in</NavLink>.</p>
                </div>
            </form>
        </div>
    );
}

export default Register;