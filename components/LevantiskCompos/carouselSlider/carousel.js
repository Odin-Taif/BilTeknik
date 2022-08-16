import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import style from "./carousel.module.scss";
import CarouselCard from "./carouselCard/carouselCard";
function Carousel({ cards }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className={style.container}>
      <motion.div
        ref={carousel}
        className={style.carouselContainer}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={style.carouselWrapper}
        >
          {(cards || []).map((card) => {
            return (
              <motion.div className={style.imageContainer} key={card.id}>
                <CarouselCard {...card} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carousel;
