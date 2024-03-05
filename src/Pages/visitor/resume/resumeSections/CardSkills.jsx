import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import ScrollTransition from "../../../../UI/ScrollTransition";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience } from "../../../../redux/slices/experience.slice";
import { useTranslation } from "react-i18next";

const CardSkills = ({ data, skills, title, icon, type }) => {
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    setElementTop(ref?.current?.offsetTop - 100);
  }, []);
  const { t, i18n } = useTranslation();

  const experiences = useSelector((state) => state.experience.experience)


  return (
    <div style={{ overflow: "hidden" }} ref={ref} className="skills_card">
      <ScrollTransition elementTop={elementTop}>
        <h4>
          {icon}
          {title}
        </h4>
        <ul>
          {type !== "certifications" &&
            data?.map((skill, i) => (
              <li style={{ position: "relative" }} key={i}>
                {i18n.language == "en" ? skill?.name : skill?.name_ar}
              </li>
            ))}
          {type === "certifications" &&
            data?.map((skill, i) => (
              <li
                className="skill-card-li"
                style={{ position: "relative" }}
                key={i}
              >
                {i18n.language == "en" ? skill?.name : skill?.name_ar}
                <span> at </span>
                <a href={skill?.link} target="_blank">
                  {i18n.language == "en" ? skill?.company : skill?.company_ar}
                </a>
              </li>
            ))}
        </ul>
      </ScrollTransition>
    </div>
  );
};

export default CardSkills;
