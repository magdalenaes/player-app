import React from "react";
import { ReactComponent as PrevArrow } from "../../assets/images/previous_ico.svg";

const PrevSlide = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <PrevArrow />
    </div>
  );
};

export default PrevSlide;