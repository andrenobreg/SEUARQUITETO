import React, { Component } from 'react';
import './css/barracidade.css';
import setabaixo from './img/setabaixo.png';

/*
class Barracidades extends Component {
    constructor (props){
        super(props);
        this.myFunction = this.myFunction.bind(this);

    }
    
    let cidade = ["BRASIL","ARACAJU","BELÉM","BELO HORIZONTE","BOA VISTA","BRASÍLIA","CAMPO GRANDE","CUIABÁ",
    "CURITIBA","FLORIANÓPOLIS","FORTALEZA","GOIÂNIA","JOÃO PESSOA","MACAPÁ","MACEIÓ","MANAUS","NATAL",
    "PALMAS","PORTO ALEGRE","PORTO VELHO","RECIFE","RIO BRANCO","RIO DE JANEIRO","SALVADOR","SÃO LUÍS",
    "SÃO PAULO","TERESINA","VITÓRIA"];

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
        console.log("click!")
      }
    
    function filterFunction() {
        var input, filter, ul, li, a, i, div, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
    }

    function nomeExibido (valor){
        console.log(valor);
        document.getElementById("myDropdown").classList.toggle("show");
        return valor;
    }
    return (
        <div>
            <div class="dropdown">
                <button onClick = {myFunction} class="dropbtn">BRASIL<img src={setabaixo} style={{float: "right", marginTop: "5px"}}/></button>
                <div id="myDropdown" class="dropdown-content">
                    <input type="text" placeholder="Digite uma cidade..." id="myInput" onKeyUp={filterFunction}/>
                    {cidade.map((valor) => (<a onClick = {() => {nomeExibido(valor);}} id={valor}>{valor}</a>))}
                </div>
            </div>
        </div>
    )
}

export default Barracidades;
*/    
    function Barracidades (nomecidade) {
    let cidade = ["BRASIL","ARACAJU","BELÉM","BELO HORIZONTE","BOA VISTA","BRASÍLIA","CAMPO GRANDE","CUIABÁ",
    "CURITIBA","FLORIANÓPOLIS","FORTALEZA","GOIÂNIA","JOÃO PESSOA","MACAPÁ","MACEIÓ","MANAUS","NATAL",
    "PALMAS","PORTO ALEGRE","PORTO VELHO","RECIFE","RIO BRANCO","RIO DE JANEIRO","SALVADOR","SÃO LUÍS",
    "SÃO PAULO","TERESINA","VITÓRIA"];

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
        console.log("click!")
      }
    
    function filterFunction() {
        var input, filter, ul, li, a, i, div, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
    }

    function nomeExibido (valor){
        console.log(valor);
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
            return (
                <div>
                    <div class="dropdown">
                        <button onClick = {myFunction} class="dropbtn">CIDADE<img src={setabaixo} style={{float: "right", marginTop: "5px"}}/></button>
                        <div id="myDropdown" class="dropdown-content">
                            <input type="text" placeholder="Digite uma cidade..." id="myInput" onKeyUp={filterFunction}/>
                            {cidade.map((valor) => (<a onClick = {() => {nomeExibido(valor);}} id={valor}>{valor}</a>))}
                        </div>
                    </div>
                </div>
            )
        
    }


export default Barracidades;
