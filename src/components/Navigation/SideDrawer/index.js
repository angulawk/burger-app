import React, { Fragment } from "react";
import styled, {css} from "styled-components";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import Backdrop from "../../UI/Backdrop";

function SideDrawer({
  closeSideDrawer,
  showSideDrawer
}) {
  return (
    <Fragment>
      <Backdrop show={showSideDrawer} onClick={closeSideDrawer} />
        <SideDrawer.Container showSideDrawer={showSideDrawer}>
          <SideDrawer.LogoContainer>
            <Logo />
          </SideDrawer.LogoContainer>      
          <SideDrawer.NavigationContainer>
            <NavigationItems />
          </SideDrawer.NavigationContainer>
        </SideDrawer.Container>
    </Fragment>
  )
}

SideDrawer.Container = styled.div`
  ${({ showSideDrawer }) => css`
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
    transition: all 0.3s ease-in-out;
    transform: ${showSideDrawer ? "translateX(0)" : "translateX(-100%)"};

    @media(min-width: 500px) {
      display: none;
    }
  `}
`;

SideDrawer.NavigationContainer = styled.nav``;

SideDrawer.LogoContainer = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

export default SideDrawer;