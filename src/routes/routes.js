import UserDetails from "../pages/UserDetails";
import Search from "../pages/Search";


const routes = [
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