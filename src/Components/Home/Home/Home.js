import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HappyUsers from "../HappyUsers/HappyUsers";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <HappyUsers></HappyUsers>
      <Reviews></Reviews>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
