import React from "react";

import Header from "../../components/header";
import About from "../../components/about";
import Blog from "../../components/blog";
import Contact from "../../components/contact";
import Portfolio from "../../components/portfolio";
import Resume from "../../components/resume";
import Footer from "../../components/footer";
import Intro from "../../components/intro";

function Home() {
  return (
    <div>
      <Header>
        <Intro />
      </Header>
      <About />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
