import React from "react";
import { ReactComponent as PlayListIcon } from "../../assets/images/playlist_ico.svg";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";

const Footer = ({ openPlaylistViewFn }) => (
  <div className={styles.wrapper}>
    <Button Button onClick={openPlaylistViewFn}>
      <PlayListIcon />
    </Button>
    <div className={styles.content}>
      <div className={styles.next}>next</div>
      <div className={styles.details}>
        <div className={styles.title}>Livin' In A Movie</div>
        <div className={styles.duration}>3:27</div>
      </div>
    </div>
  </div>
);

export default Footer;
