import React from "react";
import './style.css'


function Buttons(props) {
    const btn1 = {
        backgroundColor: "#E0E0E0",
        paddingRight: "16px",
        paddingLeft: "16px",
        paddingBottom: "8px",
        paddingTop: "8px",
        borderRadius: "6px",
        fontSize: "14px",
        lineHeight: "20px",
        textAlign: "center",
        color: "#3F3F3F",
        border: "none"
    }
        return (
            <ul>
                <li>
                    <p>Button</p>
                    <button style={btn1}>Default</button>
                </li>
                <li><button className="btn1Hover">Default</button></li>
                {/*
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li> */}
            </ul>
        )
    }
export default Buttons