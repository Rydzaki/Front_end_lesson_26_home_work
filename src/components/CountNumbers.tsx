import React, {useState} from 'react'

export default function CountNumbers() {

    const [step, setStep] = useState<number>(1);

    const stepPlus = () => {setStep(step + 1);};
    const stepMinus = () => {setStep(step - 1);};

    const [count, setCount] = useState<number>(0);

    const increment = () => {setCount(count + step)};
    const decrement = () => {setCount(count - step);};
    const zero = () => {setCount(0);};
    const multi = () => {setCount(count * 2);};

  return (
    <div>
        <button onClick={increment}>+1</button>
        <p>{count}</p>
        <button onClick={decrement}>-1</button>
        <button onClick={zero}>0</button>
        <button onClick={multi}>x2</button>
        
        <p>============Task 2==================</p>
        <button onClick={stepPlus}>Step+</button>
        <p>шаг: {step}</p>
        <button onClick={stepMinus}>Step-</button>




    </div>
  )
}