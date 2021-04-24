import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Tabela from './Components/Common/Tabela';
import Form from './Components/Formulario';

import './App.css';

import PopUp from './Utils/PopUp';
import ApiService from './Utils/ApiService';


export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            autores: []
        };
    }

    removeAutor = id => {
        const { autores } = this.state;

        const autoresAtualizado = autores.filter(autor => {
            return autor.id !== id;
        });

        ApiService.RemoveAutor(id)
            .then(res => {
                if(res.message === 'deleted'){
                    this.setState({autores : [...autoresAtualizado]})
                    PopUp.exibeMensagem('success', 'Autor Removido com Sucesso!');
                }
            })
            .catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação ao tentar remover o Autor!'));
    }

    escutadorDeSubmit = autor => {
        ApiService.CriaAutor(JSON.stringify(autor))
                .then(res => {
                if(res.message === 'success'){
                    this.setState({ autores: [...this.state.autores, res.data]});
                    PopUp.exibeMensagem('success', "Autor Adicionado com sucesso!");
                }                
            })
            .catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação ao criar Autor!'))

       
    }

    render() {
        const campos = [
            {titulo: 'Autores', dado: 'nome'},
            {titulo: 'Livros', dado: 'livro'},
            {titulo: 'Preços', dado: 'preco'},
        ]
        return (
            <div className="App" >
                <Tabela campos={campos} dados={ this.state.autores } removeDados={ this.removeAutor }/>
                <Form escutadorDeSubmit={ this.escutadorDeSubmit }/>
            </div>
        );
    }

    componentDidMount(){
        ApiService.ListaAutores()
            .then(res => {
                if(res.message === 'success'){
                    this.setState({autores : [...this.state.autores, ...res.data]});
                }
            })
            .catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação ao tentar listar os autores'));
    }
}

