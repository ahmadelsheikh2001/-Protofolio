import { useContext, useEffect } from "react";
import AppContext from "../../../../store/app-context";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { HiIcon, SmileIcon } from "../../../../UI/Icons";
import SectionTitle from "../../../../UI/Titles/SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const AboutHero = () => {
  const ctx = useContext(AppContext);
  const { t, i18n } = useTranslation();

  const comp1 = {
    comp1Name:
      ctx.lang === "en" ? "Digital Product Designer" : "مصمم منتجات رقمية",

    // comp1Url: 'https://www.figma.com/exit?url=https%3A%2F%2Fwww.interaction-design.org%2Fliterature%2Ftopics%2Fproduct-design'
  };
  const comp2 = {
    comp2Name: ctx.lang === "en" ? "Salla" : "سلة ",

    // comp2Url: 'https://www.figma.com/exit?url=https%3A%2F%2Fsalla.sa%2Fsite%2F'
  };

  return (
    <section className="about_hero">
      <Container>
        <SectionTitle Title={t("About_me")} />
        <Row className="gap-3 gap-lg-0">
          {/* edit_khaled */}
          <div className="col-12 col-lg-6 order-2 order-md-1">
            <motion.div
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="about_text"
            >
              <motion.h3
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
              >
                {t("Hello_There")}
                <HiIcon />
                <SmileIcon />
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.3,
                  delay: 0.6,
                }}
              >
                {t("I'm_Mustafa_Kamel")}{" "}
                <a target="_blank" href={comp1.comp1Url}>
                  {comp1.comp1Name}
                </a>{" "}
                {t("based_in_Egypt")}{" "}
                <a target="_blank" href={comp2.comp2Url}>
                  {comp2.comp2Name}
                </a>
                {t("I’d_love_to")}
              </motion.p>
            </motion.div>
          </div>
          {/* edit_khaled */}

          <motion.div
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1.5,
              bounce: 0.5,
              delay: 0.6,
            }}
            className="col-12 col-lg-6 order-1 order-md-2"
          >
            <img src="./assets/aboutProf.png" />
          </motion.div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHero;
