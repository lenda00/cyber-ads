import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 10000,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{
        width: "100%",
        height: "100%"
      }}>
        <Slider {...settings}>
          {[1,2,3].map(n => (
          <div>
            <img src={`cyber-ads/images/cyber-${n}.jpg`} alt={`slide-${n}`}/>
          </div>
          ))}
        </Slider>
      </div>
    );
  }
}
