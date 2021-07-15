import React from "react";
import "./app.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="react-portfolio-tew">
     <Router>
      <Navigation />
      <Header />
      <Portfolio />
      <Footer />

      <Route path="/portfolio" component={Portfolio} />
     </Router>
    </div>
  );
}

export default App;
