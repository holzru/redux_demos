import React, {Component, PropTypes} from 'react';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router';


class Detail extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  sliderRedirect(event) {
    switch(event.target.src) {
      case 'https://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_650,w_1200/v1477955683/youtube_lb4lnn.jpg':
        return this.context.router.push('/youtube');
      case 'https://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_650,w_1200/v1477955838/weather_ra1ivt.jpg':
        return this.context.router.push('/weather');
      case 'https://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_650,w_1200/v1477955833/blog_fp3nil.jpg':
        return this.context.router.push('/blog');
    }
  }
  render() {

    const images = [
      {
        original: 'https://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_650,w_1200/v1477955683/youtube_lb4lnn.jpg',
        originalClass: 'featured-slide',
      },
      {
        original: 'https://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_650,w_1200/v1477955838/weather_ra1ivt.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_650,w_1200/v1477955833/blog_fp3nil.jpg',
      }
    ]

    return (
      <div className="slider" onClick={this.navigation}>
        <ImageGallery
        ref={i => this._imageGallery = i}
        onClick={this.sliderRedirect.bind(this)}
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
