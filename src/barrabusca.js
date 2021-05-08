import React from 'react';
import lupa from './img/lupa.png';

function Barrabusca () {
    return (
        <div class="barrabusca" style={{backgroundColor: "#bbbbbb", height: "55px", width: "1080px", display: "flex", transition: "all 0.3s ease"}}>
                <div class= "lupa" style={{padding: "8px", float: "left", marginBottom: "1px"}}>
                    <img src={lupa}/>
                </div>
                <div class="busca" style={{marginTop: "2x"}}>
                    <input placeholder="BUSCAR..." type="text" id="entradabuscar" onkeypress="busca(this)" style={{backgroundColor: "#bbbbbb", height: "50px", width: "900px", fontSize: "20px", fontFamily: "Arial", fontWeight: "bold", color: "#838383", border: "0", boxShadow:"0", outline: "0"}}/>
                </div>
        </div>
    )
}

export default Barrabusca;