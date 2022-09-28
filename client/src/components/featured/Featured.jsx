import React from "react";
import useFetch from "../../hooks/useFetch";
import "./style.scss";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "hotels/countByCity?cities=berlin,madrid,london"
  );

  const featured = [
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
      title: "Dublin, United States of America",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
      title: "Austin, United States of America",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
      title: "Austin, United States of America",
    },
  ];
  return (
    <div className="featured">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {data &&
            featured.map((f, i) => (
              <div className="featured__card" key={i}>
                <img src={f.src} alt="img" className="featured__card-Img" />
                <div className="featured__card-text">
                  <h2>{f.title}</h2>
                  <span>{data[i]} properties</span>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Featured;
