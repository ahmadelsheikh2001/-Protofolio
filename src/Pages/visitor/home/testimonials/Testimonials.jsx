import { useRef, useState } from "react";
import Slider from "react-slick";
import SectionTitle from "../../../../UI/Titles/SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import SingleFeedBack from "./SingleFeedBack";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import ScrollTransition from "../../../../UI/ScrollTransition";
import { Container } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css";
import { useEffect } from "react";
import MainBtn from "../../../../UI/Buttons/MainBtn/MainBtn";
import { ArrowIcon } from "../../../../UI/Icons";
import { useDispatch, useSelector } from "react-redux";
import { feedBackData } from "../../../../redux/slices/feedback.slice";

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const dispatch = useDispatch()
  let data = useSelector((state) => state.feedback.data)
  data = data.filter((ele)=>ele?.status == "approved")
  data = data.map((ele)=>{
    return {...ele ,src :"./assets/images.jpg"}
  })
  useEffect(() => {
    dispatch(feedBackData())
    setElementTop(ref?.current?.offsetTop);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    autoplay: true,
    // pauseOnHover:true,
    pauseOnDotsHover: true,
    autoplaySpeed: 5000,
    customPaging: (i) => {
      return (
        <div className="box">
          <svg>
            <circle cx="20" cy="20" r="20"></circle>
          </svg>
          <img src={data[i].src} alt="Null" />
        </div>
      );
    },
    prevArrow: (
      <PrevButton img={data[currentIndex]?.src} slider={sliderRef} />
    ),
    nextArrow: (
      <NextButton img={data[currentIndex]?.src} slider={sliderRef} />
    ),
    beforeChange: (current, next) => setCurrentIndex(next),
    className: "testimonial_carousal",
    // rtl: true
  };

  const users = [];

  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      users.push({
        userId: i,
        userName: data[i]?.name,
        userJob: data[i]?.job,
        userComment: data[i]?.message,
        userImage: data[i]?.src,
        prevImageUser: data[data?.length - 1].src,
        nextImageUser: data[i + 1]?.src,
      });
    } else if (i === data.length - 1) {
      users.push({
        userId: i,
        userName: data[i].name,
        userJob: data[i].job,
        userComment: data[i].comment,
        userImage: data[i].src,
        prevImageUser: data[i - 1].src,
        nextImageUser: data[0].src,
      });
    } else {
      users.push({
        userId: i,
        userName: data[i]?.name,
        userJob: data[i]?.job,
        userComment: data[i]?.message,
        userImage: data[i]?.src,
        prevImageUser: data[i - 1]?.src,
        nextImageUser: data[i + 1]?.src,
      });
    }
  }

  return (
    <section className="testimonials_section">
      <Container ref={ref}>
        <div className="header-testimonial">
          <SectionTitle Title={t("what_say")} />
          {/* {start edit_khaled} */}
          <div className="arrows  arro_1 ">
            <button onClick={() => sliderRef.current.slickPrev()}>
              <ArrowIcon />
            </button>
            <button onClick={() => sliderRef.current.slickNext()}>
              <ArrowIcon />
            </button>
          </div>
          <MainBtn path="/add-feedback">{t("Add_Feed_back")}</MainBtn>

          {/* <MainBtn path="/add-feedback">{t("Add_Feed_back")}</MainBtn> */}
        </div>
        <ScrollTransition duration={1.5} elementTop={elementTop}>
          <Slider ref={sliderRef} {...settings}>
            {data.map((user) => (
              <SingleFeedBack key={user.id} {...user } />
            ))}
          </Slider>
        </ScrollTransition>
      </Container>
    </section>
  );
};

export default Testimonials;
