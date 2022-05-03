import React from "react";
// import useDocumentTitle from "../../components/useDocumentTitle";
import { Link } from "react-router-dom";
import logo_icon from '../assets/images/logo/deski_06.svg'
import logo179 from '../assets/images/shape/179.svg'
import logo180 from '../assets/images/shape/180.svg'
import logo181 from '../assets/images/shape/181.svg'
import logo182 from '../assets/images/shape/182.svg'
import logo183 from '../assets/images/shape/183.svg'
import logo184 from '../assets/images/shape/184.svg'
import logo185 from '../assets/images/shape/185.svg'
import logo186 from '../assets/images/shape/186.svg'
import logo187 from '../assets/images/shape/187.svg'
import logo188 from '../assets/images/shape/188.svg'

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/",
  },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/",
  },
  {
    icon: "fa-pinterest-p",
    link: "https://www.pinterest.com/",
  },

  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/",
  },
];

const ComingSoon = () => {
//   useDocumentTitle("Coming Soon || Deski-Saas & Software React Template");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="full-height-layout d-flex align-items-center">
      <div className="coming-soon-content font-gordita">
        <div className="logo coming-soon-brand">
          <Link to="/">
            <img src={logo_icon} alt="brand logo" />
          </Link>
        </div>
        <h6>COMING SOON</h6>
        <h1 data-aos="fade-up">Get notified when we’r ready to launch!</h1>
        <div className="row">
          <div className="col-lg-9 m-auto">
            <p>
              We're under construction. Check back for an update soon. Stay in
              touch!
            </p>
          </div>
        </div>
        <form onClick={handleSubmit}>
          <input type="email" placeholder="ihidago@ujufidnan.gov" />
          <button>Notify Me</button>
        </form>

        <ul className="social-icon d-flex justify-content-center">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>

        <img
          src={logo179}
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src={logo180}
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src={logo181}
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src={logo182}
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src={logo183}
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src={logo184}
          alt="shape"
          className="shapes shape-six"
        />
        <img
          src={logo185}
          alt="shape"
          className="shapes shape-seven"
        />
        <img
          src={logo186}
          alt="shape"
          className="shapes shape-eight"
        />
        <img
          src={logo187}
          alt="shape"
          className="shapes shape-nine"
        />
        <img
          src={logo188}
          alt="shape"
          className="shapes shape-ten"
        />
      </div>
      {/* /.coming-soon-content */}
    </div>
    //    /.full-height-layout
  );
};

export default ComingSoon;
