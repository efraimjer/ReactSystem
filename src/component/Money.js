

import React, { Component } from 'react'
import axios from 'axios';

export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {money: []}

    }

    componentDidMount(){
        axios.get("https://economia.awesomeapi.com.br/json/USD-BRL")
            .then(response =>{
                this.setState({money: response.data});
            })
            .catch(function(error){
                console.log(error)
            })
    }

    componentDidUpdate(){
        axios.get("https://economia.awesomeapi.com.br/json/USD-BRL")
        .then(response =>{
            this.setState({money: response.data});
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

        const {money} = this.state;
        
        return (
            <div>
                {money.map(money => (

                <p style={pStyle} key={money}>{money.name} - R$ {money.low} <br /> Variação - R$ {money.varBid}</p>
                
                ))}
                

                    
                
            </div>

            
        )
    }
}

