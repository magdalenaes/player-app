import React from "react";
import { ReactComponent as BackIcon } from "../../assets/images/back_ico.svg";
import playActive from "../../assets/images/Play_active.png";
import styles from "./HeaderPlaylist.module.scss";
import Author from "../Author/Author";
import Title from "../Title/Title";

const HeaderPlaylist = ({ closePlaylistViewFn}) => {

  return (
    <>
      <header className={styles.wrapper}>
        <BackIcon className={styles.back} onClick={closePlaylistViewFn} />
        <div className={styles.header}>
          <Title>Self Conscious</Title>
          <Author>Kanye West</Author>
        </div>
        <img className={styles.playActive} src={playActive} alt="play" />
      </header>
    </>
  );
};

export default HeaderPlaylist;
