import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
function Register(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onRegistUser({email, password});
    }

    return (
        <div className="auth">
            <div className="auth__container">

                <h1 className="auth__title">Регистрация</h1>

                <form className="auth__form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="auth__input"
                        name='email'
                        required
                        value={email}
                        onChange={event => setEmail(event.target.value)} />

                    <span className="popup__input-error" />

                    <input
                        type="password"
                        placeholder="Пароль"
                        className="auth__input"
                        name="password"
                        required
                        value={password}
                        onChange={event => setPassword(event.target.value)} />

                    <span className="popup__input-error" />
                </form>
                <button className="auth__btn" type="submit">Зарегистрироваться</button>
                <p className="auth__subtitle">Уже зарегистрированы? <Link to="/sign-in" className="auth__login-link">Войти</Link></p>
            </div>
        </div>
    )
}
export default Register;