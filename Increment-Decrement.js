import React, { useState } from 'react';

export default function Update(){

    const [count, setCount] = useState(0);

    function Increment(){
        setCount(count + 1);
           
    }

    function Decrement (){
        setCount(count -1);
    }

    return (

        <>
        <div>
            <button onClick ={Increment}>Increment Button</button>
            <span>{count}</span>
            <button onClick ={Decrement}>Decrement Button </button>
           
        </div>
        </>

    )
}
