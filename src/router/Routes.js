// import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import React, { Component } from 'react'
import FirstSlide from "../components/FirstSlide";
import MainHomepage from "../components/MainHomepage";
import ComingSoon from "../components/CommingSoon";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TeamPerson from "../components/TeamPerson";

export default class Router extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navbar />} />
          </Routes>
          <Routes>
          <Route path="/" element={<MainHomepage />} />
          </Routes>
          <Routes>
          <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
          <Routes>
          <Route path="/" element={<TeamPerson />} />
          </Routes>
          <Routes>
          <Route path="/" element={<Footer />} />
          </Routes>
      </BrowserRouter>
      </>
    )
  }
}
