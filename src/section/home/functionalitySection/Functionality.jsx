import React, { Fragment, useEffect, useState } from "react";
import functionalityStyles from "@/section/home/functionalitySection/Functionality.module.css";
import one from "@/assets/home/one.jpg";
import two from "@/assets/home/two.jpg";
import three from "@/assets/home/three.jpg";
import four from "@/assets/home/four.jpg";

const Functionality = () => {
  const [backgroundColor, setBackgroundColor] = useState("#97e7e133");
  useEffect(() => {
    const handleScroll = () => {
      const secondContainer = document.querySelector(
        `.${functionalityStyles.functionality_second_container}`
      );
      const thirdContainer = document.querySelector(
        `.${functionalityStyles.functionality_third_container}`
      );
      const secondContainerTop = secondContainer.getBoundingClientRect().top;
      const thirdContainerTop = thirdContainer.getBoundingClientRect().top;

      if (secondContainerTop <= window.innerHeight / 2) {
        setBackgroundColor("#7AA2E3");
      }
      if (thirdContainerTop <= window.innerHeight / 2) {
        setBackgroundColor("#F8F6E3");
      }
      if (secondContainerTop > window.innerHeight / 2) {
        setBackgroundColor("#97e7e133");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <div
        className={functionalityStyles.home_functionality}
        style={{ backgroundColor, transition: "background-color 0.9s ease" }}
      >
        <div className={functionalityStyles.home_functionality_container}>
          <div className={functionalityStyles.functionality_first_container}>
            <div className={functionalityStyles.functionality_first_item_1}>
              <div
                className={
                  functionalityStyles.functionality_first_item_1_child_1
                }
              >
                <h2>Basic functionality</h2>
                <p>
                  First-generation voice bots lack advanced conversational
                  capabilities and struggle with complex interactions.
                </p>
              </div>
              <div
                className={functionalityStyles.functionality_first_item_img_div}
              >
                <img src={one.src} alt="img" />
              </div>
            </div>
            <div className={functionalityStyles.functionality_first_item_2}>
              <div
                className={functionalityStyles.functionality_first_item_img_div}
              >
                <img src={two.src} alt="img" />
              </div>
              <div
                className={
                  functionalityStyles.functionality_first_item_1_child_2
                }
              >
                <h2>Disconnected experiences</h2>
                <p>
                  Fragmented workflows for tasks like payments and upselling
                  create frustration for customers.
                </p>
              </div>
            </div>
          </div>

          <div className={functionalityStyles.functionality_second_container}>
            <div>
              <h2>Missed revenue opportunities</h2>
              <p>
                Limited upselling and cross-selling capabilities restrict
                revenue growth and customer engagement. Reliance on expensive
                human agents (CC) is necessary to bridge this gap
              </p>
              <div className={functionalityStyles.imageWrapper}>
                <div className={functionalityStyles.imageOverlay}>
                  <img
                    src={three.src}
                    alt="img"
                    className={functionalityStyles.imageBase}
                  />
                  <img
                    src={four.src}
                    alt="img"
                    className={functionalityStyles.imageHover}
                  />
                </div>
              </div>
            </div>
            <div>
              <h2>Limited data insights</h2>
              <p>
                Basic analytics provide insufficient data to understand customer
                pain points and behavior, hindering renewal efforts.
              </p>
              <div className={functionalityStyles.imageWrapper}>
                <div className={functionalityStyles.imageOverlay}>
                  <img
                    src={four.src}
                    alt="img"
                    className={functionalityStyles.imageBase}
                  />
                  <img
                    src={three.src}
                    alt="img"
                    className={functionalityStyles.imageHover}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={functionalityStyles.functionality_third_container}>
            <div className={functionalityStyles.functionality_third_item_1}>
              <div
                className={
                  functionalityStyles.functionality_third_item_1_child_1
                }
              >
                <h2>High Call Center Reliance</h2>
                <p>
                  Ineffective voice bots lead to an unnecessary burden on call
                  centers, increasing costs.
                </p>
              </div>
              <div
                className={functionalityStyles.functionality_third_item_img_div}
              >
                <img src={one.src} alt="img" />
              </div>
            </div>
            <div className={functionalityStyles.functionality_third_item_2}>
              <div
                className={functionalityStyles.functionality_third_item_img_div}
              >
                <img src={two.src} alt="img" />
              </div>
              <div
                className={
                  functionalityStyles.functionality_third_item_1_child_2
                }
              >
                <h2>Disparate Systems</h2>
                <p>
                  Lack of integration between voice bots, email, SMS, and call
                  centers creates a fragmented communication landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Functionality;
