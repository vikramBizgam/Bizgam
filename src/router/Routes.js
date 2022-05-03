// import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import React, { Component } from 'react'
// import FirstSlide from "../components/FirstSlide";
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
          <Route path="/Bizgam" element={<Navbar />} />
          </Routes>
          <Routes>
          <Route path="/Bizgam" element={<MainHomepage />} />
          </Routes>
          <Routes>
          <Route path="/Bizgam/coming-soon" element={<ComingSoon />} />
          </Routes>
          <Routes>
          <Route path="/Bizgam/Team" element={<TeamPerson />} />
          </Routes>
          <Routes>
          <Route path="/Bizgam" element={<Footer />} />
          </Routes>
      </BrowserRouter>
      </>
    )
  }
}
