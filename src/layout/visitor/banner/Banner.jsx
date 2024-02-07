import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BannerIcon, BannerIcon1 } from "../../../UI/Icons";
import Aos from "aos";

import "aos/dist/aos.css";
import "./Banner.css";
import ButtonTransition from "../../../UI/Buttons/ButtonTransition";

const Banner = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init();
    return () => {};
  }, []);

  return (
    <section className="banner">
      <Container>
        <Row data-aos="fade-up">
          <div className="col-12 col-md-7">
            <div className="banner_text flex">
              <h5 className="h1">{t("Let’s_work_together")}</h5>
              <p>{t("Banner_p")}</p>
              <div className="banner_btns flex">
                {/*start edit_khaled */}
                <ButtonTransition>
                  <button
                    className={`hire_btn center`}
                    onClick={() => navigate("/resume")}
                  >
                    <BannerIcon1 />
                    <span>{t("button1")}</span>

                    <div className="wave"></div>
                  </button>
                </ButtonTransition>
                {/*end edit_khaled */}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 ms-auto">
            <div className="Banner_ellis">
              <BannerIcon />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
