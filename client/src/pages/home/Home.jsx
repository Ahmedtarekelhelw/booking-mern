import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyType from "../../components/propertyType/PropertyType";
import HomesLove from "../../components/homesLove/HomesLove";
import EmailList from "../../components/emaiList/EmailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header home />
      <div className="container">
        <Featured />
        <PropertyType />
        <HomesLove />
      </div>
      <EmailList />
      <Footer />
    </div>
  );
};

export default Home;
