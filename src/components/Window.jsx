import React from 'react'
import Slider from "./Slider"
import "../App.css";

let red = 0;
let green = 0;
let blue = 0;
const Window = () => {
    const Change = (id, value) => {
        const bcColor = document.getElementById("jsColor");        
        switch (id) {
            case 0:
                red = value
                break;
            case 1:
                green = value;
                break;
            case 2:                
                blue = value
                break;
            default:                
                break;        
        }
        bcColor.style.backgroundColor = "RGB(+"+red+","+green+","+blue+")";
    }
    return (
        <div>
            <div className={"colorWindow"} id={"jsColor"}></div>
            <Slider colorWord={"赤"} id={0} clChange={Change} />
            <Slider colorWord={"緑"} id={1} clChange={Change} />
            <Slider colorWord={"青"} id={2} clChange={Change} />
        </div>
    )
}

export default Window;