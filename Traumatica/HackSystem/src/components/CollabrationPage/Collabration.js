import React, { Component } from 'react';


class Collabration extends Component {

   constructor(props)
   {
   super(props);
   this.state={items:[],name:'',subject:'',desc:''};
   this.getCollaborationDetails = this.getCollaborationDetails.bind(this);
       this.submitForColloboration = this.submitForColloboration.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.resetState = this.resetState.bind(this);
       this.getCollaborationDetails();
   }

    submitForColloboration(thisObj) {
        fetch('http://localhost:8081/postColloborationDetails', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'WrittenBy': this.state.name,
                'Subject': this.state.subject,
                'Desc': this.state.desc,
                'WrittenDate':new Date()
            })
        }).then(function(response) {
            console.log(response.statusText);
            thisObj.resetState();
            thisObj.getCollaborationDetails();
            return response;
        });
    }

    resetState()
    {
        this.setState({name:'',subject:'',desc:''});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.submitForColloboration(this);
    }

    getCollaborationDetails() {
     fetch('http://localhost:8081/getCollaborationDetails')
.then(result=>result.json())
.then(items=>this.setState({items}));
console.log("getCollaborationDetails");
    }

     getClassName(keyVal)
    {
        console.log("getClassName");
        var name = ['container left','container right'];
        if(keyVal % 2)
            return name[0];
        else
            return name[1];
    }

  render() {
  
    return (
        <div>
             <form onSubmit={this.handleSubmit}>
                <label>
                    Participant Name:
                    <input type="text"
                           onChange={(newValue) => this.setState({name: newValue.target.value})}  />
                </label>
                <br/>
                <label>
                    Subject:
                    <input type="text"
                           onChange={(newValue) => this.setState({subject: newValue.target.value})}/>
                </label>
                <br/>
                <label>
                    Brief Desc:
                    <input type="text"
                           onChange={(newValue) => this.setState({desc: newValue.target.value})}/>
                </label>
                <br/>

                <input type="submit" value="Submit" />
    </form>

        <div className="timeline">
        { console.log(this.state.items) }
          {
              this.state.items.map((item, keyVal) =>
                  <div key={item._id} className={this.getClassName(keyVal)}>
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

export default Collabration;
