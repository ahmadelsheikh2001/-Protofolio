import { useTranslation } from "react-i18next";
import SecBtn from "../../../../UI/Buttons/SecBtn/SecBtn";
import { Case_study_icon, Ui_design_icon } from "../../../../UI/Icons";
import { motion } from "framer-motion";

const FeaturesText = ({ inView }) => {

  const {t, i18n} = useTranslation();

  return (
    <div className="col-12 col-md" style={{ paddingLeft: '24px' }}>
      <div className="features_text flex" >
        <motion.h2
          initial={{opacity: 0, y: 400}}
          animate={ inView ? {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring', duration: 1, delay: 1
            }
          } : {}} 
          className="feature_title"
        >
          {t('FeatureTitle')}
        </motion.h2>
        <motion.p 
          initial={{opacity: 0, y: 400}}
          animate={ inView ? {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring', duration: 1, delay: 1.1
            }
          } : {}} 
          className="text_gray"
        >
          {t("FeaturPrag")}
        </motion.p>
        <motion.div 
          initial={{opacity: 0, y: 400}}
          animate={ inView ? {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring', duration: 1, delay: 1.2
            }
          } : {}} 
          className="feature_btns flex"
        >
          <SecBtn path='/cases'><Case_study_icon/>{t('Case_study')}</SecBtn>
          <SecBtn path='/ui'><Ui_design_icon/>{t('Ui_designs')}</SecBtn>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesText;