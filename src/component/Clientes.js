import React, { Component } from 'react'
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
/*import Styled from "styled-components";*/
import Popup from 'reactjs-popup';
import AddClientForm from '../controllers/AddClientForm';
import axios from 'axios';



export default class componentName extends Component {

  constructor(props) {
    super(props);
    this.state = {clients: []};
}

componentDidMount() {
    axios.get('http://localhost:4000/clients/')
        .then(response => {
            this.setState({clients: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
}

componentDidUpdate() {
    axios.get('http://localhost:4000/clients/')
    .then(response => {
        this.setState({clients: response.data});
    })
    .catch(function (error) {
        console.log(error);
    })   
}


  render() {

    
    const columns = [{
      Header: 'Código',
      accessor: 'code'
    },
    {
      Header: 'Nome',
      accessor: 'nome'
    },{
      Header: 'Endereço',
      accessor: 'adress'
    },{
      Header: 'Telefone',
      accessor: 'telefone'
    }
  ]


    return (

      <body>
      <div>     
          <ReactTable className="-striped" 
          pageSize={10}
          data={this.state.clients}
          columns={columns}
          filterable={true}>            
          </ReactTable>
          <Popup trigger={<button> + Cliente</button>} 
                modal
                closeOnDocumentClick>
                    <AddClientForm/>
          </Popup>
          </div>
    </body>


    )
  }
}