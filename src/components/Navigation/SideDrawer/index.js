import React from "react";
import styled from "styled-components";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";

function SideDrawer() {
  return (
    <SideDrawer.Container>
      <SideDrawer.LogoContainer>
        <Logo />
      </SideDrawer.LogoContainer>      
      <SideDrawer.NavigationContainer>
        <NavigationItems />
      </SideDrawer.NavigationContainer>
    </SideDrawer.Container>
  )
}

SideDrawer.Container = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #FFF;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;

  @media(min-width: 500px) {
    display: none;
  }

  .open {
    transform: translateX(0);
  }

  .close {
    transform: translateX(-100%);
  }
`;

SideDrawer.NavigationContainer = styled.nav``;

SideDrawer.LogoContainer = styled.div`
  height: 11%
`;

export default SideDrawer;