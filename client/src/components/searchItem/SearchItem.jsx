import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "./style.scss";

const SearchItem = ({
  locationRef,
  options,
  date,
  refetch,
  setOptions,
  setDate,
  setMin,
  setMax,
}) => {
  const [openDate, setOpenDate] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className="search__item">
      <div className="ahmed">
        <h2>Search</h2>
        <form>
          <div className="search__item-field">
            <label htmlFor="">Destination</label>
            <input
              type="text"
              placeholder="Where are you going?"
              ref={locationRef}
              defaultValue={locationRef.current || ""}
            />
          </div>
          <div className="search__item-field">
            <label>Check in Date</label>
            <span
              className="search__item-field-date"
              onClick={() => {
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
                minDate={new Date()}
              />
            )}
          </div>
          <div className="search__item-field">
            <h4>Options</h4>
            <div className="option">
              <span>
                Min price <small>per night</small>
              </span>
              <input type="number" onChange={(e) => setMin(e.target.value)} />
            </div>
            <div className="option">
              <span>
                Max price <small>per night</small>
              </span>
              <input type="number" onChange={(e) => setMax(e.target.value)} />
            </div>
            <div className="option">
              <span>Adults</span>
              <input type="number" min={1} placeholder={options?.adults} />
            </div>
            <div className="option">
              <span>Children</span>
              <input type="number" min={0} placeholder={options?.children} />
            </div>
            <div className="option">
              <span>Rooms</span>
              <input type="number" min={1} placeholder={options?.rooms} />
            </div>
          </div>
          <button className="search__item-btn" onClick={handleClick}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchItem;
