import React, { useEffect, useState } from "react";
import TabsContainer from "../../../../UI/Buttons/Tabs/TabsContainer";
import SectionTitle from "../../../../UI/Titles/SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import { AdminCardOne, AdminCardThree, HeartIcon, WebSiteIcon } from "../../../../UI/Icons";

const HeaderSomeWorks = ({setCurrentTab ,currentTab }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className=" some_work_header container">
      <SectionTitle Title={t("some_works")} />
      <TabsContainer>
        <button
          className={`${currentTab === 0 ? "active" : ""}`}
          onClick={() => setCurrentTab(0)}
        >
          <WebSiteIcon />
          {t("Ui_designs")}
        </button>
        <button
          className={`${currentTab === 1? "active" : ""}`}
          onClick={() => setCurrentTab(1)}
        >
          <HeartIcon />
          {t("Case_Studies")}
        </button>
      </TabsContainer>
    </div>
  );
};

export default HeaderSomeWorks;
