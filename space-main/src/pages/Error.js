import React from 'react';
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="destination">
      <Header />
      <div className="flexbox">
        <div className="flex-item">
          <h3>oh no, looks like that page is lost in space</h3>
        </div>
        <div className="flex-item">
          <Link to="/home">
            <span>back home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error