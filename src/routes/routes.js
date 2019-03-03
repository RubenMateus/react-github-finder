import UserDetails from "../pages/UserDetails";
import Search from "../pages/Search";
import { Redirect } from 'react-router-dom';
import React from 'react';

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/users" />
  },
  {
    path: "/users",
    exact: true,
    component: Search
  },
  {
    path: "/users/:user",
    component: UserDetails
  }
];

export default routes;