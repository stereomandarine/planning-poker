import React, { useState, useEffect } from "react"
import Card from "../components/card"
import Stack from "../components/card/stack"
import FAQ from "../components/faq"
import { Flex, Container } from '../components/styled'

const IndexPage = () => {
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
  const [started, setStarted] = useState(false)
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
    <Flex>
      <Container>
        <FAQ />
      </Container>
      <Container>
          <Stack navigateTo="round" />
      </Container>
    </Flex>
  )
}
export default IndexPage
