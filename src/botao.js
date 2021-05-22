import React, { Component } from 'react';
import './css/botoes.css';
class Botao extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          width: this.props.width,
          height: this.props.height,
          value: this.props.value,
          marginLeft: this.props.marginLeft,
          marginRight: this.props.marginRight,
          marginTop: this.props.marginTop,
          marginBottom: this.props.marginBottom,
      }
  }
  
  render(){
      
      return (
      <div>
          <div class="botao" style={{width: this.state.width, height: this.state.height, marginLeft: this.state.marginLeft, marginRight: this.state.marginRight, marginTop: this.state.marginTop, marginBottom: this.state.marginBottom}}>{this.state.value}</div>
      </div>
      )    
  }
}
export default Botao;