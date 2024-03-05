import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../../../UI/Buttons/Button";
import AdminCards from "../../../../../UI/Cards/AdminCards";
import {
  ArrowUpIcon,
  DateIcon,
  DollerIcon,
  MessageIcon,
  PaperIcon,
  SendIcon,
  UserNameIcon,
} from "../../../../../UI/Icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ReviewForm = (props) => {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();

  const itnit = { y: 500, opacity: 0 };

  const animate = { y: 0, opacity: 1 };
  const icons = props.onReactions.map((icon, i) => {
    if (icon.id === props.need[i]) return icon.icon;
  });

  return (
    <>
      <div className="review_form">
        <h2>
          {t("Please, review it before the submit")}{" "}
          <img src="./assets/love.svg" />
        </h2>
        <motion.div
          initial={itnit}
          animate={animate}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
          <AdminCards>
            <div className="question_box">
              <div className="question flex">
                <span>1</span>
                <p>{t("q1")}</p>
              </div>
              <p className="answer">
                <UserNameIcon />
                {props.name}
              </p>
            </div>
            <div className="question_box">
              <div className="question flex">
                <span>2</span>
                <p>{t("q2")}</p>
              </div>
              <p className="answer">
                <MessageIcon />
                {props.email}
              </p>
            </div>
            <button onClick={() => props.onCurrentForm(0)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "24px",
                  height: "24px",
                  top: "292px",
                  left: "1431px",
                }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.656 0.929979L6.46402 13.125C5.99838 13.5881 5.62923 14.139 5.37793 14.7457C5.12663 15.3524 4.99818 16.003 5.00002 16.6597V18C5.00002 18.2651 5.10535 18.5194 5.29284 18.7069C5.48033 18.8944 5.73462 18.9997 5.99977 18.9997H7.34302C7.99924 19.0012 8.64923 18.8725 9.25543 18.6212C9.86164 18.37 10.412 18.001 10.8748 17.5357L23.0698 5.34373C23.654 4.75788 23.9821 3.96425 23.9821 3.13685C23.9821 2.30946 23.654 1.51583 23.0698 0.929979C22.4754 0.362003 21.685 0.0450439 20.8629 0.0450439C20.0408 0.0450439 19.2504 0.362003 18.656 0.929979ZM21.656 3.92998L9.46402 16.125C8.90017 16.6855 8.13806 17.0011 7.34302 17.0032H6.99952V16.6605C6.99983 15.8646 7.31439 15.1009 7.87477 14.5357L20.0698 2.34373C20.2834 2.13967 20.5675 2.0258 20.8629 2.0258C21.1583 2.0258 21.4424 2.13967 21.656 2.34373C21.8656 2.55451 21.9832 2.83965 21.9832 3.13685C21.9832 3.43406 21.8656 3.7192 21.656 3.92998Z"
                  fill="#877697"
                />
                <path
                  d="M23.0003 8.979C22.7351 8.979 22.4808 9.08433 22.2933 9.27182C22.1058 9.45931 22.0005 9.7136 22.0005 9.97875V15H18C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18V21.9998H5.00025C4.2046 21.9998 3.44154 21.6837 2.87893 21.1211C2.31632 20.5585 2.00025 19.7954 2.00025 18.9998V5.00025C2.00025 4.2046 2.31632 3.44154 2.87893 2.87893C3.44154 2.31632 4.2046 2.00025 5.00025 2.00025H14.0423C14.3075 2.00025 14.5619 1.89488 14.7494 1.70732C14.937 1.51976 15.0424 1.26537 15.0424 1.00013C15.0424 0.734875 14.937 0.48049 14.7494 0.29293C14.5619 0.10537 14.3075 0 14.0423 0L5.00025 0C3.67459 0.00158786 2.40368 0.528908 1.46629 1.46629C0.528908 2.40368 0.00158786 3.67459 0 5.00025L0 18.9998C0.00158786 20.3254 0.528908 21.5963 1.46629 22.5337C2.40368 23.4711 3.67459 23.9984 5.00025 24H16.3433C17.0002 24.0019 17.651 23.8735 18.258 23.6222C18.865 23.3709 19.4161 23.0017 19.8795 22.536L22.5353 19.875C23.0006 19.4122 23.3696 18.8619 23.621 18.2557C23.8724 17.6495 24.0012 16.9995 24 16.3433V9.97875C24 9.7136 23.8947 9.45931 23.7072 9.27182C23.5197 9.08433 23.2654 8.979 23.0003 8.979ZM18.465 21.1223C18.0631 21.5233 17.5549 21.801 17.0003 21.9225V18C17.0003 17.7349 17.1056 17.4806 17.2931 17.2931C17.4806 17.1056 17.7349 17.0003 18 17.0003H21.9248C21.8009 17.5538 21.5236 18.0612 21.1245 18.4643L18.465 21.1223Z"
                  fill="#877697"
                />
              </svg>{" "}
              Edit
            </button>
          </AdminCards>
        </motion.div>
        <motion.div
          initial={itnit}
          animate={animate}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.1 }}
        >
          <AdminCards>
            <div className="question_box">
              <div className="question flex">
                <span>3</span>
                <p>{t("q3")}</p>
              </div>
              <ul>
                {props.need.map((item, i) => (
                  <li key={Math.random()}>
                    {icons[i]}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="question_box">
              <div className="question flex">
                <span>4</span>
                <p>{t("q4")}</p>
              </div>
              <p className="answer">
                <PaperIcon />
                {props.message}
              </p>
            </div>
            <button onClick={() => props.onCurrentForm(1)}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "24px",
                  height: "24px",
                  top: "292px",
                  left: "1431px",
                }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.656 0.929979L6.46402 13.125C5.99838 13.5881 5.62923 14.139 5.37793 14.7457C5.12663 15.3524 4.99818 16.003 5.00002 16.6597V18C5.00002 18.2651 5.10535 18.5194 5.29284 18.7069C5.48033 18.8944 5.73462 18.9997 5.99977 18.9997H7.34302C7.99924 19.0012 8.64923 18.8725 9.25543 18.6212C9.86164 18.37 10.412 18.001 10.8748 17.5357L23.0698 5.34373C23.654 4.75788 23.9821 3.96425 23.9821 3.13685C23.9821 2.30946 23.654 1.51583 23.0698 0.929979C22.4754 0.362003 21.685 0.0450439 20.8629 0.0450439C20.0408 0.0450439 19.2504 0.362003 18.656 0.929979ZM21.656 3.92998L9.46402 16.125C8.90017 16.6855 8.13806 17.0011 7.34302 17.0032H6.99952V16.6605C6.99983 15.8646 7.31439 15.1009 7.87477 14.5357L20.0698 2.34373C20.2834 2.13967 20.5675 2.0258 20.8629 2.0258C21.1583 2.0258 21.4424 2.13967 21.656 2.34373C21.8656 2.55451 21.9832 2.83965 21.9832 3.13685C21.9832 3.43406 21.8656 3.7192 21.656 3.92998Z"
                  fill="#877697"
                />
                <path
                  d="M23.0003 8.979C22.7351 8.979 22.4808 9.08433 22.2933 9.27182C22.1058 9.45931 22.0005 9.7136 22.0005 9.97875V15H18C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18V21.9998H5.00025C4.2046 21.9998 3.44154 21.6837 2.87893 21.1211C2.31632 20.5585 2.00025 19.7954 2.00025 18.9998V5.00025C2.00025 4.2046 2.31632 3.44154 2.87893 2.87893C3.44154 2.31632 4.2046 2.00025 5.00025 2.00025H14.0423C14.3075 2.00025 14.5619 1.89488 14.7494 1.70732C14.937 1.51976 15.0424 1.26537 15.0424 1.00013C15.0424 0.734875 14.937 0.48049 14.7494 0.29293C14.5619 0.10537 14.3075 0 14.0423 0L5.00025 0C3.67459 0.00158786 2.40368 0.528908 1.46629 1.46629C0.528908 2.40368 0.00158786 3.67459 0 5.00025L0 18.9998C0.00158786 20.3254 0.528908 21.5963 1.46629 22.5337C2.40368 23.4711 3.67459 23.9984 5.00025 24H16.3433C17.0002 24.0019 17.651 23.8735 18.258 23.6222C18.865 23.3709 19.4161 23.0017 19.8795 22.536L22.5353 19.875C23.0006 19.4122 23.3696 18.8619 23.621 18.2557C23.8724 17.6495 24.0012 16.9995 24 16.3433V9.97875C24 9.7136 23.8947 9.45931 23.7072 9.27182C23.5197 9.08433 23.2654 8.979 23.0003 8.979ZM18.465 21.1223C18.0631 21.5233 17.5549 21.801 17.0003 21.9225V18C17.0003 17.7349 17.1056 17.4806 17.2931 17.2931C17.4806 17.1056 17.7349 17.0003 18 17.0003H21.9248C21.8009 17.5538 21.5236 18.0612 21.1245 18.4643L18.465 21.1223Z"
                  fill="#877697"
                />
              </svg>{" "}
              Edit
            </button>
          </AdminCards>
        </motion.div>
        <motion.div
          initial={itnit}
          animate={animate}
          transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.2 }}
        >
          <AdminCards>
            <div className="question_box">
              <div className="question flex">
                <span>5</span>
                <p>{t("q5")}</p>
              </div>
              <p className="answer">
                <DollerIcon />
                {props.budget}
              </p>
            </div>
            <div className="question_box">
              <div className="question flex">
                <span>6</span>
                <p>{t("q6")}</p>
              </div>
              <p className="answer">
                <DateIcon />
                {props.timeLine}
              </p>
            </div>
            <button onClick={() => props.onCurrentForm(2)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "24px",
                  height: "24px",
                  top: "292px",
                  left: "1431px",
                }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.656 0.929979L6.46402 13.125C5.99838 13.5881 5.62923 14.139 5.37793 14.7457C5.12663 15.3524 4.99818 16.003 5.00002 16.6597V18C5.00002 18.2651 5.10535 18.5194 5.29284 18.7069C5.48033 18.8944 5.73462 18.9997 5.99977 18.9997H7.34302C7.99924 19.0012 8.64923 18.8725 9.25543 18.6212C9.86164 18.37 10.412 18.001 10.8748 17.5357L23.0698 5.34373C23.654 4.75788 23.9821 3.96425 23.9821 3.13685C23.9821 2.30946 23.654 1.51583 23.0698 0.929979C22.4754 0.362003 21.685 0.0450439 20.8629 0.0450439C20.0408 0.0450439 19.2504 0.362003 18.656 0.929979ZM21.656 3.92998L9.46402 16.125C8.90017 16.6855 8.13806 17.0011 7.34302 17.0032H6.99952V16.6605C6.99983 15.8646 7.31439 15.1009 7.87477 14.5357L20.0698 2.34373C20.2834 2.13967 20.5675 2.0258 20.8629 2.0258C21.1583 2.0258 21.4424 2.13967 21.656 2.34373C21.8656 2.55451 21.9832 2.83965 21.9832 3.13685C21.9832 3.43406 21.8656 3.7192 21.656 3.92998Z"
                  fill="#877697"
                />
                <path
                  d="M23.0003 8.979C22.7351 8.979 22.4808 9.08433 22.2933 9.27182C22.1058 9.45931 22.0005 9.7136 22.0005 9.97875V15H18C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18V21.9998H5.00025C4.2046 21.9998 3.44154 21.6837 2.87893 21.1211C2.31632 20.5585 2.00025 19.7954 2.00025 18.9998V5.00025C2.00025 4.2046 2.31632 3.44154 2.87893 2.87893C3.44154 2.31632 4.2046 2.00025 5.00025 2.00025H14.0423C14.3075 2.00025 14.5619 1.89488 14.7494 1.70732C14.937 1.51976 15.0424 1.26537 15.0424 1.00013C15.0424 0.734875 14.937 0.48049 14.7494 0.29293C14.5619 0.10537 14.3075 0 14.0423 0L5.00025 0C3.67459 0.00158786 2.40368 0.528908 1.46629 1.46629C0.528908 2.40368 0.00158786 3.67459 0 5.00025L0 18.9998C0.00158786 20.3254 0.528908 21.5963 1.46629 22.5337C2.40368 23.4711 3.67459 23.9984 5.00025 24H16.3433C17.0002 24.0019 17.651 23.8735 18.258 23.6222C18.865 23.3709 19.4161 23.0017 19.8795 22.536L22.5353 19.875C23.0006 19.4122 23.3696 18.8619 23.621 18.2557C23.8724 17.6495 24.0012 16.9995 24 16.3433V9.97875C24 9.7136 23.8947 9.45931 23.7072 9.27182C23.5197 9.08433 23.2654 8.979 23.0003 8.979ZM18.465 21.1223C18.0631 21.5233 17.5549 21.801 17.0003 21.9225V18C17.0003 17.7349 17.1056 17.4806 17.2931 17.2931C17.4806 17.1056 17.7349 17.0003 18 17.0003H21.9248C21.8009 17.5538 21.5236 18.0612 21.1245 18.4643L18.465 21.1223Z"
                  fill="#877697"
                />
              </svg>{" "}
              Edit
            </button>
          </AdminCards>
        </motion.div>
        <div className="form_btns flex">
          <button
            onClick={() => props.onCurrentForm(2)}
            className="btn_back"
            type="button"
          >
            {t("Back")}
            <ArrowUpIcon />
          </button>
          <Button
            onClick={() => {props.onSubmit()
            navigate('/')
            }}
            data={{ type: "button" }}
            validation={true}
          >
            {t("Submit")}
            <SendIcon />
          </Button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default ReviewForm;
