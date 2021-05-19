import React, {Component, Suspense, lazy} from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { authOperations } from './redux/auth';

import Container from './view/Container';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


const RegisterView = lazy(() => import('./view/RegisterView'));
const LoginView = lazy(() => import('./view/LoginView'));
const PhonebookView = lazy(() => import('./view/PhonebookView'));
const HomeView = lazy(() => import('./view/HomeView'));

 class App extends Component {

   componentDidMount() {
     this.props.onGetCurrentUser();
   }
   
  render() {
    return (
  <Container>
    <NavBar />
    <Suspense fallback={<p>Загружаем...</p>}>
      <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute path="/register" restricted component={RegisterView} redirectTo="/contacts"/>
          <PublicRoute path="/login" restricted component={LoginView} redirectTo="/contacts"/>
          <PrivateRoute path="/contacts" component={PhonebookView} redirectTo="/login" />
     </Switch>
    </Suspense>
  </Container>
  )
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App);
