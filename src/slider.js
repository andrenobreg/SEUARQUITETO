import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
   
class Slider extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        width: this.props.width,
        height: this.props.height,
        hasSizeButton : this.props.hasSizeButton,
        hasThumbnails: this.props.hasThumbnails,
      }
  }
  
  render(){
    const images = [
      {src: img1},
      {src: img2},
      {src: img3}
    ]
      
      return (
        <div style={{width:this.state.width, height:this.state.height}}>
        <Carousel images={images} canAutoPlay = {false} hasIndexBoard={false} hasSizeButton={this.state.hasSizeButton} hasThumbnails={this.state.hasThumbnails}/>
        </div>
      )    
  }
}
export default Slider;