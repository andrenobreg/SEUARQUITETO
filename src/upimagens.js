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
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import Uploader from './uploader.js';
   
class Upimagens extends React.Component {
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
            
                <div style={{width:"635px", position:"absolute", left:"50%", marginLeft:"-318px", top:"50%", marginTop:"-232px"}}>
                    <img src={imagemcadastro}/>
                    
                    <div style={{backgroundColor:"#d7d7d7", width:"635px", height:"340px", overflow:"auto"}}>
                        <Uploader/>
                    </div>

                    
                    
                    <Link to="/concluido"><div style={{position:"absolute", left:"50%", marginLeft:"-100px", marginTop:"50px"}}><Botaoconcluir/></div></Link>
                
                </div>
            
            </main>
            </body>
            <Footer/>
        </html>
    </div>
      )    
  }
}
export default Upimagens;