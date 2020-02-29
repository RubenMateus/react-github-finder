import React, { Component } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

export default class SearchInput extends Component {

  static defaultProps = {
    placeholder: "GitHub @username"
  };

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
      <Row style={{marginTop:15}}>
        <Col offset={8} span={8}>
          <Input.Search
            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
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