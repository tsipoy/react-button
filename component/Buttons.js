import React from "react";


function Buttons(props) {
    return (
        <div>
            <p className= "p">{props.buttons.type}</p>
            <button className={props.buttons.className}>{props.buttons.textContent}</button>
        </div>
    )
}
export default Buttons