import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import useInput from "../../../hooks/use-inputs";
import AppContext from "../../../store/app-context";

import Button from "../../../UI/Buttons/Button";
import { OpinionIcon, SendIcon } from "../../../UI/Icons";
import FeedbackInputs from "./FeedbackInputs";
import SingleReaction from "./singleReaction";
import UserProfileImage from "./UserImage";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux"
import Api, { handleApiError } from "../../../config/api";
import { feeedBackChange, resetFeedbackValues } from "../../../redux/slices/feedback.slice";
import { notifySuccess } from "../../../config/toastify";

const AddFeedbackContent = () => {

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [userImage, setUserImage] = useState('');
  const local = localStorage.getItem('src');
  const ctx = useContext(AppContext);

  useEffect(() => {
    local ? setUserImage(local) : ctx.theme === 'dark' ? setUserImage('./assets/Group 35262.svg') : setUserImage('./assets/Path 885.svg')
  }, [ctx.theme]);


  const [image, setImage] = useState(null)
  console.log(image);
  const addImageUserHandler = (input) => {
    console.log();
    let files = input.target.files;
    setImage(files[0])
    let reader = new FileReader();

    reader.onload = e => {
      setUserImage(e.target.result);
      localStorage.setItem('src', e.target.result);
    };
    reader.readAsDataURL(files[0]);
    console.log(userImage);
    

  };
  const addImageFromCamera=(img)=>{
    setUserImage(img);

  }
  const [currentReactions, setCurrentReactions] = useState(['happy']);

  const reactions = [
    {
      id: 'happy',
      text: `${t("Happy")}`,
      dataType: 'happy',
      icon: './assets/Helper.gif'
    },
    {
      id: 'serious',
      text: `${t("Serious")}`,
      dataType: 'serious',
      icon: './assets/Helper.gif'
    },
    {
      id: 'diligent',
      text: `${t("Diligent")}`,
      dataType: 'diligent',
      icon: './assets/Diligent.gif'
    },
    {
      id: 'friendly',
      text: `${t("Friendly")}`,
      dataType: 'diligent',
      icon: './assets/Friendly.gif'
    },
    {
      id: 'intelligent',
      text: `${t("Intelligent")}`,
      dataType: 'diligent',
      icon: './assets/Intelligent.gif'
    },
    {
      id: 'notgood',
      text: `${t("Not_good")}`,
      dataType: 'diligent',
      icon: './assets/Not-good.gif'
    },
  ];

  const getREactionsHandler = value => {

    if (value === 'notgood') {
      setCurrentReactions(['notgood'])
    } else {
      if (currentReactions.includes('notgood')) {
        setCurrentReactions([]);
        setCurrentReactions(prevState => [...prevState, value]);


      } else if (currentReactions.includes(value)) {
        setCurrentReactions(prevState => prevState.filter(react => react !== value));
      } else {
        setCurrentReactions(prevState => [...prevState, value]);
      }
    };

  };

  const {
    value: enteredName,
    enteredValueIsValid: enteredNameIsValid,
    error: inputNameHasError,
    onChangeHandler: onChangeInputNameHandler,
    onBlurHandler: onBlurInputNameHandler,
    resetInput: onResetNameInputHandler,
    onStartRec: onStartRecInputName,
    rec: InputNameRecording,
    showMic
  } = useInput(enteredName => enteredName.trim() !== '');

  const {
    value: enteredJob,
    enteredValueIsValid: enteredJobIsValid,
    error: inputJobHasError,
    onChangeHandler: onChangeInputJobHandler,
    onBlurHandler: onBlurInputJobHandler,
    resetInput: onResetJobInputHandler,
    onStartRec: onStartRecInputJob,
    rec: InputJobRecording,
  } = useInput(enteredJob => enteredJob.trim() !== '');

  const {
    value: enteredComment,
    enteredValueIsValid: enteredCommentIsValid,
    error: inputCommentHasError,
    onChangeHandler: onChangeInputCommentHandler,
    onBlurHandler: onBlurInputCommentHandler,
    resetInput: onResetCommentInputHandler,
    onStartRec: onStartRecInputComment,
    rec: InputCommentRecording,
  } = useInput(enteredComment => enteredComment.trim() !== '');

  // ============= check Form VAlidation ==================

  let formValidate = false;

  if (enteredNameIsValid && enteredJobIsValid && enteredCommentIsValid && currentReactions.length) {
    formValidate = true;
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(enteredComment, enteredJob, enteredName);

    onResetCommentInputHandler();
    onResetJobInputHandler();
    onResetNameInputHandler();
    document.querySelectorAll('input').forEach(input => input.checked = false);
    document.getElementById('happy').checked = true;
    setCurrentReactions(['happy']);


    navigate('thanks')
  };

  // Transiton : =

  const initial = {
    y: 500,
    opacity: 0
  };

  const animate = {
    y: 0,
    opacity: 1
  };

  const disptach = useDispatch()
  const data = useSelector((state) => state.feedback.value)

  function handleSubmit(e) {
    e.preventDefault()
    Api.post("/feedback", {...data,image}, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(() => {
        navigate("thanks")
        disptach(resetFeedbackValues())
      })
      .catch((error) => {
        handleApiError(error)
      })
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      job: "",
      message: "",
      reactions: currentReactions
    },
    onSubmit: handleSubmit
  })

  useEffect(() => {
    disptach(feeedBackChange({ name: "reactions", value: currentReactions }))
  }, [currentReactions])

  return (
    <>
      <form className="feedback_form" onSubmit={handleSubmit}>
        <UserProfileImage onChangeImage={addImageUserHandler} userImage={userImage} onAddImgFromCamera={addImageFromCamera}/>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ type: 'spring', duration: 1, bounce: .3, delay: .1 }}
          className="inputs_reactions"
        >
          <h2 className="flex"><OpinionIcon />{t('Your_opinion')}<span>{t('choose_more_than_one')} </span>
          </h2>
          <ul>
            {reactions.map((react, i) =>
              <SingleReaction
                initial={initial}
                animate={animate}
                key={i}
                index={i}
                special={'notgood'}
                default={'happy'}
                onGetReactions={getREactionsHandler}
                {...react}
              />)}
          </ul>
        </motion.div>
        <FeedbackInputs
          initial={initial}
          animate={animate}
          showMic={showMic}
          // // ========= UserName =========
          // userName={enteredName}
          // onInputNameError={inputNameHasError}
          // onChangeNameHandler={onChangeInputNameHandler}
          // onBlureNameHandler={onBlurInputNameHandler}
          // onEnteredNameValid={enteredNameIsValid}
          // onStartRecInputName={onStartRecInputName}
          // InputNameRecording={InputNameRecording}

          // // ========= User Job =========
          // userJob={enteredJob}
          // onInputJobHasErro={inputJobHasError}
          // onChangeJobHandler={onChangeInputJobHandler}
          // onBlureJobHandler={onBlurInputJobHandler}
          // onEnteredJobValid={enteredJobIsValid}
          // onStartRecInputJob={onStartRecInputJob}
          // InputJobRecording={InputJobRecording}

          // // ========= User Feedback =========
          // userComment={enteredComment}
          // onInputCommentHasErro={inputCommentHasError}
          // onChangeCommentHandler={onChangeInputCommentHandler}
          // onBlureCommentHandler={onBlurInputCommentHandler}
          // onEnteredCommentValid={enteredCommentIsValid}
          // onStartRecInputComment={onStartRecInputComment}
          // InputCommentRecording={InputCommentRecording}



          handleChangeName={formik.handleChange} nameName={"name"} valueName={formik.values.name} handleChangeJob={formik.handleChange} nameJob="job" valueJob={formik.values.job}
          handleChangeMessage={formik.handleChange} nameMessage="message" valueMessage={formik.values.message}
        />
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ type: 'spring', duration: 1, bounce: .3, delay: .8 }}
          className="flex feedback_btns"
        >
          <button className="btn_back" onClick={() => window.history.back()}>{t('Back')}</button>
          <Button data={{ type: 'submit' }} validation={formValidate} >{t('Send_Feedback')}<SendIcon /></Button>
        </motion.div>
      </form>
    </>
  );
};

export default AddFeedbackContent;