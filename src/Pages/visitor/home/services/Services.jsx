import { useRef } from "react";
import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import SectionTitle from "../../../../UI/Titles/SectionTitle/SectionTitle";
import { ServiceCardicon1, ServiceCardicon2 } from "../../../../UI/Icons";

import "./services.css";
import { useState } from "react";
import { useEffect } from "react";

const Services = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(false);

  useEffect(() => {
    setElementTop(ref.current.offsetTop);
  }, []);

  const servicesCardData = [
    {
      id: 1,
      title: `${t("serviceTitlecart1")}`,
      parag: `${t("servicePargcart1")}`,
      delay: "0",
      icon: <ServiceCardicon1 />,
    },
    {
      id: 2,
      title: `${t("serviceTitlecart2")}`,
      parag: `${t("servicePargcart2")}`,
      delay: "300",
      icon: <ServiceCardicon2 />,
    },
  ];

  return (
    <section className="services_section">
      <Container>
        <div style={{ width: "fit-content" }}>
          <SectionTitle Title={t("My_Services")} />
        </div>
        <div className="row gap-md-0 gap-sm-4 gap-4 pr" ref={ref}>
          {servicesCardData.map((card, i) => (
            <ServiceCard
              index={i}
              elementTop={elementTop}
              key={card.id}
              {...card}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
