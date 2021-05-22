import logopq from './img/logopq28px.png';
import React from 'react';
import './css/index.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div style={{position:"relative", width: "100%", height: "35px", backgroundColor: "#818181"}}>
                <Link to="/"><img src={logopq} style={{padding: "3px", float:"left"}}/></Link>
            </div>
        </header>
    )
}

export default Header;