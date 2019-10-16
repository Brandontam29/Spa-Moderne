import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { LocalizeProvider, Translate } from "react-localize-redux"

import Home from "./Home"
import Products from "./Products"
import Services from "./Services"
import Contact from "./Contact"
import Promotions from "./Promotions"
import Notfound from "./Notfound"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./App.css"
import "./index.css"

class App extends Component {
  renderHome = () => <Home />
  renderPromotions = () => <Promotions />
  renderProducts = () => <Products />
  renderServices = () => <Services />
  renderNotfound = () => <Notfound />
  renderContact = () => <Contact />

  render = () => {
    return (
      <LocalizeProvider>
        <Router>
          <Navbar />
          <Translate id="movie.title" />
          <Route exact={true} path="/" render={this.renderHome} />
          {/* <Route exact={true} path={"/" + }  render={this.renderLogin} />
          <Route exact={true} path="/signup" render={this.renderSignup} />
          <Route exact={true} path="//:threadId" component={Thread} />
          <Route exact={true} path="/myaccount" render={this.renderMyAccount} />
          <Route
            exact={true}
            path="/otheraccount/:userId"
            component={OtherAccount}
          /> */}
          <Footer />
        </Router>
      </LocalizeProvider>
    )
  }
}

export default App
