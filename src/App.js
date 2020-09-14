import React from 'react';
import './styles/App.scss';
import Nav from './components/Nav/Bar';
import Register from './components/Registration/Form';
import Login from './components/Login/Form';
import Udrop from './components/DropZone/Udrop';
import Home from './components/Home/Home';
import Secret from './components/Secret/Secret';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';
// import UploadScreen from './components/UploadScreen/UploadScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './firebase/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/secret' component={Secret} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/upload/' exact component={Udrop} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
