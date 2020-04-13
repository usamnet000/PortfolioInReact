import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Progress from "./Components/Progress";

//pages
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import { Fragment } from "react";

class App extends Component {
  state = {
    scrollPostion: 0,
  };

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  };

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

    this.setState({
      scrollPostion,
    });
  };

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  componentDidMount() {
    this.listenToScrollEvent();
  }

  render() {
    return (
      <React.Fragment>
        <Progress scroll={this.state.scrollPostion + "%"} />
        <Header />
        <div style={{ outline: "none" }} id="gatsby-focus-wrapper">
          <div className="layout-module--container--2TGku">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/projects" component={Projects} />
              <Route path="/education" component={Education} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
              <Route component={Home} />
            </Switch>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
