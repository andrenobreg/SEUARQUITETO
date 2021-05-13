import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import imagemcadastro from './img/logo80px.png';
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
            <main style={{margin: "0 auto", position:"relative", width:"635px", height:"100%", display:"flex"}}>
            
                <div class ="imagemcadastro" style={{marginTop:"110px", alignItems:"center", textAlign:"center", justifyContent:"center"}}>
                    <img src={imagemcadastro}/>
                    
                    <div class="corpo" style={{marginRight:"11px"}}>
                        <div class="ladoesquerdo" style={{display:"inline-block", float:"left", width:"49%", marginTop:"14px"}}>
                            <ul style={{float: "right", textAlign:"right", marginRight:"7%", fontFamily:"Arial", fontSize:"16px", fontWeight:"bold", color:"#676767", listStyle:"none", marginTop:"66px"}}>
                                <li id="nome">NOME</li>
                                <li id="descricao" style={{marginTop:"25px"}}>DESCRIÇÃO</li>
                                <li id="descricao" style={{marginTop:"25px"}}>CIDADE</li>
                                <li id="email" style={{marginTop:"25px"}}>EMAIL</li>
                                <li id="telefone" style={{marginTop:"25px"}}>TELEFONE</li>
                                <li id="site" style={{marginTop:"25px"}}>SITE</li>
                                <li id="instagram" style={{marginTop:"25px"}}>INSTAGRAM</li>
                                <li id="senha" style={{marginTop:"25px"}}>SENHA</li>
                                <li id="confirmasenha" style={{marginTop:"25px"}}>CONFIRMAÇÃO DE SENHA</li>
                            </ul>
                        </div>    

                        <div style={{width:"10px", height:"500px", backgroundColor:"#676767", display:"inline-block", margin:"0", marginTop:"1%"}}>
                        </div>

                        <div class="ladodireito" style={{display:"flex", width:"49%", float:"right", display:"inline-block", marginTop:"1%"}}>
                            <ul class="entradas" style={{listStyle:"none", marginTop:"69px", float:"left"}}>
                                <li><input type="text" id="input1"  style={{marginTop:"0px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"263px", height:"23px"}}/></li>
                                <li><input type="text" id="input2" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"263px", height:"23px"}}/></li>
                                <li><Inputcidadescadastro parentCallback = {this.handleCallback} /></li>
                                <li><input type="text" id="input4" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"263px", height:"23px"}}/></li>
                                <li><input type="text" id="input5" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"263px", height:"23px"}}/></li>
                                <li><input type="text" id="input6" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"263px", height:"23px"}}/></li>
                                <li><input type="text" id="input7" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"263px", height:"23px"}}/></li>
                                <li><input type="password" id="input8" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"263px", height:"23px"}}/></li>
                                <li><input type="password" id="input9" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"263px", height:"23px"}}/></li>
                            </ul>
                        </div>
                    
                    </div>
                    <a href="" class="proxima" style={{width:"200px", height:"30px", backgroundColor:"#818181", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#ffffff", alignItems:"center", textAlign:"center", justifyContent:"center", display:"flex", marginLeft:"210px", marginTop:"28px", transition:"all 0.3s ease", textDecoration:"none"}}>PRÓXIMA</a>
                
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