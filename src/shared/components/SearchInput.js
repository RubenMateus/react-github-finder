import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
  Form, Icon, Input, Row, Col
} from 'antd';
import PropTypes from 'prop-types';

export default class SearchInput extends Component {

  onSubmit = (value, event) => {
    event.preventDefault();
    this.props.onSubmit(value);
  }

  render() {
    return (
      <Row justify='center' align='middle'>
        <Col offset={10} >
          <Form layout="inline" onSubmit={this.onSubmit}>
            <Form.Item>
              <Input.Search
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                size="large"
                enterButton
                placeholder={this.props.placeholder}
                onSearch={this.onSubmit}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    )
  }
}

SearchInput.defaultProps = {
  placeholder: "GitHub @username"
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};