import React from "react";
import "./app.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import CV from "./components/CV";
import "./app.css";

function App() {
  return (

    <Router basename="/profile/">

    <div className="react-portfolio-tew">

      <Navigation />

      <Header />

      <Router>
      <Route path="/portfolio" component={Portfolio} />
     </Router>

     <Router>
     <Route path="/home" component={About} />
     </Router>

     <Router>
     <Route path="/cv" component={CV} />
     </Router>

     <Router>
     <Route path="/contact" component={Contact} />
     </Router>

    
     <Router>
      <Route exact path="/" component={About} />
     </Router>
      

     <Footer />
    </div>
    </Router>
  );
}

export default App;
