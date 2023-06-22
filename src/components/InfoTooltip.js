import React from "react";
import advance from '../images/tick.png';
import fiasco from '../images/cross.png';


function InfoTooltip(props) {

    const isLegal = props.isLegal

    return (
        <div className={`popup popup_type_infotooltip ${props.isOpen && 'popup_is-opened'}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" onClick={props.onClose} ></button>
                <img
                className="popup__baner"
                src={isLegal? 'advance' : 'fiasco'}
                alt={isLegal? advance : fiasco}
                />
                <h2 className="popup__title" style={{color: "white"}}>{isLegal? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}</h2>
            </div>
        </div>
    )
}
export default InfoTooltip;