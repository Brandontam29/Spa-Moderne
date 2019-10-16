import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { LocalizeProvider } from "react-localize-redux"

import Home from "./Home.js"
import Products from "./Products.js"
import Services from "./Services.js"
import Contact from "./Contact.js"
import Promotions from "./Promotions.js"
import Notfound from "./Notfound.js"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
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
