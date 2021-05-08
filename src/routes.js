import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home.js'
import Cadastro from './cadastro.js';
import Busca from './busca.js';
import Login from './login.js';

function Routes(){
       return(
       
              <BrowserRouter>
                     <Switch>
                            <Route exact path="/" component={Home}/>;
                            <Route path="/cadastro" component={Cadastro}/>;
                            <Route path="/busca" component={Busca}/>;
                            <Route path="/login" component={Login}/>;
                     </Switch>
              </BrowserRouter>

       );
}

export default Routes;