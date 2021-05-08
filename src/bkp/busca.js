import React from "react";
import {Button} from '@material-ui/core';
const Card = ({titulo,descricao,classificacao}) => {
    return (
        <div>
        <div style={{marginBottom: "50px", height:"40px"}}>
            Titulo: {titulo}
            Descricao: {descricao}
            Nota: {classificacao}
        </div>
        <Button style={{borderRadius: "0px", backgroundColor:"blue"}} color="black">invoque lucifer</Button>
        </div>
    )
}

export default Card;