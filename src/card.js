import React from "react";
const Card = ({titulo,descricao,classificacao}) => {
    return (
        <div>
            Titulo: {titulo}
            Descricao: {descricao}
            Nota: {classificacao}
        </div>
    )
}

export default Card;