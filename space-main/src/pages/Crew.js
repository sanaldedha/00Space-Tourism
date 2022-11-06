import React, { useState } from 'react';
import Header from "../components/Header";
import data from "../data.json";
import { motion } from "framer-motion";

const Crew = () => {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);
  const {name, images, role, bio} = crew[value];

  return (
    <div className="crew">
      <Header />
      <main>
        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <b>02</b> meet your crew
        </motion.h5>
        <motion.div
          className="flexbox crew__content"
          initial={{ y: "50vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            className="crew__img"
            src={`/space${images.webp}`}
            alt={name}
          />
          <div className="crew__line"></div>
          <div className="crew__btn-container">
            {crew.map((x, index) => {
              return (
                <button
                  key={index.toString()}
                  onClick={() => setValue(index)}
                  className={`crew__btn ${
                    index === value && "crew__btn--active"
                  }`}
                ></button>
              );
            })}
          </div>
          <div className="flex-item crew__text">
            <h6>{role}</h6>
            <h4>{name}</h4>
            <p>{bio}</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Crew;