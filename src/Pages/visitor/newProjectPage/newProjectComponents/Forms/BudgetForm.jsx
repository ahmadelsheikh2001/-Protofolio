import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../../../UI/Buttons/Button";
import {
  ArrowUpIcon,
  BudgetTitleIcon,
  FormOneTitleIcon,
  FileIcons,
} from "../../../../../UI/Icons";
import Input from "../../../../../UI/Inputs/Input";
import SingleRadioInput from "./SingleRadioInput";
import { motion } from "framer-motion";

function BudgetForm(props) {
  const { t, i18n } = useTranslation();

  //  ========== transition ========

  const init = {
    opacity: 0,
    y: 500,
  };
  const animation = {
    opacity: 1,
    y: 0,
  };

  return (
    <>
      <div className="inputs_reactions">
        <motion.h2
          initial={init}
          animate={animation}
          transition={{ type: "spring", bounce: 0.3, duration: 1 }}
          className="flex"
        >
          <FormOneTitleIcon />
          {t("budget_title")}
          <motion.span
            initial={init}
            animate={animation}
            transition={{ type: "spring", bounce: 0.3, duration: 1.2 }}
            className="org"
          >
            {t("USD")}
          </motion.span>
        </motion.h2>
        <ul>
          {props.onBudget.map((react, i) => (
            <SingleRadioInput
              initial={init}
              animate={animation}
              index={i}
              special={react.id}
              default="1k - 2k"
              onGetReactions={props.getValueHandler}
              type="budget"
              key={react.id}
              {...react}
            />
          ))}
        </ul>
      </div>
      <div className="inputs_reactions">
        <motion.h2
          initial={init}
          animate={animation}
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.6 }}
          className="flex"
        >
          <BudgetTitleIcon />
          {t("budget_title_2")}
        </motion.h2>
        <ul>
          {props.onTimeline.map((react, i) => (
            <SingleRadioInput
              initial={init}
              animate={animation}
              index={i}
              late={true}
              special={react.id}
              default="2 - 3_month"
              onGetReactions={props.getTimeLineValueHandler}
              key={react.id}
              type="timeLine"
              {...react}
            />
          ))}
        </ul>
      </div>
      <div className="input_control inp_file">
        <motion.h2
          initial={init}
          animate={animation}
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 1.6 }}
          className="flex"
        >
          <FileIcons />
          {t("budget_title_3")} <span>{t("P_PDF")}</span>
        </motion.h2>
        <motion.div
          initial={init}
          animate={animation}
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 1.65 }}
          className="position-relative"
        >
            <Input
              type="file"
              onId="file"
              placeHolder={`${t("Upload_File")}`}
            />
        </motion.div>
      </div>
      <div className="form_btns flex">
        <button
          onClick={() => props.onCurrentForm(1)}
          className="btn_back"
          type="button"
        >
          {t("Back")}
          <ArrowUpIcon />
        </button>
        <Button
          onClick={() => props.onCurrentForm(3)}
          data={{ type: "button" }}
          validation={true}
        >
          {t("Continue")}
          <ArrowUpIcon />
        </Button>
      </div>
    </>
  );
}

export default BudgetForm;
