
function Login() {


    return (
        <div className="auth">
            <div className="auth__container">

                <h1 className="auth__title">Вход</h1>

                <form className="auth__form">
                    <input
                        type="email"
                        placeholder="Email"
                        className="auth__input"
                        required />

                    <span className="popup__input-error" />

                    <input type="password" placeholder="Пароль" className="auth__input" />

                    <span className="popup__input-error" />
                </form>
                <button className="auth__btn" type="submit">Войти</button>
            </div>
        </div>
    )
}
export default Login;