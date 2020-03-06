import styled, { keyframes } from 'styled-components';

const appearingAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export interface TitleProps {
    fontSize?: number;
    delay?: number;
}
const Title = styled.div<TitleProps>`
    font-size: ${props => props.fontSize}px;
    text-align: center;
    opacity: 0;

    animation: ${appearingAnimation} 2s forwards;
    animation-delay: ${props => props.delay}s;
`;
Title.defaultProps = {
    fontSize: 45,
    delay: 0,
};

export default Title;
