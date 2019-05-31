import React, { Component } from 'react';
import { connect } from 'react-redux';
import './carousel_style.scss';

import ImageGallery from 'react-image-gallery';

// Used ImageGallery component to save work and modularize the proyect
// For more information, go to the creator repo https://github.com/xiaolin/react-image-gallery 
class Carousel extends Component {
  state = {
    screenWidth: 0,
    isMobile: false
  }

  componentDidUpdate() {
    this.detectScreenWidth();
  }

  componentWillMount() {
    this.detectScreenWidth();
  }
  
  detectScreenWidth() {
    var width = window.screen.width;
    if(this.state.screenWidth !== width) {
      this.setState({ screenWidth: width });

      (width <= 979) ?
        this.setState({ isMobile: true }) :
        this.setState({ isMobile: false });
    }
  }

  // Creates and returns an array with the images from the backend configured in order to use the ImageGalllery component properly.
  configureImages() {
    var arr = [];
    if (!this.props.images) return []; //to avoid unsigned array errors
    for(let i = 0; i < this.props.images.length; i++) {
      let auxObj = {};
      if(this.props.images[i].src1000 && this.props.images[i].src600) {
        auxObj = {
          original: 'https://' + this.props.images[i].src1000,
          thumbnail: 'https://' + this.props.images[i].src600
        }
      }
      arr.push(auxObj);
    }
    return arr;
  }

  render() {
    const images = this.configureImages();

    return (
      <ImageGallery items={images}
        disableArrowKeys={true}
        showNav={false}
        showPlayButton={false}
        infinite={false}
        showFullscreenButton={false}
        thumbnailPosition="left"
        showBullets={this.state.isMobile}
        showThumbnails={!this.state.isMobile}
        disableSwipe={!this.state.isMobile}
      />
    );
  }
}

const mapStateToProps = state => {
  return { images: state.info.images };
}

export default connect(mapStateToProps)(Carousel);
