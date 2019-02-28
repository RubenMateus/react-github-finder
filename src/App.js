import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './shared/state/users';
import Search from './pages/Search';
import 'antd/dist/antd.css';

const store = createStore(combineReducers({
  users: usersReducer
}), applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Search />
      </Provider>
    );
  }
}