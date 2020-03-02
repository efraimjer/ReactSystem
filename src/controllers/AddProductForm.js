import React, { Component } from 'react';
import axios from 'axios';
import './AddProductForm.css';



export default class componentName extends Component {

  constructor(props) {
    super(props);

    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeValor = this.onChangeValor.bind(this);
    this.onChangeEstoque = this.onChangeEstoque.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      code: 0,
      nome: '',
      valor: 0,
      estoque: 0
    }
  }  

  onChangeCode(e){
    this.setState({
      code: e.target.value
    });
  }

  onChangeNome(e){
    this.setState({
      nome: e.target.value
    });
  }

  onChangeValor(e){
    this.setState({
      valor: e.target.value
    });
  }

  onChangeEstoque(e){
    this.setState({
      estoque: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.code}`);
    console.log(`Todo Responsible: ${this.state.nome}`);
    console.log(`Todo Priority: ${this.state.valor}`);
    console.log(`Todo Completed: ${this.state.estoque}`);
    

    const newProduct = {
      code: this.state.code,
      nome: this.state.nome,
      valor: this.state.valor,
      estoque: this.state.estoque
    };

    axios.post('http://localhost:4000/products/add', newProduct)
      .then(res => console.log(res.data));

    this.setState({
      code: 0,
      nome:'',
      valor: 0,
      estoque: 0
    })

  }  
  render() {
    return (
        <div>
        <form onSubmit={this.onSubmit} className="form-inline">
            <label className="label">Código</label>
            <input className="input-field-code" 
                type="number" 
                value={this.state.code}
                onChange={this.onChangeCode}
            />
            <label className="label">Nome</label>
            <input className="input-field" 
                type="text"
                value={this.state.nome}
                onChange={this.onChangeNome}
              />

            <label className="label">Preço</label>
            <input className="input-field"  
                type="number" 
                value={this.state.valor}
                onChange={this.onChangeValor}
                />

            <label className="label">Quantidade</label>
            <input className="input-field"
                type="number" 
                value={this.state.estoque}
                onChange={this.onChangeEstoque}
                />

            <button className ="button">Adicionar</button>
        </form>
        
        </div>

    )
  }
}
