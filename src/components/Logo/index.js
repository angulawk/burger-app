import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import styled from "styled-components";

const Logo = () => (
  <Logo.Container>
    <Logo.ImageContainer src={burgerLogo} alt="MyBurger"/>
  </Logo.Container>
)

Logo.Container = styled.div`
  background-color: #FFF;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
`;

Logo.ImageContainer = styled.img`
  height: 100%;
`;

export default Logo;