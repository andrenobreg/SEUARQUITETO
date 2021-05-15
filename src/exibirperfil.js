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

class Exibirperfil extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            baseusuarios: Database().baseusuarios,
            basecomentarios: Database().basecomentarios,
            posicao: 0,
            teste: "lalala",
        }
    }
    render(){
        
        function inserirComentario(){
        }
        return (
            <div>
        <html>
            <Header/>
            <body>
                <main>
                    <div style={{width:"1080px", height:"910px", backgroundColor:"#bbbbbb", position:"absolute", left:"50%", marginLeft:"-540px", overflow:"auto"}}>
                    
                        {Card(this.state.baseusuarios[this.state.posicao].img, this.state.baseusuarios[this.state.posicao].titulo, this.state.baseusuarios[this.state.posicao].desc, this.state.baseusuarios[this.state.posicao].classif)}
                        <div style={{width:"1040px", height:"595px", marginLeft:"12px", marginTop:"12px", backgroundColor:"#f2f2f2"}}>
                        IMAGENS
                        </div>
                        
                        <div style={{width:"1040px", height:"120px", marginLeft:"12px", marginTop:"12px", backgroundColor:"#f2f2f2"}}>
                        CONTATOS
                        </div>
                        <div style={{width: "1040px", height: "65px", backgroundColor: "green", marginLeft: "12px", marginTop: "10px", display: "flex", textDecoration: "none"}}>
                            <div style={{display: "flex", textAlign: "left"}}>
                                
                                <div style={{width: "700px", height: "65px", backgroundColor:"cornflowerblue", marginTop: "0px", marginLeft: "0px", display: "block", textDecoration:"none"}}>
                                    <div style={{width: "690px", height: "25px", marginLeft: "5px", marginTop: "5px", backgroundColor: "darkgray", textDecoration: "none", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold", color: "black"}}>
                                    <input type="text" id="input1"  placeholder="SEU NOME..." style={{marginTop:"0px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"685px", height:"23px", float:"left", marginLeft:"0px"}}/>
                                    </div>
                                    <div style={{width: "690px", height: "25px", marginLeft: "5px", marginTop: "5px", backgroundColor: "darkgray", textDecoration:"none", fontFamily: "Arial", fontSize:"16px", color: "black"}}>
                                    <input type="text" id="input2"  placeholder="DEIXE UM COMENTÁRIO..." style={{marginTop:"0px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"685px", height:"23px", float:"left", marginLeft:"0px"}}/>
                                    <input type="submit" onClick={inserirComentario}/>
                                    </div>
                                </div>
                                <div style={{width: "330px", height: "55px", backgroundColor: "darkgoldenrod", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                                    avaliação
                                </div>
                            </div>
                        </div>
                        {this.state.teste}
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