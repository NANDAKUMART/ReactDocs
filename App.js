import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   
   constructor(props)
   {
   super(props);
   this.state={items:[]};
   this.loadData = this.loadData.bind(this);
   }
   
   loadData() {
     fetch(`http://localhost:8081/listUsers`)
.then(result=>result.json())
.then(items=>this.setState({items}));        
    }  
    
  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.loadData}>Click Me</button>
        
          <ul>		
 		{this.state.items.map(item=><li key={item._id}>{item.myname} && {item.Emp}  $$id: {item._id}$$ </li>)}
         </ul>
        
      </div>
    );
    
  }
  
}

export default App;
