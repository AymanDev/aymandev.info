import React from "react";
import { Router, Route } from "react-router-dom";
import { BIO_PAGE, INDEX_PAGE, PROJECTS_PAGE } from "../routes";
import IndexPage from "./IndexPage";
import BioPage from "./BioPage";
import ProjectsPage from "./ProjectsPage";
import history from "../history";
import Menu from "./Menu";

const App = () => {
  return (
    <Router history={history}>
      <Menu>
        <Menu.Item to={INDEX_PAGE}>Index</Menu.Item>
        <Menu.Item to={BIO_PAGE}>Bio</Menu.Item>
        <Menu.Item to={PROJECTS_PAGE}>Projects</Menu.Item>
      </Menu>
      <Route exact path={INDEX_PAGE}>
        <IndexPage />
      </Route>
      <Route exact path={BIO_PAGE}>
        <BioPage />
      </Route>
      <Route exact path={PROJECTS_PAGE}>
        <ProjectsPage />
      </Route>
    </Router>
  );
};

export default App;
