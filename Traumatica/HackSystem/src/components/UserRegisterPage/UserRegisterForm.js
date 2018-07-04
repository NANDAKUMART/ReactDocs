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
  width: 700,  
};

const buttonStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  marginBottom: 0
};

class LoginForm extends Component {

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
            <FormGroup controlId="Hackathon ID">
              <FormControl type="Text" placeholder="Hackathon ID  :" />
            </FormGroup>
            <FormGroup controlId="Hackathon Name">
              <FormControl type="Text" placeholder="Hackathon Name  :" />
            </FormGroup>
            <FormGroup controlId="Location">
              <FormControl type="Text" placeholder="Location  :" />
            </FormGroup>
            <FormGroup controlId="City">
              <FormControl type="Text" placeholder="City  :" />
            </FormGroup>
            <FormGroup controlId="Details">
              <FormControl type="Text" placeholder="Details  :" />
            </FormGroup>
            <FormGroup controlId="Start date">
              <FormControl type="Text" placeholder="Start Date  :" />
            </FormGroup>
            <FormGroup controlId="End Date">
              <FormControl type="Text" placeholder="End Date  :" />
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

export default LoginForm;
