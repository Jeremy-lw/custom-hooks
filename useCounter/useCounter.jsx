import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const[counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    }

    const decrease = (value = 1) => {
        //if (counter >= 1) {
        setCounter(counter - value)
        //} else { return };
        
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return{
        counter,
        increment,
        decrease,
        reset: reset,
    }
}