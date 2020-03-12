import Title from '../elements/Title';
import Button from '../elements/Button';
import React from 'react';
import styled from 'styled-components';
import Routes from '../routes';
import History from '../history';

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 5px;
    & > * {
        margin-right: 5px;
    }
`;
const IndexPage = () => {
    return (
        <>
            <Title>Hello</Title>
            <Title delay={1}>It's me</Title>
            <Title delay={2} fontSize={60}>
                AymanDev
            </Title>
            <Title delay={3} fontSize={20}>
                This is my temporary personal website
            </Title>
            <ButtonsWrapper>
                <Button onClick={History.push(Routes.BIO_PATH)}>Bio</Button>
                <Button onClick={History.push(Routes.PROJECTS_PATH)}>Projects</Button>
            </ButtonsWrapper>
        </>
    );
};

export default IndexPage;
