import React, {Component, PropTypes} from 'react';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router';


class Detail extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  sliderRedirect(event) {
    switch(event.target.src) {
      case 'http://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_900,w_1200/v1478129349/youtube_comp_asrtv8.jpg':
        return this.context.router.push('/youtube');
      case 'http://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_900,w_1200/v1478129337/weather_comp_amwo2y.jpg':
        return this.context.router.push('/weather');
      case 'http://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_900,w_1200/v1478129344/blog_comp_carngd.jpg':
        return this.context.router.push('/blog');
    }
  }
  render() {

    const images = [
      {
        original: 'http://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_900,w_1200/v1478129349/youtube_comp_asrtv8.jpg',
        originalClass: 'featured-slide',
      },
      {
        original: 'http://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_900,w_1200/v1478129337/weather_comp_amwo2y.jpg',
      },
      {
        original: 'http://res.cloudinary.com/dywbzmakl/image/upload/c_scale,h_900,w_1200/v1478129344/blog_comp_carngd.jpg',
      }
    ]

    return (
      <div className="component">
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
        <div className="about">
          <span className="about-detail"> This is a demo site with 3 simple redux components, with very minimal styling, more about the pattern and code.
              You can check out the links above or just click on the picture of the
              component in the slider above.</span>
        </div>
      </div>
    );
  }
}

export default Detail;
