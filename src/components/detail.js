import React, {Component, PropTypes} from 'react';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router';


class Detail extends Component {
  sliderRedirect(event) {
    switch(event.target.src) {
      case 'http://lorempixel.com/1000/600/nature/1/':

    }
  }
  render() {

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        originalClass: 'featured-slide',
        id: "youtube"
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
      }
    ]

    return (
      <div onClick={this.navigation}>
        <ImageGallery
        ref={i => this._imageGallery = i}
        onClick={this.sliderRedirect}
        items={images}
        slideInterval={2000}
        autoPlay={true}
        onImageLoad={this.handleImageLoad}
        showBullets={true}
        showThumbnails={false}
        />
      </div>
    );
  }
}

export default Detail;
