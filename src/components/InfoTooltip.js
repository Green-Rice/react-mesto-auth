import React from "react";
import advance from '../images/tick.png';
import fiasco from '../images/cross.png';


function InfoTooltip(props) {

    const isLegal = props.isLegal

    return (
        <div className='popup popup_type_infotooltip popup_opened'>
            <div className="popup__container">
                <button type="button" className="popup__close" ></button>
                <img
                className="popup__baner"
                alt=''
                src=''
                />
                <h2 className="popup__title" style={{color: "white"}}>111111111</h2>
            </div>
        </div>
    )
}
export default InfoTooltip;