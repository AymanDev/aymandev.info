import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
`;

const TextWrapper = styled.p`
  margin: 0;
  padding: 50px 25px 25px 25px;
`;
const BioPage = () => {
  return (
    <Wrapper>
      <TextWrapper>Полезная информация типа, да?!</TextWrapper>
    </Wrapper>
  );
};

export default BioPage;
