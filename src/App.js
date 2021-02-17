import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './firebase/Auth';
import Nav from './components/Nav/Bar';
import Home from './components/Home/Home';
import Register from './components/Registration/Form';
import Login from './components/Login/Form';
import Udrop from './components/DropZone/Udrop';
import Google from './components/GoolgePopUp/Google';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';
import Secret from './components/Secret/Secret';
import './styles/styles.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
            <Route path='/upload/' exact component={Udrop} />
            <Route path='/google/' exact component={Google} />
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/secret' component={Secret} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
