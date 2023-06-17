import React from "react";
function Register() {


    return (
        <div className="auth">
            <div className="auth__container">

                <h1 className="auth__title">Регистрация</h1>

                <form className="auth__form">
                    <input
                     type="email"
                     placeholder="Email"
                     className="auth__input"
                     required/>

                    <span className="popup__input-error"/>

                    <input type="password" placeholder="Пароль" className="auth__input"/>

                    <span className="popup__input-error"/>
                </form>
                <button className="auth__btn" type="submit">Зарегистрироваться</button>
                <p className="auth__subtitle">Уже зарегистрированы? Войти</p>
            </div>
        </div>
    )
}
export default Register;