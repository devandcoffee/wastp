import React, { Component } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Select
} from "antd";
import moment from "moment";
import { FORM } from "../../constants";

const Option = Select.Option;
const FormItem = Form.Item;

class TournamentsForm extends Component {
  componentDidMount() {
    const { activeRecord, user_id } = this.props;

    // all forms need this field
    this.props.form.setFieldsValue({
      user_id: user_id
    });

    if (activeRecord) {
      this.props.form.setFieldsValue({
        amount_teams: activeRecord.attributes.amount_teams,
        description: activeRecord.attributes.description,
        tournament_type_id: activeRecord.attributes.tournament_type_id,
        name: activeRecord.attributes.name,
        start_date: moment(activeRecord.attributes.start_date)
      });
    }

    this.state = {
      id: activeRecord ? activeRecord.id : null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.state;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.saveTournament(values, id);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { viewMode } = this.props;
    return (
      <div>
        <Row>
          <Button onClick={this.props.backToList} icon="arrow-left">
            {" "}Back to List{" "}
          </Button>
        </Row>
        <Row>
          <Card
            title="New Tournament"
            bordered={false}
            style={{ width: "100%", marginTop: "25px" }}
          >
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <Col style={{ display: "none" }}>
                <FormItem label="user_id">
                  {getFieldDecorator("user_id")(
                    <Input
                      placeholder="user_id"
                      disabled={viewMode === FORM.MODE_DETAIL}
                    />
                  )}
                </FormItem>
              </Col>
              <Row gutter={25}>
                <Col md={12}>
                  <FormItem label="Name">
                    {getFieldDecorator("name")(
                      <Input
                        placeholder="Name"
                        disabled={viewMode === FORM.MODE_DETAIL}
                      />
                    )}
                  </FormItem>
                </Col>
                <Col md={12}>
                  <FormItem label="Tournament Type">
                    {getFieldDecorator("tournament_type_id", {
                      rules: [
                        {
                          required: true,
                          message: "Please select a tournament type."
                        }
                      ]
                    })(
                      <Select placeholder="Please select a tournament type.">
                        <Option value="1">League</Option>
                        <Option value="2">Groups</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={25}>
                <Col md={12}>
                  <FormItem label="Start Date">
                    {getFieldDecorator("start_date")(
                      <DatePicker
                        format="DD-MM-YYYY HH:mm:ss"
                        showTime
                        style={{ width: "100%" }}
                        disabled={viewMode === FORM.MODE_DETAIL}
                      />
                    )}
                  </FormItem>
                </Col>
                <Col md={12}>
                  <FormItem label="Amount Teams">
                    {getFieldDecorator("amount_teams")(
                      <InputNumber
                        min={2}
                        max={50}
                        style={{ width: "100%" }}
                        disabled={viewMode === FORM.MODE_DETAIL}
                      />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <FormItem label="Description">
                  {getFieldDecorator("description")(
                    <Input
                      type="textarea"
                      rows={4}
                      disabled={viewMode === FORM.MODE_DETAIL}
                    />
                  )}
                </FormItem>
              </Row>
              {viewMode !== FORM.MODE_DETAIL &&
                <Row>
                  <FormItem>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      icon="save"
                    >
                      Save
                    </Button>
                  </FormItem>
                </Row>}
            </Form>
          </Card>
        </Row>
      </div>
    );
  }
}

const WrappedTournamentsForm = Form.create()(TournamentsForm);

export default WrappedTournamentsForm;
