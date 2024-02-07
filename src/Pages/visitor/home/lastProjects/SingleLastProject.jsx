import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CaseStudyLastIcon, DashboardIcon, MicroIcon, MobileAppIcon, WebSiteIcon } from "../../../../UI/Icons";
import ScrollTransition from "../../../../UI/ScrollTransition";


const SingleLastProject = ({ elementTop, dataType, imgSrc, id, type, title, prg, index }) => {

  const navigate = useNavigate();
  const {t, i18n} = useTranslation()

  const icon =
  dataType === 'website' ? <WebSiteIcon/> : 
  dataType === 'dashboard' ? <DashboardIcon/>  : 
  dataType === 'mobile-app' ? <MobileAppIcon /> : 
  dataType === 'case-study' ? <CaseStudyLastIcon /> : <MicroIcon/>

  const location = dataType === 'case-study' ? 'cases' : 'ui';

  return (
      <ScrollTransition
        delay={`.${index}`} 
        duration={1}
        classes='last_project_single position-relative parent'
        elementTop={elementTop}
      >
        <img src={imgSrc}/>
        <div className='overlay_text'></div>
        <div 
        onClick={() => navigate(`/${location}/${id}`)} 
        className="single_project-text side_border"
        >
          <span className="single_project-type flex">{icon}{type}</span>
          <h3 className="single_project-Title">{title}. {type}</h3>
          {/* <p className="text_gray">{prg}</p> */}
        </div>
    </ScrollTransition>
  );
}

export default SingleLastProject