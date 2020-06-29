import React from "react"
import { CardContainer, Gif, Name, Inner, CardBack } from "./styled"

const simpleCard = ({ flipped, size, name }) => {
  return (
    <CardContainer>
      <CardBack>
        <Inner>
          <Gif>{flipped ? size : ""}</Gif>
          <Name>{name}</Name>
        </Inner>
      </CardBack>
    </CardContainer>
  )
}

export default simpleCard
