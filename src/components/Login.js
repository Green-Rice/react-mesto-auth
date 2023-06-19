import React from "react";
import { useState } from "react";
function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onLoginUser({email, password});
    }

    return (
        <div className="auth">
            <div className="auth__container">

                <h1 className="auth__title">Вход</h1>

                <form className="auth__form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="auth__input"
                        required
                        name="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)} />

                    <span className="popup__input-error" />

                    <input
                        type="password"
                        placeholder="Пароль"
                        className="auth__input"
                        name="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)} />

                    <span className="popup__input-error" />
                </form>
                <button className="auth__btn" type="submit">Войти</button>
            </div>
        </div>
    )
}
export default Login;