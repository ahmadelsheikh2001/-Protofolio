import { Link } from "react-router-dom";
import { RightArrow } from "../../../../UI/Icons";
import ScrollTransition from "../../../../UI/ScrollTransition";

const ServiceCard = (props) => {
  return (
    <ScrollTransition
      elementTop={props.elementTop}
      duration={1.5}
      delay={`${props.index / 2}`}
      classes="col-12 col-md-6"
    >
      <div className="service_card side_border">
        {props.icon}
        <h3 className="service_card_title">{props.title}</h3>
        <p className="service_card_paragraph text_gray">{props.parag}</p>
        <div className="fii-form">
          <Link to="/new-project">
            <a className="english-link">
              Fill the Form <RightArrow />
            </a>
          </Link>
          <Link to="/new-project">
            <a className="arabic-link">
              املأ النموذج <RightArrow />
            </a>
          </Link>
        </div>
      </div>
    </ScrollTransition>
  );
};

export default ServiceCard;
