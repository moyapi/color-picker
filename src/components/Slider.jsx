import React,{useState,useEffect} from 'react'

const Slider = (props) => {
    const [vl, vlChange] = useState(0);
    
    const rangeChange = () => {
        const idName = "range"+props.id;
        const dom = document.getElementById(idName);
        vlChange(dom.value);
        props.clChange(props.id, dom.value)
    }

    useEffect(()=>{
        const idName = "range"+props.id;
        const dom = document.getElementById(idName);
        dom.addEventListener("change",rangeChange);
        return () => {
            dom.removeEventListener("change",rangeChange);
        }
    })
    return(
        <div>
            {props.colorWord}<input type="range" defaultValue={0} min={0} max={255} id={"range"+props.id}/>{vl}
        </div>
    )
}

export default Slider;