import React from 'react';
import './css/index.css';
import Header from './header.js';
import Footer from './footer.js';
import Database from './database.js';
import './css/busca.css';
import Cardcomentario from './cardcomentario.js';
import Slider from './slider.js';
import Stars from './stars.js';
import Enviar from './img/enviar24px.png';
class Exibirperfil extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            baseusuarios: Database().baseusuarios,
            basecomentarios: Database().basecomentarios,
            nome: "",
            comentario: "",
            avaliacao: "",
            posicao: this.props.match.params.id, // posicao do arquiteto a ser exibido no vetor
        }
    }
    

    inserirCom(){
        let i = this.state.basecomentarios[this.state.posicao].comentarios.length;
        i = i+1;
        if(this.state.nome==""){
            alert("Preencher nome!");
            //ADD MÉTODO PARA IGNORAR ESPAÇOS
        }else{
           if(this.state.comentario==""){
                alert("Escrever comentário!");
                //ADD MÉTODO PARA IGNORAR ESPAÇOS
           }else{
               if(this.state.avaliacao==0){
                alert("Valor mínimo: 1 estrela!");
                
               }else{
                this.state.basecomentarios[this.state.posicao].comentarios[i] = {nome: this.state.nome, comentario: this.state.comentario, avaliacao: this.state.avaliacao};
                this.setState({nome: this.state.nome})
                this.setState({comentario: this.state.comentario})
                this.setState({avaliacao: this.state.avaliacao})
                alert("Obrigado pelo comentário!");
               }
               
           }
        }
        
  
      }

      handleCallback = (childData) =>{
        this.setState({avaliacao: childData})
      }

    render(){
        return ( //this.state.baseusuarios[this.state.posicao].titulo
            <div>
        <html>
            <Header/>
            <body>
                <main>
                    <div style={{width:"1080px", height:"calc(100vh - 70px)", backgroundColor:"#f4f4f4", paddingBottom:"12px", position:"absolute", left:"50%", marginLeft:"-540px", overflow:"auto"}}>
                    <div style={{width: "1040px", height: "150px", backgroundColor: "#e0e0e0", marginLeft: "12px", marginTop: "10px", display: "flex", textDecoration: "none"}}>
                        <div style={{display: "flex", textAlign: "left"}}>
            
                                <div style={{width: "895px", height: "140px", backgroundColor:"#d6d6d6", marginTop: "5px", marginLeft: "5px", display: "block", textDecoration:"none"}}>
                                    <div style={{width: "885px", height: "30px", marginLeft: "5px", marginTop: "5px", backgroundColor: "#d6d6d6", textDecoration: "none", fontFamily: "Arial", fontSize: "20px", fontWeight: "bold", color: "black"}}>
                                        {this.state.baseusuarios[this.state.posicao].titulo}
                                    </div>
                                    <div style={{width: "885px", height: "95px", marginLeft: "5px", marginTop: "5px", backgroundColor: "#d6d6d6", textDecoration:"none", fontFamily: "Arial", fontSize:"15px", color: "black"}}>
                                        {this.state.baseusuarios[this.state.posicao].desc}
                                    </div>
                                </div>
                                <div style={{paddingLeft:"13px", paddingTop: "45px", width: "130px", height: "140px", backgroundColor: "#d6d6d6", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                                    <Stars edit={false} value={this.state.baseusuarios[this.state.posicao].classif}/>
                                </div>
                            </div>
                        </div>
                        <div style={{width:"1040px", height:"595px", marginLeft:"12px", marginTop:"12px", backgroundColor:"#f2f2f2"}}>
                        <Slider width="1040px" height="595px"/>
                        </div>
                        
                        <div style={{width:"1040px", height:"120px", marginLeft:"12px", marginTop:"12px", backgroundColor:"#e0e0e0", display:"flex", justifyContent:"center"}}>
                            <div>
                            <div style={{height:"25px", marginTop:"11px", fontFamily:"Arial", fontWeight:"bold", fontSize:"20px", color:"#606060"}}>{this.state.baseusuarios[this.state.posicao].site}</div>
                            <div style={{height:"25px", marginTop:"5px", fontFamily:"Arial", fontWeight:"bold", fontSize:"20px", color:"#606060"}}>{this.state.baseusuarios[this.state.posicao].instagram}</div>
                            <div style={{height:"25px", marginTop:"5px", fontFamily:"Arial", fontWeight:"bold", fontSize:"20px", color:"#606060"}}>{this.state.baseusuarios[this.state.posicao].telefone}</div>
                            </div>
                        </div>
                        <div style={{width: "1040px", height: "65px", backgroundColor: "#e0e0e0", marginLeft: "12px", marginTop: "10px", display: "flex", textDecoration: "none"}}>
                            <div style={{display: "flex", textAlign: "left"}}>
                                
                                <div style={{width: "840px", height: "65px", backgroundColor:"#e0e0e0", marginTop: "0px", marginLeft: "0px", display: "block", textDecoration:"none"}}>
                                    <div style={{width: "835px", height: "25px", marginLeft: "5px", marginTop: "5px", backgroundColor: "#d6d6d6", textDecoration: "none", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold", color: "black"}}>
                                    <input type="text" onChange={(event) => (this.setState({nome:event.target.value}))} id="input1"  placeholder="Seu nome..." style={{marginTop:"0px", backgroundColor:"#d6d6d6", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"830px", height:"23px", float:"left", marginLeft:"0px"}}/>
                                    </div>
                                    <div style={{width: "835px", height: "25px", marginLeft: "5px", marginTop: "5px", backgroundColor: "#d6d6d6", textDecoration:"none", fontFamily: "Arial", fontSize:"16px", color: "black"}}>
                                    <input type="text" onChange={(event) => (this.setState({comentario:event.target.value}))} id="input2"  placeholder="Deixe um comentário..." style={{marginTop:"0px", backgroundColor:"#d6d6d6", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"830px", height:"23px", float:"left", marginLeft:"0px"}}/>
                                    </div>
                                </div>
                                <div style={{paddingTop:"7px", paddingLeft:"13px", width: "130px", height: "55px", backgroundColor: "#d6d6d6", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                                    <Stars edit={true} value={0} parentCallback = {this.handleCallback}/>
                                </div>
                                <div onClick={(event) => {this.inserirCom()}} style={{paddingLeft:"17px", paddingTop:"13px", cursor:"pointer", width: "55px", height: "55px", backgroundColor: "#d6d6d6", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                                    <img src={Enviar}/>
                                </div>
                            </div>
                        </div>
                        {this.state.basecomentarios[this.state.posicao].comentarios.map((valor) => (Cardcomentario(valor.nome, valor.comentario, valor.avaliacao)) )}
                    </div>
                
                </main>
            </body>
            <Footer/>
        </html>
    </div>
        )    
    }
}



export default Exibirperfil;