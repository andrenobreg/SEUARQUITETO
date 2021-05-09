import React, { Component } from 'react';
import './css/barracidade.css';
import setabaixo from './img/setabaixo.png';
   
class Barracidades extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          cidade: "BRASIL",
      }
  }
  render(){
      let cidade = ["FORTALEZA", "SALVADOR", "RECIFE"];
      
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
      return (
        <div>
        <div class="dropdown">
            <button onClick = {myFunction} class="dropbtn">{this.state.cidade}<img src={setabaixo} style={{float: "right", marginTop: "5px"}}/></button>
            <div id="myDropdown" class="dropdown-content">
                <input type="text" placeholder="Digite uma cidade..." id="myInput" onKeyUp={filterFunction}/>
                {cidade.map((valor) => (<a class="opcoes" onClick = {(event) => {this.setState({cidade:valor}); myFunction();}} id={valor}>{valor}</a>))}
            </div>
        </div>
    </div>
      )    
  }
}
export default Barracidades;