import React from "react";
import Stars from './stars.js';
function Cardcomentario (nome, comentario, avaliacao) {
    
    return (
        <div style={{width: "1040px", height: "65px", backgroundColor: "#e0e0e0", marginLeft: "12px", marginTop: "10px", display: "flex", textDecoration: "none"}}>
                            <div style={{display: "flex", textAlign: "left"}}>
                                
                                <div style={{width: "900px", height: "65px", backgroundColor:"#e0e0e0", marginTop: "0px", marginLeft: "0px", display: "block", textDecoration:"none"}}>
                                    <div style={{width: "895px", height: "25px", marginLeft: "5px", marginTop: "5px", backgroundColor: "#d6d6d6", textDecoration: "none", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold", color: "#606060"}}>
                                    <div style={{padding:"2px"}}>{nome}</div>
                                    </div>
                                    <div style={{width: "895px", height: "25px", marginLeft: "5px", marginTop: "5px", backgroundColor: "#d6d6d6", textDecoration:"none", fontFamily: "Arial", fontSize:"16px", color: "#606060"}}>
                                    <div style={{padding:"2px"}}>{comentario}</div>
                                    </div>
                                </div>
                                <div style={{paddingTop:"7px", paddingLeft:"13px", width: "130px", height: "55px", backgroundColor: "#d6d6d6", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                                    <Stars edit={false} value={avaliacao}/>
                                </div>
                            </div>
                        </div>
    )
}

export default Cardcomentario;