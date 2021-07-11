import React from "react";
import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Project from "./components/Project";

function App() {
  return (
    <div className="react-portfolio-tew">
      <Navigation />
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
