import React from "react";
import "./style.scss";
import useFetch from "../../hooks/useFetch";

const HomesLove = () => {
  const { data, loading, error } = useFetch("hotels?featured=true&limit=4");
  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/max500/123802411.jpg?k=0c02ecedcf0ece5f23d2c8136c9b7a1a4b45155199063fcfac3af6ffd5825e84&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max500/30565641.jpg?k=5aa6e2c62d9f84253c10d3c625617a70d8a1e93579091081e1229850934bc556&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max500/39615603.jpg?k=ffa7f14b1c5235c8883662876734f832a596de617cd8380ce1025fb21bc92df9&o=",
  ];

  return (
    <div className="homes__love">
      <h2>Homes guests love</h2>
      <div className="homes__love-container">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          data &&
          images.map((img, i) => (
            <div className="homes__love-card" key={i}>
              <img
                src={img}
                alt="img"
                className="homes__love-card-img"
                draggable="false"
              />
              <div className="homes__love-card-info">
                <span>{data[i]?.name}</span>
                <span>{data[i]?.city}</span>
                <h3>Starting from EGP {data[i]?.cheapestPrice}</h3>
                {data[i]?.rating && (
                  <div className="homes__love-card-reviews">
                    <span className="rate">
                      {data[i]?.rating?.$numberDecimal}
                    </span>
                    <strong>Excellent</strong>
                    <span className="reviews"> 330 reviews </span>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomesLove;
