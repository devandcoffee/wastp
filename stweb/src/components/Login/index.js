import React, { Component } from 'react';
import { Card, Row, Col, Form, Icon, Input, Button } from 'antd';
import './login.css';

const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    return (
      <Row style={{ paddingTop: 100 }}>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 12, offset: 6 }}
          md={{ span: 8, offset: 8 }}
          xl={{ span: 6, offset: 10 }}
        >
          <Card title="Login" style={{ width: 300 }}>
            <Form id="login-form" onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              </FormItem>
              <FormItem>
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              </FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Login;
