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
        onTap: this.props.onTap,
        minWidth: this.props.minWidth,
        maxWidth: this.props.maxWidth,
        minHeight: this.props.minHeight,
        maxHeight: this.props.maxHeight,
      }
  }
  
  render(){
    const images = [
      {src: img1},
      {src: img2},
      {src: img3}
    ]
      
      return (
        <div style={{width:this.state.width, height:this.state.height, minWidth:this.state.minWidth , maxWidth:this.state.maxWidth , minHeight: this.state.minHeight, maxHeight:this.state.maxHeight}}>
        <Carousel images={images} canAutoPlay = {false} hasIndexBoard={false} hasSizeButton={this.state.hasSizeButton} hasThumbnails={this.state.hasThumbnails} shouldLazyLoad={true} transitionDurationLimit={200} shouldSwipeOnMouse={true} onTap={this.state.onTap}/>
        </div>
      )    
  }
}
export default Slider;