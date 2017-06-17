import React, { Component } from 'react';
import { Button, Card, Row, Col, Form, Input, DatePicker, InputNumber } from 'antd';

const FormItem = Form.Item;

class TournamentsAdd extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row>
          <Button onClick={this.props.backToList} icon="arrow-left"> Back to List </Button>
        </Row>
        <Row>
          <Card title="New Tournament" bordered={false} style={{ width: '100%', marginTop: '25px' }}>
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <Row gutter={25}>
                <Col md={8}>
                  <FormItem label="Name">
                    {getFieldDecorator('name')(
                      < Input placeholder="Name" />
                    )}
                  </FormItem>
                </Col>
                <Col md={8}>
                  <FormItem label="Start Date">
                    {getFieldDecorator('start_date')(
                      <DatePicker format="DD-MM-YYYY HH:mm:ss" showTime style={{ width: '100%' }} />
                    )}
                  </FormItem>
                </Col>
                <Col md={8}>
                  <FormItem label="Amount Teams">
                    {getFieldDecorator('amount_teams')(
                      <InputNumber min={2} max={50} style={{ width: '100%' }} />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <FormItem label="Description">
                  {getFieldDecorator('description')(
                    <Input type="textarea" rows={4} />
                  )}
                </FormItem>
              </Row>
              <Row>
                <FormItem>
                  <Button type="primary" htmlType="submit" size="large" icon="save">Save</Button>
                </FormItem>
              </Row>
            </Form>
          </Card>
        </Row>
      </div>
    )
  }
}

const WrappedTournamentsAdd = Form.create()(TournamentsAdd);

export default WrappedTournamentsAdd;
