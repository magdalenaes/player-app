import React from "react";
import PropTypes from "prop-types";
import styles from "./SliderItem.module.scss";
import Author from "../Author/Author";
import Title from "../Title/Title";

const SliderItem = ({ image, title, author }) => (
  <div div className={styles.album}>
    <img className={styles.image} src={image} alt={title} />
    <Title>{title}</Title>
    <Author>{author}</Author>
    <p className={styles.author}>{author}</p>
  </div>
);

export default SliderItem;

SliderItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
