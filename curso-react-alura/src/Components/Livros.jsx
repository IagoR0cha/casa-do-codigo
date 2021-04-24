import React, {Component} from 'react';
import TableConstructor from './Common/TableConstructor';

import ApiService from '../Utils/ApiService';
import PopUp from '../Utils/PopUp';

export default class Livros extends Component{
    constructor(props){
        super(props);

        this.state = {
            headerItems: [
                {
                    label: 'Livros'
                }
            ],
    
            bodyItems: [],
        }
    }
    
    render(){
        return (
            <div>
                <h1>Livros</h1>
                <TableConstructor headerItems={this.state.headerItems}  bodyItems={this.state.bodyItems} />
            </div>
        )
    }

    componentDidMount(){
        ApiService.ListaLivros()
            .then(res => {
                if(res.message === 'success'){
                    const livros = res.data.map(livro => {
                        return {livro: livro.livro}
                    });
                    this.setState({bodyItems: [...this.state.bodyItems, ...livros]});
                }
            })
            .catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação ao tentar listar os Livros'));
    }
}