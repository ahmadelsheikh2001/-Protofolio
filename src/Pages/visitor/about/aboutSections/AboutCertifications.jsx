import { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import NextSlide from "./NextSlide";
import PrevSlide from "./PrevSlide";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../../../UI/Titles/SectionTitle/SectionTitle";
import ScrollTransition from '../../../../UI/ScrollTransition'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AboutCertifications = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [elemenTop, setElementTop] = useState(0);
  const sliderRef = useRef(null);
  const {t, i18n} = useTranslation();
  const ref = useRef(null);

  useEffect(() => {
    setElementTop(ref?.current?.offsetTop);
  }, [])
  



  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    className: 'main_slider',
    prevArrow: <PrevSlide slider={sliderRef}/>,
    nextArrow: <NextSlide  slider={sliderRef}/>,
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return(
    <section ref={ref} className="certification_section">
      <ScrollTransition 
        classes='container'
        elementTop={elemenTop}
      >
        <SectionTitle Title={t('certification_title')}/>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img src='./assets/Rectangle6341.svg' className="img-fluid"/>
          </div>
          <div>
            <img src='./assets/Rectangle6341.svg' className="img-fluid"/>
          </div>
          <div>
            <img src='./assets/Rectangle6341.svg' className="img-fluid"/>
          </div>
          <div>
            <img src='./assets/Rectangle6341.svg' className="img-fluid"/>
          </div>
        </Slider>
      </ScrollTransition>
    </section>
  );
};

export default AboutCertifications;