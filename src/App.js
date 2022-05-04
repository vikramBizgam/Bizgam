import logo from './logo.svg';
import './App.css';
import Router from './router/Routes';
// import { BrowserRouter as Router} from "react-router-dom";
import FirstSlide from './components/FirstSlide';
import React, { useEffect } from "react";
import ScrollToTop from './components/ScrollTop';
// import Routes from "./router/Routes";
// import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="main-page-wrapper p0">
        <ScrollToTop/>
        <Router />
      </div>
    </>
  );
};

export default App;


// function App() {
//   return (
//     < >
//       <Router />
//     </>
//   );
// }

// export default App;
