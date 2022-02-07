import React from "react";
import HeaderPlaylist from "../../components/HeaderPlaylist/HeaderPlaylist";
import Playlist from "../../components/Playlist/Playlist";
import styles from "./PlayListView.module.scss";

const PlaylistView = ({ closePlaylistViewFn }) => (
  <>
    <div className={styles.wrapper}>
      <Playlist closePlaylistViewFn={closePlaylistViewFn} />
    </div>
  </>
);

export default PlaylistView;
