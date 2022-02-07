import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({ children, to, ...props }) => (
  <>
    {to ? (
      <Link
        to={to}
        className={styles.button}
      >
        {children}
      </Link>
    ) : (
      <button button className={styles.button} {...props}>
        {children}
      </button>
    )}
  </>
);

export default Button;
