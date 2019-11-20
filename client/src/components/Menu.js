import React from "react";
import styled from "styled-components";
import history from "../history";
import { useLocation } from "react-router-dom";

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

const MenuItemWrapper = styled.a`
  height: 100%;
  font-size: 14px;
  color: white;
  padding: 10px;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.active ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.25)"};
`;
const Item = props => {
  const { pathname } = useLocation();
  return (
    <MenuItemWrapper
      onClick={() => history.push(props.to)}
      active={props.to === pathname}
      {...props}
    >
      {props.children}
    </MenuItemWrapper>
  );
};

Menu.Item = Item;

export default Menu;
