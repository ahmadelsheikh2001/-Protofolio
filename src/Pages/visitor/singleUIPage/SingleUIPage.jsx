import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { useTranslation } from "react-i18next";
import {
  BehanceIcon,
  CalendarIcon,
  CopyIcon,
  DribbleIcon,
  HomeIcon,
  LikeIcon,
  ShareIcon,
} from "../../../UI/Icons";
import ButtonTransition from "../../../UI/Buttons/ButtonTransition";
import SingleLastProject from "../home/lastProjects/SingleLastProject";
import Slider from "react-slick";
import SectionTitle from "../../../UI/Titles/SectionTitle/SectionTitle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./singleUIPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../../../redux/slices/content.slice";
import { useParams } from "react-router-dom";
import Api, { handleApiError } from "../../../config/api";

const SingleUIPage = () => {
  const { t, i18n } = useTranslation();
  // const [path, setPath] = useState("/assets/kootby.pdf");
  const [path, setPath] = useState("/assets/0pdf.pdf");

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    setElementTop(ref?.current?.offsetTop);
    localStorage.setItem("likes", JSON.stringify([]))
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    className: "main_slider",
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const DUMMY_PROJECTS = [
    {
      id: 1,
      dataType: "case-study",
      type: "Case Study",
      title: "E-courses",
      imgSrc:
        "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",
    },
    {
      id: 2,
      dataType: "mobile-app",
      type: "Mobile App",
      title: "Modern Website",
      imgSrc:
        "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",
    },
    {
      id: 3,
      dataType: "case-study",
      type: "Case Study",
      title: "Zaynah App",
      imgSrc:
        "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",
    },
    {
      id: 4,
      dataType: "dashboard",
      type: "Dashboard",
      title: "Kotoby App",
      imgSrc:
        "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",
    },
    {
      id: 5,
      dataType: "website",
      type: "Website",
      title: "E-courses",
      imgSrc:
        "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",
    },
    {
      id: 6,
      dataType: "website",
      type: "Website",
      title: "E-courses",
      imgSrc:
        "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",
    },
  ];

  const disptach = useDispatch();
  const data = useSelector((state) => state.content.data);
  const { id, type } = useParams()
  const project = data.find((ele) => ele._id == id)
  console.log(project);

  useEffect(() => {
    disptach(fetchContent());
  }, []);
  const apiUrl = process.env.REACT_APP_API_URL
  const theme = localStorage.getItem("theme")

  const renderFile = () => {
    if (path.endsWith(".pdf")) {
      return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          <div className="pdf_container">
            {project?.wfile && <Viewer fileUrl={theme == "dark" ? apiUrl + project?.bfile : apiUrl + project?.wfile} />}
          </div>
        </Worker>
      );
    } else {
      // For non-PDF files, display as an image
      return <img src={path} alt="Uploaded File" />;
    }
  };
  const [liked, setLiked] = useState(false)

  function toggleLikes() {
    let likes = JSON.parse(localStorage.getItem("likes")) || []
    let liked = likes.includes(project._id)
    let no = liked ? project.likes - 1 : project.likes + 1

    Api.patch("/content/" + project._id, { likes: no })
      .then(() => {
        if (liked) {
          likes = likes.filter((ele) => ele != project._id)
          localStorage.setItem("likes", JSON.stringify(likes))
          setLiked(false)
        } else {
          setLiked(true)
          likes.push(project._id)
          localStorage.setItem("likes", JSON.stringify(likes))
        }
      })
      .catch((error) => handleApiError(error))
  }
  const likes = JSON.parse(localStorage.getItem("likes")) || []
  useEffect(() => {
    if (likes) {
      if (project && likes.includes(project._id)) {
        setLiked(true)
      }
    } else {
      localStorage.setItem("likes", JSON.stringify([]))
    }
  }, [likes])

  return (
    <section className="single-ui-page">
      {/* <input type="file" onChange={changeValueHandler} /> */}
      <div className="single_header">
        <div className="flex buttons_container">
          {/* <ul className="single_project_btns">
            <li>
              <ButtonTransition>
                <button
                  onClick={likeHandler}
                  className={`${liked ? "liked" : ""}`}
                >
                  <LikeIcon />
                  {t("liked")}
                  <span>{likes}</span>
                </button>
              </ButtonTransition>
            </li>
            <li>
              <ButtonTransition>
                <button>
                  <CopyIcon />
                  {t("Copy")}
                </button>
              </ButtonTransition>
            </li>
            <li>
              <ButtonTransition>
                <button>
                  <ShareIcon />
                  {t("Share")}
                </button>
              </ButtonTransition>
            </li>
            <li>
              <ButtonTransition>
                <button>
                  <BehanceIcon />
                  {t("Behance")}
                </button>
              </ButtonTransition>
            </li>
            <li>
              <ButtonTransition>
                <button>
                  <DribbleIcon />
                  {t("Dribbble")}
                </button>
              </ButtonTransition>
            </li>
          </ul> */}
          <p className="project_path">
            <HomeIcon /> Home &gt;&gt; {type == "ui" ? "UI Designes" : "Case study"} &gt;&gt; <span>{project?.name}</span>
          </p>
          <div className="puplished">
            <CalendarIcon />
            {t("Published")} at : {project?.date}
          </div>
        </div>
      </div>
      <div className="position-relative">
        {/* {renderFile()} */}
        <ul className="single_project_btns">
          <li>
            <ButtonTransition>
              <button
                onClick={toggleLikes}
                className={`${liked ? "liked" : ""}`}
              >
                <LikeIcon />
              </button>
            </ButtonTransition>
          </li>
          <li>
            <ButtonTransition>
              <button>
                <CopyIcon />
              </button>
            </ButtonTransition>
          </li>
          <li>
            <ButtonTransition>
              <button>
                <ShareIcon />
              </button>
            </ButtonTransition>
          </li>
          <li>
            <ButtonTransition>
              <button>
                <BehanceIcon />
              </button>
            </ButtonTransition>
          </li>
          <li>
            <ButtonTransition>
              <button>
                <DribbleIcon />
              </button>
            </ButtonTransition>
          </li>
        </ul>
      </div>
      <Container>
        <section ref={ref} className="certification_section">
          <SectionTitle Title={t("Similar_Projects")} />
          <Slider ref={sliderRef} {...settings}>
            {data.map((project, i) => (
              <SingleLastProject
                index={i}
                key={i + 1}
                elementTop={elementTop}
                {...project}
              />
            ))}
          </Slider>
        </section>
      </Container>
    </section>
  );
};

export default SingleUIPage;
