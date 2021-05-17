import React, { Component } from 'react';
import Cardcomentario from './cardcomentario.js';
import Database from './database.js';
   
class Teste extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          basecomentarios: Database().basecomentarios,
          teste: null,
          nome: null,
          comentario: null,
          avaliacao: null,
      }
  }
  
    inserirCom(){
      let i = this.state.basecomentarios[0].comentarios.length;
      i = i+1;
      this.state.basecomentarios[0].comentarios[i] = {nome: this.state.nome, comentario: this.state.comentario, avaliacao:4};
      this.setState({nome: this.state.nome})
      this.setState({comentario: this.state.comentario})

    } 

  render(){
     
      return (
        <div>
             <div style={{width: "1040px", height: "65px", backgroundColor: "green", marginLeft: "12px", marginTop: "10px", display: "flex", textDecoration: "none"}}>
                            <div style={{display: "flex", textAlign: "left"}}>
                                
                                <div style={{width: "700px", height: "65px", backgroundColor:"cornflowerblue", marginTop: "0px", marginLeft: "0px", display: "block", textDecoration:"none"}}>
                                    <div style={{width: "690px", height: "25px", marginLeft: "5px", marginTop: "5px", backgroundColor: "darkgray", textDecoration: "none", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold", color: "black"}}>
                                    <input type="text" onChange={(event) => (this.setState({nome:event.target.value}))} id="inputnome"  placeholder="SEU NOME..." style={{marginTop:"0px", backgroundColor:"#cecece", fontSize:"16px", fontFamily:"Arial", fontWeight:"bold", color:"#838383", border:"0", boxShadow:"0", outline:"0", width:"685px", height:"23px", float:"left", marginLeft:"0px"}}/>
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
            {this.state.basecomentarios[0].comentarios.map((valor) => (Cardcomentario(valor.nome, valor.comentario, valor.avaliacao)) )}
        </div>
      )    
  }
}
export default Teste;