import React from "react";
import styled, { css } from "styled-components";

const NavigationItem = ({
  link,
  children,
  active
}) => (
  <NavigationItem.Container>
    <NavigationItem.LinkContainer href={link} active={active}>
      {children}
    </NavigationItem.LinkContainer>
  </NavigationItem.Container>
)

NavigationItem.Container = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;

  @media (min-width: 500px) {
    margin: 10px 0;
    width: 100%;
    display: block;
  }
`;

const activeStyles = css`
  background-color: #000;
  border-bottom: 4px solid #40A4C8;
  color: #FFF;
`

NavigationItem.LinkContainer = styled.a`
  color: #FFF;
  text-decoration: none;
  height: 100%;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  display: block;

  :hover,
  :active {
    ${activeStyles}
  }

  ${({ active }) => active && activeStyles}

  @media (min-width: 500px) {
    width: 100%;
  }
`;

export default NavigationItem;