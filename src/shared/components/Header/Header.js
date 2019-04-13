import React from 'react';
import { Layout, Menu, Col } from 'antd';

export default function Header() {
  return (
    <div>
      <Layout className="layout">
        <Layout.Header>
          <Col offset={11} span={12}>
            <div className="logo" style={logoStyle}>GitHub User Finder</div>
          </Col>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
          </Menu>
        </Layout.Header>
      </Layout>
    </div>
  );
}

const logoStyle = {
  width: 120,
  color: 'white',
}