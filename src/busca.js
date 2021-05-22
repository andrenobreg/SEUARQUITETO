import React from 'react';
import './css/index.css';
import Header from './header.js';
import Footer from './footer.js';
import Barracidades from './barracidades.js';
import Card from './card.js';
import Database from './database.js';
import lupa from './img/lupapq.png';
import './css/busca.css';
class Busca extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            baseusuarios: Database().baseusuarios,
            cidade: "BRASIL",
            posicao: 0,
        }
    }

    handleCallback = (childData) =>{
      this.setState({cidade: childData})
    }
    render(){
        
      function shuffle(arr) {
          var i,
              j,
              temp;
          for (i = arr.length - 1; i > 0; i--) {
              j = Math.floor(Math.random() * (i + 1));
              temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
          return arr;    
        }

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

        function filtroCidade(valor,cidade, id){
          if(cidade=="BRASIL"){
            return <a className="resultados">       {Card(valor.img, valor.titulo, valor.desc, valor.classif, id)}       </a>
          }else{
            if(cidade==valor.cidade){
              return <a className="resultados">       {Card(valor.img, valor.titulo, valor.desc, valor.classif, id)}       </a>
            }
          }
        }
        shuffle(this.state.baseusuarios)
        return (
            <div>
        <html>
            <Header/>
            <body style={{width:"100%", height: "100%", margin: "0 auto", top: "0", left:"0"}}>
                <main style={{margin: "0 auto", position: "relative", width: "1080px", height: "100%"}}>
                <div className="barrabusca" style={{backgroundColor: "#bbbbbb", height: "25px", width: "1080px", display: "flex", transition: "all 0.3s ease"}}>
                <div className= "lupa" style={{paddingLeft: "2px", float: "left", marginBottom: "1px"}}>
                    <img src={lupa}/>
                </div>
                <div className="busca" style={{paddingTop:"2px"}}>
                    <input type="text"  placeholder="BUSCAR..."  id="entradabusca" onKeyUp={filterFunction} style={{backgroundColor: "#bbbbbb", height: "17px", width: "600px", fontSize: "16px", fontFamily: "Arial", fontWeight: "bold", color: "#838383", border: "0", boxShadow:"0", outline: "0"}}/>
                </div>
            </div>
                <Barracidades parentCallback = {this.handleCallback}/>
                    <div style={{backgroundColor: "#f4f4f4", width: "1080px", paddingBottom:"12px", display: "block", textDecoration: "none", height: "calc(100vh - 120px)", overflow: "auto"}}>
                    {this.state.baseusuarios.map(        (valor) =>                     (filtroCidade(valor, this.state.cidade, this.state.baseusuarios.indexOf(valor)))                 )                        }
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