import React from "react";
import { useTranslation } from "react-i18next";
import SecBtn from "../../../UI/Buttons/SecBtn/SecBtn";
import { Case_study_icon, HeartIcon, NewProject } from "../../../UI/Icons";
import { Container } from "react-bootstrap";

import "./errorPage.css";

const ErrorPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <section className="error-section">
        <div className="bg">
          <img src="./assets/error.svg" alt="" />
          <span>
            Lost your connection, <br />
            Please Check
            <img src="./assets/sleep.svg" className="emoji" />
          </span>
        </div>
        <p>{t("Relax")}</p>
        <ul>
          <li>
            <SecBtn path="./ui">
              <HeartIcon />
              {t("Ui_Desings")}
            </SecBtn>
          </li>
          <li>
            <SecBtn path="./cases">
              <Case_study_icon />
              {t("Case_Studies")}
            </SecBtn>
          </li>
          <li>
            <SecBtn path="./resume">
              <Case_study_icon />
              {t("My_Resume")}
            </SecBtn>
          </li>
          <li>
            <SecBtn path="./new-project">
              <NewProject />
              {t("button1")}
            </SecBtn>
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default ErrorPage;
