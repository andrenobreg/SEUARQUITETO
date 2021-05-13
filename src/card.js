import React from "react";

function Card (img, titulo, desc, classif) {
    
    return (
        <div style={{width: "1040px", height: "150px", backgroundColor: "green", marginLeft: "12px", marginTop: "10px", display: "flex", textDecoration: "none"}}>
            <div style={{display: "flex", textAlign: "left"}}>
                <div style={{width: "250px", height: "140px", backgroundColor:"chocolate", marginTop: "5px", marginLeft: "5px", float: "left"}}>
                    {img}
                </div>
                <div style={{width: "700px", height: "140px", backgroundColor:"cornflowerblue", marginTop: "5px", marginLeft: "5px", display: "block", textDecoration:"none"}}>
                    <div style={{width: "690px", height: "30px", marginLeft: "5px", marginTop: "5px", backgroundColor: "darkgray", textDecoration: "none", fontFamily: "Arial", fontSize: "20px", fontWeight: "bold", color: "black"}}>
                        {titulo}
                    </div>
                    <div style={{width: "690px", height: "95px", marginLeft: "5px", marginTop: "5px", backgroundColor: "darkgray", textDecoration:"none", fontFamily: "Arial", fontSize:"15px", color: "black"}}>
                        {desc}
                    </div>
                </div>
                <div style={{width: "70px", height: "140px", backgroundColor: "darkgoldenrod", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                    {classif}
                </div>
            </div>
        </div>
    )
}

export default Card;