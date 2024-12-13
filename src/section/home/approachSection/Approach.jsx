import React, { Fragment } from "react";
import approachStyles from "@/section/home/approachSection/Approach.module.css";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

const Approach = () => {
  const { openModal } = useContext(ModalContext);
  const currentYear = new Date().getFullYear();

  return (
    <Fragment>
      <div className={approachStyles.home_approach_main}>
        <div className={approachStyles.home_approach}>
          <div className={approachStyles.home_approach_container}>
            <h3>
              GenStrat.ai&rsquo;s visionary approach to customer interaction,
              bolstered by Gen AI, propels businesses into a new era of
              efficiency and excellence
            </h3>
            <button onClick={openModal}>Create with Genstrat.ai</button>
          </div>
        </div>
        <div className={approachStyles.home_approach_hr_container}>
          <hr className={approachStyles.home_approach_hr} />
          <div>
            <p>© Copyright {currentYear} Genstrat.ai Private Limited. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Approach;
