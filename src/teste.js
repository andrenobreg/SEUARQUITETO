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
        }
    }

    handleCallback = (childData) =>{
      this.setState({cidade: childData})
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

        function filtroCidade(valor,cidade, index){
          
          if(cidade=="BRASIL"){
            return <a className="resultados">       {Card(valor.img, valor.titulo, valor.desc, valor.classif, index)}       </a>
          }else{
            if(cidade==valor.cidade){
              return <a className="resultados">       {Card(valor.img, valor.titulo, valor.desc, valor.classif, index)}       </a>
            }
          }


        }
        
        return (
          <div>
            <html style={{height:"100%", width:"100%", margin:"0"}}>
              <body style={{height:"100%", width:"100%", margin:"0"}}>
                <div style={{width:"100vw", height:"100%", minHeight:"100%", boxSizing:"border-box", overflowX:"hidden", overflowY:"hidden", backgroundColor:"green"}}>

                </div>
              </body>
            </html>
          </div>
        )    
    }
}



export default Busca;