import React from "react";
import Stars from './stars.js';
import Cardx from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';


function Cardcomentario (nome, comentario, avaliacao) {
    
    return (
        <div>
            <Cardx style={{marginTop:"20px", background:"lightgrey", display:"flex", justifyContent:"center", width:"100%"}}>
                                    <Grid container spacing={0} >

                                        <Grid item md={10} xs={12} style={{paddingLeft:"10px", paddingTop:"5px", paddingBottom:"5px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                            <div style={{width:"100%", textAlign:"left", fontWeight:"bold"}}>{nome}</div>
                                            <div style={{width:"100%", textAlign:"left"}}>{comentario}</div>
                                        </Grid>     
                                        <Grid item md={2} xs={12} style={{background:"#cfcfcf", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                            <Stars edit={false} value={avaliacao}/>
                                        </Grid>
                                    </Grid>
                                </Cardx>
        </div>
    )
}

export default Cardcomentario;