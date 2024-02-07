import React, { useContext } from "react";
import DropMenu from "../../../../UI/dropdownMenu/DropMenu";
import { EGYFlag, RadioIcon, SKAFlag, USAFlag } from "../../../../UI/Icons";
import { useTranslation } from "react-i18next";
import AppContext from "../../../../store/app-context";

const LangsDropdwon = ({ id, setShowDropDown }) => {
  const { t, i18n } = useTranslation();
  const ctx = useContext(AppContext);

  return (
    <DropMenu id={id} setState={setShowDropDown}>
      <li>
        <button onClick={() => ctx.enLang()}>
          <span className="flex" style={{ columnGap: "10px" }}>
            <USAFlag />
            <span>English</span>
          </span>
          {ctx.lang === "en" && <RadioIcon />}
        </button>
      </li>
      <li>
        <button onClick={() => ctx.arLang()}>
          <span className="flex" style={{ columnGap: "10px" }}>
            <SKAFlag />
            <span style={{ fontFamily: "'Almarai', sans-serif" }}>العربية</span>
          </span>
          {ctx.lang === "ar" && <RadioIcon />}
        </button>
      </li>
    </DropMenu>
  );
};

export default LangsDropdwon;
