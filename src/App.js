import React from "react";
import "./App.css";
import Header from "./components/header";
import {Footer} from "./components/footer";
import { HeroSection } from "./components/heroSection";
import { Projects } from "./components/Projects";
import { BuyerReview, SellerReview } from "./components/Reviews";
import Contacts from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Projects />

      <div className="container my-5">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Buyer Review">
            <BuyerReview />
          </Tab>
          <Tab eventKey="profile" title="Seller Review">
            <SellerReview />
          </Tab>
        </Tabs>
      </div>

      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
