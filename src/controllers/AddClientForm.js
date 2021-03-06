import React, { Component } from 'react'
import axios from 'axios';
import './AddProductForm.css'


export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeAdress = this.onChangeAdress.bind(this);
    this.onChangeTelefone = this.onChangeTelefone.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeInstagramUser = this.onChangeInstagramUser.bind(this);
    this.onChangeInstagramPassword = this.onChangeInstagramPassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      code: 0,
      nome:'',
      adress: '',
      telefone: 0,
      link: '',
      instagramUser: '',
      facebookUser: '',
      instagramPassword: '',
      facebookPassword: ''
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

  onChangeAdress(e){
    this.setState({
      adress: e.target.value
    });
  }

  onChangeTelefone(e){
    this.setState({
      telefone: e.target.value
    });
  }

  onChangeLink(e){
    this.setState({
      link: e.target.value
    });
  }

  onChangeInstagramUser(e){
    this.setState({
      instagramUser: e.target.value
    });
  }

  onChangeInstagramPassword(e){
    this.setState({
      instagramPassword: e.target.value
    })
  }



  onSubmit(e){
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.code}`);
    console.log(`Todo Responsible: ${this.state.nome}`);
    console.log(`Todo Priority: ${this.state.valor}`);
    console.log(`Todo Completed: ${this.state.estoque}`);
    

    const newClient = {
      code: this.state.code,
      nome: this.state.nome,
      adress: this.state.adress,
      telefone: this.state.telefone,
      link: this.state.link,
      instagramUser: this.state.instagramUser,
      instagramPassword: this.state.instagramPassword
    };

    axios.post('http://localhost:4000/clients/add', newClient)
      .then(res => console.log(res.data));

    this.setState({
      code: 0,
      nome:'',
      adress: '',
      telefone: 0,
      link: '',
      instagramUser: '',
      facebookUser: '',
      instagramPassword: '',
      facebookPassword: ''

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

            <label className="label">Endereço</label>
            <input className="input-field"  
                type="text" 
                value={this.state.adress}
                onChange={this.onChangeAdress}
                />

            <label className="label">Fone</label>
            <input className="input-field"
                type="number" 
                value={this.state.telefone}
                onChange={this.onChangeTelefone}
                />
                
            <label className="label">Link Whatsapp</label>
            <input className="input-field"
                type="String" 
                value={this.state.link}
                onChange={this.onChangeLink}
                />

            <label className="label">Instagram</label>
            <input className="input-field"
                type="String" 
                value={this.state.instagramUser}
                onChange={this.onChangeInstagramUser}
                />

            <label className="label">Senha</label>
            <input className="input-field"
                type="String" 
                value={this.state.instagramPassword}
                onChange={this.onChangeInstagramPassword}
                />

            <button className ="button">Adicionar</button>
        </form>
        
        </div>

    )
  }
}
