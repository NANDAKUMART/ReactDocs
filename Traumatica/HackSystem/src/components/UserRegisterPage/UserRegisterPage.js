import React, { Component } from 'react';
import UserRegisterForm from './UserRegisterForm';

import './UserRegisterPage.css';

class UserRegisterPage extends Component {
  render() {
    return (
      <div className="UserRegisterPage">
        <UserRegisterForm />
      </div>
    );
  }
}

export default UserRegisterPage;
