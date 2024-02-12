import { useEffect, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import AppContext from "../../store/app-context";
import "./input.css";
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
        onChange={props.OnChange}
        onBlur={props.OnBlur}
        {...props.input}
        // value={input}
        // onFocus={}
      />
      <p className={`place-holder position-absolute ${up ? "active" : ""}`}>
        {words}
      </p>
    </div>
  );
};

export default Input;
