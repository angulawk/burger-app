import React, { Fragment } from 'react';
import styled from "styled-components";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";

const Layout = ({ children }) => (
  <Fragment>
    <Toolbar />
    <SideDrawer />
    <div>Backdrop</div>
    <Layout.MainContent>
      {children}
    </Layout.MainContent>
  </Fragment>
);

Layout.MainContent = styled.div`
  margin-top: 72px;
`;

export default Layout;
