import React, { useEffect, useState } from "react";
import "./cards.css";
import { Link } from "react-router-dom";

const Cards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGY2OTNhYmZlYzBhZmRjNWE4YzE3NzgxZTZlOGVlNCIsInN1YiI6IjY2NWYwZGNhYTlkYWE4ZGIwNTgwZGJmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HVoXPKALemdts7vu3gj6qAegBOTf0k8pQTawbL77Cy0",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        !category ? "now_playing" : category
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="title-cards">
      <h2>{!title ? "Popular on Netflix" : title}</h2>
      <div className="card-list">
        {apiData.map((card, index) => {
          const { original_title, backdrop_path } = card;
          return (
            <Link to={`/player/${card.id}`} key={index} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500` + backdrop_path}
                alt=""
              />
              <Link>{original_title}</Link>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
