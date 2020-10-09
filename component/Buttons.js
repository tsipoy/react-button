import React from "react";

function Buttons(props) {
    let buttonStyle;
        if(props.variant == "default") {
            buttonStyle = "button";
        }

        if(props.variant == "outline") {
            buttonStyle = "buttonVariantOuline";
        }

        if(props.variant == "text") {
            buttonStyle = "buttonVariantText"
        }

        if(props.variant == "disableShadow") {
            buttonStyle = "buttonDesableShadow";
        }

        if(props.variant == "disable") {
            buttonStyle = "buttonDisable"
        }

        if(props.variant == "textDisable") {
            buttonStyle = "variantTextDisable"
        }

        if(props.variant == "startIcon") {
            buttonStyle = "startIcon"
        }

        if(props.variant == "endIcon") {
            buttonStyle = "endIcon"
        }

        if(props.size == "sm") {
            buttonStyle = "btnSizeSm"
        }

        if(props.size == "md") {
            buttonStyle = "btnSizeMd"
        }

        if(props.size == "lg") {
            buttonStyle = "btnSizelg"
        }

        if(props.color == "default") {
            buttonStyle = "colorDefault"
        }

        if(props.color == "primary") {
            buttonStyle = "colorPrimary"
        }

        if(props.color == "secondary") {
            buttonStyle = "colorSecondary"
        }

        if(props.color == "danger") {
            buttonStyle = "colorDanger"
        }
    return (
        <div>
            <p className= "p">{props.type}</p>
            <button className={buttonStyle}>{props.name}</button>
        </div>
    )
}
export default Buttons