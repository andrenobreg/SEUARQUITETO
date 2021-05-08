import logopq from './img/logopq.png';
import React from 'react';
import './css/index.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div style={{width: "100%", height: "55px", backgroundColor: "#818181"}}>
                <Link to="/"><img src={logopq} style={{padding: "4px", float:"left"}}/></Link>
            </div>
        </header>
    )
}

export default Header;