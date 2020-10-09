import React from "react";


function Buttons(props) {
    return (
        <div>
            <p className= "p">{props.button.type}</p>
            <button className= "button">{props.button.textContent}</button>
        </div>
    )
}
export default Buttons