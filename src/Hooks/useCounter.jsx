import { useState } from 'react'

export const useCounter = (initial = 0, min, max) => {
    const [counter, setCounter] = useState(initial)
    
    let handleSumar = () => {
        if (counter < max) {
            setCounter (counter + 1)
        }
    }
    
    let handleRestar = () => {
        if (counter > min) {
            setCounter(counter - 1)
        }
    }

    return {counter, handleSumar, handleRestar}
}