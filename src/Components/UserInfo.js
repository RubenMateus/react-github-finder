import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

const UserInfo = ({ userUrl, userName, hasError, children }) =>
  (<Row style={{'margin-top': 5}}>
    <Col offset={10} span={5}>
      { !hasError && <a target="_blank" rel="noopener noreferrer" href={userUrl}>{userName}</a> }
      { hasError && children }
    </Col>
  </Row>);

export default UserInfo;
