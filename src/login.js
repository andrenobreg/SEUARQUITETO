import React from 'react';
import './css/index.css';
import Header from './header.js';
import Footer from './footer.js';
import Card from './card.js';
import Database from './database.js'
class Login extends React.Component {
    render(){
        let teste = Database().teste2;
        
    
        return (
            <div>
                <html>
                    <Header/>
                    {teste}
                    <Footer/>
                </html>
            </div>
        )    
    }
}



export default Login;

/* FOR CORRETO

for(let i=0; i<posicao.length; i++){Card(dados[posicao[i]].img, dados[posicao[i]].titulo, dados[posicao[i]].desc, dados[posicao[i]].classif)}

*/