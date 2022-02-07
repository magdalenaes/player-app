import React from "react";
import { ReactComponent as NextArrow } from "../../assets/images/next_ico.svg";

const NextSlide = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <NextArrow />
    </div>
  );
};

export default NextSlide;