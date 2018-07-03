import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


class Chart extends Component
{
    componentDidMount() {
        this.getLeadingInfoDetails();
    }

    getLeadingInfoDetails() {

        fetch('http://localhost:8081/getLeadingInfoDetails')
            .then(result=>result.json())
            .then(items=>
            {
                var currentTeamPoints=[];
                var currentTeamNames=[];

                this.setState({items:items});

                currentTeamNames = items.map((item)=>
                {
                 return item.TeamName;
                });

                currentTeamPoints = items.map((item)=>
                {
                    return item.Points;
                });

                console.log("Inside then");
                console.log("Names" + currentTeamNames);
                console.log("Points "+ currentTeamPoints);

                this.setState({teamPoints:currentTeamPoints,teamNames:currentTeamNames});

                let chartProp={
                    labels:  this.state.teamNames,
                    datasets: [{
                        label: '# of Votes',
                        data: this.state.teamPoints,
                        backgroundColor: this.formRBAString(),
                        borderColor: this.formRBAString(),
                        borderWidth: 1
                    }]
                };
                this.setState({chartData:chartProp});
            });

    }

    getRGBColorScheme()
    {
        var maxNumber = 100;
        var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        return randomNumber;
    }

    formRBAString()
    {
        let data=[];
        for(let i=0;i<4;i++)
        {
           data[i] = 'rgba('+ this.getRGBColorScheme() +','+ this.getRGBColorScheme() +','+ this.getRGBColorScheme() +','+ this.getRGBColorScheme() +')';
        }
        return data;
    }

    constructor(props)
    {
    super(props);

    this.state={items:[],chartData:{},teamNames:[],teamPoints:[]};
    this.getLeadingInfoDetails = this.getLeadingInfoDetails.bind(this);
    }


    render()
    {
        return (
            <div className="Chart" >

                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={500}
                    options={{
                        maintainAspectRatio: false,
            title:{
                display:true,
                text:'Leading Teams By Points',
                fontSize:25
            },
                        legend:{
                             display:true,
                            position:'right'
                        }
                    }}
                />

            </div>
        );
    }
}

export default Chart;