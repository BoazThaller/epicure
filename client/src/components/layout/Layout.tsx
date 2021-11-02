import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AboutUs from "../aboutUs/AboutUs";
import Bag from "../bag/Bag";
import Chefs from "../chefs/Chefs";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import MainPage from "../mainPage/MainPage";
import Navbar from "../navbar/Navbar";
import NavbarDesktop from "../navbar/NavbarDesktop";
import PrivacyPolicy from "../privacyPolicy/PrivacyPolicy";
import Restaurant from "../restaurant/Restaurant";
import Restaurants from "../restaurants/Restaurants";
import TermsOfUse from "../termsOfUse/TermsOfUse";
import WindowSize from "../windowSize";
export default function Layout() {
  const size = WindowSize();

    return (
      <BrowserRouter>
        {size < 600 ? <Navbar/> : <NavbarDesktop/> }
        <section className="layout">
          <main>
            <Switch>
              <Route path="/home">
                <MainPage/>
                <AboutUs/>
              </Route>

              <Route path="/restaurants">
                <Restaurants/>
              </Route>

              <Route path="/chefs">
                <Chefs/>
              </Route>

              <Route path="/restaurant">
                <Restaurant/>
              </Route>

              <Route path="/contact">
                <Contact/>
              </Route>

              <Route path="/terms">
                <TermsOfUse/>
              </Route>

              <Route path="/privacy">
                <PrivacyPolicy/>
              </Route>

              <Route path="/bag">
                <Bag/>
              </Route>


              <Redirect from="/" to="/home" exact />
            </Switch>
          </main>
  
        </section>
        <Footer/>
      </BrowserRouter>
    )
}
