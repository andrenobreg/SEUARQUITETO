import React from 'react';

function Barracidades (x) {
    let cidade = [];
    cidade[0] = "FORTALEZA";
    cidade[1] = "RECIFE";
    cidade[2] = "SALVADOR";
    cidade[3] = "BRASÍLIA";
    cidade[4] = "NATAL";
    
    return (
        <div>
        <select id="selectbox" style={{height: "55px", width: "1080px"}}>
        {cidade.map((valor) => (<option id={valor}>{valor}</option>))}
        </select>
        </div>
    )
}

export default Barracidades;