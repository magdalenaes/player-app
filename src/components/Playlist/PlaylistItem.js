import React from "react";
import PropTypes from "prop-types";
import styles from "./PlaylistItem.module.scss";

const PlaylistItem = ({ id, title, duration }) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.id}>{id}</div>
      <div className={styles.content}>
        <div>{title}</div>
        <div>{duration}</div>
      </div>
    </li>
  );
};

export default PlaylistItem;

PlaylistItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};
