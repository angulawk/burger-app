import React, { Fragment } from 'react';
import styled from "styled-components";

const Layout = ({ children }) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Layout.MainContent>
      {children}
    </Layout.MainContent>
  </Fragment>
);

Layout.MainContent = styled.div`
  margin-top: 16px;
`;

export default Layout;
