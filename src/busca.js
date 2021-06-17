import React from 'react';
import './css/index.css';
import Header from './header.js';
import Footer from './footer.js';
import Card from './card.js';
import Database from './database.js';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
class Busca extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            baseusuarios: this.shuffle(Database().baseusuarios),
            cidade: "BRASIL",
            basecidades: Database().basecidades,
        }
    }

    handleChange = (valor) =>{
      this.setState({cidade: valor})
    }

    shuffle(arr) {
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

        function filtroCidade(valor,cidade){
          if(cidade=="BRASIL"){
            return <a style={{width:"100%", maxWidth:"1040px"}} className="resultados">       {Card(valor.img, valor.titulo, valor.desc, valor.classif, valor.id)}       </a>
          }else{
            if(cidade==valor.cidade){
              return <a style={{width:"100%", maxWidth:"1040px"}} className="resultados">       {Card(valor.img, valor.titulo, valor.desc, valor.classif, valor.id)}       </a>
            }
          }
        }
        return (
            <div>
        <html>
            <body>
            <Header/>
                <main style={{paddingLeft:"20px", paddingRight:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div style={{paddingLeft:"20px", paddingRight:"20px", marginTop:"10px", paddingBottom:"12px", textDecoration: "none", height: "calc(100vh - 120px)", width:"100%", overflow: "auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <div style={{width:"100%", backgroundColor:"white", display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <TextField id="entradabusca" label="BUSCAR..." onKeyUp={filterFunction} style={{width:"100%", maxWidth:"1040px"}}/>                
                  <Autocomplete
                    id="cidades"
                    options={this.state.basecidades}
                    getOptionLabel={(option) => option }
                    style={{ width: "100%", maxWidth:"1040px"}}
                    renderInput={(params) => <TextField {...params} label="CIDADE..."/>}
                    onChange={(event, value) => this.handleChange(value)}
                  />
                    </div>
                    {this.state.baseusuarios.map(        (valor) =>                     (filtroCidade(valor, this.state.cidade))                 )                        }
                    </div>
                </main>
                <Footer/>
            </body>
            
        </html>
    </div>
        )    
    }
}



export default Busca;