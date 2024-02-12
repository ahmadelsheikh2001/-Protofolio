import { useTranslation } from "react-i18next";
import {
  UserNameIcon,
  UserJobIcon,
  UserCommentIcon,
  InvalidInput,
  ExitInvalidInput,
  ValidInput,
  KeyboardIcon,
} from "../../../UI/Icons";
import { motion } from "framer-motion";
import MIC from "../../../UI/MIC";
import ScrollToTopButton from "../../../layout/visitor/scrollTopBtn/ScrollToTopButton";

import React, { useRef, useState } from "react";
import FeedInput from "../../../UI/Inputs/FeedInput";

const FeedbackInputs = (props) => {
  const { t, i18n } = useTranslation();

  const [showKeyboard1, setShowKeyboard1] = useState(false);
  const [showKeyboard2, setShowKeyboard2] = useState(false);
  const [showKeyboard3, setShowKeyboard3] = useState(false);

  // const inputRef = useRef();
  const inputRef = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  const showKeyboard = (setter) => () => {
    setter((prev) => !prev);
  };
  const handleButtonClick = (setter, index) => (event) => {
    event.preventDefault();
    setter((prev) => !prev);
    if (inputRef.current[index].current) {
      inputRef.current[index].current.focus();
    }
    if (index !== 0) setShowKeyboard1(false);
    if (index !== 1) setShowKeyboard2(false);
    if (index !== 2) setShowKeyboard3(false);

    event.target.closest(".main_content").classList.remove("add_padding");
    if (index == 2) {
      // console.log(event.target);
      event.target.closest(".main_content").classList.toggle("add_padding");
    }
    console.log(inputRef.current);
  };

  const InputNameClasses = props.onInputNameError ? "invalid input" : "input";
  const InputJobClasses = props.onInputJobHasErro ? "invalid input" : "input";
  const InputCommentClasses = props.onInputCommentHasErro
    ? "invalid input"
    : "input";

  return (
    <>
      <motion.div
        initial={props.initial}
        animate={props.animate}
        transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.3 }}
        className="input_control"
      >
        <h2 className="flex">
          <UserNameIcon />
          {t("input_title_one")}
        </h2>
        <div className="position-relative">
          <FeedInput
            placeHolder={`${t("Your-name")}`}
            toggleKeyboard={showKeyboard(setShowKeyboard1, 0)}
            isVisible={showKeyboard1}
            ref={inputRef.current[0]}
            className={`${InputNameClasses} ${
              props.onEnteredNameValid ? "valid_input" : ""
            }`}
          />
          <div className="input_icons">
            {props.onInputNameError && <InvalidInput />}
            {props.onEnteredNameValid && <ValidInput />}
            <button onClick={handleButtonClick(setShowKeyboard1, 0)}>
              <KeyboardIcon />
            </button>
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
        </div>
      </motion.div>
      <motion.div
        initial={props.initial}
        animate={props.animate}
        transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.4 }}
        className="input_control"
      >
        <h2 className="flex">
          <UserJobIcon />
          {t("input_title_two")}
        </h2>
        <div className="position-relative">
          <FeedInput
            placeHolder={`${t("Your-job")}`}
            toggleKeyboard={showKeyboard(setShowKeyboard2, 1)}
            isVisible={showKeyboard2}
            ref={inputRef.current[1]}
          />

          <div className="input_icons">
            {props.onInputJobHasErro && <InvalidInput />}
            {props.onEnteredJobValid && <ValidInput />}
            <button onClick={handleButtonClick(setShowKeyboard2, 1)}>
              <KeyboardIcon />
            </button>
            {props.showMic === "show" && (
              <MIC
                onREC={props.onStartRecInputJob}
                recording={props.InputJobRecording}
              />
            )}
          </div>
          {props.onInputJobHasErro && (
            <p className="error_input_prg flex">
              <ExitInvalidInput />
              This field is not valid
            </p>
          )}
        </div>
      </motion.div>
      <motion.div
        initial={props.initial}
        animate={props.animate}
        transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.6 }}
        className="input_control"
      >
        <h2 className="flex">
          <UserCommentIcon />
          {t("input_title_three")}
        </h2>
        <div className="position-relative">
          <FeedInput
            placeHolder={`${t("Your-comment")}`}
            toggleKeyboard={showKeyboard(setShowKeyboard3, 2)}
            isVisible={showKeyboard3}
            ref={inputRef.current[2]}
          />

          <div className="input_icons">
            {props.onInputCommentHasErro && <InvalidInput />}
            {props.onEnteredCommentValid && <ValidInput />}
            <button onClick={handleButtonClick(setShowKeyboard3, 2)}>
              <KeyboardIcon />
            </button>
            {props.showMic === "show" && (
              <MIC
                onREC={props.onStartRecInputComment}
                recording={props.InputCommentRecording}
              />
            )}
          </div>
          {props.onInputCommentHasErro && (
            <p className="error_input_prg flex">
              <ExitInvalidInput />
              This field is not valid
            </p>
          )}
        </div>
      </motion.div>
      <ScrollToTopButton />
    </>
  );
};

export default FeedbackInputs;
