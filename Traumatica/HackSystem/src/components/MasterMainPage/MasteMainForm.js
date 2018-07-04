import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: 0,
  paddingLeft: 10,
  paddingRight: 10,
  width:350,
  
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 3,
  paddingLeft: 10,
  paddingRight: 10,
  width: 300,  
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("FORM SUBMIT!");

  }

  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
          <Form horizontal className="MasteMainForm" id="MasteMainForm">
            <FormGroup controlId="formEmail">
              <FormControl type="Text" placeholder="User Name  :" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password :" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                Login
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    )
  }
}

export default LoginForm;
