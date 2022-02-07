import React from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import PrevSlide from "../PrevSlide/PrevSlide";
import NextSlide from "../NextSlide/NextSlide";
import styles from "./SliderWrapper.module.scss";

const SliderWrapper = ({sliderItems}) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextSlide />,
    prevArrow: <PrevSlide />,
  };

  return (
    <div div className={styles.wrapper}>
      <Slider {...settings}>
        {sliderItems.map((item) => (
          <SliderItem key={item.title} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderWrapper;
