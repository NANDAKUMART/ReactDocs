import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Colloboration extends Component {


   constructor(props)
   {
   super(props);
   this.state={items:[],count:0};
   this.getCollaborationDetails = this.getCollaborationDetails.bind(this);
   }

    getCollaborationDetails() {
     fetch('http://localhost:8081/getCollaborationDetails')
.then(result=>result.json())
.then(items=>this.setState({items}));
    }



     getClassName()
    {

        var maxNumber = 999;
        var randomNumber = Math.floor((Math.random() * maxNumber) + 1);

        var name = ['container left','container right'];

        if(randomNumber % 2)
            return name[0];
        else
            return name[1];
    }


  render() {
  
    return (
        <div>
            <button onClick={this.getCollaborationDetails}>Load Details</button>
        <div className="timeline">
          {
              this.state.items.map(item =>
                  <div key={item._id} className={this.getClassName()}>
                      <div className="content">
                      <p key={item._id + "1"}>{item.WrittenBy}  asked:- </p>
                      <p key={item._id + "3"}>{item.Desc}</p>
                          <p key={item._id + "2"}>Tag: {item.Subject}</p>
                      </div>
                  </div>
              )
          }
        
      </div>
        </div>

    );
    
  }
  
}

export default Colloboration;

