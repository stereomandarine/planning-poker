import styled from 'styled-components'
import { animated } from "react-spring"

export const AnimatedStack = styled(animated.div)`
    cursor:'pointer';
    position: absolute;
    width: 50%;
    height: 100%;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AnimatedStackCard = styled(animated.div)`
  background-color: white;
  background-size: contain;
  background-position: center center;
  width: 45vh;
  max-width: 300px;
  height: 85vh;
  max-height: 570px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
`;

export const CardContainer = styled(animated.div)`
  margin: 20px;
  width: 10%;
`;

export const Card = styled(animated.div)`
    width: 100%;
    height: 250px;
    margin: auto;
    border-radius: 8px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
    background: white;
    position: relative;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    }
`;

export const CardBack = styled(Card)`
  position: absolute;
  top: 0;
  left: 0;
  background-image: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  transform: rotateX(0deg) rotateY(0deg);
`;

export const CardFrontInner = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const Gif = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgb(254, 248, 232);
    background-size: contain;
    background-position: center center;
`

export const Name = styled.div `
  padding: 10px 0;
  width: 100%;
  background: white;
`;

export const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    flex-flow: column;
    transform: rotateY(180deg);
    border: 10px solid white;
    border-radius: 8px;
    box-sizing: border-box;
    transform: rotateY(180deg);
`;
