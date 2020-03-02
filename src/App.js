import React, {Component} from 'react';
import './App.css';
import Products from './component/Products';
import Clientes from './component/Clientes'
import Popup from 'reactjs-popup';
import Styled from "styled-components";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



class App extends Component {
    
    render(){

        const Button = Styled.button`
        Background: white;
        color: blue;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid blue;
        border-radius: 3px;        
        `
    return ( 

    
    <div className = "App" >
        <container>
            <header className="App-header">
                <ul>
                    <Popup trigger={<Button>Produtos</Button>} 
                    modal
                    closeOnDocumentClick>
                        <Products></Products>
                    </Popup>                    
                </ul>
                <ul>  
                    <Popup trigger={<Button>Clientes</Button>} 
                    modal
                    closeOnDocumentClick>
                        <Clientes/>
                    </Popup>
                </ul>                
            </header>
        </container>

        <body className = "App-body">



            <Router>
            <p><Link to ="/products">Products</Link></p>
            <p><Link to ="/clients">Clients</Link></p>
            <Route path = "/products" exact component={Products}/>
            <Route path = "/clients" exact component={Clientes}/>
 
            </Router>

  

        </body>
        
      
</div >
    );
}
}

export default App;

