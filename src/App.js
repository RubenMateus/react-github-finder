import React, { Component } from 'react';
import FetchUser from './Components/fetch/FetchUser';
import SearchInput from './Components/SearchInput';
import UserInfo  from './Components/UserInfo';

export default class App extends Component {
  state = {
    userInfo: {
      name : '',
      url : ''
    },
    hasError: false
  }

  onSubmit = async(userName) => {
    try {
      const result = await FetchUser(userName);
      this.setState({userInfo: result, hasError: false});
    } catch(e){
      this.setState({userInfo : {name:'User Not Found', url:'#'}, hasError: true});
    }
  }

  render() {
    return (
      <div style={{'margin-top':50}}>
        <SearchInput onSubmit={this.onSubmit}/>
        <UserInfo userName={this.state.userInfo.name} userUrl={this.state.userInfo.url} hasError={this.state.hasError}>
          <span>Not found!</span>
        </UserInfo>
      </div>
    );
  }
}