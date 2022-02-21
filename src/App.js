import React, { Suspense } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import thunk from 'redux-thunk';

import usersReducer from './shared/state/users';

import 'antd/dist/antd.min.css';

import UserDetails from "./pages/UserDetails";
import Search from "./pages/Search";

const store = createStore(combineReducers({
  users: usersReducer
}), applyMiddleware(thunk));

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" exact element={<Navigate to="/users" />} />
            <Route path="users" element={<Search />} />
            <Route path="users/:username" element={<UserDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}