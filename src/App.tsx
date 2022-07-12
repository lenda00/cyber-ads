import React, { Component } from "react";
import Slider, {Settings} from "react-slick";


const videoMp4 = 'https://www.w3schools.com/html/mov_bbb.mp4';
const videoOgg = 'https://www.w3schools.com/html/mov_bbb.ogg';

const CustomVideo = (props : any) => {
  const isCurrent = props.index === props.activeSlide + 1
  return ( isCurrent ?
    <div {...props}>
      <video className="video"
        muted
        autoPlay
      >
        <source src={videoMp4} type="video/mp4" />
        <source src={videoOgg} type="video/ogg" />
      </video>
    </div>
    : null
  )
}
export default class SimpleSlider extends Component {
  state = {
    activeSlide: 0
  }
  render() {
    const settings : Settings = {
      dots: false,
      arrows: false,
      infinite: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: "anticipated",
      beforeChange: (current, next) => this.setState({ activeSlide: next }),

    };
    return (
      <div style={{
        width: "100%",
        height: "100%"
      }}>
        <Slider {...settings}>
          {[1,2,3].map(n => (
          <div>
            <img src={`${process.env.PUBLIC_URL }/images/cyber-${n}.jpg`} alt={`slide-${n}`}/>
          </div>
          ))}
          <CustomVideo index={4} activeSlide={this.state.activeSlide}/>
        </Slider>
      </div>
    );
  }
}
