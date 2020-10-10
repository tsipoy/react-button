import React from "react";

function Buttons(props) {
    let buttonStyle;
        if(props.variant == "default") {
            buttonStyle = "button";
        } else if(props.variant == "outline") {
            buttonStyle = "buttonVariantOuline";
        } 
        
        else if(props.variant == "text") {
            buttonStyle = "buttonVariantText";
        } 
        
        else if(props.variant == "disableShadow") {
            buttonStyle = "buttonDesableShadow";
        } 
        
        else if(props.variant == "disable") {
            buttonStyle = "buttonDisable";
        } 
        
        else if(props.variant == "textDisable") {
            buttonStyle = "variantTextDisable";
        } 
        
        else if(props.variant == "startIcon") {
            buttonStyle = "startIcon"
        }

        else if(props.variant == "endIcon") {
            buttonStyle = "endIcon"
        }

        else if(props.size == "sm") {
            buttonStyle = "btnSizeSm"
        }

        else if(props.size == "md") {
            buttonStyle = "btnSizeMd"
        }

        else if(props.size == "lg") {
            buttonStyle = "btnSizelg"
        }

        else if(props.color == "default") {
            buttonStyle = "colorDefault"
        }

        else if(props.color == "primary") {
            buttonStyle = "colorPrimary"
        }

        else if(props.color == "secondary") {
            buttonStyle = "colorSecondary"
        }

        else if(props.color == "danger") {
            buttonStyle = "colorDanger lastBtn"
        }

        else {
            buttonStyle = "buttonVariantOuline";
        }
    return (
        <div>
            <p className= "p">{props.type}</p>
            <button className={buttonStyle}>{props.name}</button>
        </div>
    )
}
export default Buttons