import React from "react";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from"./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./App.css"

function App() {
  return (
    <>
    <Navbar />
   <Home />
   <Education />
   <Skills />
   <Project />
   <Contact />
   <Footer />

    </>
  )}

export default App;