import React from "react";
import styled from "styled-components";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";

const Toolbar = () => (
  <Toolbar.Container>
    <div>MENU</div>
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

Toolbar.LogoContainer = styled.div`
  height: 80%
`;
export default Toolbar;