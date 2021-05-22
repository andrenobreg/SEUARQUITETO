import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import imagemcadastro from './img/logo80px.png';

   
class Login extends React.Component {
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
            
                <div style={{width:"635px", position: "absolute", left:"50%", marginLeft:"-318px", top:"50%", marginTop:"-130px"}}>
                    <img src={imagemcadastro}/>
                    
                    <div class="corpo" style={{marginRight:"11px"}}>
                        <div class="ladoesquerdo" style={{display:"inline-block", float:"left", width:"49%", marginTop:"14px"}}>
                            <ul style={{float: "right", textAlign:"right", marginRight:"7%", fontFamily:"Arial", fontSize:"16px", fontWeight:"bold", color:"#676767", listStyle:"none", marginTop:"18px"}}>
                                <li id="email">EMAIL</li>
                                <li id="senha" style={{marginTop:"15px"}}>SENHA</li>
                            </ul>
                        </div>    

                        <div style={{width:"10px", height:"100px", backgroundColor:"#676767", display:"inline-block", margin:"0", marginTop:"15px"}}>
                        </div>

                        <div class="ladodireito" style={{display:"flex", width:"49%", float:"right", display:"inline-block", marginTop:"0px"}}>
                            <ul class="entradas" style={{listStyle:"none", marginTop:"32px", float:"left"}}>
                                <li><input type="text" id="input1"  style={{marginTop:"0px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"263px", height:"23px"}}/></li>
                                <li><input type="password" id="input2" style={{marginTop:"18px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"263px", height:"23px"}}/></li>
                            </ul>
                        </div>
                    
                    </div>
                    <a href="" class="proxima" style={{width:"200px", height:"30px", backgroundColor:"#818181", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#ffffff", alignItems:"center", textAlign:"center", justifyContent:"center", display:"flex", marginLeft:"210px", marginTop:"28px", transition:"all 0.3s ease", textDecoration:"none"}}>ENTRAR</a>
                
                </div>
            
            </main>
            </body>
            <Footer/>
        </html>
    </div>
      )    
  }
}
export default Login;