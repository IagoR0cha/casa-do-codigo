import React, { Component } from 'react';
import TableConstructor from './Common/TableConstructor';
import ApiService from '../Utils/ApiService';
import PopUp from '../Utils/PopUp';

export default class Autores extends Component{

    constructor(props){
        super(props);

        this.state = {
            headerItems: [
                {
                    label: "Autores" 
                }
            ],
            bodyItems: [
                {
                    nome: 'Iago'
                }
            ],
        }
    }
    
    componentDidMount(){
        ApiService.ListaNomes()
            .then(res => {
                if(res.message === 'success'){
                    const autores = res.data.map(autor => {
                        return {nome: autor.nome}
                    });
                    this.setState({bodyItems: [...this.state.bodyItems, ...autores]});
                }
            })
            .catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação ao tentar listar os Autores'));
    }
    
    render(){
       return (
        <div >
            <h1>Página de Autores</h1>
            <TableConstructor headerItems={this.state.headerItems} bodyItems={this.state.bodyItems}/>
        </div>
       )
    }

    
}
