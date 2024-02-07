import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Arrow, CaseStudyLastIcon, DashboardIcon, MicroIcon, MobileAppIcon, WebSiteIcon } from "../../UI/Icons";
import Aos from "aos";

import 'aos/dist/aos.css';
import './singleProject.css';


const SingleProject = ({ dataType, imgSrc, id, type, title, prg }) => {

  const navigate = useNavigate();
  const {t, i18n} = useTranslation()

  const icon =
  dataType === 'website' ? <WebSiteIcon/> : 
  dataType === 'dashboard' ? <DashboardIcon/>  : 
  dataType === 'mobile-app' ? <MobileAppIcon /> : 
  dataType === 'case-study' ? <CaseStudyLastIcon /> : <MicroIcon/>

  const location = dataType === 'case-study' ? 'cases' : 'ui';

  useEffect(() => {
    Aos.init();
  }, []);

  return (
      <div 
        data-aos="fade-up"
        data-aos-duration='800'
        className='last_project_single position-relative parent'
      >
        <img src={imgSrc}/>
        <div className='overlay_text'></div>
        <div 
        onClick={() => navigate(`/${location}/${id}`)} 
        className="single_project-text side_border gray"
        >
          <span className="single_project-type flex">{icon}{type}</span>
          <h3 className="single_project-Title">{title}. {type}</h3>
          <p className="text_gray">{prg}</p>
          <Link to={`/${location}/${id}`}>{t('read_more')} <Arrow/></Link>
        </div>
      </div>
  );
};

export default SingleProject;