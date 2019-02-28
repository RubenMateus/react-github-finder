import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

const UserInfo = ({ userUrl, userName, hasError, children }) =>
  (<Row style={{'marginTop': 5}}>
    <Col offset={10} span={5}>
      { !hasError && <a target="_blank" rel="noopener noreferrer" href={userUrl}>{userName}</a> }
      { hasError && children }
    </Col>
  </Row>);

export default UserInfo;
