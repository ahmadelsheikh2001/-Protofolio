import { useTranslation } from "react-i18next";
import MainBtn from "../../../../UI/Buttons/MainBtn/MainBtn";
import SecBtn from "../../../../UI/Buttons/SecBtn/SecBtn";
import { AddWorkIcon, HiIcon, SmileIcon, Arrow } from "../../../../UI/Icons";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAbout } from "../../../../redux/slices/about.slice";

const HeroText = ({ job, comp }) => {
  const disptach = useDispatch();
  const about = useSelector((state) => state.about.data)
  const [data, setData] = useState()
  const { t, i18n } = useTranslation();

  useEffect(() => {
    disptach(fetchAbout())
  }, [])
  useEffect(() => {
    if (about.length) {
      setData(about[0])
    }
  }, [about])
  return (

    <motion.div
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', duration: 1, delay: 1 }}
      className="col-12 col-md-7 col-lg-7"
    >
      <div className="hero_text">
        <h1>
          {/* {t('Hello')} */}
          {/* <HiIcon /><br /> */}
          {/* {t('Mustafa_Kamel')} */}
          {i18n.language == "en" ?data?.title : data?.title_ar }
          <SmileIcon />
        </h1>

        <p>
          {t('A')}
          {
            // <a target='_blank' href={job?.url}>
          }
          <a target='_blank' href={data?.job_link}>
            {i18n.language == "en" ? data?.job : data?.job_ar}
          </a>{t('based')}
          {
            // <a target='_blank' href={job?.url}>
            // <a href={comp?.url} target='_blank'>
          }
          <a target='_blank' href={data?.company_link}>
            {i18n.language == "en" ? data?.company : data?.company_ar}
          </a>
          {i18n.language == "en" ? data?.introduction : data?.introduction_ar }
        </p>
        <div
          className="hero_btns flex"
        >
          <MainBtn path='/new-project'><AddWorkIcon />{t("Let's_Work")}</MainBtn>
          <SecBtn path='/about-me'>{t("About_me")}<Arrow /></SecBtn>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroText;