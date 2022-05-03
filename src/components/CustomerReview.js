import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
  };

const TestimonilContent = [
    {
      desc: ` Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
      reviewerName: "Jannatul Ekra",
      designation: "Designer",
    },
    {
      desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
      reviewerName: "Bostami Hasan",
      designation: "Front-end Engineer",
    },
  ];

export default class CustomerReview extends Component {
  render() {
    return (
        <div className="client-feedback-slider-three mb-250 ">
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-50">
            <div className="row">
              <div className="col-lg-7 col-md-9 m-auto">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  <span>Check what’s our client </span>say about us.
                </h2>
              </div>
            </div>
          </div>
          {/* End title */}
          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <div className="testimonial-slider-wrapper">
                <img src="images/icon/65.svg" alt="icon" className="m-auto" />
                <div className="clientSliderThree">
                <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div
          className="item"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <p>{val.desc}</p>
          <h6 className="name">{val.reviewerName}</h6>
          <span className="desig">{val.designation}</span>
        </div>
      ))}
    </Slider>
                </div>
              </div>
              {/* /.testimonial-slider-wrapper */}
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="images/media/img_59.png"
          alt="media"
          className="shapes shape_1"
        />
        <img
          src="images/media/img_60.png"
          alt="media"
          className="shapes shape_2"
        />
        <img
          src="images/media/img_61.png"
          alt="media"
          className="shapes shape_3"
        />
        <img
          src="images/media/img_62.png"
          alt="media"
          className="shapes shape_4"
        />
        <img
          src="images/media/img_63.png"
          alt="media"
          className="shapes shape_5"
        />
        <img
          src="images/media/img_64.png"
          alt="media"
          className="shapes shape_6"
        />
      </div>
    )
  }
}
