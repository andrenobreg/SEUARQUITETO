import React from 'react';
import './css/index.css';
import Header from './header.js';
import Footer from './footer.js';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            palavra: "",
        }
    }
    render(){
        function exibir(){
            return this.state.palavra;
        }
        return (
            <div className="Cadastro">
                        <html>
                            <Header/>
                            <input type="text" onChange={(event) => {this.setState({palavra:event.target.value})}}/>
                            <input type="submit" onClick={exibir}></input>
                            <h1>VC DIGITOU:{this.state.palavra}</h1>
                            <Footer/>
                        </html>
                    </div>
        )    
    }
}



export default Login;