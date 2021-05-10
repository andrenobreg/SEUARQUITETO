import React from 'react';
import './css/index.css';
import Header from './header.js';
import Footer from './footer.js';
import Barrabusca from './barrabusca.js';
import Barracidades from './barracidades.js';
import Card from './card.js';

function Busca(){
        let posicao = [3,5,7,10];
        let dados = [
            {img:"link", titulo:"Mario Fernandes Arquiteto (0)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Antunes Arquitetura(1)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Cabral Melo Arquitetos(2)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(3)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(4)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(5)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(6)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(7)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(8)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(9)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(10)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(11)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(12)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(13)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(14)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(15)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(16)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Mariana Braga Arquiteta e Urbanista(17)", desc:"sou um arquiteto", classif:4},
            {img:"link", titulo:"Orion Arquitetura(18)", desc:"sou um arquiteto", classif:4}];
        
            
        return (
            <div className="Cadastro">
        <html>
            <Header/>
            <body style={{width:"100%", height: "100%", margin: "0 auto", top: "0", left:"0"}}>
                <main style={{margin: "0 auto", position: "relative", width: "1080px", height: "100%"}}>
                <Barrabusca/>
                <Barracidades/>
                    <div style={{backgroundColor: "#bbbbbb", width: "1080px", display: "block", textDecoration: "none", height: "760px", overflow: "auto"}}>
                    {posicao.map((valor) => (Card(dados[valor].img, dados[valor].titulo, dados[valor].desc, dados[valor].classif)))}
                    </div>
                </main>
            </body>
            <Footer/>
        </html>
    </div>
        )    
    }

export default Busca;
