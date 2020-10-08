import React from "react";
import Buttons from "./Buttons"

function App() {
    const h1Style = {
        textAlign: "center"
    }
    return (
        <main style={h1Style}>
            <h1 style={h1Style}>Buttons</h1>
            <Buttons />
        </main>
    )
}
export default App