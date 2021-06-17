import React from 'react';
import './css/index.css';
import Header from './header.js';
import Footer from './footer.js';
import Database from './database.js';
import Cardcomentario from './cardcomentario.js';
import Slider from './slider.js';
import Stars from './stars.js';
import Enviar from './img/enviar24px.png';
import Mensagem from './mensagem.js';
import SendIcon from '@material-ui/icons/Send';
import Cardx from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class Exibirperfil extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            baseusuarios: Database().baseusuarios,
            basecomentarios: Database().basecomentarios,
            nome: "",
            comentario: "",
            avaliacao: "",
            id: this.props.match.params.id, // posicao do arquiteto a ser exibido no vetor
            index: null,
        }
    }

    buscaIndex(){
        for(let i=0; i<=this.state.baseusuarios.length; i++){
            if(i == this.state.baseusuarios.length){
                alert("Perfil não encontrado :(");
                //redirecionar para página de perfil não encontrado
            }else{
                if(this.state.baseusuarios[i].id == this.state.id){
                    this.state.index = i;
                    break;
                }
            }
        }
    }

    inserirCom(){
        let i = this.state.basecomentarios[this.state.index].comentarios.length;
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
                this.state.basecomentarios[this.state.index].comentarios[i] = {nome: this.state.nome, comentario: this.state.comentario, avaliacao: this.state.avaliacao};
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
        this.buscaIndex();
        return (
            <div>
                <html>
                    <body>
                    <Header/>
                        <main style={{paddingLeft:"20px", paddingRight:"20px", display:"flex", width:"100%"}}>
                        <div style={{paddingLeft:"20px", paddingRight:"20px", marginTop:"10px", paddingBottom:"12px", paddingTop:"12px", textDecoration: "none", height: "calc(100vh - 120px)", width:"100%", overflow: "auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <div style={{display:"flex", justifyContent:"center", maxWidth:"1040px", width:"100%"}}>
                                    <Cardx style={{marginTop:"20px", background:"lightgrey", display:"flex", justifyContent:"center"}}>
                                        <Grid container spacing={0} >    
                                            <Grid item md={10} xs={12} style={{paddingLeft:"10px", paddingRight:"10px", paddingTop:"10px", textAlign:"left"}}>
                                                <p style={{fontFamily:"Arial", fontWeight:"bold", fontSize:"18px", color:"black"}}>{this.state.baseusuarios[this.state.index].titulo}</p>
                                                <p style={{fontFamily:"Arial", color:"black"}}>{this.state.baseusuarios[this.state.index].desc}Etiam tristique felis eget orci mollis condimentum. Duis hendrerit enim ut quam tempus, nec malesuada velit pulvinar. Vestibulum elementum sem bibendum orci pellentesque, vel ultricies massa mattis. Nam ultrices vitae diam vel lacinia. Nunc non diam enim. Cras ullamcorper risus id ultrices tincidunt. Praesent magna urna, viverra vel diam sed, luctus posuere nunc. Aliquam eget vehicula ipsum, eget sollicitudin libero.</p>
                                            </Grid>

                                            <Grid item md={2} xs={12} style={{background:"#cfcfcf", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                                <Stars edit={false} value={this.state.baseusuarios[this.state.index].classif}/>
                                            </Grid>
                                        </Grid>
                                    </Cardx>
                                </div>

                                <div style={{display:"flex", justifyContent:"center", maxWidth:"1040px", width:"100%", maxHeight:"700px"}}>
                                    <Cardx style={{marginTop:"20px", background:"lightgrey", display:"flex", justifyContent:"center"}}>
                                        <Slider width="100%" height="100%"/>
                                    </Cardx>
                                </div>

                                <div style={{display:"flex", justifyContent:"center", maxWidth:"1040px", width:"100%"}}>
                                    <Cardx style={{marginTop:"20px", background:"lightgrey", display:"flex", flexDirection:"column", justifyContent:"center", width:"100%"}}>
                                        <div style={{marginTop:"5px", fontFamily:"Arial", fontSize:"15px", color:"gray", fontWeight:"bold"}}>
                                            {this.state.baseusuarios[this.state.index].site}
                                        </div>
                                        <div style={{marginTop:"5px", fontFamily:"Arial", fontSize:"15px", color:"gray", fontWeight:"bold"}}>
                                            {this.state.baseusuarios[this.state.index].instagram}
                                        </div>
                                        <div style={{marginTop:"5px", marginBottom:"5px", fontFamily:"Arial", fontSize:"15px", color:"gray", fontWeight:"bold"}}>
                                            {this.state.baseusuarios[this.state.index].telefone}
                                        </div>
                                        
                                    </Cardx>
                                </div>

                                <div style={{display:"flex", justifyContent:"center", maxWidth:"1040px", width:"100%"}}>
                                <Cardx style={{marginTop:"20px", background:"lightgrey", display:"flex", justifyContent:"center", width:"100%"}}>
                                    <Grid container spacing={0} >

                                        <Grid item md={9} xs={12} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", paddingLeft:"10px", paddingRight:"10px", paddingBottom:"30px"}}>
                                                <TextField onChange={(event) => (this.setState({nome:event.target.value}))} id="input1" label="Seu nome..." style={{width:"100%", maxWidth:"1040px"}}/>
                                                <TextField onChange={(event) => (this.setState({comentario:event.target.value}))} id="input2" label="Comentário..." style={{width:"100%", maxWidth:"1040px"}}/>
                                        </Grid>     
                                        <Grid item md={2} xs={12} style={{background:"#cfcfcf", alignItems:"center", display:"flex", justifyContent:"center"}}>
                                            <Stars edit={true} value={0} parentCallback = {this.handleCallback}/>
                                        </Grid>

                                        <Grid item md={1} xs={12} onClick={(event) => {this.inserirCom()}} style={{cursor:"pointer", background:"#c9c9c9", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                            <SendIcon style={{color:"grey", marginTop:"10px", marginBottom:"10px"}}/>
                                        </Grid>
                                    </Grid>
                                </Cardx>
                                </div>

                                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", maxWidth:"1040px", width:"100%"}}>
                                    {this.state.basecomentarios[this.state.index].comentarios.map((valor) => (Cardcomentario(valor.nome, valor.comentario, valor.avaliacao)) )}
                                </div>

                           
                        </div>
                        </main>
                        <Footer/>
                    </body>
                    
                </html>
            </div>
        )    
    }
}



export default Exibirperfil;