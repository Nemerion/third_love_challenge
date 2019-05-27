import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/carousel_style.scss';

import ImageGallery from 'react-image-gallery';

// Used ImageGallery component to save work and modularize the proyect
// For more information, go to the creator repo https://github.com/xiaolin/react-image-gallery 
class Carousel extends Component {

  // Create an array with the images from the backend configured in order to use the ImageGalllery component properly.
  configureImages() {
    var arr = [];
    if (!this.props.images) return []; //to avoid unsigned array errors
    for(let i = 0; i < this.props.images.length; i++) {
      let auxObj = {};
      if(this.props.images[i].src100 && this.props.images[i].src600) {
        auxObj = {
          original: 'https://' + this.props.images[i].src600,
          thumbnail: 'https://' + this.props.images[i].src100
        }
      }
      arr.push(auxObj);
    }
    console.log(arr);
    return arr;
  }

  render() {
    const images = this.configureImages();

    return (
      <ImageGallery items={images}
        disableSwipe={true}
        useTranslate3D={false}
        disableArrowKeys={true}
        showNav={false}
        showPlayButton={false}
        infinite={false} 
        showFullscreenButton={false}
        thumbnailPosition="left"
      />
    );
  }
}

const mapStateToProps = state => {
  return { images: state.info.images };
}

export default connect(mapStateToProps)(Carousel);
