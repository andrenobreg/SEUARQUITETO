import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import imagemcadastro from './img/logo80px.png';
import './css/botoes.css';

   
class Mensagem extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          mensagem: this.props.match.params.id,
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
                    <div style={{marginTop:"40px", fontFamily:"Arial", fontWeight:"bold", fontSize:"30px", color:"#676767"}}>{this.state.mensagem}</div>
                    
                </div>

            </main>
            </body>
            <Footer/>
        </html>
    </div>
      )    
  }
}
export default Mensagem;