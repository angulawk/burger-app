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
    width: auto;
    display: block;
  }
`;

const hoverStyles = css`
  border-bottom: 2px solid #FFF;
  color: #FFF9C4;
`

const hoverMobileStyles = css`
  border-bottom: 2px solid transparent;
  color: #FFF9C4;
`

const activeStyles = css`
  color: #FFF9C4;
`

NavigationItem.LinkContainer = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: bold;
  height: 100%;
  width: 100%;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  display: block;
  transition: all .3s ease-in-out;

  @media (min-width: 500px) {
    ${({ active }) => active ? "color: #FFF9C4" : "color: #FFF"}
    width: auto;
    border-bottom: 0;
  }

  :hover {
    ${hoverMobileStyles}

    @media (min-width: 500px) {
      ${hoverStyles}
    }
  }
`;

export default NavigationItem;