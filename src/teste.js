import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import imagemcadastro from './img/logo80px.png';
import botoes from './css/botoes.css';
import Barracidades from './barracidades.js';
import Inputcidadescadastro from './inputcidadescadastro.js';

   
class Teste extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          valor: "lalala"
      }
  }
  
  

  render(){
    
    function mudaValor(){
        let a = document.getElementsByClassName("habo");
        console.log(a)
    }  

      return (
        <div>
            <input type="text" className="habo" onChange={(event) => (this.setState({valor: event.target.value}))}/><input type="submit" onClick={(event) => (mudaValor())}/><br/>
        </div>
      )    
  }
}
export default Teste;