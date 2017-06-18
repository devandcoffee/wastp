import React, { Component } from 'react';
import { Button, Card, Row, Col, Form, Input, DatePicker, InputNumber } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;

class TournamentsAdd extends Component {

  componentDidMount() {
    const { activeRecord } = this.props;
    console.log(activeRecord);
    if (activeRecord) {
      this.props.form.setFieldsValue({
        amount_teams: activeRecord.amount_teams,
        description: activeRecord.description,
        id: activeRecord.id,
        name: activeRecord.name,
        start_date: moment(activeRecord.start_date),
        user_id: activeRecord.user_id,
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.saveTournament(values);
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
              <Col md={0}>
                <FormItem label="id">
                  {getFieldDecorator('id')(
                    < Input placeholder="id" />
                  )}
                </FormItem>
                <FormItem label="user_id">
                  {getFieldDecorator('user_id')(
                    < Input placeholder="user_id" />
                  )}
                </FormItem>
              </Col>
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
