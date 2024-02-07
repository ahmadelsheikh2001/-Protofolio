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
import "./workmates.css";
import { useEffect } from "react";
import MainBtn from "../../../../UI/Buttons/MainBtn/MainBtn";
import { ArrowIcon } from "../../../../UI/Icons";

const Workmates = () => {
  const { t, i18n } = useTranslation();
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);

  const icons = {
    leftArrow: (
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_2389)">
          <path
            d="M23.383 23.383C27.7901 18.9759 33.7674 16.5 40 16.5C44.6479 16.5 49.1913 17.8783 53.0559 20.4605C56.9204 23.0427 59.9325 26.7129 61.7112 31.0069C63.4898 35.301 63.9552 40.0261 63.0484 44.5846C62.1417 49.1432 59.9035 53.3305 56.617 56.617C53.3305 59.9035 49.1432 62.1417 44.5846 63.0484C40.0261 63.9552 35.301 63.4898 31.0069 61.7112C26.7129 59.9325 23.0427 56.9204 20.4605 53.0559C17.8783 49.1913 16.5 44.6479 16.5 40C16.5 33.7674 18.9759 27.7901 23.383 23.383Z"
            stroke="#331C48"
          />
        </g>
        <path
          d="M35.0734 44.3778C35.0737 44.2707 35.0528 44.1646 35.0117 44.0657C34.9706 43.9668 34.9102 43.8771 34.8341 43.8018L31.3674 40.3351L34.8341 36.8684C34.9875 36.7156 35.0738 36.5081 35.0742 36.2915C35.0746 36.075 34.9889 35.8672 34.8361 35.7138C34.6832 35.5604 34.4757 35.474 34.2592 35.4736C34.0426 35.4733 33.8348 35.5589 33.6814 35.7118L29.6367 39.7564C29.5609 39.8321 29.5008 39.9219 29.4597 40.0208C29.4187 40.1197 29.3976 40.2257 29.3976 40.3328C29.3976 40.4398 29.4187 40.5459 29.4597 40.6448C29.5008 40.7437 29.5609 40.8335 29.6367 40.9091L33.6814 44.9538C33.835 45.1053 34.042 45.1902 34.2577 45.1902C34.4735 45.1902 34.6805 45.1053 34.8341 44.9538C34.9102 44.8785 34.9706 44.7887 35.0117 44.6898C35.0528 44.5909 35.0737 44.4849 35.0734 44.3778Z"
          fill="#331C48"
        />
        <path
          d="M50.6016 40.3319C50.6 40.1162 50.5136 39.9097 50.361 39.7571C50.2085 39.6046 50.002 39.5182 49.7862 39.5166H30.2142C29.9989 39.5189 29.7932 39.6056 29.6412 39.7581C29.4892 39.9106 29.4031 40.1166 29.4016 40.3319C29.4031 40.5477 29.4895 40.7542 29.6421 40.9067C29.7947 41.0593 30.0011 41.1457 30.2169 41.1473H49.7862C50.002 41.1457 50.2085 41.0593 50.361 40.9067C50.5136 40.7542 50.6 40.5477 50.6016 40.3319V40.3319Z"
          fill="#331C48"
        />
        <defs>
          <filter
            id="filter0_d_1_2389"
            x="0"
            y="0"
            width="88"
            height="88"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.078 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_2389"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_2389"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
    rightArrow: (
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_2622)">
          <path
            d="M26.9441 20.4605C30.8087 17.8783 35.3522 16.5 40 16.5C46.2326 16.5 52.2099 18.9759 56.617 23.383C61.0241 27.7901 63.5 33.7674 63.5 40C63.5 44.6479 62.1218 49.1913 59.5396 53.0559C56.9573 56.9205 53.2871 59.9325 48.9931 61.7112C44.699 63.4898 39.9739 63.9552 35.4154 63.0485C30.8568 62.1417 26.6695 59.9035 23.383 56.617C20.0965 53.3305 17.8583 49.1432 16.9516 44.5846C16.0448 40.0261 16.5102 35.301 18.2888 31.0069C20.0675 26.7129 23.0796 23.0427 26.9441 20.4605Z"
            stroke="#331C48"
          />
        </g>
        <path
          d="M44.9257 44.3778C44.9254 44.2707 44.9464 44.1646 44.9875 44.0657C45.0286 43.9668 45.0889 43.8771 45.1651 43.8018L48.6317 40.3351L45.1651 36.8684C45.0117 36.7156 44.9253 36.5081 44.9249 36.2915C44.9245 36.075 45.0102 35.8672 45.1631 35.7138C45.3159 35.5604 45.5234 35.474 45.74 35.4736C45.9565 35.4733 46.1643 35.5589 46.3177 35.7118L50.3624 39.7564C50.4382 39.8321 50.4984 39.9219 50.5394 40.0208C50.5804 40.1197 50.6016 40.2257 50.6016 40.3328C50.6016 40.4398 50.5804 40.5459 50.5394 40.6448C50.4984 40.7437 50.4382 40.8335 50.3624 40.9091L46.3177 44.9538C46.1642 45.1053 45.9571 45.1902 45.7414 45.1902C45.5257 45.1902 45.3186 45.1053 45.1651 44.9538C45.0889 44.8785 45.0286 44.7887 44.9875 44.6898C44.9464 44.5909 44.9254 44.4849 44.9257 44.3778Z"
          fill="#331C48"
        />
        <path
          d="M29.4016 40.3319C29.4031 40.1166 29.4892 39.9106 29.6412 39.7581C29.7931 39.6056 29.9989 39.5189 30.2142 39.5166H49.7862C50.002 39.5182 50.2085 39.6046 50.361 39.7571C50.5136 39.9097 50.6 40.1162 50.6016 40.3319C50.6002 40.5478 50.5138 40.7544 50.3613 40.9072C50.2087 41.0599 50.0021 41.1464 49.7862 41.1479H30.2142C29.9988 41.1457 29.7929 41.0589 29.6409 40.9062C29.4889 40.7536 29.4029 40.5473 29.4016 40.3319Z"
          fill="#331C48"
        />
        <defs>
          <filter
            id="filter0_d_1_2622"
            x="0"
            y="0"
            width="88"
            height="88"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.078 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_2622"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_2622"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  };
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
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    // autoplay: true,
    // pauseOnHover:true,
    pauseOnDotsHover: true, //edit_khaled
    autoplaySpeed: 5000,

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
    <section className="workmates_section">
      <Container ref={ref}>
        <div className="header-testimonial">
          <SectionTitle Title={t("My workmates Says")} />
          {/* {start edit_khaled} */}
          <div className="arrows">
            <button onClick={() => sliderRef.current.slickPrev()}>
              {/* <ArrowIcon /> */}
              {icons.leftArrow}
            </button>
            <p>
              <span>{currentIndex + 1}</span>/{DUMMY_USERS.length}
            </p>
            <button onClick={() => sliderRef.current.slickNext()}>
              {/* <ArrowIcon /> */}
              {icons.rightArrow}
            </button>
          </div>
          {/* {end edit_khaled} */}
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

export default Workmates;
