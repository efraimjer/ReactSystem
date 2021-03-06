

import React, { Component } from 'react'
import axios from 'axios';

export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {time: []}

    }

    componentDidMount(){
        axios.get("http://worldtimeapi.org/api/ip")
            .then(response =>{
                this.setState({time: response.data});
            })
            .catch(function(error){
                console.log(error)
            })
    }

    componentDidUpdate(){
        axios.get("http://worldtimeapi.org/api/ip")
        .then(response =>{
            this.setState({time: response.data});
        })
        .catch(function(error){
            console.log(error)
        })
    }

    
    render() {

        const pStyle = {
            color: "white",
            marginLeft: "20vw",
            fontFamily: "helvetica"
        }

        const {time} = this.state;
        
        return (
            <div>
               

               <p style={pStyle}>{time.datetime}</p>
           
                

                    
                
            </div>

            
        )
    }
}

