import React, { Component } from 'react';
import './css/barracidade.css';
import setabaixo from './img/setabaixo.png';
import setacima from './img/setacima.png';
import Database from './database.js';
   
class Barracidades extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          cidade: "BRASIL",
          basecidades: Database().basecidades,
          seta: setabaixo,
      }
  }
  
  render(){
      
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
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
            <button onClick = {() => {myFunction();                   {if(this.state.seta==setabaixo){this.setState({seta:setacima});}else {if(this.state.seta==setacima){this.setState({seta:setabaixo});}}};}} class="dropbtn">{this.state.cidade}<img src={this.state.seta} style={{float: "right", marginTop: "5px"}}/></button>
            <div id="myDropdown" class="dropdown-content">
                <input type="text" placeholder="PROCURE UMA CIDADE..." id="myInput" onKeyUp={filterFunction}/>
                {this.state.basecidades.map((valor) => (<a class="opcoes" onClick = {(event) => {this.setState({cidade:valor}); this.setState({seta:setabaixo}); myFunction(); }} id={valor}>{valor}</a>))}
            </div>
        </div>
    </div>
      )    
  }
}
export default Barracidades;