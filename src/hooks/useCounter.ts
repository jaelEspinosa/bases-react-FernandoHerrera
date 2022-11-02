import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {gsap} from 'gsap'

interface UseCouterArg {
    maxCount: number;
    initialValue: number;
}



export const useCounter = ({maxCount = 10, initialValue  }:UseCouterArg)=>{
    const [counter, setCounter] = useState(initialValue)

    const counterElement = useRef<HTMLHeadingElement>(null)
  
    const tl = useRef(gsap.timeline())
    
    const handleClick = () => {

      setCounter(prev => Math.min(prev + 1, maxCount))
    }
    
    useLayoutEffect(() => {
       if(!counterElement.current) return    

        tl.current.to(counterElement.current,{y: -10, duration: 0.2, ease:'ease.out'})
                  .to(counterElement.current,{y: 0, duration: 0.6, ease:'bounce.out'})
                  .pause()
     
    }, [])
    useEffect(() => {

      // if (counter < maxCount) return
       tl.current.play(0)
   
    }, [counter, maxCount])
    
  

    return{
        handleClick,
        counterElement,
        counter
    }

}