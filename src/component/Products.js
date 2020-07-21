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
      this.state = {clients: []};
  }

  componentDidMount() {
      axios.get('http://localhost:4000/clients/')
          .then(response => {
              this.setState({clients: response.data});
          })
          .catch(function (err) {
              console.log(err);
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

    const {clients} = this.state;






      return (
    <div>
      <table>
      <tr>
        <th>Nome</th>
        <th>User</th>
      </tr>
          
      {clients.map(client=>(
        

          <tr>
            <td key={client}>{client.nome}</td>
            <td key={client}>{client.instagramUser}</td>
          </tr>
        


      ))}
      </table>
    
    </div>
      )
  }
}