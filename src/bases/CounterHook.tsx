import { useCounter } from "../hooks/useCounter"

interface Props {
  initialValue : number;
}

export const CounterHook = ({initialValue}:Props) => {

const {counterElement, handleClick, counter} = useCounter({
  maxCount: 10,
  initialValue:0,


}) 
  return (
    <>
      <hr />
      <h1>Counter Hook</h1>

      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>
        +1
      </button>

    </>
  )
}
