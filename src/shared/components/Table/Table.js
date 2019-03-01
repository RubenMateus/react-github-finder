import { Table as AntTable, Tag, Avatar, Row, Col, Button, Icon } from 'antd';
import { Link } from "react-router-dom";
import React from 'react';

export default class Table extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Row>
        <Col offset={5} span={14}>
          <div style={{paddingTop: 40}}>
            <AntTable columns={columns} dataSource={data} />
          </div>
        </Col>
      </Row>
    )
  }
}

const columns = [{
  title: '',
  dataIndex: 'image_url',
  key: 'image_url',
  render: src => <Avatar src={src} alt="user image"/>
}, {
  title: 'Name',
  dataIndex: 'info',
  key: 'info',
  render: info => <a target="_blank" rel="noopener noreferrer" href={info.link}>{info.name}</a>,
}, {
  title: 'Score',
  dataIndex: 'score',
  key: 'score',
  render: score =>
    <span>
      <Tag color={score >= 75 ? 'green' : score >= 50 ? 'geekblue' : 'volcano'} key={score}>{score}</Tag>
    </span>
},{
  title: '',
  dataIndex: 'moreInfo',
  key: 'moreInfo',
  render: moreInfo =>
  <Button type="primary">
    <Link to={`users/${moreInfo}`}>More Info <Icon type="right"/></Link>
  </Button>
}];