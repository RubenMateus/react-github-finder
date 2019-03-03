import React, { Component } from 'react';
import { Skeleton, Tag, Card, Button, Row, Col } from 'antd';
import './UserInfo.css';

export default class UserInfo extends Component {

  componentDidMount = () => {
    const { username, searchUser } = this.props;
    searchUser(username);
  }

  render() {
    const { user, loading = false} = this.props;
    console.log(user);
    return (
      <Row>
        <Col offset={6} span={12}>
          <Skeleton loading={loading} active paragraph={{ rows: 4 }} style={{margin: 20}}>
            <Card style={{marginTop:24, marginBottom:24}} title={user.name}>
              <Row gutter={24}>
                <Col span={8}>
                  <img alt="" src={user.avatar_url} style={{borderRadius:4, width:'100%', marginBottom:10}}/>
                  <Button block type="primary" size="large">
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </Col>
                <Col span={16}>
                  <div className="mb-10">
                    <Tag color="magenta">Public repos: {user.public_repos}</Tag>
                    <Tag color="red">Public gists: {user.public_gists}</Tag>
                  </div>
                  <div className="mb-10">
                    <Tag color="cyan">Followers: {user.followers}</Tag>
                    <Tag color="geekblue">Following: {user.following}</Tag>
                  </div>
                  {user.bio ? <p><b>Bio:</b> {user.bio}</p> : null}
                  {user.email ? <p><b>Email:</b> {user.email}</p> : null}
                  {user.company ? <p><b>Company:</b> {user.company}</p> : null}
                  {user.blog ? <p><b>Website/blog:</b>
                    <a href={user.blog} target="_blank" rel="noopener noreferrer"> {user.blog}</a>
                  </p> : null}
                  {user.location ? <p><b>Location</b> {user.location}</p> : null}
                  {user.created_at ? <p><b>Member Since:</b> {new Date(user.created_at).toGMTString()}</p> : null}
                  <div className="mb-10">
                    {user.hireable ? <Tag color="purple">Hireable</Tag> : null}
                  </div>
                </Col>
              </Row>
            </Card>
          </Skeleton>
        </Col>
      </Row>
    );
  }
}
