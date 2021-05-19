import React, { Suspense, lazy, useEffect} from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { authOperations } from './redux/auth';

import Container from './view/Container';
import NavBar from './shared/components/NavBar';
import PrivateRoute from './shared/components/PrivateRoute';
import PublicRoute from './shared/components/PublicRoute';


const RegisterView = lazy(() => import('./view/RegisterView'));
const LoginView = lazy(() => import('./view/LoginView'));
const PhonebookView = lazy(() => import('./view/PhonebookView'));
const HomeView = lazy(() => import('./view/HomeView'));


const App = () => {
   
   const dispatch = useDispatch();

   useEffect(() => { 
     dispatch(authOperations.getCurrentUser());
   }, [dispatch]);
   
  return (
  <Container>
    <NavBar />
    <Suspense fallback={<p>Загружаем...</p>}>
      <Switch>
          <PublicRoute exact path="/" > <HomeView/> </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts"> <RegisterView/> </PublicRoute>
          <PublicRoute path="/login" restricted  redirectTo="/contacts"> <LoginView/> </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login" > <PhonebookView/> </PrivateRoute>
     </Switch>
    </Suspense>
  </Container>
  )
  }

export default App;