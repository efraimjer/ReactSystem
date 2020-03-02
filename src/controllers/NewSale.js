import React, { Component } from 'react';
import Mais from '../icons/icons8-mais-50.svg'
import './sale.css'
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";


export default class componentName extends Component {
  render() {

    const data = [{}]

    const columns = [{
        Header: 'Código',
        accessor: 'code'
      },
      {
        Header: 'Nome',
        accessor: 'nome'
      },{
        Header: 'Valor',
        accessor: 'valor'
      },{
        Header: 'Qtde',
        accessor: 'quantidade'
      },{
        Header: 'Valor Total',
        accessor: 'valorTotal'
      }
    ]
    return (
        <div>
            <h3>Nova venda</h3>
            <li>
                <label>Cliente!</label>
            </li>
            <li>
                 <input>{/**TO DO this.state.clienteName */}</input>
                 <button><img className="image" src={Mais} alt="Adicionar Cliente à venda"/></button>
                 {/**TO DO add new client button */}
            </li>
            <li>{/**TO DO if client not found, show error message */}
                <p>Nome do Cliente Selecionado</p>
            </li>
            <li>
                <label>Produtos!</label>
            </li>
            <li>
                 <input>{/**TO DO this.state.clienteName */}</input>
                 <button><img className="image" src={Mais} alt="Adicionar Produtos à venda"/></button>
                 
            </li>
            <ReactTable
                 pageSize={5}
                 data={data}
                 columns={columns}

            />
            <button>Salvar Venda!</button>



            {/**TO DO Implement TABLE with an [] of products */}
            {/**TO DO Implement quantity of products and SUM */}

            <footer>Total: R$</footer>

        </div>
    )
  }
}