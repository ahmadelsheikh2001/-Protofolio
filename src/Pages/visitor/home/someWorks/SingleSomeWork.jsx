import React from "react";
import { motion } from "framer-motion";
import { Arrow, WebSiteIcon } from "../../../../UI/Icons";
import { useTranslation } from "react-i18next";

const SingleSomeWork = ({ project, index, active, aniamtion }) => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      className={`project_content container`}
      initial={aniamtion.initial}
      animate={aniamtion.animate}
      exit={aniamtion.exit}
      // transition={{ type: "spring", stiffness: 120, bounce: .3 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project">
        <div className="project_details">
          <div>
            <div className="catg">
              <WebSiteIcon />
              <p className="catg_name">{project.catg}</p>
            </div>
            <h2 className="name">{project.name}</h2>
            <p className="desc">{project.description}</p>
            <div className="more">
              <a href="#">{t('read_more')}</a>
              <Arrow />
            </div>
          </div>
        </div>
        <div className="project_img">
          <img src={project.img} alt="projectImg" />
        </div>
      </div>

      <div className="num">
        <p>
          <span>0{project.num}</span> / 04
        </p>
      </div>
    </motion.div>
  );
};

export default SingleSomeWork;
