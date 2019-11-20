import styled, { keyframes } from "styled-components";

export const EasterEggWrapper = styled.div`
  position: absolute;

  left: 0;
  top: 20px;
  width: 50px;
  height: 50px;
`;

const EasterEggAppearAnimation = keyframes`
  from{
    opacity: 0;
    transform: rotateZ(0deg) translateX(-50px);
  }
  to{
    opacity: 1;
    transform: rotateZ(45deg) translateX(-20px);
  }
`;
export const EasterEgg = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 0;

  ${EasterEggWrapper}:hover & {
    animation: ${EasterEggAppearAnimation} 2s ease forwards;
  }
`;
