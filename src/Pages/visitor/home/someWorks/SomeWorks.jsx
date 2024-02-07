import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SingleSomeWork from "./SingleSomeWork";
import { useEffect } from "react";
import HeaderSomeWorks from "./HeaderSomeWorks";

import "./someWorks.css";

const SomeWorks = () => {
  const projects = [
    {
      num: 1,
      catg: "websites",
      name: "T Plants. Website",
      description:
        "E-commerce website to facilitate the purchase of plants online and deliver it, the user can choose the products can.",
      img: "./assets/somework_1.svg",
    },
    {
      num: 2,
      catg: "Apps",
      name: "Akilaah App",
      description:
        "E-commerce website to facilitate the purchase of plants online and deliver it, the user can choose the products can.",
      img: "./assets/somework_2.svg",
    },
    {
      num: 3,
      catg: "Apps",
      name: "Salahly App",
      description:
        "E-commerce website to facilitate the purchase of plants online and deliver it, the user can choose the products can.",
      img: "./assets/somework_4.svg",
    },
    {
      num: 4,
      catg: "websites",
      name: "Modern. Website",
      description:
        "E-commerce website to facilitate the purchase of plants online and deliver it, the user can choose the products can.",
      img: "./assets/somework_3.svg",
    },
  ];
  const [active, setActive] = useState(0);
  const [curretnActive, setCurrentActive] = useState(0);
  const [next, setNext] = useState(true);
  const [animation, setAnimation] = useState({});

  const classes = `some_works ${
    active === 0
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
          initial: { y: -200, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: 200, opacity: 0 },
        })
      : setAnimation({
          initial: { y: 200, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: -200, opacity: 0 },
        });
  }, [next]);

  const [currentTab, setCurrentTab] = useState(0);
  // useEffect(() => {
  //   setCurrentProjects(
  //     currentTab === 0 ? All :
  //     currentTab === 1 ? [] :
  //     currentTab === 2 ? Apps :
  //     currentTab === 3 ? Dashboard : Micro
  //   );
  // },[currentTab]);
  return (
    <section className={classes}>
      <div className="bullets_controls">
        <span
          className={`${active == 0 ? "active" : ""}`}
          onClick={() => setActive(0)}
        ></span>
        <span
          className={`${active == 1 ? "active" : ""}`}
          onClick={() => setActive(1)}
        ></span>
        <span
          className={`${active == 2 ? "active" : ""}`}
          onClick={() => setActive(2)}
        ></span>
        <span
          className={`${active == 3 ? "active" : ""}`}
          onClick={() => setActive(3)}
        ></span>
      </div>
      <HeaderSomeWorks setCurrentTab={setCurrentTab} />
      <motion.div className="projects_container">
        <AnimatePresence>
          {projects.map((project, i) => {
            return (
              active === i && (
                <SingleSomeWork
                  key={i}
                  aniamtion={animation}
                  project={project}
                  active={active}
                  index={i}
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
