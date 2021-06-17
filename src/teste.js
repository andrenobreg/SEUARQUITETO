import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import imagemcadastro from './img/logo80px.png';
import Inputcidadescadastro from './inputcidadescadastro.js';
import {Link} from 'react-router-dom';
import Botao from './botao.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Database from './database.js';
import Text from './text.js';
class Login extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          cidade: "BRASIL",
          basecidades: Database().basecidades,
      }
  }

  handleCallback = (childData) =>{
    this.setState({cidade: childData})
  }

  handleChange = (valor) =>{
    this.setState({cidade: valor})
  }
  
  render(){
      
      return (
        <div>
        <html>
            <body>
            <Header/>
                <main style={{width:"100%", height:"calc(100vh - 110px)", marginTop:"6px", paddingLeft:"20px", paddingRight:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style={{maxWidth:"635px"}}>
                    <img width="100%" src={imagemcadastro}/>
                    <Text/>
                    <TextField id="id" label="ID" style={{width:"100%"}}/>
                    <TextField id="senha" label="SENHA" type="Password" style={{width:"100%"}}/>
                    <Button variant="contained" style={{width:"100%", marginTop:"30px", fontSize:"15px", fontFamily:"Arial", fontWeight:"bold", color:"gray"}}>PRÓXIMA</Button>
                    </div>
                </main>
            <Footer/>
            </body>
        </html>
    </div>
      )    
  }
}
export default Login;