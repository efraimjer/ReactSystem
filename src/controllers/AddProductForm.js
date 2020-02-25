import React, { Component } from 'react';
import './AddProductForm.css'



export default class componentName extends Component {
    
  render() {




    return (
        
        <form className="form-inline">
            <label className="label">Código</label>
            <input className="input-field-code" type="number" name ="code" value=""/>
            <label className="label">Nome</label>
            <input className="input-field" type="text" name="nome" value=""/>
            <label className="label">Preço</label>
            <input className="input-field" type="number" name="valor" value=""/>
            <label className="label"abel>Quantidade</label>
            <input className="input-field" type="number" name="estoque" value=""/>
            <button className ="button">Adicionar</button>
        </form>

    )
  }
}
