import React, { useState, useEffect } from "react"
import { useSprings, animated, interpolate } from "react-spring"
import { frontDeck } from "./gifs"
import { navigate } from "gatsby"
import { AnimatedStack, AnimatedStackCard } from './styled'

let cards = frontDeck.sort(() => Math.random() - 0.5)

const Stack = ({ navigateTo = '/' }) => {
  const [end, setEnd] = useState(false)
  // These two are just helpers, they curate spring data, values that are later being interpolated into css
  const to = i => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i === cards.length-1 ? (cards.length * 100 + 600) : i * 100,
  })
  
  const from = i => ({ x: 0, rot: 0, scale: 1.5, y: 1000 })
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${ r / 10}deg) rotateZ(${r}deg) scale(${s})`
  
  useEffect(() => {
    if(end){
      navigate(navigateTo)
    }
  }, [end])


    const [loaded, setLoaded] = useState(0)
    const [props, set] = useSprings(cards.length, i => ({...to(i),from: from(i)})) // Create a bunch of springs using the helpers above
    const handleClick = () => {        
        props.forEach((element, n) => {
            set(m => {
                let i = props.length-m             
                if (i !== props.length-n) return 
                let x = (1500 * Math.cos(2 * Math.PI * i / frontDeck.length));
                let y = (1500 * Math.sin(2 * Math.PI * i / frontDeck.length));
                return {
                    x: x,
                    y: y,
                    scale: 1,
                    rot: -10 + Math.random() * 20,
                    delay: i * 100,
                    onRest: () => setEnd(true)
                }
            })
        })
    }

  return (
    <React.Fragment>
        {loaded !== cards.length && cards.map(card => (
        <img
            key={card}
            style={{ position: 'absolute', visibility: "hidden" }}
            src={card}
            onLoad={()=>setLoaded(loaded+1)}
        />
        ))}
      {props.map(({ x, y, rot, scale }, i) => (
      <AnimatedStack
        onClick={handleClick}
        key={i}
        style={{transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)}}
      >
        {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
        <AnimatedStackCard
          style={{
            transform: interpolate([rot, scale], trans),
            backgroundImage: (loaded === cards.length && i !== cards.length-1) ? `url(${cards[i]})` : 'none',
          }}
        >
        {i === cards.length-1 && ' Klick to start new game' }

        </AnimatedStackCard>
      </AnimatedStack>
        ))}
    </React.Fragment>
  )
}

export default Stack
