import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css';
import SignInPage from './components/SignInPage/SignInPage';
import EventRegisterPage from './components/EventRegisterPage/EventRegister';
import UserRegisterPage from './components/UserRegisterPage/UserRegisterPage';
import CollabrationPage from './components/CollabrationPage/Collabration';
import ScoreCardPage from './components/ScoreCardPage/App1';

const Home = () => (
  <HomePage />
);

const Login = () => (
  <LoginPage />
);

const SignIn = () => (
  <SignInPage />
);
const EventRegister = () => (
  <EventRegisterPage />
);
const UserRegister = () => (
  <UserRegisterPage />
);
const Collabration = () => (
  <CollabrationPage />
);
const App1 = () => (
  <ScoreCardPage />
);
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/EventRegister" component={EventRegister} />
          <Route path="/UserRegister" component={UserRegister} />
          <Route path="/Collabration" component={Collabration} />
          <Route path="/App1" component={App1} />
        </div>
      </Router>
    );
  }
}

export default App;
