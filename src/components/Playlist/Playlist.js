import React from "react";
import { PlaylistData } from "../../data/PlaylistData";
import PlayListItem from "./PlaylistItem";
import styles from "./Playlist.module.scss";
import ArrowDown from "../../assets/images/hide_ico.svg";

const Playlist = (props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.playlist}>
          {PlaylistData.map((item) => (
            <PlayListItem key={item.id} {...item} />
          ))}
          <button className={styles.button}>Shuffle play</button>
          <img className={styles.image} src={ArrowDown} alt="more" />
        </ul>
      </div>
    </>
  );
};

export default Playlist;
