import { useTranslation } from "react-i18next";
import {
  UserNameIcon,
  UserJobIcon,
  UserCommentIcon,
  InvalidInput,
  ExitInvalidInput,
  ValidInput,
  KeyboardIcon
} from "../../../UI/Icons";
import { motion } from "framer-motion";
import MIC from "../../../UI/MIC";
import ScrollToTopButton from "../../../layout/visitor/scrollTopBtn/ScrollToTopButton";
import { useContext } from "react";
// import AppContext from "../../store/app-context";
import "./input.css";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import React, { useRef, useState, useEffect } from "react";
import FeedInput from "../../../UI/Inputs/FeedInput";
import { feeedBackChange } from "../../../redux/slices/feedback.slice";
import { useDispatch, useSelector } from "react-redux";
// import FeedInputs from "../../../UI/Inputs/Input";


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
  };

  function handelFocus(e) {
    e.target
      .closest(".feedback_input_box")
      .querySelector(".input_icons").style.display = "flex";
  }
  function handelBlur(e) {
    e.target
      .closest(".feedback_input_box")
      .querySelector(".input_icons").style.display = "none";
  }
  const InputNameClasses = props.onInputNameError ? "invalid input" : "input";
  const InputJobClasses = props.onInputJobHasErro ? "invalid input" : "input";
  const InputCommentClasses = props.onInputCommentHasErro ? "invalid input" : "input";


  // useEffect(() => {
  //   if (props?.input?.value.length) {
  //     setUp(true);
  //   } else {
  //     setUp(false);
  //   }
  // }, [props?.input?.value]);

  // useEffect(() => {
  //   let letters;
  //   if (ctx === "en") {
  //     letters = placeHolder.split("").map((letter, i) => {
  //       if (letter === " ") {
  //         return (
  //           <span
  //             key={i}
  //             style={{
  //               width: "4px",
  //             }}
  //           ></span>
  //         );
  //       } else {
  //         return (
  //           <span
  //             key={i}
  //             style={{
  //               transitionDelay: `${i * 50}ms`,
  //             }}
  //           >
  //             {letter}
  //           </span>
  //         );
  //       }
  //     });
  //   } else {
  //     letters = placeHolder.split(" ").map((letter, i) => {
  //       if (letter === " ") {
  //         return (
  //           <span
  //             key={i}
  //             style={{
  //               width: "4px",
  //             }}
  //           ></span>
  //         );
  //       } else {
  //         return (
  //           <span
  //             key={i}
  //             style={{
  //               transitionDelay: `${i * 50}ms`,
  //             }}
  //           >
  //             {letter}
  //           </span>
  //         );
  //       }
  //     });
  //   }

  //   setWords(letters);
  // }, [ctx]);

  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();
  const onChangeKeyboard = (input) => {
    setInput(input);
    console.log("Input changed", input);
    // setUp(true);
  };
  // console.log(value);

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard?.current?.setInput(input);
  };
  const onKeyPress = (button) => {
    /* If you want to handle the shift and caps lock buttons*/
    if (button === "{shift}" || button === "{lock}") handleShift();
  };
  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const formData = useSelector((state) => state.feedback.value)
  const dispatch = useDispatch()

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
        <div className="position-relative feedback_input_box">
          <div className="position-relative">
            <input
              onChange={(e) => dispatch(feeedBackChange({ name: 'name', value: e.target.value }))}
              className="name"
              value={formData.name}
            // ref={ref}
            // onFocus={onFocus}
            // onBlur={onBlur}
            />
            {/* <p className={`place-holder position-absolute ${up ? "active" : ""}`}>
              {words}
            </p> */}
            {/* {isVisible && (
              <Keyboard
                keyboardRef={(r) => (keyboard.current = r)}
                layoutName={layout}
                onChange={onChangeKeyboard}
                onKeyPress={onKeyPress}
                rtl={true}
              // layout=
              // layout={layoutAr}
              />
            )} */}
          </div>
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
        <div className="position-relative feedback_input_box">
          <div className="position-relative">
            <input
              onChange={(e) => dispatch(feeedBackChange({ name: 'job', value: e.target.value }))}
              className="job"
              value={formData.job}
              // ref={ref}
              // onFocus={onFocus}
              // onBlur={onBlur}
            />
            {/* <p className={`place-holder position-absolute ${up ? "active" : ""}`}>
              {words}
            </p> */}

            {/* {isVisible && (
              <Keyboard
                keyboardRef={(r) => (keyboard.current = r)}
                layoutName={layout}
                onChange={onChangeKeyboard}
                onKeyPress={onKeyPress}
                rtl={true}
              // layout=
              // layout={layoutAr}
              />
            )} */}
          </div>

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
        <div className="position-relative feedback_input_box">
          <div className="position-relative">
            <input
              onChange={(e) => dispatch(feeedBackChange({ name: 'message', value: e.target.value }))}
              className="message"
              value={formData.message}
              required
              // ref={ref}
              // onFocus={onFocus}
              // onBlur={onBlur}
            />
            {/* <p className={`place-holder position-absolute ${up ? "active" : ""}`}>
              {words}
            </p> */}

            {/* {isVisible && (
              <Keyboard
                keyboardRef={(r) => (keyboard.current = r)}
                layoutName={layout}
                onChange={onChangeKeyboard}
                onKeyPress={onKeyPress}
                rtl={true}
              // layout=
              // layout={layoutAr}
              />
            )} */}
          </div>

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
