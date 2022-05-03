import React, { Component } from 'react'

export default class TeamPerson extends Component {
  render() {
    return (
        <>
        {this.props.data.map((val, i) => (
          <div className="main-bg d-lg-flex align-items-center" key={i}>
            <div className="img-meta">
              <img
                src={`images/media/${val.bigImage}.png`}
                alt="team"
                className="w-100"
              />
            </div>
            {/* End img-meta */}
  
            <div className="text-wrapper">
              <div className="name font-gilroy-bold">{val.name}</div>
              <div className="position">{val.designation}</div>
              <h6 className="font-gilroy-bold">ABOUT ME</h6>
              <p className="pb-45">{val.aboutDetails}</p>
              <h6 className="font-gilroy-bold">Experties</h6>
              <p className="pb-45">{val.Experience}</p>
              <h6 className="font-gilroy-bold">FOLLOW & CONTACT</h6>
              <ul className="social-icon d-flex pt-15">
                {val.social.map((social, i) => (
                  <li key={i}>
                    <a href={social.link} target="_blank" rel="noreferrer">
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* /.text-wrapper */}
          </div>
        ))}
      </>
    )
  }
}
