import React, { Component } from 'react';
import * as api from './utils/api-service';
import SearchInput from './shared/components/SearchInput';
import UsersTable from './shared/components/UsersTable';

export default class App extends Component {
  state = {
    users: []
  };

  onSubmit = async(userName) => {
    try {
      const result = await api.users.fetch(userName);
      this.setState({users: result});
    } catch(e){
      this.setState({users : []});
    }
  }

  render() {
    const { users } = this.state;
    return (
      <>
        <SearchInput onSubmit={this.onSubmit}/>
        <UsersTable  dataSource={users}/>
      </>
    );
  }
}