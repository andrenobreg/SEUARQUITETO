import React from 'react';
import ReactDOM from 'react-dom';
import './css/botoes.css';
import lupa from './img/lupa30px.png'

const Buscaarquiteto = () => {
    return (
            <div class = "botaobuscaprincipal">
                <div style={{float: "left", marginBottom: "1px", marginTop:"0px", marginLeft:"5px", marginRight:"3px"}}>
                    <img src={lupa}/>
                </div>
                <div>
                    QUERO UM ARQUITETO!
                </div>
            </div> 
        
    )
}

export default Buscaarquiteto;