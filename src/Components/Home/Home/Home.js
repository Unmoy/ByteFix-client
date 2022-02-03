import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import HappyUsers from "../HappyUsers/HappyUsers";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <About />
      <Services></Services>
      <HappyUsers></HappyUsers>
      <Reviews></Reviews>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
