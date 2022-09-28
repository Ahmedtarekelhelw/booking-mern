import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import EmailList from "../../components/emaiList/EmailList";
import Footer from "../../components/footer/Footer";
import SingleHotel from "../../components/singleHotel/SingleHotel";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Hotel = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`hotels/find/${id}`);
  return (
    <div className="hotel">
      <Navbar />
      <Header />
      <div className="container">
        {loading ? (
          <h2>Loading....</h2>
        ) : (
          <SingleHotel data={data} hotelId={id} />
        )}
      </div>
      <EmailList />
      <Footer />
    </div>
  );
};

export default Hotel;
