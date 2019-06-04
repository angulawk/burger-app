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
  width: 100%;
  align-items: center;

  @media (min-width: 500px) {
    margin: 10px 0;
    width: auto;
    display: block;
  }
`;

const activeStyles = css`
  background-color: #FFF;
  border-bottom: 4px solid #40A4C8;
  color: #000;
`

const activeMobileStyles = css`
  background-color: #FFF;
  border-bottom: 4px solid transparent;
  color: #40A4C8;
`

NavigationItem.LinkContainer = styled.a`
  color: #000;
  text-decoration: none;
  height: 100%;
  width: 100%;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  display: block;

  :hover,
  :active {
    ${activeMobileStyles}

    @media (min-width: 500px) {
      ${activeStyles}
    }
  }

  ${({ active }) => active && activeMobileStyles}

  @media (min-width: 500px) {
    ${({ active }) => active && activeStyles}
  }

  @media (min-width: 500px) {
    width: auto;
    border-bottom: 0;
  }
`;

export default NavigationItem;