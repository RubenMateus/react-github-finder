import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
  Form, Icon, Input, Button, Row, Col
} from 'antd';

export default class SearchInput extends Component {

  state = {
    value :''
  }

  onChange = (e) => {
    
  
    this.setState({value: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <Row justify='center' align='middle' style={{'margin-top': 5}}>
        <Col offset={10} span={5}>
          <Form layout="inline" onSubmit={this.onSubmit}>
            <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text" name="userName" placeholder="GitHub @username"
                value={this.state.value} onChange={this.onChange}
              />
            </Form.Item>
            {/* <input type="submit" value="Search" onClick={this.onSubmit}/> */}
            <Form.Item>
              <Button type="primary" shape="circle" icon="search" htmlType="submit" onClick={this.onSubmit} value="Search"/>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    )
  }
}