import React from "react";
import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

const NavigationItem = ({link, children}) => (
  <NavigationItem.Container>
    <NavigationItem.LinkContainer to={link} exact>
      {children}
    </NavigationItem.LinkContainer>
  </NavigationItem.Container>
);

NavigationItem.Container = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  color: #000;

  @media (min-width: 500px) {
    width: auto;
    display: block;
  }

  a {
    text-decoration: none;
  }
`;

const hoverStyles = css`
  border-bottom: 2px solid #fff;
  color: #fff9c4;
`;

const hoverMobileStyles = css`
  border-bottom: 2px solid transparent;
  color: #fff9c4;
`;

const activeClassName = "active";

NavigationItem.LinkContainer = styled(NavLink).attrs({
  activeClassName
})`
  color: #000;
  text-decoration: none;
  font-weight: bold;
  height: 100%;
  width: 100%;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  display: block;
  transition: all 0.3s ease-in-out;

  &.${activeClassName} {
    color: #fff9c4;
  }

  @media (min-width: 500px) {
    ${({active}) => (active ? "color: #FFF9C4" : "color: #FFF")}
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

// NavigationItem.LinkContainer = styled.span`
//   color: #000;
//   text-decoration: none;
//   font-weight: bold;
//   height: 100%;
//   width: 100%;
//   padding: 16px 10px;
//   border-bottom: 4px solid transparent;
//   box-sizing: border-box;
//   display: block;
//   transition: all 0.3s ease-in-out;

//   @media (min-width: 500px) {
//     ${({active}) => (active ? "color: #FFF9C4" : "color: #FFF")}
//     width: auto;
//     border-bottom: 0;
//   }

//   :hover {
//     ${hoverMobileStyles}

//     @media (min-width: 500px) {
//       ${hoverStyles}
//     }
//   }
// `;

export default NavigationItem;
