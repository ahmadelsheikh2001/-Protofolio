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

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setElementTop(ref.current.offsetTop);
  }, []);

  const DUMMY_USERS = [
    {
      id: 1,
      name: "Mostafa Kamel",
      job: "Founder and CEO, Noor",
      comment:
        "Mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic. Working with Mostafa mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic.",
      src: "./assets/images.jpg",
    },
    {
      id: 2,
      name: "Ahmed Kamel",
      job: "Founder and CEO, Noor",
      comment:
        "Mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic. Working with Mostafa mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic.",
      src: "./assets/images.jpg",
    },
    {
      id: 3,
      name: "Eslam Kamel",
      job: "Founder and CEO, Noor",
      comment:
        "Mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic. Working with Mostafa mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic.",
      src: "./assets/images.jpg",
    },
    {
      id: 4,
      name: "Noor Kamel",
      job: "Founder and CEO, Noor",
      comment:
        "Mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic. Working with Mostafa mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic.",
      src: "./assets/images.jpg",
    },
    {
      id: 5,
      name: "Mohamed Kamel",
      job: "Founder and CEO, Noor",
      comment:
        "Mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic. Working with Mostafa mustafa is the best at what he does. He is the incredibly rare combination of artistic talent, technical precision, thoughtfulness, and tireless work ethic.",
      src: "./assets/images.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    autoplay: true,
    // pauseOnHover:true,
    pauseOnDotsHover:true,  //edit_khaled
    autoplaySpeed: 5000,
    customPaging: (i) => {
      return (
        <div className="box">
          <svg>
            <circle cx="20" cy="20" r="20"></circle>
          </svg>
          <img src={DUMMY_USERS[i].src} alt="Null" />
        </div>
      );
    },
    prevArrow: (
      <PrevButton img={DUMMY_USERS[currentIndex].src} slider={sliderRef} />
    ),
    nextArrow: (
      <NextButton img={DUMMY_USERS[currentIndex].src} slider={sliderRef} />
    ),
    beforeChange: (current, next) => setCurrentIndex(next),
    className: "testimonial_carousal",
    // rtl: true
  };

  const users = [];

  for (let i = 0; i < DUMMY_USERS.length; i++) {
    if (i === 0) {
      users.push({
        userId: i,
        userName: DUMMY_USERS[i].name,
        userJob: DUMMY_USERS[i].job,
        userComment: DUMMY_USERS[i].comment,
        userImage: DUMMY_USERS[i].src,
        prevImageUser: DUMMY_USERS[DUMMY_USERS.length - 1].src,
        nextImageUser: DUMMY_USERS[i + 1].src,
      });
    } else if (i === DUMMY_USERS.length - 1) {
      users.push({
        userId: i,
        userName: DUMMY_USERS[i].name,
        userJob: DUMMY_USERS[i].job,
        userComment: DUMMY_USERS[i].comment,
        userImage: DUMMY_USERS[i].src,
        prevImageUser: DUMMY_USERS[i - 1].src,
        nextImageUser: DUMMY_USERS[0].src,
      });
    } else {
      users.push({
        userId: i,
        userName: DUMMY_USERS[i].name,
        userJob: DUMMY_USERS[i].job,
        userComment: DUMMY_USERS[i].comment,
        userImage: DUMMY_USERS[i].src,
        prevImageUser: DUMMY_USERS[i - 1].src,
        nextImageUser: DUMMY_USERS[i + 1].src,
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
            {DUMMY_USERS.map((user) => (
              <SingleFeedBack key={user.id} {...user} />
            ))}
          </Slider>
        </ScrollTransition>
      </Container>
    </section>
  );
};

export default Testimonials;
