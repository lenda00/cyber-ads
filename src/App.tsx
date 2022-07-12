import React, { Component } from "react";
import Slider, {Settings} from "react-slick";
import cyber1 from "./images/cyber-1.jpg";
import cyber2 from "./images/cyber-2.jpg";
import cyber3 from "./images/cyber-3.jpg";


const videoMp4 = 'https://www.w3schools.com/html/mov_bbb.mp4';
const videoOgg = 'https://www.w3schools.com/html/mov_bbb.ogg';

const CustomVideo = (props : any) => {
  const isCurrent = props.index === props.activeSlide + 1
  return ( isCurrent ?
    <div {...props}>
      <video className="slide"
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
      beforeChange: (current, next) => this.setState({ activeSlide: next }),

    };
    return (
      <div style={{
        width: "100%",
        height: "100%"
      }}>
        <Slider {...settings}>
          <div>
            <img className="slide" src={cyber3} alt="slide-3" />
          </div>
          <div>
            <img className="slide" src={cyber2} alt="slide-2" />
          </div>
          <div>
            <img className="slide" src={cyber1} alt="slide-1" />
          </div>
          <CustomVideo index={4} activeSlide={this.state.activeSlide}/>
        </Slider>
      </div>
    );
  }
}
