import React from 'react';
import { Redirect } from 'react-router-dom';
import { Dropdown, Button, Menu, Icon } from 'antd';

const styles = {
  stMenu: {
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)',
    borderRadius: 5,
  },
};

const SettingsOptions = props => (
  <Menu onClick={props.linkTo} style={styles.stMenu}>
    <Menu.Item key="user-logout">
      <span className="ant-dropdown-link">
        <Icon type="logout" />
        Logout
      </span>
    </Menu.Item>
  </Menu>
);

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null
    }
  }

  linkTo = () => {
    this.setState({ redirectTo: '/login' })
  }

  render() {
    return (
      <div>
        {this.state.redirectTo ? <Redirect to={{ pathname: this.state.redirectTo }} /> :
          <Dropdown
            trigger={['click']}
            overlay={
              <SettingsOptions
                linkTo={this.linkTo}
              />
            }
          >
            <Button
              className="button-right"
              size="large"
              shape="circle"
              type="ghost"
              icon="setting"
            />
          </Dropdown>
        }
      </div>
    );
  }
}

export default Settings;

