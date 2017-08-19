import React from "react";
import { PropTypes } from "prop-types";
import { Layout, Icon } from "antd";
import Settings from "./Settings";
import SidebarMenu from "./SidebarMenu";
import "./dashboard.css";

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  linkTo = route => {
    this.context.router.history.push(route);
  };

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Layout>
          <Sider
            style={{ overflow: "auto" }}
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <SidebarMenu linkTo={this.linkTo} />
          </Sider>
          <Layout id="layout-right">
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
              <div className="settings">
                <Settings />
              </div>
            </Header>
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                style={{ padding: 24, background: "#fff", textAlign: "center" }}
              >
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              STweb ©2017 Created by DevAndCoffee
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
