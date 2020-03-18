import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch, Router } from 'react-router-dom';
import IndexPage from './containers/IndexPage';
import Routes from './routes';
import BioPage from './containers/BioPage';
import ProjectsPage from './containers/ProjectsPage';
import NotFoundPage from './containers/NotFoundPage';
import History from './history';
import Button from './elements/Button';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

const PROJECTS = gql`
    {
        getProjects {
            id
            name
            description
        }
    }
`;

const App = () => {
    const response = useQuery(PROJECTS);
    console.log(response);
    return (
        <Wrapper>
            <GlobalStyle />
            <Router history={History.history}>
                <Switch>
                    <Route exact path={Routes.INDEX_PATH}>
                        <IndexPage />
                    </Route>
                    <Route path={Routes.INDEX_PATH}>
                        <Button onClick={History.back()}>{'< Back'}</Button>
                        <Route exact path={Routes.BIO_PATH}>
                            <BioPage />
                        </Route>
                        <Route exact path={Routes.PROJECTS_PATH}>
                            <ProjectsPage />
                        </Route>
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </Route>
                </Switch>
            </Router>
        </Wrapper>
    );
};
export default App;
