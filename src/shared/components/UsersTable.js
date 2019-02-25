import { Table, Tag, Avatar, Modal, Divider, Badge } from 'antd';
import React from 'react';
import * as api from '../../utils/api-service';

export default class UsersTable extends React.Component {
  state = {
    data: [],
    modalState: {},
    isModalVisible: false
  }

  onRow = (record) => {
    return  {
      onClick: async() => {
        const userName= record.info.name;
        try {
          const result = await api.users.fetchByName(userName);
          console.log(result);
          const {
            bio,
            location,
            name,
            public_repos,
            followers,
            following,
            hireable } = result
          this.setState({modalState: {
              bio,
              location,
              name,
              public_repos,
              followers,
              following,
              hireable
            },
            isModalVisible: true});
        } catch(e){
          this.setState({isModalVisible: false});
        }
      }
    }
  }

  handleCancel = (e) => {
    this.setState({
      isModalVisible: false,
    });
  }

  static getDerivedStateFromProps = ({ dataSource }) => {
    const data = dataSource.map(user => {
      return {
        key: user.id,
        image_url : user.avatar_url,
        info: {
          name: user.login,
          link: user.html_url
        },
        score: user.score,
      };
    });

    return { data };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  render() {
    const { data, isModalVisible, modalState } = this.state;
    return (
      <div style={{padding: 50}}>
        <Table onRow={this.onRow} columns={columns} dataSource={data} />
        <Modal title={modalState.name} visible={isModalVisible} onCancel={this.handleCancel} footer={null}>
          <p>{modalState.bio}</p>
          <p><b>Location:</b> {modalState.location}</p>
          <Divider orientation="left">More Info</Divider>
          <p>Public Repos: <Badge count={modalState.public_repos} style={{ backgroundColor: '#52c41a' }}/> </p>
          <p>Followers: <Badge count={modalState.followers} style={{ backgroundColor: 'purple' }}/></p>
          <p>Following: <Badge count={modalState.following} style={{ backgroundColor: 'aquamarine' }}/></p>
          <p>{modalState.hireable ? <Tag color="purple">Available for Hire</Tag> : null}</p>
        </Modal>
      </div>
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
}];