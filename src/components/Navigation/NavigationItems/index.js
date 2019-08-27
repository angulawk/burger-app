import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const NavigationItems = () => (
  <NavigationItems.Container>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </NavigationItems.Container>
);

NavigationItems.Container = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    flex-flow: row wrap;
  }
`;

export default NavigationItems;
