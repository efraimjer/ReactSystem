import React, { Component } from 'react'

import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
/*import Styled from "styled-components";*/
import Popup from 'reactjs-popup';
import AddProductForm from '../controllers/AddProductForm';



export default class products extends Component {
  render() {

    const data = [{
      code: '001',
      nome: 'Caneca Branca',
      valor: 'R$ 24,90',
      estoque: '26'
    },{
      code: '002',
      nome: 'Camiseta Raglan',
      valor: 'R$ 29,90',
      estoque: '10'
    }
  ]

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
      Header: 'Estoque',
      accessor: 'estoque'
    }
  ]

    return (
      <body>
      <div>     
          <ReactTable className="ReactTableE" 
          pageSize={10}
          data={data}
          columns={columns}>            
          </ReactTable>
          <Popup trigger={<button> + Produtos</button>} 
                modal
                closeOnDocumentClick>
                    <AddProductForm/>
                </Popup>
          </div>
    </body>
    )
  }
}