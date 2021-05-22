import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home.js'
import Cadastro from './cadastro.js';
import Busca from './busca.js';
import Login from './login.js';
import Upimagens from './upimagens.js';
import Mensagem from './mensagem.js';
import Exibirperfil from './exibirperfil.js';
import Teste from './teste.js';
import Editarperfil from './editarperfil.js';
function Routes(){
       return(
       
              <BrowserRouter>
                     <Switch>
                            <Route exact path="/" component={Home}/>;
                            <Route path="/cadastro" component={Cadastro}/>;
                            <Route path="/busca" component={Busca}/>;
                            <Route path="/login" component={Login}/>;
                            <Route path="/upimagens" component={Upimagens}/>;
                            <Route path="/Mensagem/:id" component={Mensagem}/>;
                            <Route path="/exibirperfil/:id" component={Exibirperfil}/>;
                            <Route path="/teste" component={Teste}/>
                            <Route path="/editarperfil" component={Editarperfil}/>
                     </Switch>
              </BrowserRouter>

       );
}

export default Routes;