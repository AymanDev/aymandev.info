import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuWrapper = styled.div`
  position: fixed;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;

  z-index: 2;

  background: rgba(0, 0, 0, 0.5);

  & > * {
    margin-right: 5px;
  }
`;

const Menu = props => {
  return <MenuWrapper {...props}>{props.children}</MenuWrapper>;
};

const MenuItemWrapper = styled(Link)`
  height: 100%;
  font-size: 14px;
  color: white;
  padding: 10px;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);
`;
Menu.Item = props => {
  return <MenuItemWrapper {...props}>{props.children}</MenuItemWrapper>;
};

export default Menu;
