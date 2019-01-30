import React, { Component } from 'react';
import fetchUser from './Components/fetch/fetchUser';
import SearchInput from './Components/SearchInput';
import UserInfo  from './Components/UserInfo';

export default class App extends Component {
  state = {
    userInfo: {
      name : '',
      url : ''
    }
  }

  onSubmit = async(userName) => {
    await fetchUser(userName)
      .then(res => {
        this.setState({userInfo: res});
      })
      .catch(reject => {
        this.setState({userInfo : {name:'User Not Found', url:'#'}});
      });
  }

  render() {
    return (
      <React.Fragment>
        <SearchInput onSubmit={this.onSubmit}/>
        <UserInfo userName={this.state.userInfo.name} userUrl={this.state.userInfo.url}/>
      </React.Fragment>
    );
  }
}