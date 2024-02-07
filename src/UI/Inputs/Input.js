import { useEffect, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import AppContext from "../../store/app-context";
import "./input.css";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
const Input = (props) => {
  const [words, setWords] = useState([]);
  const [up, setUp] = useState(false);
  const ctx = useContext(AppContext).lang;

  useEffect(() => {
    if (props?.input?.value.length) {
      setUp(true);
    } else {
      setUp(false);
    }
  }, [props?.input?.value]);

  useEffect(() => {
    let letters;

    if (ctx === "en") {
      letters = props.placeHolder.split("").map((letter, i) => {
        if (letter === " ") {
          return (
            <span
              key={i}
              style={{
                width: "4px",
              }}
            ></span>
          );
        } else {
          return (
            <span
              key={i}
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {letter}
            </span>
          );
        }
      });
    } else {
      letters = props.placeHolder.split(" ").map((letter, i) => {
        if (letter === " ") {
          return (
            <span
              key={i}
              style={{
                width: "4px",
              }}
            ></span>
          );
        } else {
          return (
            <span
              key={i}
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {letter}
            </span>
          );
        }
      });
    }

    setWords(letters);
  }, [ctx]);

  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();
  const onChange = (input, e) => {
    setInput(input);
    console.log("Input changed", input);
    e.target.closest(".position-relative").firstElementChild.focus();
    setUp(true);
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    // console.log(event.target);
    props.OnChange(event);
    setInput(input);
    keyboard?.current?.setInput(input);
  };
  const onKeyPress = (button) => {
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };
  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };
  // console.log(props);

  return (
    <div className="position-relative">
      <input
        type={props.type}
        autoFocus={props.onAoutoFocus}
        // placeholder={props.placeHolder}
        ref={props.Ref}
        id={props.onId}
        className={props.class}
        // onChange={props.OnChange}
        onChange={onChangeInput}
        onBlur={props.OnBlur}
        {...props.input}
        value={input}
        onInput={props.OnChange}
        // onFocus={}
      />
      <p className={`place-holder position-absolute ${up ? "active" : ""}`}>
        {words}
      </p>

      {props.isKeyboardShown && (
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layout}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      )}
    </div>
  );
};

export default Input;
