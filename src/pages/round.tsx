import React, { useState, } from "react"
import Card from "../components/card"
import { Button, Checkbox, Container } from "../components/styled"


const RoundPage = () => {
  let names = ["David", "Manuel", "Abdul", "Simon", "Bernd", "Mathias", "Jens", "Markus"]
  let sizes = ["coffee", "0", "1", "3", "5", "8", "13", "20", "40", "100"]

  const createState = (names) => {
    const users = {}
    names.forEach((name, i) => {
      users[i] = {
        id: i,
        name: name,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        flipped: false
      }
    });
    return users
  }
  const [state, setState] = useState(createState(names))
  const [all, toggleAll] = useState(false)
  const [zenMode, setZenMode] = useState(false)

  const handleFlip = (id) => {
    toggleAll(false)
    let newState = state[id]
    newState.flipped = !newState.flipped
    setState({ ...state, [id]: newState })
  }

  const flippAll = async () => {
    toggleAll(true)
    let newState = {}
    for (let key in state) {
      let user = state[key]
      user.flipped = !user.flipped
      newState[user.id] = user
    }
    setState({ ...state, newState })
  }


  return (
    <div>
      <Button onClick={flippAll}>
        flip all
      </Button>
      <Checkbox htmlFor="zenmode">
        zen
        <input type="checkbox" id="zenmode" onClick={() => setZenMode(!zenMode)}/>
      </Checkbox>
      <Container>
          {names.map((user, i) => (
            <Card
              id={state[i].id}
              key={state[i].id}
              name={state[i].name}
              flipped={state[i].flipped}
              delay={all ? i * 50 : 0}
              size={state[i].size}
              zenMode={zenMode}
              handleClick={handleFlip}
            />
          ))}
      </Container>
      </div>
  )
}
export default RoundPage
