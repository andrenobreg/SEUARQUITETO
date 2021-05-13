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

class Exibirperfil extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            baseusuarios: Database().baseusuarios,
            posicao: 0,
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
            <body>
                <main>
                    <div style={{width:"1080px", height:"910px", backgroundColor:"#bbbbbb", position:"absolute", left:"50%", marginLeft:"-540px", overflow:"auto"}}>
                    
                        {Card(this.state.baseusuarios[this.state.posicao].img, this.state.baseusuarios[this.state.posicao].titulo, this.state.baseusuarios[this.state.posicao].desc, this.state.baseusuarios[this.state.posicao].classif)}
                        <div style={{width:"1040px", height:"400px", marginLeft:"12px", marginTop:"12px", backgroundColor:"#f2f2f2"}}>
                        IMAGENS
                        </div>

                        <div style={{width:"1040px", height:"120px", marginLeft:"12px", marginTop:"12px", backgroundColor:"#f2f2f2"}}>
                        CONTATOS
                        </div>

                        <div style={{width:"1040px", height:"400px", marginLeft:"12px", marginTop:"12px", backgroundColor:"#f2f2f2", display:"flex"}}>
                            <div style={{backgroundColor:"green", width:"1030px", height:"55px", marginLeft:"5px", marginTop:"5px"}}>
                                <div style={{backgroundColor:"white", width:"1020px", height:"20px", marginLeft:"5px", marginTop:"5px"}}>
                                NOME
                                </div>
                                <div style={{backgroundColor:"white", width:"1020px", height:"20px", marginLeft:"5px", marginTop:"5px"}}>
                                COMENTÁRIO
                                </div>
                            
                            </div>
                            <div style={{backgroundColor:"chocolate", width:"1020px", height:"200px"}}>
                                COMENTÁRIOS
                            </div>
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



export default Exibirperfil;