import React, { useEffect } from "react";
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

const ResumeHeader = () => {
  const { t, i18n } = useTranslation();

  const animation = {
    y: 0,
    opacity: 1,
  };

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
            {t("mostafa")}
          </motion.h4>
          {/*start edit_khaled*/}
          <motion.a href="mailto:hi@mustafakamel.com?">
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
              hi@mustafakamel.com
            </motion.p>
          </motion.a>
          {/*end edit_khaled */}
          <ul className="social_contact">
            <motion.li
              initial={{ y: 1000, opacity: 0 }}
              animate={animation}
              transition={{ type: "spring", duration: 1, delay: 0.5 }}
            >
              <a href="#">
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
              <a href="#">
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
              <a href="#">
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
              <a href="#">
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
              <a href="#">
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
              <a href="#">
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
              <a href="#">
                <div className="icon">
                  <Facebook />
                </div>
                <p className="d-none d-md-block">{t("Facebook")}</p>
              </a>
            </motion.li>
          </ul>
        </div>
        <div className="right">
          <button className="sec_btn">
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
