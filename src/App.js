import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Menu from "./components/Menu/Menu";
import HomePage from "./Page/HomePage/HomePage";
import CatalogPage from "./Page/CatalogPage/CatalogPage";
import AboutPage from "./Page/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Router>
          <div>
            <Menu />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/catalog" component={CatalogPage} />
              <Route path="/about" component={AboutPage} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
