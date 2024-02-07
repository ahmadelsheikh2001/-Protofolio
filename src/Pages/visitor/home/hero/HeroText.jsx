import { useTranslation } from "react-i18next";
import MainBtn from "../../../../UI/Buttons/MainBtn/MainBtn";
import SecBtn from "../../../../UI/Buttons/SecBtn/SecBtn";
import { AddWorkIcon, HiIcon, SmileIcon, Arrow } from "../../../../UI/Icons";
import { motion } from "framer-motion";

const HeroText = ({ job, comp }) => {

  const {t, i18n} = useTranslation();

  return (
    <motion.div
      initial={{opacity: 0, y: 400}}
      animate={{opacity: 1, y: 0}}
      transition={{type: 'spring', duration: 1, delay: 1}} 
      className="col-12 col-md-7 col-lg-7"
     >
      <div className="hero_text">
        <h1>
          {t('Hello')}
          <HiIcon/><br/>
          {t('Mustafa_Kamel')}
          <SmileIcon/>
        </h1>

        <p>
            {t('A')} 
            {
            // <a target='_blank' href={job?.url}>
          }
          <a target='_blank' >

              {job?.name}
            </a>{t('based')} 
            {
              // <a target='_blank' href={job?.url}>
              // <a href={comp?.url} target='_blank'>
            }
            <a target='_blank'>

              {comp?.name}
            </a>{t('I’d_love')}
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