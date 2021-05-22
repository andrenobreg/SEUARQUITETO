import React from "react";
import Slider from './slider.js';
import {Link} from 'react-router-dom';
import Stars from './stars.js';
function Card (img, titulo, desc, classif, id) {
    
    return (
        <div style={{width: "1040px", height: "150px", backgroundColor: "#e0e0e0", marginLeft: "12px", marginTop: "10px", display: "flex", textDecoration: "none"}}>
            <div style={{display: "flex", textAlign: "left"}}>
                <div style={{width: "250px", height: "140px", backgroundColor:"chocolate", marginTop: "5px", marginLeft: "5px", float: "left"}}>
                <Slider width="250px" height="140px" hasSizeButton={false} hasThumbnails={false}/>
                </div>
                <Link to={"/exibirperfil/"+id} style={{display: "flex"}}>
                <div style={{width: "640px", height: "140px", backgroundColor:"#cbcbcb", marginTop: "5px", marginLeft: "5px", display: "block", textDecoration:"none"}}>
                    <div style={{width: "630px", height: "30px", marginLeft: "5px", marginTop: "5px", backgroundColor: "#cbcbcb", textDecoration: "none", fontFamily: "Arial", fontSize: "20px", fontWeight: "bold", color: "black"}}>
                        {titulo}
                    </div>
                    <div style={{width: "630px", height: "95px", marginLeft: "5px", marginTop: "5px", backgroundColor: "#cbcbcb", textDecoration:"none", fontFamily: "Arial", fontSize:"15px", color: "black"}}>
                        {desc}
                    </div>
                </div>
                </Link>
                <div style={{paddingLeft:"13px", paddingTop: "45px", width: "130px", height: "140px", backgroundColor: "#cbcbcb", marginTop:"5px", marginLeft: "5px", textDecoration: "none"}}>
                    <Stars edit={false} value={classif}/>
                </div>
            </div>
        </div>
    )
}

export default Card;