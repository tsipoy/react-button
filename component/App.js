import React from "react";
import Buttons from "./Buttons";

function App() {
    return (
        <main>
            <h1>Buttons</h1>
            <div className= "media">
                <Buttons variant= "default"  type="<button />" name="Default" />
                <Buttons variant= "outline"  type="<button variant: online />" name="Default" />
                <Buttons variant= "text"  type="<button variant: text" name="Default" />
                <Buttons variant= "disableShadow"  type="<button disableShadow />" name="Default" />
                <Buttons variant= "disable"  type="<button disable />" name="Default" />
                <Buttons variant= "textDisable"  type="<button variant: text, disable />" name="Default" />
                <Buttons variant= "startIcon"  type="<button startIcon: local_grocery_store />" name="Default" />
                <Buttons variant= "endIcon"  type="<button endIcon: local_grocery_store />" name="Default" />
                <Buttons size= "sm"  type="<button size: sm />" name="Default" />
                <Buttons size= "md"  type="<button size: md />" name="Default" />
                <Buttons size= "lg"  type="<button size: lg />" name="Default" />
                <Buttons color= "default"  type="<button color: default />" name="Default" />
                <Buttons color= "primary"  type="<button color: primary />" name="Primary" />
                <Buttons color= "secondary"  type="<button color: secondary />" name="Secondary" />
                <Buttons color= "danger"  type="<button color: danger />" name="Danger" />
            </div>
        </main>
    )
}
export default App