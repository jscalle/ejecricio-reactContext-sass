import { useState } from "react";

export default function useInitialState () {
    const [state, setState] = useState(0)

    const Sum = (num) => {
        setState(state + parseInt(num))
    } 

    const Rest = () => {
        setState(state-1)
    }

    const Reset = () => {
        setState(0)
    }

    return{state, Sum, Rest, Reset}
} 