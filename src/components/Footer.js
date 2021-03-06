import React, { Component } from 'react'
import logo from '../assets/images/logo/Bizgam_logo_.png'


const socialContent = [
    {
      icon: "fa-facebook",
      link: "https://www.facebook.com/",
    },
    {
      icon: "fa-twitter",
      link: "https://twitter.com/",
    },
    {
      icon: "fa-linkedin",
      link: "https://www.linkedin.com/",
    },
  ];

export default class Footer extends Component {
  render() {
    return (
        <footer className="theme-footer-five mt-130 md-mt-100">
        <div className="inner-container">
          <div className="container">
          <div className="row justify-content-center align-items-center">
      <div className="col-lg-4">
        <div className="logo">
          {/* <a href="index.html"> */}
            <img src={logo} alt="bizgam_logo" style={{    "width": "35%","margin": "auto"}}/>
          {/* </a> */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">Find us on Social Media</div>
        <ul className="d-flex justify-content-center social-icon">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">We’r always happy to help.</div>
        <div className="text-center">
          <a href="mailto:ib-themes21@gmail.com" className="email">
          support@bizgam.com
          </a>
        </div>
      </div>
      {/* End .col */}
    </div>
          </div>
        </div>
        {/* /.inner-container */}
        <p className="copyright">
          {/* {" "}
          Copyright @{new Date().getFullYear()}{" "}
          <a
            href="https://themeforest.net/user/ib-themes/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            ib-themes
          </a>{" "}
          inc. */}
        </p>
      </footer>
    )
  }
}
