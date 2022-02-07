import React from "react";
import { ReactComponent as BackIcon } from "../../assets/images/back_ico.svg";
import { ReactComponent as MoreIcon } from "../../assets/images/more_ico.svg";
import styles from "./HeaderMore.module.scss";
import Button from "../Button/Button";

const HeaderMore = ({ closeMoreViewFn }) => {
  return (
    <>
      <header className={styles.wrapper}>
        <Button onClick={closeMoreViewFn}>
          <BackIcon className={styles.back} />
        </Button>
        <Button>
          <MoreIcon className={styles.more} />
        </Button>
      </header>
    </>
  );
};

export default HeaderMore;
