import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Arrow, CaseStudyLastIcon, DashboardIcon, MicroIcon, MobileAppIcon, WebSiteIcon } from "../../UI/Icons";
import Aos from "aos";

import 'aos/dist/aos.css';
import './singleProject.css';


const SingleProject = ({ designType, image, _id, type, name, description }) => {
console.log(_id);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation()

  const icon =
    designType === 'web' ? <WebSiteIcon /> :
      designType === 'desktop' ? <DashboardIcon /> :
        designType === 'mobile' ? <MobileAppIcon /> :
          designType === 'case-study' ? <CaseStudyLastIcon /> : <MicroIcon />

  const location = type === 'case' ? 'cases' : 'ui';

  useEffect(() => {
    Aos.init();
  }, []);

  const apiUrl = process.env.REACT_APP_API_URL

  return (
    <div
      data-aos="fade-up"
      data-aos-duration='800'
      className='last_project_single position-relative parent'
    >
      <img src={apiUrl + image} />
      <div className='overlay_text'></div>
      <div
        onClick={() => navigate(`/${location}/${_id}`)}
        className="single_project-text side_border gray"
      >
        <span className="single_project-type flex">{icon}{type}</span>
        <h3 className="single_project-Title">{name}. {type}</h3>
        <p className="text_gray">{description}</p>
        <Link to={`/${location}/${_id}`}>{t('read_more')} <Arrow /></Link>
      </div>
    </div>
  );
};

export default SingleProject;