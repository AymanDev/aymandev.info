import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Title from './elements/Title';

const GlobalStyle = createGlobalStyle`
html, body{
  padding: 0;
  margin: 0;
}
`;
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;

    background: black;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const App = ({}) => {
    return (
        <Wrapper>
            <GlobalStyle />
            <Title>Hello</Title>
            <Title delay={1.25}>It's me</Title>
            <Title delay={2} fontSize={60}>
                AymanDev
            </Title>
            <Title delay={3.25} fontSize={20}>
                This is my temporary personal website
            </Title>
        </Wrapper>
    );
};
export default App;
