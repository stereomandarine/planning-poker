import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    flex-wrap: wrap;
    align-items: center;
`;

export const Button = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 999;
`;

export const Checkbox = styled.label`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999;
`;


