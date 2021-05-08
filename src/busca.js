import React from 'react';
import './css/index.css';
import Header from './header.js';
import Footer from './footer.js';
import Barrabusca from './barrabusca.js';
import Barracidades from './barracidades.js';
import Card from './card.js';

function Busca() {
    let dados = [
        {img:"link", titulo:"Mario Fernandes Arquiteto", desc:"sou um arquiteto", classif:4},
        {img:"link", titulo:"Antunes Arquitetura", desc:"sou um arquiteto", classif:4},
        {img:"link", titulo:"Cabral Melo Arquitetos", desc:"sou um arquiteto", classif:4},
        {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista", desc:"sou um arquiteto", classif:4},
        {img:"link", titulo:"Orion Arquitetura", desc:"sou um arquiteto", classif:4}];
    return (
    <div className="Cadastro">
        <html>
            <Header/>
            <body style={{width:"100%", height: "100%", margin: "0 auto", top: "0", left:"0"}}>
                <main style={{margin: "0 auto", position: "relative", width: "1080px", height: "100%"}}>
                <Barrabusca/>
                <Barracidades/>
                    <div style={{backgroundColor: "#bbbbbb", width: "1080px", display: "block", textDecoration: "none", height: "500px", overflow: "auto"}}>
                    {dados.map((valor) => (Card(valor.img, valor.titulo, valor.desc, valor.classif)))}
                    </div>
                </main>
            </body>
            <Footer/>
        </html>
    </div>
    );
}

export default Busca;