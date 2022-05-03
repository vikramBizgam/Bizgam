import React, { Component } from 'react'
// import Navbar from './Navbar'
import FirstSlide from './FirstSlide'
import PreviewGallery from './PreviewGallery'
import Team from './Team'
import CustomerReview from './CustomerReview'
// import Footer from './Footer'
import Support from './Support'
import OurClients from './OurClients'


import ProductDemoLine from '../assets/images/preview/line01.svg'
import HpmeDemo from '../assets/images/preview/shape05.svg'

export default class MainHomepage extends Component {
  render() {
    return (
      <div className='main-page-wrapper p0'>
          <div id="intro">
          {/* fbf3ec */}
            {/* <Navbar/> */}
            <FirstSlide/>
          </div>

          <div className="home-demo-section pt-150 pb-100" id="products">
              <img
                src={HpmeDemo}
                alt="home-demo"
                className="shape-one"
              />
              <div className="container" >
                <div className="main-title text-center">
                  <h2>
                    <span>
                      Products <img src={ProductDemoLine} alt="demo" />
                    </span>
                  </h2>
                  {/* <p className="font-rubik txt-lg">
                    You will get over <span>11 Demo template</span> for only{" "}
                    <span style={{ color: "#ff7373" }}>$8</span>
                  </p> */}
                  <p className="font-rubik txt-lg">
                    You will realize Profit and <span style={{ color: "#ff7373" }}>5x</span> efficiency at unmarginable costs
                    {/* <span style={{ color: "#ff7373" }}>$8</span> */}
                  </p>
                  <p className="font-rubik txt-sm">More will be comming soon...</p>
                </div>

                <PreviewGallery />
              </div>
          </div>

          <div id="our clients">
            <OurClients />
          </div>

          <div id ="clients review">
            <CustomerReview />
          </div>

          <div id="our team">
            <Team/>
          </div>

          <div
        className="ln-support-banner"
        id="support"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <Support />
        </div>
      </div>

          {/* <Footer/> */}
      </div>
    )
  }
}
