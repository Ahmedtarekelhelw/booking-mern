import React, { useRef } from "react";
import "./style.scss";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../search/Search";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const List = [
  { id: "1", icon: faBed, title: "Stays" },
  { id: "2", icon: faPlane, title: "Flights" },
  { id: "3", icon: faCar, title: "Car rentals" },
  { id: "4", icon: faBed, title: "Attractions" },
  { id: "5", icon: faTaxi, title: "Airport taxis" },
];

const Header = ({ home }) => {
  const locationRef = useRef("");
  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <div className={`header ${home && "home"}`}>
      <div className="header__container container">
        <div className="header__top">
          <div className="header__top-list">
            {List.map((l) => (
              <div
                key={l.id}
                className={`header__top-list-item ${
                  l.id === "1" ? "active" : ""
                } `}
              >
                <FontAwesomeIcon icon={l.icon} />
                <span>{l.title}</span>
              </div>
            ))}
          </div>
        </div>
        {home && (
          <>
            <div className="header__center">
              <h1 className="header__center-title">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="header__center-desc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free <br /> Booking.com account
              </p>
              {!user && (
                <Link to="/login">
                  <button className="header__center-btn">
                    Sign in / Register
                  </button>
                </Link>
              )}
            </div>
            <div className="header__bottom">
              <div className="header__bottom-container">
                <Search locationRef={locationRef} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
