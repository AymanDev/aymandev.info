import React from "react";
import styled from "styled-components";

const WrapperCard = styled.div`
  max-width: 300px;

  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
`;
const Title = styled.h3`
  width: 100%;
  text-align: center;
`;
const ProjectCard = ({ title, img, short }) => {
  return (
    <WrapperCard>
      <Title>{title}</Title>
      {/*<img src={img} alt={title + " logo"} />*/}
      <p>{short}</p>
    </WrapperCard>
  );
};
export default ProjectCard;
