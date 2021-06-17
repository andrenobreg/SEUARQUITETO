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
            <body>
            <Header/>
                <main style={{width:"100%", height:"calc(100vh - 110px)", marginTop:"6px", paddingLeft:"20px", paddingRight:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style={{maxWidth:"635px", width:"100%", maxHeight:"500px"}}>
                        <img width="100%" src={imagemcadastro}/>
                        <p style={{marginTop:"20px", fontFamily:"Arial", fontWeight:"bold", fontSize:"30px", color:"#676767"}}>{this.state.mensagem}</p>
                    </div>
                </main>
            <Footer/>
            </body>
        </html>
    </div>
      )    
  }
}
export default Mensagem;