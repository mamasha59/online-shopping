import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Sliders: FC = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows:false,
  };

  return (
    <section className="h-[420px] overflow-hidden relative block">
      <Slider {...settings}>
          <div className="h-[400px] bg-green">1</div>
          <div className="h-[400px] bg-pink">2</div>
          <div className="h-[400px] bg-[red]">3</div>
      </Slider>
    </section>
  );
};

export default Sliders;
