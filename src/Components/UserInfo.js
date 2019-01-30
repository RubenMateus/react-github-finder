import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

export default class UserInfo extends Component {
  render() {
    return (
      <Row style={{'margin-top': 5}}>
        <Col offset={10} span={5}>
          <a href={this.props.userUrl}>{this.props.userName}</a>
        </Col>
      </Row>
    )
  }
}