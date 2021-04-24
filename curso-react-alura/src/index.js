import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './Components/Sobre';
import Livros from './Components/Livros';
import Autores from './Components/Autores';
import NotFound from './Components/NotFound';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <div className="container mb-10">
            <Switch>
                <Route path='/' exact={true} component={App} />
                <Route path='/sobre' component={Sobre} />
                <Route path='/livros' component={Livros} />
                <Route path='/autores' component={Autores} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);