import styled from 'styled-components';

const Button = styled.div`
    display: flex;
    background: rgba(255, 255, 255, 0.75);
    color: black;

    padding: 8px;
    border-radius: 8px;
    
    text-decoration: none;

    cursor: pointer;

    transition: all 0.5s ease;
    :hover {
        background: rgba(255, 255, 255, 1);
    }
`;

export default Button;
