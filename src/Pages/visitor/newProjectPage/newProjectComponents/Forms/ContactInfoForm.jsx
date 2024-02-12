import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../../../UI/Buttons/Button";
import {
  ArrowUpIcon,
  ExitInvalidInput,
  HandIcon,
  HiIcon,
  InvalidInput,
  MessageIcon,
  SmileIcon,
  UserNameIcon,
  ValidInput,
} from "../../../../../UI/Icons";
import Input from "../../../../../UI/Inputs/Input";
import { motion } from "framer-motion";
import MIC from "../../../../../UI/MIC";

import "./conect.css";
const ContactInfoForm = (props) => {
  const [inputSelected, setInputSelected] = useState(false);
  const { t, i18n } = useTranslation();

  let validBtn = false;
  if (props.onEnteredNameIsValid && props.onEnteredEmailIsValid) {
    validBtn = true;
  }

  const InputNameClasses = props.onInputNameError ? "invalid input" : "input";
  const InputEmailClasses = props.onInputJobHasErro ? "invalid input" : "input";

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
      <div className="contact_info_form">
        <motion.h3
          initial={init}
          animate={animation}
          transition={{ type: "spring", bounce: 0.3, duration: 1 }}
        >
          {t("Hello_my_friend")}
          <HiIcon />
          <SmileIcon />
        </motion.h3>
        <motion.p
          className="form_1_p"
          initial={init}
          animate={animation}
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.1 }}
        >
          {t("for_1_p")}
          <a href="#">
            <MessageIcon />
            {t("my_email")}
          </a>
        </motion.p>
        <motion.div
          initial={init}
          animate={animation}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 1,
            delay: 0.1777777,
          }}
        >
          <HandIcon />
        </motion.div>
      </div>
      <div className="input_control">
        <motion.h2
          initial={init}
          animate={animation}
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.25 }}
          className="flex"
        >
          <UserNameIcon />
          {t("input_title_one")}
        </motion.h2>
        <motion.div
          initial={init}
          animate={animation}
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.35 }}
          className="position-relative"
        >
          <Input
            input={{ value: props.userName }}
            type="text"
            onId="use-name"
            placeHolder={`${t("Your-name")}`}
            OnChange={props.onChangeNameHandler}
            OnBlur={props.onBlureNameHandler}
            class={`${InputNameClasses} ${
              props.onEnteredNameValid ? "valid_input" : ""
            } ${inputSelected ? "selected" : ""}`}
            autoComplete="off"
          />
          <div className="input_icons">
            {props.onInputNameError && <InvalidInput />}
            {props.onEnteredNameValid && <ValidInput />}
            {props.showMic === "show" && (
              <MIC
                onREC={props.onStartRecInputName}
                recording={props.InputNameRecording}
              />
            )}
          </div>
          {props.onInputNameError && (
            <p className="error_input_prg flex">
              <ExitInvalidInput />
              This field is not valid
            </p>
          )}
        </motion.div>
      </div>
      <div className="input_control">
        <motion.h2
          initial={init}
          animate={animation}
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.45 }}
          className="flex"
        >
          <MessageIcon />
          {t("input_title_2")}
        </motion.h2>
        <motion.div
          initial={init}
          animate={animation}
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.55 }}
          className="position-relative"
        >
          <Input
            input={{ value: props.email }}
            type="email"
            onId="email"
            placeHolder={`${t("Your-email")}`}
            OnChange={props.onChangeEmailHandler}
            OnBlur={props.onBlureEmailHandler}
            class={`${InputEmailClasses} ${
              props.onEnteredEmailValid ? "valid_input" : ""
            }`}
            autoComplete="off"
          />
          <div className="input_icons">
            {props.onInputEmailError && <InvalidInput />}
            {props.onEnteredEmailValid && <ValidInput />}
            {props.showMic === "show" && (
              <MIC
                onREC={props.onStartRecInputEmail}
                recording={props.InputEmailRecording}
              />
            )}
          </div>
          {props.onInputEmailError && (
            <p className="error_input_prg flex">
              <ExitInvalidInput />
              This field is not valid
            </p>
          )}
        </motion.div>
      </div>
      <motion.div
        initial={init}
        animate={animation}
        transition={{
          type: "spring",
          bounce: 3,
          duration: 1,
          bounce: 0.3,
          delay: 0.65,
        }}
        className="form_btns flex"
      >
        <button
          onClick={() => window.history.back()}
          className="btn_back"
          type="button"
        >
          {t("Back")}
          <ArrowUpIcon />
        </button>
        <Button
          onClick={() => {
            props.onCurrentForm(1);
          }}
          data={{ type: "button" }}
          validation={validBtn}
        >
          {t("Continue")}
          <ArrowUpIcon />
        </Button>
      </motion.div>
    </>
  );
};

export default ContactInfoForm;
