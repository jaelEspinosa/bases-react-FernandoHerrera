import { useEffect, useRef, useState } from "react"
import {gsap} from 'gsap'

const MAXIMUN_COUNT = 10;


export const CounterEffect = ({ initialValue = 0 }) => {

  const [counter, setCounter] = useState(5)

  const counterElement = useRef<HTMLHeadingElement>(null)

  const handleClick = () => {

    setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT))


  }

  useEffect(() => {
    if (counter < MAXIMUN_COUNT) return;

    const tl = gsap.timeline();
    tl.to(counterElement.current,{y: -10, duration: 0.2, ease:'ease.out'})
      .to(counterElement.current,{y: 0, duration: 0.6, ease:'bounce.out'})

   

  }, [counter])

  return (
    <>
      <hr />
      <h1>CounterEffect</h1>

      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>
        +1
      </button>

    </>
  )
}
