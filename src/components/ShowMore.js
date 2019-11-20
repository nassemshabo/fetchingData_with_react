import React from "react";
import { Link } from "react-router-dom";

import "./style.component.css";

class ShowMore extends React.Component {
  state = {};
  render() {
    const data = this.props.location.state.data;
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`
        }}
      >
        <div className="container">
          <h1 className="showmore-title">
            {this.props.location.state.data.title}
          </h1>
          <div className="main-div">
            <img
              src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
              alt={data.title}
            />
          </div>
          <button>
            <Link style={{ color: "#fff" }} to="/">
              Home
            </Link>
          </button>
          <div>
            <h1>Over view</h1>
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowMore;
