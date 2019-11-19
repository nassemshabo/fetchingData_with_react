import React from "react";
import { Link } from "react-router-dom";

import "./style.component.css";

const Item = ({ data }) => {
  return (
    <div className="item">
      <img
        src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
        alt={data.title}
      />
      <h4 key={data.id}>{data.title}</h4>{" "}
      <span>
        {" "}
        <Link to={{ pathname: `/showmore/${data.id}`, state: { data } }}>
          Show more
        </Link>
      </span>
    </div>
  );
};

export default Item;
