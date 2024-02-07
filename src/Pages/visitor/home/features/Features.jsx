import React, { useState, useEffect } from "react";
import { t } from "i18next";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../../../UI/Titles/SectionTitle/SectionTitle";
import FeaturesCards from "./FeaturesCards";
import FeaturesText from "./FeaturesText";

import "./features.css";
import { useRef } from "react";

const Features = () => {
  const { t, i18n } = useTranslation();
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const scrollHandler = () => {
    const Position = window.scrollY + window.innerHeight;

    if (Position > ref.current.offsetTop) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <section ref={ref} className="features_section">
      <Container className="p-lg-0">         {/* edit_khaled */}
        <div style={{ width: "fit-content" }}>
          <SectionTitle Title={t("What_Can_Do")} />
        </div>
        <Row className="">
          {/* edit_khaled */}
          <FeaturesCards inView={inView} />
          <FeaturesText inView={inView} />
        </Row>
      </Container>
    </section>
  );
};

export default Features;
