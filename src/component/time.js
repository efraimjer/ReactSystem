

import React, { Component } from 'react'
import axios from 'axios';

export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {time: []}

    }

    componentDidMount(){
        axios.get("https://economia.awesomeapi.com.br/json/USD-BRL")
            .then(response =>{
                this.setState({time: response.data});
            })
            .catch(function(error){
                console.log(error)
            })
    }

    componentDidUpdate(){
        axios.get("https://economia.awesomeapi.com.br/json/USD-BRL")
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
                {time.map(money => (

                <p style={pStyle} key={money}>{money.name} - R$ {money.high} <br /> Variação - R$ {money.varBid}</p>
                
                ))}
                

                    
                
            </div>

            
        )
    }
}

