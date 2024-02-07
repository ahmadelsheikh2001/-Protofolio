import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import MainBtn from "../../../../UI/Buttons/MainBtn/MainBtn";
import SectionTitle from "../../../../UI/Titles/SectionTitle/SectionTitle";
import SingleExpericane from "./SingleExperiance";
import ScrollTransition from "../../../../UI/ScrollTransition";
import { useState, useEffect, useRef } from "react";

const AboutExperiance = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    setElementTop(ref.current.offsetTop);
  }, []);

  const companies = [
    {
      id: 1,
      icon: "./assets/comp1.svg",
      url: "https://salla.sa/site/",
      compName: `${t("comp1Name")}`,
      text: `${t("comp1Text")}`,
      date: `${t("copm1Date")}`,
      delay: "0",
    },
    {
      id: 2,
      icon: "./assets/comp2.svg",
      url: "https://www.an.design/",
      compName: `${t("comp2Name")}`,
      text: `${t("comp2Text")}`,
      date: `${t("copm2Date")}`,
      delay: "300",
    },
    {
      id: 3,
      icon: "./assets/comp3.svg",
      url: "https://www.baianat.com/",
      compName: `${t("comp3Name")}`,
      text: `${t("comp3Text")}`,
      date: `${t("copm3Date")}`,
      delay: "600",
    },
    {
      id: 4,
      icon: "./assets/comp4.svg",
      url: "#",
      compName: `${t("comp4Name")}`,
      text: `${t("comp4Text")}`,
      date: `${t("copm4Date")}`,
      delay: "900",
    },
  ];

  const icon = (
    <svg
      width="21"
      height="25"
      viewBox="0 0 21 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.033 14.028C15.033 14.2932 14.9276 14.5476 14.7401 14.7351C14.5526 14.9227 14.2982 15.028 14.033 15.028H6.012C5.74678 15.028 5.49243 14.9227 5.30489 14.7351C5.11736 14.5476 5.012 14.2932 5.012 14.028C5.012 13.7628 5.11736 13.5085 5.30489 13.3209C5.49243 13.1334 5.74678 13.028 6.012 13.028H14.033C14.2982 13.028 14.5526 13.1334 14.7401 13.3209C14.9276 13.5085 15.033 13.7628 15.033 14.028ZM11.025 17.034H6.012C5.74678 17.034 5.49243 17.1394 5.30489 17.3269C5.11736 17.5145 5.012 17.7688 5.012 18.034C5.012 18.2992 5.11736 18.5536 5.30489 18.7411C5.49243 18.9287 5.74678 19.034 6.012 19.034H11.022C11.2872 19.034 11.5416 18.9287 11.7291 18.7411C11.9166 18.5536 12.022 18.2992 12.022 18.034C12.022 17.7688 11.9166 17.5145 11.7291 17.3269C11.5416 17.1394 11.2872 17.034 11.022 17.034H11.025ZM20.043 10.506V19.038C20.0414 20.3663 19.5131 21.6397 18.5739 22.5789C17.6346 23.5181 16.3612 24.0464 15.033 24.048H5.01C3.68175 24.0464 2.40836 23.5181 1.46915 22.5789C0.529936 21.6397 0.00158786 20.3663 0 19.038V5.01002C0.00158786 3.68178 0.529936 2.40839 1.46915 1.46917C2.40836 0.529959 3.68175 0.00161138 5.01 2.3519e-05H9.533C10.4545 -0.00236983 11.3673 0.177925 12.2186 0.530483C13.07 0.883041 13.843 1.40087 14.493 2.05402L17.984 5.54702C18.6375 6.19658 19.1557 6.96936 19.5084 7.8206C19.8612 8.67183 20.0415 9.5846 20.039 10.506H20.043ZM13.077 3.47102C12.7617 3.16544 12.4077 2.90253 12.024 2.68902V7.01402C12.024 7.27924 12.1294 7.53359 12.3169 7.72113C12.5044 7.90867 12.7588 8.01402 13.024 8.01402H17.349C17.1354 7.63044 16.8721 7.27672 16.566 6.96202L13.077 3.47102ZM18.033 10.506C18.033 10.341 18.001 10.182 17.986 10.02H13.026C12.2288 10.02 11.4642 9.70332 10.9004 9.13959C10.3367 8.57585 10.02 7.81126 10.02 7.01402V2.05102C9.858 2.03602 9.698 2.00002 9.533 2.00002H5.01C4.61491 2.00002 4.22369 2.07791 3.85873 2.22922C3.49376 2.38054 3.16221 2.60232 2.88302 2.88187C2.60384 3.16143 2.3825 3.49328 2.23167 3.85845C2.08084 4.22362 2.00347 4.61493 2.004 5.01002V19.039C2.004 19.4338 2.08175 19.8247 2.23282 20.1894C2.38388 20.5541 2.6053 20.8855 2.88444 21.1646C3.16357 21.4437 3.49495 21.6651 3.85965 21.8162C4.22436 21.9673 4.61525 22.045 5.01 22.045H15.033C15.8292 22.0434 16.5922 21.726 17.1547 21.1625C17.7171 20.5989 18.033 19.8352 18.033 19.039V10.506Z"
        fill="white"
      />
    </svg>
  );

  return (
    <section ref={ref} className="experiance_section">
      <Container>
        <ScrollTransition
          elementTop={elementTop}
          classes="flex header_experiance"
        >
          <SectionTitle Title={t("experiance")} />
          <ScrollTransition elementTop={elementTop} delay={0.1}>
            <MainBtn path="/resume">
              {icon} {t("Resume")}
            </MainBtn>
          </ScrollTransition>
        </ScrollTransition>
        <div className="row">
          {companies.map((comp, i) => (
            <SingleExpericane
              elementTop={elementTop}
              index={i}
              key={comp.id}
              {...comp}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutExperiance;
