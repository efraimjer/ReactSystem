import React, { Component } from 'react'
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
/*import Styled from "styled-components";*/
import Popup from 'reactjs-popup';
import AddProductForm from '../controllers/AddProductForm';
import axios from 'axios';
import "./products.css"


export default class products extends Component {

  constructor(props) {
      super(props);
      this.state = {products: []};
  }

  state ={
    products: [],
    errorMessage:""
  }

  componentDidMount() {
      axios.get('http://localhost:4000/products/')
          .then(response => {
              this.setState({products: response.data});
          })
          .catch(function (err) {
              this.setState({errorMessage: err.message});
          })
  }

  componentDidUpdate() {
      axios.get('http://localhost:4000/products/')
      .then(response => {
          this.setState({products: response.data});
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
        Header: 'Preço',
        accessor: 'valor'
      },{
        Header: 'Qtde',
        accessor: 'estoque'
      }
    ]
      return (
    <div>
        <h2>Lista de Produtos</h2>
        {this.state.errorMessasge && 
        <h3 className="error">{this.state.errorMessage}</h3>}
            <ReactTable className="-striped" 
                pageSize={10}
                data={this.state.products}
                columns={columns}
                filterable={true}>
                            
            </ReactTable>
                <Popup trigger={<button className="B">+Produto</button>} 
                    modal
                    closeOnDocumentClick>
                        <AddProductForm/>
                </Popup>
          </div>
      )
  }
}