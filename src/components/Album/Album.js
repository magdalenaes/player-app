import React from "react";
import Title from "../Title/Title";
import Author from "../Author/Author";
import styles from "./Album.module.scss";
import cover2 from "../../assets/images/cover-2.png";

const Album = () => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.album}>
        <img className={styles.image} src={cover2} alt="album" />
        <Title>Self Conscious</Title>
        <Author>Kanye West</Author>
      </div>
      <div className={styles.separator}>
        <div className={styles.separatorElement}>.</div>
        <div className={styles.separatorElement}>.</div>
        <div className={styles.separatorElement}>.</div>
      </div>

      <div className={styles.options}>
        <div className={styles.optionsElement}>Add to playlist</div>
        <div className={styles.optionsElement}>Show album</div>
        <div className={styles.optionsElement}>Share with friends</div>
      </div>
    </div>
  </>
);

export default Album;
