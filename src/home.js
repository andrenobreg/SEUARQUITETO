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
                                <Link to="/cadastro"><Botaocadastro/></Link>
                                <Link to="/login"><Botaologin/></Link>
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