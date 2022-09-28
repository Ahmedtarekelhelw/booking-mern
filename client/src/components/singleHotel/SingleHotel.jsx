import {
  faLocationDot,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useContext } from "react";
import "./style.scss";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Reserve from "../reserve/Reserve";
import { useEffect } from "react";

const SingleHotel = ({ data, hotelId }) => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const {
    state: { user },
  } = useContext(AuthContext);
  const {
    state: { date, options },
  } = useContext(SearchContext);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const navigate = useNavigate();

  const MILLSEC_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const dayDiff = Math.ceil(timeDiff / MILLSEC_PER_DAY);
    return dayDiff;
  };

  const days = dayDifference(date[0]?.endDate, date[0]?.startDate);

  const daysAfterReload = JSON.parse(localStorage.getItem("days"))
    ? JSON.parse(localStorage.getItem("days"))
    : 1;

  useEffect(() => {
    localStorage.setItem("days", JSON.stringify(days));
  }, [days]);

  const handleClick = (num) => {
    setOpen(true);
    setSliderNumber(num);
  };

  const handleMove = (dir) => {
    if (dir === "l") {
      setSliderNumber(sliderNumber === 0 ? 5 : sliderNumber - 1);
    } else {
      setSliderNumber(sliderNumber === 5 ? 0 : sliderNumber + 1);
    }
  };

  const handleReserve = () => {
    user ? setOpenModal(true) : navigate("/login");
  };

  return (
    <div className="single__hotel">
      {open && (
        <div className="single__hotel-slider">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="close"
            onClick={() => setOpen(false)}
          />
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="arrow"
            onClick={() => handleMove("l")}
          />
          <img src={photos[sliderNumber].src} alt="img" draggable={false} />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="arrow"
            onClick={() => handleMove("r")}
          />
        </div>
      )}
      <div className="single__hotel-info">
        <div className="single__hotel-info-text">
          <h1 className="single__hotel-info-title">{data.name}</h1>
          <div className="single__hotel-info-location">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="single__hotel-info-distance">
            Excellent location – {data.distance}m from center
          </span>
          <span className="single__hotel-info-price">
            Book a stay over ${data.cheapestPrice} at this property and get a
            free airport taxi
          </span>
        </div>
        <button className="single__hotel-btn">Reserve or Book Now!</button>
      </div>
      <div className="single__hotel-img-container">
        {photos.map((photo, i) => (
          <img
            src={photo.src}
            alt="hotel-img"
            key={i}
            onClick={() => handleClick(i)}
            draggable={false}
          />
        ))}
      </div>
      <div className="single__hotel-desc">
        <div className="single__hotel-desc-text">
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
        </div>
        <div className="single__hotel-desc-box">
          <h1>Perfect for a {daysAfterReload}-night stay!</h1>
          <span>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </span>
          <h2>
            <b>${daysAfterReload * data.cheapestPrice * options.rooms}</b> (
            {daysAfterReload} nights)
          </h2>
          <button onClick={handleReserve}>Reserve or Book Now!</button>
        </div>
      </div>
      {openModal && <Reserve setOpenModal={setOpenModal} hotelId={hotelId} />}
    </div>
  );
};

export default SingleHotel;
