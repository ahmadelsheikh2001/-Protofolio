import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BehanceIcon,
  DownloadIcon,
  DribbleIcon,
  Facebook,
  Instagram,
  LinkedIn,
  Medium,
  MessageIcon,
  Twitter,
  UserNameIcon,
} from "../../../../UI/Icons";
import CV from "./Tarteel.pdf";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchResume } from "../../../../redux/slices/resume.slice";
import { useNavigate } from 'react-router-dom';

const ResumeHeader = () => {
  const { t, i18n } = useTranslation();
  const [resume, setResume] = useState()
  const navigate = useNavigate();
  const disptach = useDispatch()
  let data = useSelector((state) => state.resume.data)

  useEffect(() => {
    disptach(fetchResume())
  }, [])
  useEffect(() => {
    if (data.length) {
      setResume(data[0])
    }
  }, [data])

  const animation = {
    y: 0,
    opacity: 1,
  };
  let apiUrl = process.env.REACT_APP_API_URL
  const redirectToResume = () => {
    const resumeUrl = apiUrl + resume.resume;
    navigate(resumeUrl);
  };

  console.log(resume);

  return (
    <section className="resume-header">
      <div className="flex">
        <div className="left">
          <motion.h4
            initial={{ y: 1000, opacity: 0 }}
            animate={animation}
            transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          >
            <UserNameIcon />
            {i18n.language == "en" ? resume?.name : resume.name_ar}
          </motion.h4>
          {/*start edit_khaled*/}
          <motion.a href={`mailto:${resume?.email}?`}>
            <motion.p
              initial={{ y: 1000, opacity: 0 }}
              animate={animation}
              transition={{
                type: "spring",
                duration: 1,
                bounce: 0.2,
                delay: 0.3,
              }}
            >
              <MessageIcon />
              {resume?.email}
            </motion.p>
          </motion.a>
          {/*end edit_khaled */}
          <ul className="social_contact">
            <motion.li
              initial={{ y: 1000, opacity: 0 }}
              animate={animation}
              transition={{ type: "spring", duration: 1, delay: 0.5 }}
            >
              <a href={resume?.behance} target="_blank">
                <div className="icon">
                  <BehanceIcon />
                </div>
                <p className="d-none d-md-block">{t("Behance")}</p>
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 1000, opacity: 0 }}
              animate={animation}
              transition={{ type: "spring", duration: 1, delay: 0.6 }}
            >
              <a href={resume?.drible} target="_blank">
                <div className="icon">
                  <DribbleIcon />
                </div>
                <p className="d-none d-md-block">{t("Dribbble")}</p>
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 1000, opacity: 0 }}
              animate={animation}
              transition={{ type: "spring", duration: 1, delay: 0.7 }}
            >
             <a href={resume?.linkedin} target="_blank">
                <div className="icon">
                  <LinkedIn />
                </div>
                <p className="d-none d-md-block">{t("Linked_In")}</p>
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 1000, opacity: 0 }}
              animate={animation}
              transition={{ type: "spring", duration: 1, delay: 0.8 }}
            >
              <a href={resume?.medem} target="_blank">
                <div className="icon">
                  <Medium />
                </div>
                <p className="d-none d-md-block">{t("Medium")}</p>
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 1000, opacity: 0 }}
              animate={animation}
              transition={{ type: "spring", duration: 1, delay: 0.9 }}
            >
               <a href={resume?.instagram} target="_blank">
                <div className="icon">
                  <Instagram />
                </div>
                <p className="d-none d-md-block">{t("Instagram")}</p>
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 1000, opacity: 0 }}
              animate={animation}
              transition={{ type: "spring", duration: 1, delay: 1 }}
            >
              <a href={resume?.twitter} target="_blank">
                <div className="icon">
                  <Twitter />
                </div>
                <p className="d-none d-md-block">{t("Twitter")}</p>
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 1000, opacity: 0 }}
              animate={animation}
              transition={{ type: "spring", duration: 1, delay: 1.1 }}
            >
              <a href={resume?.facebook} target="_blank">
                <div className="icon">
                  <Facebook />
                </div>
                <p className="d-none d-md-block">{t("Facebook")}</p>
              </a>
            </motion.li>
          </ul>
        </div>
        <div className="right">
          <button className="sec_btn" onClick={redirectToResume}>
            {/*start edit_khaled */}
            <motion.a
              initial={{ y: 1000, opacity: 0 }}
              animate={animation}
              transition={{ type: "spring", duration: 1, delay: 1.1 }}
              href={CV}
              download="Tarteel.pdf"
            >
              <DownloadIcon />
              {t("Download")}
            </motion.a>
            <div className="wave"></div>
          </button>
          {/*end edit_khaled */}
        </div>
      </div>
    </section>
  );
};

export default ResumeHeader;
