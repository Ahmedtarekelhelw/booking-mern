import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const SearchResult = ({ item }) => {
  return (
    <>
      <div className="search__result-card">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt="img"
          className="card-img"
          draggable={false}
        />
        <div className="search__result-card-info">
          <h1 className="info-title">{item?.name}</h1>
          <span className="info-distance">{item?.distance}m from center</span>
          <span className="info-taxes">Free airport taxi</span>
          <span className="info-subtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="info-features">{item?.desc}</span>
          <span className="info-cancel">Free cancellation </span>
          <span className="info-cancel-subtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="search__result-card-details">
          {item?.rating?.$numberDecimal && (
            <div className="rating">
              <span>Excellent</span>
              <button>{item?.rating?.$numberDecimal}</button>
            </div>
          )}

          <div className="detail-price">
            <span className="price">${item.cheapestPrice}</span>
            <span className="taxes">Includes taxes and fees</span>
            <Link to={`/hotels/${item._id}`}>
              <button className="check-button">See availability</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
