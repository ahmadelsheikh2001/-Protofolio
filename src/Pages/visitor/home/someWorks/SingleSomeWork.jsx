import React from "react";
import { motion } from "framer-motion";
import { Arrow, WebSiteIcon } from "../../../../UI/Icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SingleSomeWork = ({ project, index, active, aniamtion , route }) => {
  const { t, i18n } = useTranslation();
  const apiUrl = process.env.REACT_APP_API_URL
  return (
    <motion.div
      className={`project_content container`}
      initial={aniamtion.initial}
      animate={aniamtion.animate}
      exit={aniamtion.exit}
      // transition={{ type: "spring", stiffness: 120, bounce: .3 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    // transition={{ duration: 5 }}
    >
      <div className="project">
        <div className="project_details">
          <div>
            <div className="catg">
              <WebSiteIcon />
              <p className="catg_name">{project?.designType}</p>
            </div>
            <h2 className="name">{project?.name}</h2>
            <p className="desc">{project?.description}</p>
            <div className="more">
              <Link to={`/${route}/${project._id}/${route}`}>{t('read_more')}</Link>
              <Arrow />
            </div>
          </div>
        </div>
        <div className="project_img">
          <img src={apiUrl + project.image} alt="projectImg" />
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
