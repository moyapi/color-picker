import React,{useState, useEffect} from 'react'

const LikeButton = (props) =>{

    const [count, counter] = useState(0);
    const [limit, release] = useState(true);

    const countUp = () =>{
        counter(count + 1);
    };

    useEffect(()=>{
        document.getElementById("counter").addEventListener("click", countUp);

        if(count >=10){
            counter(0);
        }
        return(
            document.getElementById("counter").removeEventListener("counter", countUp)
        )
    },[limit]);

    return(
        <div>
        <button id={"counter"}>いいね数：{count}</button>
        <button onClick={()=>release(!limit)}>解除</button>
        </div>
    )
}

export default LikeButton