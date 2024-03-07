import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import SectionTitle from "../../../../UI/Titles/SectionTitle/SectionTitle";
import ScrollTransition from "../../../../UI/ScrollTransition";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./companies.css";
import { useRef } from "react";
import { useState } from "react";
// start edit_khaled
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience } from "../../../../redux/slices/experience.slice";
// end edit_khaled

const Companies = ({ companies }) => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    setElementTop(ref?.current?.offsetTop);
  }, []);
  // start edit_khaled
  useEffect(() => {
    Aos.init();
    return () => { };
  }, []);
  // end edit_khaled

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // centerPadding: "60px",
    className: "main_slider",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const disptach = useDispatch()
  const trust = useSelector((state) => state.experience.trust)
  console.log(trust);
  useEffect(() => {
    disptach(fetchExperience())
  }, [])
  const apiUrl = process.env.REACT_APP_API_URL

  return (
    <section ref={ref} className="companies_section">
      <Container>
        <div style={{ width: "fit-content" }}>
          <SectionTitle Title={t("Trusted_by")} />
        </div>
        <Slider {...settings}>
          {trust.map((comp, i) => (
            <ScrollTransition
              elementTop={elementTop}
              delay={`.${i}`}
              key={comp._id}
            >
            <a data-aos="fade-up" className="comp_box" href={comp.link}>
              <img src={apiUrl + comp.logo} alt="company logo" />
            </a>
            </ScrollTransition>
          ))}
        </Slider>
      </Container>
    </section>
  );
};
export default Companies;
