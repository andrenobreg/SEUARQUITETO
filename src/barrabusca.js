import React from 'react';
import lupa from './img/lupa.png';
import database from './database.js';

class Barrabusca extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            conteudobusca: "",
        }
    }
    render(){
        
            function funcaoBusca(){
            var input, filter, ul, li, a, i, div, txtValue;
                input = document.getElementById("entradabusca");
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
            <div className="barrabusca" style={{backgroundColor: "#bbbbbb", height: "55px", width: "1080px", display: "flex", transition: "all 0.3s ease"}}>
                <div className= "lupa" style={{padding: "8px", float: "left", marginBottom: "1px"}}>
                    <img src={lupa}/>
                </div>
                <div className="busca" style={{marginTop: "2x"}}>
                    <input type="text"  placeholder="BUSCAR..."  id="entradabusca" onKeyUp = {funcaoBusca} onChange={(event) => {this.setState({conteudobusca:event.target.value})}} style={{backgroundColor: "#bbbbbb", height: "50px", width: "900px", fontSize: "20px", fontFamily: "Arial", fontWeight: "bold", color: "#838383", border: "0", boxShadow:"0", outline: "0"}}/>
                </div>
            </div>
        )    
    }
}

export default Barrabusca;