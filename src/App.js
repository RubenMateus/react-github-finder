import React, { Component } from 'react';
import { fetchUsers } from './utils/fetch';
import SearchInput from './components/SearchInput';
import UsersTable from './components/UsersTable';

export default class App extends Component {
  state = {
    users: []
  }

  onSubmit = async(userName) => {
    try {
      const result = await fetchUsers(userName);
      this.setState({users: result});
    } catch(e){
      this.setState({users : []});
    }
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <SearchInput onSubmit={this.onSubmit}/>
        <UsersTable  dataSource={users}/>
      </div>
    );
  }
}