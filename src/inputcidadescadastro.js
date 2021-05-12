import React, { Component } from 'react';
import setabaixo from './img/setabaixo.png';
import setacima from './img/setacima.png';
import Database from './database.js';
import './css/inputcidadescadastro.css';
   
class Inputcidadescadastro extends React.Component {
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
        document.getElementById("myDropdownc").classList.toggle("showc");
      }
    
    function filterFunction() {
        var input, filter, ul, li, a, i, div, txtValue;
        input = document.getElementById("myInputc");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdownc");
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
        <div class="dropdownc">
            <button onClick = {() => {myFunction();                   {if(this.state.seta==setabaixo){this.setState({seta:setacima});}else {if(this.state.seta==setacima){this.setState({seta:setabaixo});}}};}} class="dropbtnc"><a style={{marginLeft:"20px"}} >{this.state.cidade}</a><img src={this.state.seta} style={{float: "right", marginTop: "0px", marginRight:"3px"}}/></button>
            <div id="myDropdownc" class="dropdown-contentc">
                <input type="text" placeholder="PROCURE UMA CIDADE..." id="myInputc" onKeyUp={filterFunction}/>
                {this.state.basecidades.map((valor) => (<a class="opcoes" onClick = {(event) => {this.setState({cidade:valor}); this.setState({seta:setabaixo}); myFunction(); this.props.parentCallback(valor);}} id={valor}>{valor}</a>))}
            </div>
        </div>
    </div>
      )    
  }
}
export default Inputcidadescadastro;