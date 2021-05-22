import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Database from './database.js';
import Stars from './stars.js';
import Botao from './botao.js';
import Uploader from './uploader.js';
import {Link} from 'react-router-dom';
class Editarperfil extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            baseusuarios: Database().baseusuarios,
            basecomentarios: Database().basecomentarios,
            nome: "",
            comentario: "",
            avaliacao: "",
            posicao: 0,//this.props.match.params.id, // posicao do arquiteto a ser exibido no vetor
        }
    }

    render(){
    
        return ( //this.state.baseusuarios[this.state.posicao].titulo
            <div>
        <html>
            <Header/>
            <body>
                <main>
                    <div style={{width:"1080px", height:"calc(100vh - 70px)", backgroundColor:"#f4f4f4", position:"absolute", left:"50%", marginLeft:"-540px", overflow:"auto"}}>
                    <div style={{width: "1040px", height: "150px", backgroundColor: "#e0e0e0", marginLeft: "12px", marginTop: "10px", display: "flex", textDecoration: "none"}}>
                        <div style={{display: "flex", textAlign: "left"}}>
            
                                <div style={{width: "895px", height: "140px", backgroundColor:"#d6d6d6", marginTop: "5px", marginLeft: "5px", display: "block", textDecoration:"none"}}>
                                    <input placeholder={this.state.baseusuarios[this.state.posicao].titulo} style={{width: "885px", height: "30px", marginLeft: "5px", marginTop: "5px", backgroundColor: "#e0e0e0", textDecoration: "none", fontFamily: "Arial", fontSize: "20px", fontWeight: "bold", color: "black", border:"0", outline:"0"}}/>
                                        
                                    
                                    <input placeholder={this.state.baseusuarios[this.state.posicao].desc} style={{width: "885px", height: "95px", marginLeft: "5px", marginTop: "5px", backgroundColor: "#e0e0e0", textDecoration:"none", fontFamily: "Arial", fontSize:"15px", color: "black", border:"0", outline:"0"}}/>
                                        
                                    
                                </div>
                                <div style={{paddingLeft:"13px", paddingTop: "45px", width: "130px", height: "140px", backgroundColor: "#d6d6d6", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                                    <Stars edit={false} value={this.state.baseusuarios[this.state.posicao].classif}/>
                                </div>
                        </div>
                    </div>
                        <div style={{width:"1040px", height:"550px", marginLeft:"12px", marginTop:"12px", backgroundColor:"#e0e0e0"}}>
                            <div style={{paddingTop:"10px", display:"flex", overflow:"auto"}}>
                            <Uploader/>  
                            </div>
                        </div>
                        
                        <div style={{width:"1040px", height:"120px", marginLeft:"12px", marginTop:"12px", backgroundColor:"#e0e0e0", display:"flex", justifyContent:"center"}}>
                            <div>
                                <div style={{height:"25px", marginTop:"17px"}}><input placeholder={this.state.baseusuarios[this.state.posicao].site} style={{width:"400px", height:"25px", fontFamily:"Arial", fontWeight:"bold", fontSize:"20px", color:"#606060", border:"0", outline:"0", backgroundColor:"#efefef", textAlign:"center"}}/></div>
                                <div style={{height:"25px", marginTop:"5px"}}><input placeholder={this.state.baseusuarios[this.state.posicao].instagram} style={{width:"400px", height:"25px", fontFamily:"Arial", fontWeight:"bold", fontSize:"20px", color:"#606060", border:"0", outline:"0", backgroundColor:"#efefef", textAlign:"center"}}/></div>
                                <div style={{height:"25px", marginTop:"5px"}}><input placeholder={this.state.baseusuarios[this.state.posicao].telefone} style={{width:"400px", height:"25px", fontFamily:"Arial", fontWeight:"bold", fontSize:"20px", color:"#606060", border:"0", outline:"0", backgroundColor:"#efefef", textAlign:"center"}}/></div>
                            </div>
                        </div>
                        <div>
                            <Link to={"/mensagem/"+"EDIÇÃO SALVA!"}><Botao width="830px" height="30px" marginRight="10px" marginLeft="12px" marginTop="12px" value="CONCLUIR"/></Link>
                            <Botao width="200px" height="30px" marginTop="12px" value="EXCLUIR CONTA"/>

                        </div>
                    </div>
                
                </main>
            </body>
            <Footer/>
        </html>
    </div>
        )    
    }
}



export default Editarperfil;