import React from 'react';
import { Layout, Col, Menu, Dropdown, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { LanguageIcon } from '../Icons';
import { Link } from 'react-router-dom';

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = ({key}) => {
    i18n.changeLanguage(key);
  };

  const menuItemStyle = { minWidth: '160px' };

  const menu = (
    <Menu
      selectedKeys={[i18n.language]} onClick={changeLanguage}
    >
      <Menu.Item key={'en'} style={menuItemStyle}>
        <span role='img' aria-label={'en-US'}>
          {"🇺🇸"}
        </span>{' '}
        {'English'}
      </Menu.Item>
      <Menu.Item key={'pt'} style={menuItemStyle}>
        <span role='img' aria-label={'pt-PT'}>
          {"🇵🇹"}
        </span>{' '}
        {'Português'}
      </Menu.Item>
    </Menu>
  );

  const inlineStyle = {
    cursor: 'pointer',
    padding: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:18,
    verticalAlign: 'middle',
  }

  const logoStyle = {
    color: 'white',
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <Layout>
      <Layout.Header>
        <Row>
          <Col flex="auto">
            <Link to="/users" style={logoStyle}>{t('title')}</Link>
          </Col>
          <Col flex="40px">
            <Dropdown overlay={menu}>
            <span style={inlineStyle}>
              <LanguageIcon color="white" />
            </span>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    </Layout>
  );
}