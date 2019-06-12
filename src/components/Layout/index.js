import React, { Component, Fragment } from 'react';
import styled from "styled-components";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }))
  }

  render() {
    return (
      <Fragment>
        <Toolbar onClick={this.sideDrawerToggleHandler} />
        <SideDrawer showSideDrawer={this.state.showSideDrawer} closeSideDrawer={this.sideDrawerCloseHandler} />
        <Layout.MainContent>
          {this.props.children}
        </Layout.MainContent>
      </Fragment>
    )
  }
};

Layout.MainContent = styled.div`
  margin-top: 72px;
`;

export default Layout;
