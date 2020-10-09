import React from "react";
import Buttons from "./Buttons"

function App() {
    const h1Style = {
        textAlign: "center"
    }
    return (
        <main style={h1Style}>
            <h1 style={h1Style}>Buttons</h1>
            <Buttons variant= "default"  type="<button />" name="Default"/>
            <Buttons variant= "outline"  type="<button variant: online />" name="Default"/>
            <Buttons variant= "text"  type="<button variant: text" name="Default"/>
            <Buttons variant= "disableShadow"  type="<button disableShadow/>" name="Default"/>
            <Buttons variant= "disable"  type="<button disable/>" name="Default"/>
            <Buttons variant= "textDisable"  type="button variant: text, disable" name="Default"/>
            <Buttons variant= "startIcon"  type="<button startIcon: local_grocery_store />" name="Default"/>
            <Buttons variant= "endIcon"  type="<button endIcon: local_grocery_store />" name="Default"/>
            <Buttons size= "sm"  type="<button size: sm />" name="Default"/>
            <Buttons size= "md"  type="<button size: md />" name="Default"/>
            <Buttons size= "lg"  type="<button size: lg />" name="Default"/>
            <Buttons color= "default"  type="<button color: default/>" name="Default"/>
            <Buttons color= "primary"  type="<button color: default/>" name="Primary"/>
            <Buttons color= "secondary"  type="<button color: default/>" name="Secondary"/>
            <Buttons color= "danger"  type="<button color: default/>" name="Danger"/>

            {/* <Buttons
                const buttons={{
                    type: "$:hover, $:focus",
                    textContent: "Default",
                    classtype: "buttonVariantOuline",
                }}
            />
            <Buttons
                const buttons={{
                    type: "<button variant: text />",
                    textContent: "Default",
                    className: "buttonVariantText"
                }}
            />
            <Buttons
                const buttons={{
                    type: "$:hover, $:focus",
                    textContent: "Default",
                    className: "buttonVariantText"
                }}
            />
            <Buttons
                const buttons={{
                    type: "<button disableShadow/>",
                    textContent: "Default",
                    className: "buttonDesableShadow"
                }}
            />
            <Buttons
                const buttons={{
                    type: "<button disable/>",
                    textContent: "Default",
                    className: "buttonDisable"
                }}
            />
            <Buttons
                const buttons={{
                    type: "<button variant: text, disable",
                    textContent: "Default",
                    className: "variantTextDisable"
                }}
            />
            <Buttons
                const buttons={{
                    type: "<button startIcon: local_grocery_store>",
                    textContent: "Default",
                    className: "startIcon"
                }}
            />
            <Buttons
                const buttons={{
                    type: "<button endIcon: local_grocery_store/>",
                    textContent: "Default",
                    className: "endIcon"
                }}
            />

            <Buttons
                const buttons={{
                    type: "<button size: sm />",
                    textContent: "Default",
                    className: "btnSizeSm"
                }}
            />
            <Buttons
                const buttons={{
                    type: "<button size: md />",
                    textContent: "Default",
                    className: "btnSizeMd"
                }}
            />
            <Buttons
                const buttons={{
                    type: "<button size: lg />",
                    textContent: "Default",
                    className: "btnSizelg"
                }}
            />
            <Buttons
                const buttons={{
                    type: "<button color: default/>",
                    textContent: "Default",
                    className: "colorDefault"
                }}
            />
            <Buttons
                const buttons={{
                    type: "<button color: primary />",
                    textContent: "Primary",
                    className: "colorPrimary"
                }}
            />
            
            <Buttons
                const buttons={{
                    type: "<button color: secondary />",
                    textContent: "Secondary",
                    className: "colorSecondary"
                }}
            />

            <Buttons
                const buttons={{
                    type: "<button color: danger />",
                    textContent: "Danger",
                    className: "colorDanger"
                }}
            /> */}
        </main>
    )
}
export default App