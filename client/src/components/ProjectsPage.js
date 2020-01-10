import React from "react";
import ProjectCard from "../elements/ProjectCard";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;

  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
`;
const WrapperProjects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 50px 25px 25px 25px;

  & > * {
    margin-right: 10px;
  }
`;
const ProjectsPage = () => {
  return (
    <Wrapper>
      <WrapperProjects>
        <ProjectCard
          title="RU Ring of Elysium"
          img=""
          short="Фанатский проект. Занимался разработкой чат-ботов для Discord сервера, а также вебом."
        />
        <ProjectCard
          title="The Last Frame"
          img=""
          short="Аркадная игра разработанная на хакатоне за 36 часа."
        />
        <ProjectCard
          title="Breaking Bread"
          img=""
          short="Аркадная игра разработанная на хакатоне за 48 часов."
        />
      </WrapperProjects>
    </Wrapper>
  );
};

export default ProjectsPage;
