import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import SearchResult from "../../components/searchResult/SearchResult";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
const List = () => {
  const { state } = useLocation();
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const locationRef = useRef(state?.location || "london");
  const [options, setOptions] = useState(state?.options);

  const [date, setDate] = useState(state?.date);

  const { data, loading, refetch } = useFetch(
    `/hotels?city=${locationRef.current.value}&min=${min || 0}&max=${
      max || 999
    }`
  );

  return (
    <>
      <Navbar />
      <Header />
      <div className="search__container container">
        <SearchItem
          locationRef={locationRef}
          options={options}
          date={date}
          setDate={setDate}
          setOptions={setOptions}
          setMin={setMin}
          setMax={setMax}
          refetch={refetch}
        />
        <div className="search__result">
          {loading ? (
            <h2>Loading.....</h2>
          ) : (
            data.map((item) => <SearchResult key={item._id} item={item} />)
          )}
        </div>
      </div>
    </>
  );
};

export default List;
