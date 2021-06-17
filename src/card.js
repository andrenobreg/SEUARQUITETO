import React from "react";
import Slider from './slider.js';
import {Link} from 'react-router-dom';
import Stars from './stars.js';

import { makeStyles } from '@material-ui/core/styles';
import Cardx from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Card (img, titulo, desc, classif, id) {
    
    return (
        <div>
            <Cardx style={{marginTop:"20px", background:"lightgrey", display:"flex", justifyContent:"center"}}>
                        <Grid container spacing={0} >

                            <Grid item md={4} xs={12} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <Slider width="100%" height="100%" maxHeight="200px" hasSizeButton={false} hasThumbnails={false}/>
                            </Grid>     
                            <Grid item md={6} xs={12} style={{paddingLeft:"10px", paddingTop:"10px", textAlign:"left"}}>
                                <Link to={"/exibirperfil/"+id}>
                                <p style={{fontFamily:"Arial", fontWeight:"bold", fontSize:"15px", color:"black"}}>{titulo}</p>
                                <p style={{fontFamily:"Arial", color:"black"}}>{desc}Etiam tristique felis eget orci mollis condimentum. Duis hendrerit enim ut quam tempus, nec malesuada velit pulvinar. Vestibulum elementum sem bibendum orci pellentesque, vel ultricies massa mattis. Nam ultrices vitae diam vel lacinia. Nunc non diam enim. Cras ullamcorper risus id ultrices tincidunt. Praesent magna urna, viverra vel diam sed, luctus posuere nunc. Aliquam eget vehicula ipsum, eget sollicitudin libero.</p>
                                </Link>
                            </Grid>

                            <Grid item md={2} xs={12} style={{background:"#cfcfcf", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <Stars edit={false} value={classif}/>
                            </Grid>
                        </Grid>
            </Cardx>
        </div>
    )
}

export default Card;