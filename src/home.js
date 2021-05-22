import React from 'react';
import './css/App.css';
import Header from './header.js';
import Footer from './footer.js';
import logo from './img/logo.png';
import Buscaarquiteto from './botaobuscaarquiteto.js';
import {Link} from 'react-router-dom';
import Botao from './botao.js';

function Home() {
    return (
    <div className="Home">
        <html>
            <Header/>
            <body>
                <main>
                    
                        <div style={{width:"1080px", left:"50%", position:"absolute", marginLeft:"-540px", top:"50%", marginTop:"-110px"}} >
                            <div>
                                <img src={logo}/>
                            </div>
                        
                            <div>
                                <Link to="/busca" style={{textDecoration: "none"}}><Buscaarquiteto/></Link>
                            </div>
                            <div>
                                <Link to="/cadastro"><Botao width="530px" height="30px" marginTop="10px" value="MOSTRE SEU TRABALHO!"/></Link>
                                <Link to="/login"><Botao width="530px" height="30px" marginTop="10px" marginLeft="20px" value="LOG IN"/></Link>
                            </div> 
                        </div>
                    
                </main>
            </body>
            <Footer/>
        </html>
    </div>
    );
}

export default Home;