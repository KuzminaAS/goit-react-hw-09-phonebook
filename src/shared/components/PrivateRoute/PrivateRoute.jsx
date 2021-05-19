import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { authSelectors } from '../../../redux/auth';


const PrivateRoute = ({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(state => authSelectors.getIsAuthenticated(state), shallowEqual)
  return <Route {...routeProps}> {isLoggedIn ? (children) : (<Redirect to={redirectTo}/>)} </Route>
}
export default PrivateRoute;