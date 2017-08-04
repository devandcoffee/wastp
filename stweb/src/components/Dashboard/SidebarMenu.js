import React from "react";
import { Menu, Icon } from "antd";
const { SubMenu } = Menu;

class SidebarMenu extends React.Component {
  linkTo = ({ key }) => {
    this.props.linkTo(key);
  };

  render() {
    return (
      <Menu
        onClick={this.linkTo}
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["0"]}
        defaultOpenKeys={["sub0"]}
        style={{ height: "100%" }}
      >
        <Menu.Item key="/">
          {
            <span>
              <Icon type="home" />Home
            </span>
          }
        </Menu.Item>
        <SubMenu
          key="managments"
          title={
            <span>
              <Icon type="solution" />Managment
            </span>
          }
        >
          <Menu.Item key="/tournaments">Tournaments</Menu.Item>
          <Menu.Item key="/teams">Teams</Menu.Item>
          <Menu.Item key="/players">Players</Menu.Item>
        </SubMenu>
        <Menu.Item key="/statistics">
          {
            <span>
              <Icon type="area-chart" />Statistics
            </span>
          }
        </Menu.Item>
      </Menu>
    );
  }
}

export default SidebarMenu;
