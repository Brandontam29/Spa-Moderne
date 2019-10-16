import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { LocalizeProvider, Translate } from "react-localize-redux"
import { renderToStaticMarkup } from "react-dom/server"

import Home from "./Home"
import Products from "./Products"
import Services from "./Services"
import Contact from "./Contact"
import Promotions from "./Promotions"
import NotFound from "./NotFound"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Translations from "./translations.json"
import Popper from "./PopperExample"

import "./App.css"
import "./index.css"

const App = () => {
  return (
    <LocalizeProvider>
      <Router>
        <Navbar />
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path={"/contact"} component={Contact} />
        {/* <Route exact={true} path="/signup" render={this.renderSignup} />
          <Route exact={true} path="//:threadId" component={Thread} />
          <Route exact={true} path="/myaccount" render={this.renderMyAccount} />
          <Route
            exact={true}
            path="/otheraccount/:userId"
            component={OtherAccount}
          /> */}
        <Route path="*" component={NotFound} />
        <Footer />
        <Popper />
      </Router>
    </LocalizeProvider>
  )
}

export default App
