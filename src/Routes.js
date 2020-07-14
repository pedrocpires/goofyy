import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Blog from "./pages/blog";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/about" component={About} exact />
        <Route path="/portfolio" component={Portfolio} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/blog" component={Blog} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
