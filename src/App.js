import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import routes from './routes/routes';
import thunk from 'redux-thunk';
import usersReducer from './shared/state/users';
import 'antd/dist/antd.css';

const store = createStore(combineReducers({
  users: usersReducer
}), applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </Provider>
    );
  }
}