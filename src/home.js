import React from 'react';
import './css/App.css';
import Header from './header.js';
import Footer from './footer.js';
import logo from './img/logo.png';
import Buscaarquiteto from './botaobuscaarquiteto.js';
import Botaocadastro from './botaocadastro.js';
import Botaologin from './botaologin.js';
import {Link} from 'react-router-dom';

function Home() {
    return (
    <div className="Home">
        <html>
            <Header/>
            <body style={{width: "100%", height: "100%", margin: "0 auto", top:"0", left: "0"}}>
                <main style={{margin: "0 auto", position: "relative", width: "1080px"}}>
                    <div style={{marginTop: "28%"}}>
                        <img src={logo}/>
                    </div>
                
                    <div>
                        <Link to="/busca" style={{textDecoration: "none"}}><Buscaarquiteto/></Link>
                    </div>
                    <div>
                        <Link to="/cadastro"><Botaocadastro/></Link>
                        <Link to="/login"><Botaologin/></Link>
                    </div>         
                </main>
            </body>
            <Footer/>
        </html>
    </div>
    );
}

export default Home;