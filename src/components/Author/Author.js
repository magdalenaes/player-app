import React from "react";
import styles from "./Author.module.scss";

const Author = ({ children }) => <h2 className={styles.author}>{children}</h2>;

export default Author;
