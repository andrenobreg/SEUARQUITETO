import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
   
class Stars extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        edit: this.props.edit,
        value: this.props.value,
      }
  }
  
  render(){
    const ratingChanged = (newRating) => {
      console.log(newRating);
      this.props.parentCallback(newRating);
    };
      
      return (
      <div>
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ae7b00"
            edit={this.state.edit}
            value={this.state.value}
          />
      </div>
      )    
  }
}
export default Stars;