import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';




const divStyle = {
  display: 'flex',
  alignItems: 'Right',
  marginTop: 300,
  paddingLeft: 10,
  paddingRight: 10,
  width:2000,
marginBottom:200,

};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 3,
  paddingLeft: 10,
  paddingRight: 10,
  width: 1500,  
  alignItems:'center'
  
};

const buttonStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  marginBottom: 0
};

class SignInForm extends Component {

  constructor(props)
   {
   super(props);
   this.state={items:[]};
   this.handleFormSubmit = this.handleFormSubmit.bind(this);
   }

  handleFormSubmit() {
    console.log('handle submit called');
    fetch('http://localhost:8081/listUsers')
.then(result=>result.json())
.then(items=>this.setState({items}));      
 //console.log("FORM SUBMIT!"+ JSON.stringify(result));
  }

  render() {
    return (
      <div style={divStyle}>
      
        <Panel style={panelStyle}>
        <Form horizontal className="LoginForm" id="loginForm">
            <FormGroup controlId="formEmail">
              <FormControl type="Text" placeholder="User Name  :" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password :" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
            </FormGroup>
              
            <FormGroup style={buttonStyle} controlId="formSubmit">
            </FormGroup>
          </Form>
          
        
          <Button onClick={this.handleFormSubmit}>Submit</Button>         
          <ul>		
 		{this.state.items.map(item=><li key={item._id}>{item.Name} && {item.Emp}  $$id: {item._id}$$ </li>)}
         </ul>
        </Panel>
        </div>



    )
  }
}

export default SignInForm;
