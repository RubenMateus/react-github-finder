import "antd/dist/antd.css";

import { UserOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class SearchInput extends Component {
  static defaultProps = { placeholder: "GitHub @username" };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
  };

  onSubmit = (value, event) => {
    event.preventDefault();
    this.props.onSubmit(value);
  };

  render() {
    return (
      <Row
        style={{
          marginTop: 15
        }}
      >
        <Col offset={8} span={8}>
          <Input.Search
            prefix={
              <UserOutlined
                style={{
                  color: "rgba(0,0,0,.25)"
                }}
              />
            }
            size="large"
            enterButton
            allowClear
            placeholder={this.props.placeholder}
            onSearch={this.onSubmit}
          />
        </Col>
      </Row>
    );
  }
}
