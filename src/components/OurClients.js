import React, { Component } from 'react'
import bull from '../assets/images/logo/bull-machine-logo.png'
import GoAir from '../assets/images/logo/GoAirlines.png'
import propel from '../assets/images/logo/propel.png'
import mrp from '../assets/images/logo/MadrasRdiators&Pressings.jpg'

import shape1 from '../assets/images/shape/line-shape-10.svg'

const BrandImages = [
    // logo32,
    // logo33,
    // logo34,
    // logo35,
    // logo36,
    // logo37,
    // logo38,
    mrp,
    propel,
    bull,
    GoAir,
    // GoAir,
    // ''
  ];

export default class OurClients extends Component {
  render() {
    return (
        <div className="useable-tools-section-three pt-100 pb-100 md-pt-80 md-pb-80 overflow-hidden">
        <div className="container" >
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-four">
                <h2>
                  <span>
                    Who is using ours
                    <img src={shape1}alt="shape" />
                  </span>
                  products?
                </h2>
              </div>
              <p className="sub-text">
                {/* Deski ties into your existing tools, services, & workflow. Get
                notifications or create story with others tools. */}
                We automate the processes of various Manufacturing Segments, FMCG, Aviation and much more...<br/>
                We welcome you to join the Club and Bring a tremendous change in your Organization.
              </p>
              {/* <a href="/#" className="all-button">
                See all partners <i className="flaticon-right-arrow"></i>
              </a> */}
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}

        <div
          className="
        logo-wrapper
        d-flex
        flex-wrap
        justify-content-center
        align-items-center
      "
        >
          {BrandImages.map((val, i) => (
        <div
          className="logo d-flex align-items-center justify-content-center"
          key={i}
        >
          <img src={`${val}`} alt="logo" />
        </div>
      ))}
        </div>
        {/*  /.logo-wrapper */}
      </div>
    )
  }
}
