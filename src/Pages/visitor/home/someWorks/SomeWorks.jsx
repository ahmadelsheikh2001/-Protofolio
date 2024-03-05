import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SingleSomeWork from "./SingleSomeWork";
import { useEffect } from "react";
import HeaderSomeWorks from "./HeaderSomeWorks";

import { useTranslation } from "react-i18next";
import "./someWorks.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../../../../redux/slices/content.slice";

const SomeWorks = () => {

  const disptach = useDispatch()
  const cases = useSelector((state) => state.content.case)
  const design = useSelector((state) => state.content.design)
  useEffect(() => {
    disptach(fetchContent())
  }, [])


  const { t, i18n } = useTranslation();
  const projects = [
    {
      num: 1,
      catg: t("Websites"),
      name: t("T Plants. Website"),
      description: t(
        "E-commerce website to facilitate the purchase of plants online and deliver it, the user can choose the products can."
      ),
      img: "./assets/somework_1.svg",
    },
    {
      num: 2,
      catg: t("Apps"),
      name: t("Akilaah App"),
      description: t(
        "E-commerce website to facilitate the purchase of plants online and deliver it, the user can choose the products can."
      ),
      img: "./assets/somework_2.svg",
    },
    {
      num: 3,
      catg: t("Apps"),
      name: t("Salahly App"),
      description: t(
        "E-commerce website to facilitate the purchase of plants online and deliver it, the user can choose the products can."
      ),
      img: "./assets/somework_4.svg",
    },
    {
      num: 4,
      catg: t("websites"),
      name: t("Modern. Website"),
      description: t(
        "E-commerce website to facilitate the purchase of plants online and deliver it, the user can choose the products can."
      ),
      img: "./assets/somework_3.svg",
    },
  ];
  const [active, setActive] = useState(0);
  const [curretnActive, setCurrentActive] = useState(0);
  const [next, setNext] = useState(true);
  const [animation, setAnimation] = useState({});

  const classes = `some_works ${active === 0
      ? "one"
      : active === 1
        ? "two"
        : active === 3
          ? "three"
          : "four"
    }`;

  useEffect(() => {
    setCurrentActive(active);
    curretnActive >= active ? setNext(false) : setNext(true);
  }, [active, curretnActive]);

  useEffect(() => {
    next
      ? setAnimation({
        initial: { y: 200, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -200, opacity: 0 },
      })
      : setAnimation({
        initial: { y: 200, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -200, opacity: 0 },
      });
  }, [next]);

  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState([])
  useEffect(() => {
     setData(currentTab === 0 ? cases : design)
     setActive(0)
   }, [currentTab, cases , design]);

  return (
    <section className={classes}>
      <div className="bullets_controls">
        {data.map((ele, ind) =>(
          <span
            className={`${active == ind ? "active" : ""}`}
            onClick={() =>{ setActive(ind);}}
          >
          </span>
        ))}
      </div>
      <HeaderSomeWorks setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <motion.div className="projects_container">
        <AnimatePresence>
          {data.map((project, i) => {
            return (
              active === i && (
                <SingleSomeWork
                  key={i}
                  aniamtion={animation}
                  project={project}
                  active={active}
                  index={i}
                  route={currentTab? "cases" :"ui"}
                />
              )
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default SomeWorks;
