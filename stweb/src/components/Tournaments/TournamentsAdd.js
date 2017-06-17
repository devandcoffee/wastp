import React, { Component } from 'react';
import { Button, Card, Row, Form, Input, DatePicker, InputNumber } from 'antd';

const FormItem = Form.Item;

class TournamentsAdd extends Component {
  render() {
    return (
      <div>
        <Row>
          <Button onClick={this.props.backToList}> Back to List </Button>
        </Row>
        <Row>
          <Card title="New Tournament" bordered={false} style={{ width: '100%', marginTop: '25px' }}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem label="Name">
                <Input placeholder="Name" />
              </FormItem>
              <FormItem label="Start Date">
                <DatePicker format="DD-MM-YYYY HH:mm:ss" showTime />
              </FormItem>
              <FormItem label="Amount Teams">
                <InputNumber min={2} max={50} />
              </FormItem>
              <FormItem label="Description">
                <Input type="textarea" rows={4} />
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" size="large" icon="save">Save</Button>
              </FormItem>
            </Form>
          </Card>
        </Row>
      </div>
    )
  }
}

export default TournamentsAdd;
