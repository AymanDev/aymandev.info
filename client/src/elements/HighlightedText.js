import styled, { keyframes } from "styled-components";

const fadeInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
  }
`;

export const HighlightedText = styled.p`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  
  font-size: ${props => props.size || 16}px;

  z-index: 1;
  padding: 5px;
  margin-bottom: 5px;
  
  opacity: 0;
  animation ${fadeInTop} 2s ease forwards;
  animation-delay: ${props => props.delay || 0}s;
`;
