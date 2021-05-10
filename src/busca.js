import React from 'react';
import './css/index.css';
import Header from './header.js';
import Footer from './footer.js';
import Barrabusca from './barrabusca.js';
import Barracidades from './barracidades.js';
import Card from './card.js';
import { render } from '@testing-library/react';
import Database from './database.js';

class Busca extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            posicao: [3,5,10,12,13,14,15],
            baseusuarios: Database().baseusuarios,
        }
    }

    render(){
            
        return (
            <div>
        <html>
            <Header/>
            <body style={{width:"100%", height: "100%", margin: "0 auto", top: "0", left:"0"}}>
                <main style={{margin: "0 auto", position: "relative", width: "1080px", height: "100%"}}>
                <Barrabusca/>
                <Barracidades/>
                    <div style={{backgroundColor: "#bbbbbb", width: "1080px", display: "block", textDecoration: "none", height: "760px", overflow: "auto"}}>
                    {this.state.posicao.map((valor) => (Card(this.state.baseusuarios[valor].img, this.state.baseusuarios[valor].titulo, this.state.baseusuarios[valor].desc, this.state.baseusuarios[valor].classif)))}
                    </div>
                </main>
            </body>
            <Footer/>
        </html>
    </div>
        )    
    }
}



export default Busca;
