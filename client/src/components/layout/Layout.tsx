import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AboutUs from "../aboutUs/AboutUs";
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
        <section className="layout">
  
          <main>
            <Switch>
              <Route path="/home">
                {size < 600 ? 
                  <Navbar/>
                  :
                  <NavbarDesktop/>
                }
                <MainPage/>
                <AboutUs/>
                <Footer/>
              </Route>

              <Route path="/restaurants">
              {size < 600 ? 
                  <Navbar/>
                  :
                  <NavbarDesktop/>
                }
                <Restaurants/>
                <Footer/>
              </Route>

              <Route path="/chefs">
              {size < 600 ? 
                  <Navbar/>
                  :
                  <NavbarDesktop/>
                }
                <Chefs/>
                <Footer/>
              </Route>

              <Route path="/restaurant">
              {size < 600 ? 
                  <Navbar/>
                  :
                  <NavbarDesktop/>
                }
                <Restaurant/>
                <Footer/>
              </Route>

              <Route path="/contact">
              {size < 600 ? 
                  <Navbar/>
                  :
                  <NavbarDesktop/>
                }
                <Contact/>
                <Footer/>
              </Route>

              <Route path="/terms">
              {size < 600 ? 
                  <Navbar/>
                  :
                  <NavbarDesktop/>
                }
                <TermsOfUse/>
                <Footer/>
              </Route>

              <Route path="/privacy">
              {size < 600 ? 
                  <Navbar/>
                  :
                  <NavbarDesktop/>
                }
                <PrivacyPolicy/>
                <Footer/>
              </Route>


              <Redirect from="/" to="/home" exact />
            </Switch>
          </main>
  
        </section>
      </BrowserRouter>
    )
}
