import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import commingSoonImg from '../assets/images/preview/home_09.jpg'
import EffyBuyImg from '../assets/images/preview/EffyBuy_1.jpg'

const TabListContent = [
  "All",
  "Event Organiser",
  "Doc Landing",
  "Project Management",
  "Customer Support",
  "One Page",
];
const AllDemo = [
  {
    img: EffyBuyImg,
    routerPath: "https://www.effybuy.com/EffyBuy/",
    css: { background: "#FFEBDD" },
    title: "EffyBuy",
    subTitle: `Automate RFQ and Negotiation`,
    viewPage: "Go To Website",
    clasName: `view-page`,
    animDealy: "",
    sticker: "",
  },
  {
    img: commingSoonImg,
    routerPath: "/coming-soon",
    css: { background: "#e4f6fb" },
    title: "Kaizen",
    subTitle: `Change for BETTER`,
    viewPage: "Comming Soon",
    clasName: `view-page`,
    animDealy: "200",
    sticker: "",
  },
  {
    img: commingSoonImg,
    routerPath: "/coming-soon",
    css: { background: "#ffefe7" },
    title: "Coming Soon",
    subTitle: `Coming Soon, OnePage, Landing`,
    viewPage: "View Demo",
    clasName: `view-page`,
    animDealy: "200",
    sticker: "",
  },
  // {
  //   img: "home_12",
  //   routerPath: "/doc-signature",
  //   css: { background: "#ffefe7" },
  //   title: "Doc Signature Landing",
  //   subTitle: `Signature, Landing, Doc`,
  //   viewPage: "Coming Soon",
  //   clasName: `cs-text d-flex align-items-center justify-content-center`,
  //   animDealy: "200",
  //   sticker: "",
  // },
];

const PreviewGallery = () => {
  return (
    <div className="preview-gallery-wrapper">
      <Tabs>
        <TabList className="controls d-flex flex-wrap justify-content-center">
          {/* {TabListContent.map((tab, i) => (
            <Tab key={i}>
              <button type="button" className="control">
                {tab}
              </button>
            </Tab>
          ))} */}
        </TabList>
        {/* End tablist */}

        <TabPanel>
          <div className="mixitUp-container demo-last-unpointer">
            {AllDemo.map((val, i) => (
              <div
                className="mix event "
                key={i}
                data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay={val.animDealy}
              >
                <a
                  href={val.routerPath}
                  className="img-meta"
                  style={val.css}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={`${val.img}`} alt="home-demo" />
                  <span className={val.clasName}>{val.viewPage}</span>
                  <div className="new-page">{val.sticker}</div>
                </a>

                <div className="page-name font-rubik">{val.title}</div>
                <div className="page-category font-rubik">{val.subTitle}</div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* <TabPanel>
          <div className="mixitUp-container">
            {EventOrganizer.map((val, i) => (
              <div
                className="mix event "
                key={i}
                data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay={val.animDealy}
              >
                <Link
                  to={val.routerPath}
                  className="img-meta"
                  style={val.css}
                  target="_blank"
                >
                  <img src={`images/preview/${val.img}.jpg`} alt="home-demo" />
                  <span className={val.clasName}>{val.viewPage}</span>
                </Link>

                <div className="page-name font-rubik">{val.title}</div>
                <div className="page-category font-rubik">{val.subTitle}</div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mixitUp-container">
            {DocLanding.map((val, i) => (
              <div
                className="mix event "
                key={i}
                data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay={val.animDealy}
              >
                <Link
                  to={val.routerPath}
                  className="img-meta"
                  style={val.css}
                  target="_blank"
                >
                  <img src={`images/preview/${val.img}.jpg`} alt="home-demo" />
                  <span className={val.clasName}>{val.viewPage}</span>
                </Link>

                <div className="page-name font-rubik">{val.title}</div>
                <div className="page-category font-rubik">{val.subTitle}</div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mixitUp-container">
            {ProjectManagement.map((val, i) => (
              <div
                className="mix event "
                key={i}
                data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay={val.animDealy}
              >
                <Link
                  to={val.routerPath}
                  className="img-meta"
                  style={val.css}
                  target="_blank"
                >
                  <img src={`images/preview/${val.img}.jpg`} alt="home-demo" />
                  <span className={val.clasName}>{val.viewPage}</span>
                </Link>

                <div className="page-name font-rubik">{val.title}</div>
                <div className="page-category font-rubik">{val.subTitle}</div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mixitUp-container">
            {CustomeSupport.map((val, i) => (
              <div
                className="mix event "
                key={i}
                data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay={val.animDealy}
              >
                <Link
                  to={val.routerPath}
                  className="img-meta"
                  style={val.css}
                  target="_blank"
                >
                  <img src={`images/preview/${val.img}.jpg`} alt="home-demo" />
                  <span className={val.clasName}>{val.viewPage}</span>
                </Link>

                <div className="page-name font-rubik">{val.title}</div>
                <div className="page-category font-rubik">{val.subTitle}</div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mixitUp-container demo-last-unpointer">
            {OnePage.map((val, i) => (
              <div
                className="mix event "
                key={i}
                data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay={val.animDealy}
              >
                <Link
                  to={val.routerPath}
                  className="img-meta"
                  style={val.css}
                  target="_blank"
                >
                  <img src={`images/preview/${val.img}.jpg`} alt="home-demo" />
                  <span className={val.clasName}>{val.viewPage}</span>
                  <div className="new-page">{val.sticker}</div>
                </Link>

                <div className="page-name font-rubik">{val.title}</div>
                <div className="page-category font-rubik">{val.subTitle}</div>
              </div>
            ))}
          </div>
        </TabPanel> */}
      </Tabs>
    </div>
  );
};

export default PreviewGallery;
