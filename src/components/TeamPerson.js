
import React from 'react'
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Anup from '../assets/images/media/anup_agarwal.jpg'
import Parthiban from '../assets/images/media/parthiban_.jpeg'
import jebanesan from '../assets/images/media/jebanesan.jpg'


export default function TeamPerson() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  let params = useParams();
  let data =  [
    {},
    {
    bigImage: Parthiban,
    name: "Parthiban V",
    designation: "Chairman & Director",
    aboutDetails: `Successfully build in-house
    & from scratch India’s
    Largest Tractor Attachment
    business and one of the Top
    4 CE business. Currently
    Owns & Leads a 500Cr
    Corporate Business House.`,
    Experience: ` Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
    tempor incididunt`,
    social: [
      // {
      //   icon: "fa fa-linkedin",
      //   link: "https://www.facebook.com/",
      // },
      {
        icon: "fa fa-envelope",
        link: "mailto:admin@bizgam.com",
      },
    ],
  },
  {
    bigImage: Anup,
    name: "Anup Agarwal",
    designation: "Chairman & Director",
    aboutDetails: `Professional Career of 12
    Years advising large
    businesses & MNCs on their
    organic and inorganic growth
    plans. Also, built and
    launched India’s 1st online
    catering platform.`,
    Experience: ` Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
    tempor incididunt`,
    social: [
      {
        icon: "fa fa-envelope",
        link: "mailto:anup@bizgam.com",
      },
      {
        icon: "fa fa-linkedin",
        link: "https://www.linkedin.com/in/anup-agarwal/",
      },
    ],
  },
  {
    bigImage: jebanesan,
    designation: "Director & CTO",
    name: "Jebanesan Croos ",
    aboutDetails: `Three decades of Hands on Experience in designing, 
    building and implementing world class ERP and Cloud 
    based products using Open Source Technologies across leading 
    corporate brands like ELGI and Murugappa Group.`,
    Experience: ` Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
    tempor incididunt`,
    social: [
      {
        icon: "fa fa-envelope",
        link: "mailto:admin@bizgam.com",
      },
      {
        icon: "fa fa-linkedin",
        link: "https://www.linkedin.com/in/jebanesan-croos-77373723/",
      },
    ],
  }
]


  return (
      <>
      <div className="team-details mb-50 md-mb-10">
        <div className="container position-relative arrow-middle-center">
        <div className="main-bg d-lg-flex align-items-center" >
            <div className="img-meta">
              <img
                src={data[params.person].bigImage}
                alt="team"
                className="w-100"
              />
            </div>
  
            <div className="text-wrapper">
              <div className="name font-gilroy-bold">{data[params.person].name}</div>
              <div className="position">{data[params.person].designation}</div>
              <h6 className="font-gilroy-bold">ABOUT ME</h6>
              <p className="pb-45">{data[params.person].aboutDetails}</p>
              {/* <h6 className="font-gilroy-bold">Experties</h6>
              <p className="pb-45">{data[params.person].Experience}</p> */}
              <h6 className="font-gilroy-bold">FOLLOW & CONTACT</h6>
              <ul className="social-icon d-flex pt-15">
                {data[params.person].social.map((social, i) => (
                  <li key={i}>
                    <a href={social.link} target="_blank" rel="noreferrer">
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Team Details Gallery */}
        </div>
        <img
          src="images/shape/214.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/215.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
          
      </>
  )
}

