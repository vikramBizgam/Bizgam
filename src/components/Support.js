import React from "react";
import icon1 from '../assets/images/preview/icon01.svg'
import shape1 from '../assets/images/preview/shape14.svg'

const Support = () => {
  return (
    <>
      <div className="wrapper">
        <img src={icon1} alt="icon" className="m-auto" />
        <h2>Quick & Fast Support</h2>
        <div className="row">
          <div className="col-lg-8 m-auto">
            <p className="font-rubik">
              Need techical help? Do not hesitate to send us a message via our{" "}
              <a href="mailto:heloshape18@gmail.com">support email</a>. We're
              happy to help.
            </p>
            <a href="mailto:ib-themes21@gmail.com" className="btn-one">
              Go to support
            </a>
          </div>
        </div>
        <img src={shape1} alt="shape" className="shape" />
      </div>
      {/* /.wrapper */}
    </>
  );
};

export default Support;
