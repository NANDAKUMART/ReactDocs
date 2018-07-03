import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LeaderBoard extends Component {
   
   constructor(props)
   {
   super(props);
   this.state={items:[]};
   this.getLeaderBoardDetails = this.getLeaderBoardDetails.bind(this);
   }

    getLeaderBoardDetails() {
     fetch('http://localhost:8081/getLeadingInfoDetails')
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
        <button onClick={this.getLeaderBoardDetails}>Load Details</button>

          {
              this.state.items.map(item =>
                  <div id={item._id} key={item._id}>
                      <p key={item._id + "1"}>{item.HackName}</p>
                      <p key={item._id + "2"}>{item.HackId}</p>
                      <p key={item._id + "2"}>{item.TeamName}</p>
                      <p key={item._id + "3"}>{item.Points}</p>
                      <p key={item._id + "4"}>{item.SubmittedDate}</p>
                      <br/>
                  </div>
              )
          }
        
      </div>
    );
    
  }
  
}

export default LeaderBoard;
