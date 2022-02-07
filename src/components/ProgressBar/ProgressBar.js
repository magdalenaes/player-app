import React from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = (props) => {
  const progressBarStyles = {
    width: (100 * 100) / 260 + "%",
  };
  return (
    <div div className={styles.wrapper}>
      <div className={styles.time}>1:27</div>
      <div className={styles.progress}>
        <div className={styles.bar} style={progressBarStyles} />
      </div>
      <div className={styles.duration}>4:20</div>
    </div>
  );
};

export default ProgressBar;
