import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slide1 from "../../public/slide1.svg";
import Slide2 from "../../public/slide2.svg";
import Slide3 from "../../public/slide3.svg";

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
    arrows: false,
  };

  return (
    <section className="h-[440px] overflow-hidden relative block max-w-[1800px] mx-auto my-0">
      <Slider {...settings}>
        <div className="h-[400px] bg-green">
          <Image priority={true} src={Slide1} width={400} height={100} alt="первый слайд" />
        </div>
        <div className="h-[400px] bg-pink">
          <div className="flex justify-center">
            <Image priority={true} src={Slide2} width={400} height={100} alt="второй слайд" />
          </div>
        </div>
        <div className="h-[400px] bg-[red]">
        <div className="flex justify-end">
            <Image priority={true} src={Slide3} width={400} height={100} alt="третий слайд" />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Sliders;
