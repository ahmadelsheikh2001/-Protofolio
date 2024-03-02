import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import ScrollTransition from "../../../../UI/ScrollTransition";

const CardSkills = ({ skills, title, icon, type }) => {
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    setElementTop(ref?.current?.offsetTop - 100);
  }, []);

  return (
    <div style={{ overflow: "hidden" }} ref={ref} className="skills_card">
      <ScrollTransition elementTop={elementTop}>
        <h4>
          {icon}
          {title}
        </h4>
        <ul>
          {type !== "certifications" &&
            skills.map((skill, i) => (
              <li style={{ position: "relative" }} key={i}>
                {skill}
              </li>
            ))}
          {type === "certifications" &&
            skills.map((skill, i) => (
              <li
                className="skill-card-li"
                style={{ position: "relative" }}
                key={i}
              >
                {skill.cert}
                <span> at </span>
                <a href="#" target="_blank">
                  {skill.place}
                </a>
              </li>
            ))}
        </ul>
      </ScrollTransition>
    </div>
  );
};

export default CardSkills;
