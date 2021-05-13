import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import imagemcadastro from './img/logo80px.png';
import botoes from './css/botoes.css';
import Barracidades from './barracidades.js';
import Inputcidadescadastro from './inputcidadescadastro.js';
import Botaoconcluir from './botaoconcluir.js';
import Botaoupimagens from './botaoupimagens.js';
import './css/botoes.css';

   
class Cadastroconcluido extends React.Component {
  constructor(props){
      super(props);
      this.state ={
      }
  }
  
  render(){
      
      return (
        <div>
        <html>
            <Header/>
            <body>
            <main>
            
                <div style={{width:"635px", position:"absolute", left:"50%", marginLeft:"-318px", top:"50%", marginTop:"-79px"}}>
                    <img src={imagemcadastro}/>
                    <div style={{marginTop:"40px", fontFamily:"Arial", fontWeight:"bold", fontSize:"30px", color:"#676767"}}>CADASTRO CONCLUÍDO!</div>
                    
                </div>

            </main>
            </body>
            <Footer/>
        </html>
    </div>
      )    
  }
}
export default Cadastroconcluido;