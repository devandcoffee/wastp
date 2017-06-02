import React from 'react';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;



class SidebarMenu extends React.Component {
  linkTo = ({ key }) => {
    this.props.linkTo(key);
  }

  render() {
    return (
      <Menu
        onClick={this.linkTo}
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub0']}
        style={{ height: '100%' }}
      >
        <Menu.Item key="/dashboard/home">{<span><Icon type="home" />Home</span>}</Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="solution" />Gestión</span>}>
          <Menu.Item key="/dashboard/gestion/torneos">Torneos</Menu.Item>
          <Menu.Item key="/dashboard/gestion/equipos">Equipos</Menu.Item>
          <Menu.Item key="/dashboard/gestion/jugadores">Jugadores</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="area-chart" />Estadísticas</span>}>
          <Menu.Item key="/dashboard/estadisticas/torneos">Torneos</Menu.Item>
          <Menu.Item key="/dashboard/estadisticas/equipos">Equipos</Menu.Item>
          <Menu.Item key="/dashboard/estadisticas/jugadores">Jugadores</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default SidebarMenu;
