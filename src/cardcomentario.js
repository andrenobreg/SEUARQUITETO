import React from "react";

function Cardcomentario (nome, comentario, avaliacao) {
    
    return (
        <div style={{width: "1040px", height: "65px", backgroundColor: "green", marginLeft: "12px", marginTop: "10px", display: "flex", textDecoration: "none"}}>
                            <div style={{display: "flex", textAlign: "left"}}>
                                
                                <div style={{width: "700px", height: "65px", backgroundColor:"cornflowerblue", marginTop: "0px", marginLeft: "0px", display: "block", textDecoration:"none"}}>
                                    <div style={{width: "690px", height: "25px", marginLeft: "5px", marginTop: "5px", backgroundColor: "darkgray", textDecoration: "none", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold", color: "black"}}>
                                    <div style={{padding:"2px"}}>{nome}</div>
                                    </div>
                                    <div style={{width: "690px", height: "25px", marginLeft: "5px", marginTop: "5px", backgroundColor: "darkgray", textDecoration:"none", fontFamily: "Arial", fontSize:"16px", color: "black"}}>
                                    <div style={{padding:"2px"}}>{comentario}</div>
                                    </div>
                                </div>
                                <div style={{width: "330px", height: "55px", backgroundColor: "darkgoldenrod", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                                    {avaliacao}
                                </div>
                            </div>
                        </div>
    )
}

export default Cardcomentario;