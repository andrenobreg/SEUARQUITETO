import React from 'react';
import ReactDOM from 'react-dom';
import './css/botoes.css';
import lupa from './img/lupa.png'

const Buscaarquiteto = () => {
    return (
            <div class = "botaobuscaprincipal">
                <div style={{padding: "8px", float: "left", marginBottom: "1px"}}>
                    <img src={lupa}/>
                </div>
                <div>
                    QUERO UM ARQUITETO!
                </div>
            </div> 
        
    )
}

export default Buscaarquiteto;