import React, { Component } from 'react';
import SignInForm from './SignInForm';

import './SignInPage.css';

class SignInPage extends Component {
  render() {
    return (
      <div className="SignInPage">
        <SignInForm />
      </div>
    );
  }
}

export default SignInPage;
