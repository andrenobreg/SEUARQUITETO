import React from 'react';
import './css/App.css';
import Header from './header.js';
import Footer from './footer.js';
import logo from './img/logo.png';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

function Home() {
    return (
    <div className="Home">
        <html>
            <body>
            <Header/>
                <main style={{paddingLeft:"20px", paddingRight:"20px", display:"flex", justifyContent:"center", alignItems:"center", height:"calc(100vh - 110px)", marginTop:"6px"}}>
                        <Grid container spacing={1} style={{maxWidth:"1040px"}}>
                            <Grid item md={12} xs={12} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <img width="100%" src={logo}/>
                            </Grid>

                            <Grid item md={12} xs={12} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <Button href="/busca" variant="contained" style={{width:"100%", fontSize:"15px", fontFamily:"Arial", fontWeight:"bold", color:"#b6b6b6", marginTop:"10px", justifyContent: "flex-start"}}><SearchIcon style={{color:"grey"}}/>QUERO UM ARQUITETO!</Button>
                            </Grid>

                            <Grid item md={6} xs={12} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <Button href="/cadastro" variant="contained" style={{width:"100%", marginTop:"10px", fontSize:"15px", fontFamily:"Arial", fontWeight:"bold", color:"gray"}}>MOSTRE SEU TRABALHO!</Button>
                            </Grid>

                            <Grid item md={6} xs={12} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <Button href="/login" variant="contained" style={{width:"100%", marginTop:"10px", fontSize:"15px", fontFamily:"Arial", fontWeight:"bold", color:"gray"}}>LOG-IN</Button>
                            </Grid>
                        </Grid>
                </main>
            <Footer/>
            </body>
        </html>
    </div>
    );
}

export default Home;