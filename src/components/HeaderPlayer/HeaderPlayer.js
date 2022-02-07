import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/images/back_ico.svg";
import { ReactComponent as MoreIcon } from "../../assets/images/more_ico.svg";
import styles from "./HeaderPlayer.module.scss";
import Button from "../Button/Button";

const Header = ({ openMoreViewFn }) => {
  const navigate = useNavigate();
  return (
    <>
      <header className={styles.wrapper}>
        <BackIcon className={styles.back} onClick={() => navigate(-1)} />
        <div className={styles.album}>
          <div className={styles.name}>Album</div>
          <div className={styles.title}>Unreleased</div>
        </div>
        <Button onClick={openMoreViewFn}>
          <MoreIcon className={styles.more} />
        </Button>
      </header>
    </>
  );
};

export default Header;
