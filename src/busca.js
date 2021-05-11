import React from 'react';
import './css/index.css';
import Header from './header.js';
import Footer from './footer.js';
import Barrabusca from './barrabusca.js';
import Barracidades from './barracidades.js';
import Card from './card.js';
import { render } from '@testing-library/react';
import Database from './database.js';
import lupa from './img/lupa.png';
import './css/busca.css';

class Busca extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            baseusuarios: Database().baseusuarios,
        }
    }

    
    render(){

        function filterFunction() {
            var input, filter, a, i, txtValue;
            input = document.getElementById("entradabusca");
            filter = input.value.toUpperCase();
            a = document.getElementsByClassName("resultados");
            for (i = 0; i < a.length; i++) {
              txtValue = a[i].textContent || a[i].innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
              } else {
                a[i].style.display = "none";
              }
            }
        }
              
        return (
            <div>
        <html>
            <Header/>
            <body style={{width:"100%", height: "100%", margin: "0 auto", top: "0", left:"0"}}>
                <main style={{margin: "0 auto", position: "relative", width: "1080px", height: "100%"}}>
                <div className="barrabusca" style={{backgroundColor: "#bbbbbb", height: "55px", width: "1080px", display: "flex", transition: "all 0.3s ease"}}>
                <div className= "lupa" style={{padding: "8px", float: "left", marginBottom: "1px"}}>
                    <img src={lupa}/>
                </div>
                <div className="busca" style={{marginTop: "2x"}}>
                    <input type="text"  placeholder="BUSCAR..."  id="entradabusca" onKeyUp={filterFunction} style={{backgroundColor: "#bbbbbb", height: "50px", width: "900px", fontSize: "20px", fontFamily: "Arial", fontWeight: "bold", color: "#838383", border: "0", boxShadow:"0", outline: "0"}}/>
                </div>
            </div>
                <Barracidades/>
                    <div style={{backgroundColor: "#bbbbbb", width: "1080px", display: "block", textDecoration: "none", height: "760px", overflow: "auto"}}>
                    {this.state.baseusuarios.map((valor) => (<a className="resultados" id={valor}>{Card(valor.img, valor.titulo, valor.desc, valor.classif)}</a>))}
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
