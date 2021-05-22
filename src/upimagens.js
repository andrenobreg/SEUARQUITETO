import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import imagemcadastro from './img/logo80px.png';
import './css/botoes.css';
import {Link} from 'react-router-dom';
import Uploader from './uploader.js';
import Botao from './botao.js';
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
                    
                    <div style={{backgroundColor:"#d7d7d7", width:"635px", height:"340px", overflow:"auto", display:"flex"}}>
                        <div style={{paddingTop:"10px"}}>
                          <Uploader/>  
                        </div>
                        
                    </div>

                    
                    
                    <Link to={"/mensagem/"+"CADASTRO CONCLUÍDO!"}><div style={{marginTop:"10px"}}><Botao width="635px" height="30px" value="CONCLUIR"/></div></Link>
                
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