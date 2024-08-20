import { useState } from "react";

function COUNT (){
    const [count, setCounter] = useState(0);
    

    return(
        <>
            <h1>hello</h1>
            <p>You clicked {count} times</p>
            <button onClick={()=>
                setCounter(count +1)
            }>
                

            </button>
            <label>name</label>
            <input type="text" onChange={(event)=>{
                console.log(event.target.value.repeat(116))
            }}/>
            
        </>
    )
}
export default COUNT ;