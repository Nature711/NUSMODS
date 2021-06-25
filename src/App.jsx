import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
