import React, { useState, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import { gifs, getGif } from "./gifs"
import { CardContainer, Card, CardFrontInner, Gif, Name, Inner, CardBack } from "./styled"

//from React-Spring examples with adjustments
const calc = (x, y) => [ -(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1,]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const AnimatedCard = ({ id, flipped, size, name, handleClick, delay = 0 }) => {
  
  const [revealed, setRevealed] = useState(false)

  const { transform, opacity } = useSpring({
    opacity: revealed ? 0 : 1,
    transform: `perspective(600px) rotateY(${revealed ? 0 : 180}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  useEffect(() => {
    if (delay === 0) {
      setRevealed(flipped)
      return
    }
    setTimeout(() => {
      set({ xys: calc(1000, 500) })
      reset()
      setRevealed(flipped)
    }, delay)

    const reset = () => {
      setTimeout(() => {
        set({ xys: [0, 0, 1] })
      }, 250)
    }
  }, [flipped, delay])

  return (
    <CardContainer
      onClick={() => handleClick(id)}
      onMouseMove={({ clientX: x, clientY: y }) =>  set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <Card style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
        <CardFrontInner>
          <Gif style={{ backgroundImage: `url(${getGif(size)})` }} />
          <Name>{name}</Name>
        </CardFrontInner>
      </Card>
      <CardBack style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(0deg)`) }}>
        <Inner>
          <Gif/>
          <Name>{name}</Name>
        </Inner>
      </CardBack>
    </CardContainer>
  )
}

export default AnimatedCard
