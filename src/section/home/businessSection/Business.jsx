import React, { useContext } from "react";
import { Fragment } from "react";
import businessStyles from "@/section/home/businessSection/Business.module.css";
import { PiArrowRightThin } from "react-icons/pi";
import { ModalContext } from "@/context/ModalContext";

const Business = () => {
  const { openModal } = useContext(ModalContext);

  const handleContainerClick = () => {
    openModal();
  };

  return (
    <Fragment>
      <div className={businessStyles.home_business} id="pricing">
        <div className={businessStyles.home_business_heading_container}>
          <h1>Business Model</h1>
        </div>
        <div className={businessStyles.home_business_container}>
          <div
            className={businessStyles.home_business_container_one}
            onClick={handleContainerClick}
          >
            <div>
              <h1>Basic Plan</h1>
            </div>
            <div>
              <p>
                Small businesses or startups with low to moderate volume of
                collections.
              </p>
            </div>
            <div>
              <PiArrowRightThin
                className={businessStyles.home_business_rightarrow_icon}
              />
            </div>
          </div>

          <div
            className={businessStyles.home_business_container_two}
            onClick={handleContainerClick}
          >
            <div>
              <h1>Standard Plan</h1>
            </div>
            <div>
              <p>
                Medium-sized enterprises with moderate to high volume of
                collections.
              </p>
            </div>
            <div>
              <PiArrowRightThin
                className={businessStyles.home_business_rightarrow_icon}
              />
            </div>
          </div>

          <div
            className={businessStyles.home_business_container_three}
            onClick={handleContainerClick}
          >
            <div>
              <h1>Premium Plan</h1>
            </div>
            <div>
              <p>
                Large enterprises with high volume of collections and complex
                needs.
              </p>
            </div>
            <div>
              <PiArrowRightThin
                className={businessStyles.home_business_rightarrow_icon}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Business;
