import React, {  Fragment } from 'react';

const Layout = ({ children }) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {children}
    </main>
  </Fragment>
);

export default Layout;
