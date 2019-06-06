import React from "react";
import styled from "styled-components";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import hamburger from "../../../assets/images/hamburger.png";

const Toolbar = ({onClick}) => (
  <Toolbar.Container>
    <Toolbar.HamburgerContainer onClick={onClick}>
      <Toolbar.ImageHamburger src={hamburger} alt="MyBurger"/>
    </Toolbar.HamburgerContainer>
    <Toolbar.LogoContainer>
      <Logo />
    </Toolbar.LogoContainer>
    <Toolbar.Navigation>
      <NavigationItems />
    </Toolbar.Navigation>
  </Toolbar.Container>
)

Toolbar.Container = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

Toolbar.Navigation = styled.nav`
  height: 100%;
  display: none;

  @media(min-width: 500px) {
    display: block;
  }
`;

Toolbar.HamburgerContainer = styled.a``;
Toolbar.ImageHamburger = styled.img`
  width: 50px;
  height: 50px;
`;

Toolbar.LogoContainer = styled.div`
  height: 80%
`;
export default Toolbar;