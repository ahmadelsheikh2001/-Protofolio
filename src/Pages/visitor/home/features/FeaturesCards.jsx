
import { useTranslation } from "react-i18next";
import { FeatureCardIcon1, FeatureCardIcon2, FeatureCardIcon3, FeatureCardIcon4 } from "../../../../UI/Icons";
import FeaturesCard from "./FeaturesCard";
import data from './data.json'
import data2 from './data2.json'
import data3 from './data3.json'
import data4 from './data4.json'


const FeaturesCards = ({ inView }) => {

  const { t, i18n } = useTranslation();

  const featuresCardData = [
    {
      id: '01',
      icon: <FeatureCardIcon1 />,
      animation: data,
      title: `${t("Business")}`,
    },
    {
      id: '02',
      icon: <FeatureCardIcon2 />,
      animation: data2,
      title: `${t("Research")}`,
    },
    {
      id: '03',
      icon: <FeatureCardIcon3 />,
      animation: data3,
      title: `${t("Interaction")}`,
    },
    {
      id: '04',
      icon: <FeatureCardIcon4 />,
      animation: data4,
      title: `${t("Testing")}`,
    },
  ];


  return (
    <div className=" col-12 col-md p-lg-0">    
    <div className="features_cards_container flex">
      {featuresCardData.map((card, i) => (
        <FeaturesCard index={i} inView={inView} key={card.id} {...card} />
      ))}
    </div>
  </div>
  );
};

export default FeaturesCards;