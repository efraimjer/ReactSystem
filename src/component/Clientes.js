import React, { Component } from 'react'
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
/*import Styled from "styled-components";*/
import Popup from 'reactjs-popup';
import AddClientForm from '../controllers/AddClientForm';

export default class componentName extends Component {
  render() {

    const data = [{
      code: '001',
      nome: 'Solange Moron',
      local: 'Mercado Polo vila Verde',
      fone: '49 99999 9999'
    },{
      code: '002',
      nome: 'Gislaine beto',
      local: 'Agro Videira de carli',
      fone: '49 99999 9999'
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
      Header: 'Endereço',
      accessor: 'local'
    },{
      Header: 'Telefone',
      accessor: 'fone'
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