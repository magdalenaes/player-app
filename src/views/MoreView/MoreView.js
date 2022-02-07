import React from "react";
import HeaderMore from "../../components/HeaderMore/HeaderMore";
import Album from "../../components/Album/Album";
import styles from "./MoreView.module.scss"

const MoreView = ({ closeMoreViewFn }) => (
  <div className={styles.wrapper}>
    <HeaderMore closeMoreViewFn={closeMoreViewFn} />
    <Album />
  </div>
);

export default MoreView;
