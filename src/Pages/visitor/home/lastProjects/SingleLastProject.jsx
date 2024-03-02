import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CaseStudyLastIcon, DashboardIcon, MicroIcon, MobileAppIcon, WebSiteIcon } from "../../../../UI/Icons";
import ScrollTransition from "../../../../UI/ScrollTransition";


const SingleLastProject = ({ elementTop, designType, image, _id, type, name, description, index }) => {

  const navigate = useNavigate();
  const {t, i18n} = useTranslation()

  const icon =
  designType === 'web' ? <WebSiteIcon/> : 
  designType === 'desktop' ? <DashboardIcon/>  : 
  designType === 'mobile' ? <MobileAppIcon /> : 
  designType === 'case-study' ? <CaseStudyLastIcon /> : <MicroIcon/>

  const location = designType === 'case-study' ? 'cases' : 'ui';
  const apiUrl = process.env.REACT_APP_API_URL

  return (
      <ScrollTransition
        delay={`.${index}`} 
        duration={1}
        classes='last_project_single position-relative parent'
        elementTop={elementTop}
      >
        <img src={apiUrl+image}/>
        <div className='overlay_text'></div>
        <div 
        onClick={() => navigate(`/${location}/${_id}`)} 
        className="single_project-text side_border"
        >
          <span className="single_project-type flex">{icon}{type}</span>
          <h3 className="single_project-Title">{name}. {type}</h3>
          {/* <p className="text_gray">{description}</p> */}
        </div>
    </ScrollTransition>
  );
}

export default SingleLastProject