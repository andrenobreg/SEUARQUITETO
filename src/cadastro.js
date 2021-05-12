import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import imagemcadastro from './img/imagemcadastro.png';
import botoes from './css/botoes.css';
import Barracidades from './barracidades.js';
import Inputcidadescadastro from './inputcidadescadastro.js';

   
class Cadastro extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          cidade: "BRASIL",
      }
  }

  handleCallback = (childData) =>{
    this.setState({cidade: childData})
  }
  
  render(){
      
      return (
        <div>
        <html>
            <Header/>
            <body style={{width:"100%", height:"100%", margin:"0 auto", top:"0", left:"0", display:"flex"}}>
            <main style={{margin: "0 auto", position:"relative", width:"1080px", height:"100%", display:"flex"}}>
            
                <div class ="imagemcadastro" style={{marginTop:"5px", alignItems:"center", textAlign:"center", justifyContent:"center"}}>
                    <img src={imagemcadastro}/>
                    
                    <div class="corpo" style={{marginRight:"11px"}}>
                        <div class="ladoesquerdo" style={{display:"inline-block", float:"left", width:"49%", marginTop:"1%"}}>
                            <ul style={{float: "right", textAlign:"right", marginRight:"7%", fontFamily:"Arial", fontSize:"20px", fontWeight:"bold", color:"#676767", listStyle:"none", marginTop:"66px"}}>
                                <li id="nome">NOME</li>
                                <li id="descricao" style={{marginTop:"20px"}}>DESCRIÇÃO</li>
                                <li id="descricao" style={{marginTop:"20px"}}>CIDADE</li>
                                <li id="email" style={{marginTop:"20px"}}>EMAIL</li>
                                <li id="telefone" style={{marginTop:"20px"}}>TELEFONE</li>
                                <li id="site" style={{marginTop:"20px"}}>SITE</li>
                                <li id="instagram" style={{marginTop:"20px"}}>INSTAGRAM</li>
                                <li id="senha" style={{marginTop:"20px"}}>SENHA</li>
                                <li id="confirmasenha" style={{marginTop:"20px"}}>CONFIRMAÇÃO DE SENHA</li>
                            </ul>
                        </div>    

                        <div style={{width:"10px", height:"500px", backgroundColor:"#676767", display:"inline-block", margin:"0", marginTop:"1%"}}>
                        </div>

                        <div class="ladodireito" style={{display:"flex", width:"49%", float:"right", display:"inline-block", marginTop:"1%"}}>
                            <ul class="entradas" style={{listStyle:"none", marginTop:"65px", float:"left"}}>
                                <li><input type="text" id="input1"  style={{marginTop:"0px", backgroundColor:"#cecece", fontSize:"20px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0"}}/></li>
                                <li><input type="text" id="input2" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"20px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0"}}/></li>
                                <li><Inputcidadescadastro parentCallback = {this.handleCallback} /></li>
                                <li><input type="text" id="input4" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"20px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0"}}/></li>
                                <li><input type="text" id="input5" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"20px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0"}}/></li>
                                <li><input type="text" id="input6" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"20px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0"}}/></li>
                                <li><input type="text" id="input7" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"20px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0"}}/></li>
                                <li><input type="text" id="input8" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"20px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0"}}/></li>
                                <li><input type="text" id="input9" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"20px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0"}}/></li>
                            </ul>
                        </div>
                    
                    </div>
                    <a href="" class="proxima" style={{width:"200px", height:"55px", backgroundColor:"#818181", fontSize:"20px", fontFamily:"Arial", fontWeight:"bold", color:"#ffffff", alignItems:"center", textAlign:"center", justifyContent:"center", display:"flex", marginLeft:"40%", marginTop:"28px", transition:"all 0.3s ease", textDecoration:"none"}}>PRÓXIMA</a>
                
                </div>
            
            </main>
            </body>
            <Footer/>
        </html>
    </div>
      )    
  }
}
export default Cadastro;