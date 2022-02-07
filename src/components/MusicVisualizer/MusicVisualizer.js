import React from "react";
import styles from "./MusicVisualizer.module.scss";

const MusicVisualizer = (props) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.sound_wave}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default MusicVisualizer;
