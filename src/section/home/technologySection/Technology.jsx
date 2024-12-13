import React from "react";
import { Fragment } from "react";
import techonologyStyles from "@/section/home/technologySection/Technology.module.css";
import techOne from "@/assets/home/techOne.jpg";
import techTwo from "@/assets/home/techTwo.jpg";
import techThree from "@/assets/home/techThree.jpg";

const Technology = () => {
  return (
    <Fragment>
      <div className={techonologyStyles.home_technology}>
        <div className={techonologyStyles.home_technology_heading_container}>
          <h2>Technology and Innovation</h2>
        </div>

        <div className={techonologyStyles.home_technology_card_container}>
          <div className={techonologyStyles.home_technology_card_container_one}>
            <h2>Next-Gen Conversational AI:</h2>
            <div
              className={techonologyStyles.home_technology_card_img_container}
            >
              <img src={techOne.src} alt="img" />
            </div>
            <p>
              Our LLM model optimizes efficiency in identifying user intent and
              voice, driving a superior conversational experience.
            </p>
          </div>

          <div className={techonologyStyles.home_technology_card_container_two}>
            <h2>Seamless Integration:</h2>
            <div
              className={techonologyStyles.home_technology_card_img_container}
            >
              <img src={techTwo.src} alt="img" />
            </div>
            <p>
              Our solution integrates seamlessly with existing systems, ensuring
              a smooth implementation process.
            </p>
          </div>

          <div
            className={techonologyStyles.home_technology_card_container_three}
          >
            <h2>Advanced NLU Engine:</h2>
            <div
              className={techonologyStyles.home_technology_card_img_container}
            >
              <img src={techThree.src} alt="img" />
            </div>
            <p>
              Utilizing a multi-layered NLU engine, we accurately understand
              user intent, entities, and sentiment for effective communication.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Technology;
