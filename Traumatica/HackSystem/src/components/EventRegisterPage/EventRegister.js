import React, { Component } from 'react';


class EventRegister extends Component {
   
   constructor(props)
   {
   super(props);
   this.state={items:[],teamName:'',pocName:'',pocMailId:'',eventName:'',participantsId:''};
   this.submitForHackthon = this.submitForHackthon.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.getHackMasterDetails = this.getHackMasterDetails.bind(this);
   }

    componentDidMount() {
        this.getHackMasterDetails();
    }

    getHackMasterDetails() {
        fetch('http://localhost:8081/getHackMasterDetails')
            .then(result => result.json())
            .then(items => this.setState({items}));
    }

        submitForHackthon() {

        fetch('http://localhost:8081/postUserDetail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                teamName: this.state.teamName,
                pocName: this.state.pocName,
                pocMailId: this.state.pocMailId,
                eventName:this.state.eventName,
                participantsId:this.state.participantsId
            })
             }).then(function(response) {
                 console.log(response.statusText);
            return response;
             });

    }

    handleSubmit(event) {
        event.preventDefault();
        this.submitForHackthon();
    }

  render() {
  
    return (
      <div className="App">

        <header className="App-header">
         
          <h1 className="App-title">Events Register</h1>
        </header>

          <form onSubmit={this.handleSubmit}>
              <label>
                 POC Name:
                  <input type="text"
                         onChange={(newValue) => this.setState({pocName: newValue.target.value})}  />
              </label>
              <br/>
              <label>
                  POC EmailID:
                  <input type="text"
                         onChange={(newValue) => this.setState({pocMailId: newValue.target.value})}/>
              </label>
              <br/>
              <label>
                  Team Name:
                  <input type="text"
                         onChange={(newValue) => this.setState({teamName: newValue.target.value})}/>
              </label>
              <br/>
              <label>
                  Team Mail Ids:
                  <textarea type="text"
                            onChange={(newValue) => this.setState({participantsId: newValue.target.value})}/>
              </label>
              <br/>
              <label>

                  Event:
                  <select onChange={(newValue) => this.setState({eventName: newValue.target.value})}>
                      {
                          this.state.items.map((item)=>
                          {
                              return <option key={item.HackName} value={item.HackName}>{item.HackName}</option>
                          })
                      }
                  </select>

              </label>
              <br/>

              <input type="submit" value="Submit" />
          </form>
        
      </div>
    );
    
  }
  
}

export default EventRegister;