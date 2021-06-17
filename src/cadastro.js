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
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

class Cadastro extends React.Component {
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
      const classes = () => {
        this.useStyles();
      } 
      return (
        
        <div>
        <html>
            <body>
            <Header/>
                <main style={{width:"100%", height:"calc(100vh - 110px)", marginTop:"6px", paddingLeft:"20px", paddingRight:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style={{maxWidth:"635px"}}>
                    <img width="100%" src={imagemcadastro}/>
                    <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="nome" label="NOME" style={{width:"100%"}}/>
                    <TextField id="descricao" label="DESCRIÇÃO" style={{width:"100%"}}/>
                    <Autocomplete
                        id="cidades"
                        options={this.state.basecidades}
                        getOptionLabel={(option) => option }
                        style={{ width: "100%"}}
                        renderInput={(params) => <TextField {...params} label="CIDADE..." />}
                        onChange={(event, value) => this.handleChange(value)}
                    />
                    <TextField id="email" label="EMAIL" style={{width:"100%"}}/>
                    <TextField id="telefone" label="TELEFONE" style={{width:"100%"}}/>
                    <TextField id="site" label="SITE" style={{width:"100%"}}/>
                    <TextField id="instagram" label="INSTAGRAM" style={{width:"100%"}}/>
                    <TextField id="senha" label="SENHA" type="Password" style={{width:"100%"}}/>
                    <TextField id="confirmasenha" label="CONFIRMAÇÃO DE SENHA" type="Password" style={{width:"100%"}}/>
                    </form>
                    <Link to="/upimagens"><Button variant="contained" style={{width:"100%", marginTop:"30px", fontSize:"15px", fontFamily:"Arial", fontWeight:"bold", color:"gray"}}>PRÓXIMA</Button></Link>
                    </div>
                </main>
            <Footer/>
            </body>
        </html>
    </div>
      )    
  }
}
export default Cadastro;