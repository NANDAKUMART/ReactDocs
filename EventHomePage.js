import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class EventHomePage extends Component {
   
   constructor(props)
   {
   super(props);
   this.state={items:[]};
   this.getHackMasterDetails = this.getHackMasterDetails.bind(this);
   }

    getHackMasterDetails() {
     fetch('http://localhost:8081/getHackMasterDetails')
.then(result=>result.json())
.then(items=>this.setState({items}));        
    }  
    
  render() {
  
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Events Home Page</h1>
        </header>
        <button onClick={this.getHackMasterDetails}>Click Me</button>

          {
              this.state.items.map(item =>
                  <div id={item._id} key={item._id}>
                      <p key={item._id + "1"}>{item.HackName}</p>
                      <p key={item._id + "2"}>{item.HackId}</p>
                      <p key={item._id + "3"}>{item.Organiser}</p>
                      <p key={item._id + "4"}>{item.Details}</p>
                      <br/>
                  </div>
              )
          }
        
      </div>
    );
    
  }
  
}

export default EventHomePage;
