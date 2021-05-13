import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home.js'
import Cadastro from './cadastro.js';
import Busca from './busca.js';
import Login from './login.js';
import Upimagens from './upimagens.js';
import Cadastroconcluido from './cadastroconcluido.js';
import Exibirperfil from './exibirperfil.js';

function Routes(){
       return(
       
              <BrowserRouter>
                     <Switch>
                            <Route exact path="/" component={Home}/>;
                            <Route path="/cadastro" component={Cadastro}/>;
                            <Route path="/busca" component={Busca}/>;
                            <Route path="/login" component={Login}/>;
                            <Route path="/upimagens" component={Upimagens}/>;
                            <Route path="/concluido" component={Cadastroconcluido}/>;
                            <Route path="/exibirperfil" component={Exibirperfil}/>;
                     </Switch>
              </BrowserRouter>

       );
}

export default Routes;