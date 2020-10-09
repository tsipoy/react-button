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
                const buttons = {{
                    type: "<button />",
                    textContent: "Default",
                    className: "button",
                }}
            />
            <Buttons 
                const buttons = {{
                    type: "$:hover, $:focus",
                    textContent: "Default",
                    className: "button"
                }}
            />
            <Buttons
                const buttons = {{
                    type: "<button variant: outline/>",
                    textContent: "Default",
                    className: "buttonVariantOuline",
                }}
            />
            <Buttons
                const buttons = {{
                    type: "$:hover, $:focus",
                    textContent: "Default",
                    className: "buttonVariantOuline",
                }}
            />
            <Buttons
                const buttons = {{
                    type: "<button variant: text />",
                    textContent: "Default",
                    className: "buttonVariantText"
                }}
            />
            <Buttons
                const buttons = {{
                    type: "$:hover, $:focus",
                    textContent: "Default",
                    className: "buttonVariantText"
                }}
            />
            <Buttons
                const buttons = {{
                    type: "<button disableShadow/>",
                    textContent: "Default",
                    className: "buttonDesableShadow"
                }}
            />
            <Buttons
                const buttons = {{
                    type: "<button disable/>",
                    name: "Default",
                    className: "buttonDisable",
                }}
            />
            <Buttons
                const buttons = {{
                    type: "",
                    name: "Default",
                    className: "",
                }}
            />
            <Buttons
                const buttons = {{
                    type: "",
                    name: "Default",
                    className: "",
                }}
            />
        </main>
    )
}
export default App