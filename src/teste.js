import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import imagemcadastro from './img/logo80px.png';
import botoes from './css/botoes.css';
import Barracidades from './barracidades.js';
import Inputcidadescadastro from './inputcidadescadastro.js';
import Uploader from './uploader.js';

   
class Teste extends React.Component {
  constructor(props){
      super(props);
      this.state ={
      }
  }
  
  render(){
      
      return (
      <div>
      <Uploader/>  
      </div>
      )    
  }
}
export default Teste;