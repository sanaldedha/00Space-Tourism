import React, { useState } from "react";
import Header from "../components/Header";
import data from "../data.json";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const Technology = () => {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = technology[value];
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)'});
  
  return (
    <div className="technology">
      <Header />
      <main>
        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <b>03</b> space launch 101
        </motion.h5>
        <motion.div
          className="flexbox technology__content"
          initial={{ y: "-50vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            className="technology__img"
            src={isDesktop ? `/space${images.portrait}` : `/space${images.landscape}`}
            alt={name}
          />
          <div className="technology__btn-container">
            {technology.map((x, index) => {
              return (
                <button
                  className={`technology__btn ${
                    index === value && "technology__btn--active"
                  }`}
                  key={index.toString()}
                  onClick={() => setValue(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <div className="flex-item technology__text">
            <span>the terminology...</span>
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Technology;