import React from "react";
import PrevSlide from "../PrevSlide/PrevSlide";
import NextSlide from "../NextSlide/NextSlide";
import Button from "../Button/Button";
import { ReactComponent as ShuffleIcon } from "../../assets/images/shuffle_ico.svg";
import { ReactComponent as RepeatIcon } from "../../assets/images/repeat_ico.svg";
import playActive from "../../assets/images/Play_active.png";
import playInactive from "../../assets/images/Play_inactive.png";
import styles from "./Panel.module.scss";

const Panel = ({ pressPlayFn, isPlayPress }) => (
  <div div className={styles.wrapper}>
    <ShuffleIcon className={styles.shuffle} />
    <PrevSlide className={styles.prev} />
    <Button onClick={pressPlayFn}>
      {isPlayPress ? (
        <img
          src={playActive}
          alt="play button"
          className={styles.play_active}
        />
      ) : (
        <img
          src={playInactive}
          alt="play button"
          className={styles.play_inactive}
        />
      )}
    </Button>
    <NextSlide className={styles.next} />
    <RepeatIcon className={styles.repeat} />
  </div>
);

export default Panel;
