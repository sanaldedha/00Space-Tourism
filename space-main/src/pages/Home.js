import React from 'react';
import Header from '../components/Header';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="flexbox home__content">
        <div className="flex-item">
          <h5>
            So, you want to travel to
          </h5>
          <h1>
            Space
          </h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link to="/destination">
            <div className="home__explore">Explore</div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;