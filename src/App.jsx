import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from "./components/Functionalities/SignUp";
import LogIn from "./components/Functionalities/LogIn";
import { AuthProvider } from "./components/context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/Functionalities/ForgotPassword";
import UpdateProfile from "./components/Functionalities/UpdateProfile";
import UserProfile from "./components/Functionalities/UserProfile";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/UpdateProfile" component={UpdateProfile} />
          <PrivateRoute path="/UserProfile" component={UserProfile} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
