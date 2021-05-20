import React from 'react';
import './css/index.css';
import Header from './header.js';
import Footer from './footer.js';
import Barrabusca from './barrabusca.js';
import Barracidades from './barracidades.js';
import Card from './card.js';
import { render } from '@testing-library/react';
import Database from './database.js';
import lupa from './img/lupapq.png';
import './css/busca.css';
import Cardcomentario from './cardcomentario.js';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { useParams } from 'react-router';
import Slider from './slider.js';
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
            this.state.basecomentarios[this.state.posicao].comentarios[i] = {nome: this.state.nome, comentario: this.state.comentario, avaliacao:4};
            this.setState({nome: this.state.nome})
            this.setState({comentario: this.state.comentario}) 
            alert("Obrigado pelo comentário!");
           }
        }
        
  
      } 

    render(){
    
        return ( //this.state.baseusuarios[this.state.posicao].titulo
            <div>
        <html>
            <Header/>
            <body>
                <main>
                    <div style={{width:"1080px", height:"910px", backgroundColor:"#bbbbbb", position:"absolute", left:"50%", marginLeft:"-540px", overflow:"auto"}}>
                    <div style={{width: "1040px", height: "150px", backgroundColor: "green", marginLeft: "12px", marginTop: "10px", display: "flex", textDecoration: "none"}}>
                        <div style={{display: "flex", textAlign: "left"}}>
            
                                <div style={{width: "955px", height: "140px", backgroundColor:"cornflowerblue", marginTop: "5px", marginLeft: "5px", display: "block", textDecoration:"none"}}>
                                    <div style={{width: "945px", height: "30px", marginLeft: "5px", marginTop: "5px", backgroundColor: "darkgray", textDecoration: "none", fontFamily: "Arial", fontSize: "20px", fontWeight: "bold", color: "black"}}>
                                        {this.state.baseusuarios[this.state.posicao].titulo}
                                    </div>
                                    <div style={{width: "945px", height: "95px", marginLeft: "5px", marginTop: "5px", backgroundColor: "darkgray", textDecoration:"none", fontFamily: "Arial", fontSize:"15px", color: "black"}}>
                                        {this.state.baseusuarios[this.state.posicao].desc}
                                    </div>
                                </div>
                                <div style={{width: "70px", height: "140px", backgroundColor: "darkgoldenrod", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                                    {this.state.baseusuarios[this.state.posicao].classif}
                                </div>
                            </div>
                        </div>
                        <div style={{width:"1040px", height:"595px", marginLeft:"12px", marginTop:"12px", backgroundColor:"#f2f2f2"}}>
                        <Slider width="1040px" height="595px"/>
                        </div>
                        
                        <div style={{width:"1040px", height:"120px", marginLeft:"12px", marginTop:"12px", backgroundColor:"#f2f2f2", display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <div>
                            <div style={{height:"25px", marginTop:"0px", fontFamily:"Arial", fontWeight:"bold", fontSize:"20px"}}>{this.state.baseusuarios[this.state.posicao].site}</div>
                            <div style={{height:"25px", marginTop:"5px", fontFamily:"Arial", fontWeight:"bold", fontSize:"20px"}}>{this.state.baseusuarios[this.state.posicao].instagram}</div>
                            <div style={{height:"25px", marginTop:"5px", fontFamily:"Arial", fontWeight:"bold", fontSize:"20px"}}>{this.state.baseusuarios[this.state.posicao].telefone}</div>
                            </div>
                        </div>
                        <div style={{width: "1040px", height: "65px", backgroundColor: "green", marginLeft: "12px", marginTop: "10px", display: "flex", textDecoration: "none"}}>
                            <div style={{display: "flex", textAlign: "left"}}>
                                
                                <div style={{width: "700px", height: "65px", backgroundColor:"cornflowerblue", marginTop: "0px", marginLeft: "0px", display: "block", textDecoration:"none"}}>
                                    <div style={{width: "690px", height: "25px", marginLeft: "5px", marginTop: "5px", backgroundColor: "darkgray", textDecoration: "none", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold", color: "black"}}>
                                    <input type="text" onChange={(event) => (this.setState({nome:event.target.value}))} id="input1"  placeholder="SEU NOME..." style={{marginTop:"0px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"685px", height:"23px", float:"left", marginLeft:"0px"}}/>
                                    </div>
                                    <div style={{width: "690px", height: "25px", marginLeft: "5px", marginTop: "5px", backgroundColor: "darkgray", textDecoration:"none", fontFamily: "Arial", fontSize:"16px", color: "black"}}>
                                    <input type="text" onChange={(event) => (this.setState({comentario:event.target.value}))} id="input2"  placeholder="DEIXE UM COMENTÁRIO..." style={{marginTop:"0px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"685px", height:"23px", float:"left", marginLeft:"0px"}}/>
                                    </div>
                                </div>
                                <div style={{width: "270px", height: "55px", backgroundColor: "darkgoldenrod", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                                    avaliação
                                </div>
                                <div onClick={(event) => {this.inserirCom()}} style={{cursor:"pointer", width: "55px", height: "55px", backgroundColor: "red", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                                    enviar
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