import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

import "./style.scss";

const Search = ({ locationRef }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({ adults: 1, children: 0, rooms: 1 });

  const { dispatch } = useContext(SearchContext);

  const handleCount = (operation, option) => {
    setOptions((prev) => ({
      ...prev,
      [option]: operation === "i" ? options[option] + 1 : options[option] - 1,
    }));
  };
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { location: locationRef.current.value, date, options },
    });
    navigate("/hotels", {
      state: { location: locationRef.current.value, date, options },
    });
  };
  return (
    <>
      <div className="header__bottom-search">
        <FontAwesomeIcon icon={faBed} className="header__bottom-icon" />
        <input
          type="text"
          className="header__bottom-search-input"
          placeholder="Where are you going?"
          ref={locationRef}
        />
      </div>
      <div className="header__bottom-search">
        <FontAwesomeIcon
          icon={faCalendarDays}
          className="header__bottom-icon"
        />
        <span
          className="header__bottom-search-text"
          onClick={() => {
            openOptions && setOpenOptions(false);
            setOpenDate(!openDate);
          }}
        >
          {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}
        </span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>
      <div className="header__bottom-search">
        <FontAwesomeIcon icon={faPerson} className="header__bottom-icon" />
        <span
          className="header__bottom-search-text"
          onClick={() => {
            openDate && setOpenDate(false);
            setOpenOptions(!openOptions);
          }}
        >
          {options.adults} {options.adults > 1 ? "adults" : "adult"} .{" "}
          {options.children} {options.children > 1 ? "children" : "child"} .{" "}
          {options.rooms} {options.rooms > 1 ? "rooms" : "room"}
        </span>
        {openOptions && (
          <div className="header__bottom-search-options">
            {["adults", "children", "rooms"].map((o, i) => (
              <div className="header__bottom-search-option" key={i}>
                <span className="title">{o}</span>
                <div className="counter">
                  <button
                    disabled={
                      (o === "adults" && options[o] < 2) ||
                      (o === "children" && options[o] < 1) ||
                      (o === "rooms" && options[o] < 2)
                    }
                    className="d"
                    onClick={() => handleCount("d", o)}
                  >
                    -
                  </button>
                  <span className="count">{options[o]}</span>
                  <button className="i" onClick={() => handleCount("i", o)}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <button className="header__bottom-search-button" onClick={handleSearch}>
        Search
      </button>
    </>
  );
};

export default Search;
