import { useEffect, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import AppContext from "../../store/app-context";
import "./input.css";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
const FeedInput = ({
  props,
  placeHolder,
  onChange,
  value,
  isVisible,
  className,
  ref
}) => {
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
      letters = placeHolder.split("").map((letter, i) => {
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
      letters = placeHolder.split(" ").map((letter, i) => {
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
  const onChangeKeyboard = (input) => {
    setInput(input);
    console.log("Input changed", input);
    setUp(true);
  };
console.log();

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

  return (
    <div className="position-relative">
      <input
        onChange={onChangeInput}
        value={input}
        className={className}
        ref={ref}
      />
      <p className={`place-holder position-absolute ${up ? "active" : ""}`}>
        {words}
      </p>

      {isVisible && (
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layout}
          onChange={onChangeKeyboard}
          onKeyPress={onKeyPress}
        />
      )}
    </div>
  );
};

export default FeedInput;
