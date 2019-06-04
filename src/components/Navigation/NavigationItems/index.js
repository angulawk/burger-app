import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const NavigationItems = () => (
  <NavigationItems.Container>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/" active>Checkout</NavigationItem>
  </NavigationItems.Container>
)

NavigationItems.Container = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`;

export default NavigationItems;