import React, { Component } from 'react'
import { Link } from "react-router-dom";
import shape129 from '../assets/images/shape/129.svg'
import shape130 from '../assets/images/shape/130.svg'
import shape126 from '../assets/images/shape/126.svg'
// import img66 from '../assets/images/media/img_66.png'
// import img67 from '../assets/images/media/img_67.png'
// import img68 from '../assets/images/media/img_68.png'
import Anup from '../assets/images/media/anup_agarwal.jpg'
import Parthiban from '../assets/images/media/parthiban.jpeg'
import jebanesan from '../assets/images/media/jebanesan.jpg'

const TeamContent = [
  {
    designation: "Chairman & Director",
    name: "Parthiban V",
    img: Parthiban,
    animationDelay: "200",
    id: 1
  },
  {
    designation: "Director",
    name: "Anup Agarwal",
    img: Anup,
    animationDelay: "250",
    id:2,
  },
  {
    designation: "Director & CTO",
    name: "Jebanesan Croos ",
    img: jebanesan,
    animationDelay: "300",
    id:3
  },
 
];


export default class Team extends Component {
  render() {
    return (
        <div className="team-section-four mt-250 md-mt-150">
        <img
          src={shape129}
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src={shape130}
          alt="shape"
          className="shapes shape-two"
        />
        <div className="container">
          <div className="title-style-five text-center mb-90 md-mb-60">
            <h6>Our Guiding Force</h6>
            <h2>The team behind BizGam </h2>
          </div>

          <div className="team-wrapper">
            <div className="row">
            {TeamContent.map((item, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animationDelay}
          key={i}
        >
          {/* <Link 
      to= '/Bizgam/parthiban' className="team-member"> */}
          <Link to={{
      pathname: `/Bizgam/team/${item.id}`,
      data: item.data,
    }} className="team-member">
            <div className="img-holder">
              <img src={`${item.img}`} alt="team" />
            </div>
            <h6 className="name">{item.name}</h6>
            <div className="position">{item.designation}</div>
          </Link>
        </div>
      ))}
            </div>
            <img
              src={shape126}
              alt="shape"
              className="shapes shape-one"
            />
          </div>
          {/*  /.team-wrapper */}
        </div>
      </div>
    )
  }
}
