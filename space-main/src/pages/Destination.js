import React, { useState } from 'react';
import Header from "../components/Header";
import data from "../data.json";
import { motion } from 'framer-motion';

const Destination = () => {
  const [destinations] = useState(data.destinations);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = destinations[value];

  return (
    <div className="destination">
      <Header />
      <main>
        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8, duration: 1 }}
        >
          <b>01</b> pick your destination
        </motion.h5>
        <div className="flexbox destination__content">
          <motion.img
            className="destination__img"
            src={`/space${images.webp}`}
            alt={name}
            initial={{ x: "-30vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.div
            className="flex-item destination__text"
            initial={{ x: "30vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div>
              {destinations.map((planet, index) => {
                return (
                  <button
                    className={`destination__btn ${
                      index === value && "destination__btn--active"
                    }`}
                    key={index.toString()}
                    onClick={() => setValue(index)}
                  >
                    <span>{planet.name}</span>
                  </button>
                );
              })}
            </div>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="destination__line"></div>
            <div className="flexbox destination__footer">
              <div className="destination__footnote">
                <span>avg. distance</span>
                <h3>{distance}</h3>
              </div>
              <div className="destination__footnote">
                <span>est. travel time</span>
                <h3>{travel}</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default Destination;