import React, {Component} from 'react';
import './App.css';
import Products from './component/Products';
import Clientes from './component/Clientes'
import Popup from 'reactjs-popup';
import Styled from "styled-components";


class App extends Component {
    
    render(){

        const Button = Styled.button`
        Background: palevioletred;
        color: white;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        
        `

    return ( 

    
    <div className = "App" >

        <header className="App-header">
            <ul>
                <Popup trigger={<Button>Produtos</Button>} 
                modal
                closeOnDocumentClick>
                    <Products></Products>
                </Popup>
            </ul>
            <ul>        <Popup trigger={<Button>Clientes</Button>} 
                modal
                closeOnDocumentClick>
                    <Clientes/>
                </Popup>
            </ul>
            
        </header>

        <body className = "App-body">

            <h2>LeTeca</h2>
            <h2>BemDita</h2>
        </body>
        
      
</div >
    );
}
}

export default App;