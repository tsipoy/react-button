import React from "react";
import Buttons from "./Buttons"

function App() {
    const h1Style = {
        textAlign: "center"
    }
    return (
        <main style={h1Style}>
            <h1 style={h1Style}>Buttons</h1>
            <Buttons
                const button = {{
                    type: "<button />",
                    textContent: "Default",
                    className: "button",
                }}
            />
            <Buttons 
                const button = {{
                    type: "$:hover, $:focus",
                    textContent: "Default",
                    className: "button"
                }}
            />
            <Buttons
                const button = {{
                    type: "<button variant: outline/>",
                    textContent: "Default",
                    className: "buttonVariantOuline",
                }}
            />
            <Buttons
                const button = {{
                    type: "$:hover, $:focus",
                    textContent: "Default",
                    className: "buttonVariantOuline",
                }}
            />
            <Buttons
                const button = {{
                    type: "<button variant: text />",
                    textContent: "Default",
                    className: "buttonVariantText"
                }}
            />
            <Buttons
                const button = {{
                    type: "$:hover, $:focus",
                    textContent: "Default",
                    className: "buttonVariantText"
                }}
            />
            <Buttons
                const button = {{
                    type: "<button disableShadow/>",
                    textContent: "Default",
                    className: "buttonDesableShadow"
                }}
            />
            <Buttons
                const button = {{
                    type: "$:hover, $:focus",
                    name: "Default",
                }}
            />
        </main>
    )
}
export default App