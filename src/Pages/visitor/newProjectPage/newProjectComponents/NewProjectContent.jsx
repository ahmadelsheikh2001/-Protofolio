import React, { useEffect, useState } from 'react'
import ContactInfoForm from './Forms/ContactInfoForm'
import BriefForm from './Forms/BriefForm'
import BudgetForm from './Forms/BudgetForm'
import useInput from '../../../../hooks/use-inputs';
import { useTranslation } from 'react-i18next';
import { AppDesign, Dashboard, IconOne, Micro, WebDesign } from '../../../../UI/Icons';
import ReviewForm from './Forms/ReviewForm';
import Api, { handleApiError } from "../../../../config/api"
import { notifySuccess } from '../../../../config/toastify';

const NewProjectContent = (props) => {

  const { t, i18n } = useTranslation();

  const [currentReactions, setCurrentReactions] = useState(['Other']);
  const [currentBudget, setCurrentBudget] = useState('1k - 2k');
  const [currentTimeLine, setCurrentTimeLine] = useState('2 - 3_month');
  const [data, setData] = useState({});



  // =============== Form One =============== 
  // ======== Check Name Input VAlidatio ========
  const {
    value: enteredName,
    enteredValueIsValid: enteredNameIsValid,
    error: inputNameHasError,
    onChangeHandler: onChangeInputNameHandler,
    onBlurHandler: onBlurInputNameHandler,
    onStartRec: onStartRecInputName,
    rec: InputNameRecording,
    showMic
  } = useInput(enteredName => enteredName.trim() !== '');

  // ======== Check Email Inputs VAlidatio ========
  const {
    value: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    error: inputEmailHasError,
    onChangeHandler: onChangeInputEmailHandler,
    onBlurHandler: onBlurInputEmailHandler,
    onStartRec: onStartRecInputEmail,
    rec: InputEmailRecording
  } = useInput(enteredEmail => enteredEmail.includes('@'));



  // ========== Form Two =============
  // check box Value

  const reactions = [
    {
      id: 'Project_from_start',
      text: `${t("Project_from_start")}`,
      dataType: 'happy',
      icon: <IconOne />
    },
    {
      id: 'web_design',
      text: `${t("Web_design")}`,
      dataType: 'serious',
      icon: <WebDesign />
    },
    {
      id: 'app_design',
      text: `${t("App_design")}`,
      dataType: 'diligent',
      icon: <AppDesign />
    },
    {
      id: 'dashboard_design',
      text: `${t("Dashboard_design")}`,
      dataType: 'diligent',
      icon: <Dashboard />
    },
    {
      id: 'micro_Interactions',
      text: `${t("Micro_Interactions")}`,
      dataType: 'diligent',
      icon: <Micro />
    },
    {
      id: 'Other',
      text: `${t("Other")}`,
      dataType: 'diligent',
    },
  ];

  const getREactionsHandler = value => {

    if (value === 'Other') {
      setCurrentReactions(['Other'])
    } else {
      if (currentReactions.includes('Other')) {
        setCurrentReactions([]);
        setCurrentReactions(prevState => [...prevState, value]);

      } else if (currentReactions.includes(value)) {
        setCurrentReactions(prevState => prevState.filter(react => react !== value));
      } else {
        setCurrentReactions(prevState => [...prevState, value]);
      }
    };
  };

  // Check validation Input 

  const {
    value: enteredMessage,
    enteredValueIsValid: enteredMessageIsValid,
    error: inputMessageHasError,
    onChangeHandler: onChangeInputMessageHandler,
    onBlurHandler: onBlurInputMessageHandler,
    onStartRec: onStartRecInputMessage,
    rec: InputMessageRecording
  } = useInput(enteredMessage => enteredMessage.trim() !== '');

  // ========== Form Three =============
  const budgets = [
    {
      id: '1k - 2k',
      text: `${t("1k - 2k")}`,
    },
    {
      id: '2.1k - 3k',
      text: `${t("2.1k - 3k")}`,
    },
    {
      id: '3.1k - 4k',
      text: `${t("3.1k - 4k")}`,
    },
    {
      id: '4.1k - 5k',
      text: `${t("4.1k - 5k")}`,
    },
    {
      id: '> 5k',
      text: `${t("> 5k")}`,
    }
  ];

  const TimeLines = [
    {
      id: 'You_Determined',
      text: `${t("You_Determined")}`,
    },
    {
      id: '2 - 3_month',
      text: `${t("2 - 3 month")}`,
    },
    {
      id: '4 - 5_month',
      text: `${t("4 - 5 month")}`,
    },
    {
      id: '6 - 7_month',
      text: `${t("6 - 7 month")}`,
    },
    {
      id: '>_7_month',
      text: `${t("> 7 month")}`,
    }
  ];

  const getBudgetHandler = value => {
    setCurrentBudget(value);
  };
  const getTimeLineHandler = value => {
    setCurrentTimeLine(value);
  };

  const aniamtion = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  }

  function handleSubmit() {
    let formData = { period: data.timeLine, name: data.name, email: data.email, balance: data.budget, about: data.message, need: data.need };
    delete formData.id
    console.log(formData);

    Api.post("/order", formData, {
      // headers: {
      //   'Content-Type': 'multipart/form-data',  // Correct header name
      // },
    })
      .then(() => {
        notifySuccess("Project was Sent!!");
      })
      .catch((error) => handleApiError(error));
  }

  let contect =
    props.onActivce === 0 ?
      <ContactInfoForm
        showMic={showMic}
        key={0}
        aniamtion={aniamtion}

        //=== Name Input
        userName={enteredName}
        onInputNameError={inputNameHasError}
        onChangeNameHandler={onChangeInputNameHandler}
        onBlureNameHandler={onBlurInputNameHandler}
        onEnteredNameValid={enteredNameIsValid}
        onEnteredNameIsValid={enteredNameIsValid}
        onStartRecInputName={onStartRecInputName}
        InputNameRecording={InputNameRecording}
        //=== Email Input
        email={enteredEmail}
        onInputEmailError={inputEmailHasError}
        onChangeEmailHandler={onChangeInputEmailHandler}
        onBlureEmailHandler={onBlurInputEmailHandler}
        onEnteredEmailValid={enteredEmailIsValid}
        onEnteredEmailIsValid={enteredEmailIsValid}
        onStartRecInputEmail={onStartRecInputEmail}
        InputEmailRecording={InputEmailRecording}
        // Next Form 
        onCurrentForm={props.onCurrentForm}
      /> :
      props.onActivce === 1 ?
        <BriefForm
          showMic={showMic}
          key={1}
          aniamtion={aniamtion}
          onReactions={reactions}
          getValueHandler={getREactionsHandler}
          userMessage={enteredMessage}
          onInputMessageError={inputMessageHasError}
          onChangeMessageHandler={onChangeInputMessageHandler}
          onBlureMessageHandler={onBlurInputMessageHandler}
          onEnteredMessageValid={enteredMessageIsValid}
          onEnteredMessageIsValid={enteredMessageIsValid}
          onCurrentForm={props.onCurrentForm}
          onStartRecInputMessage={onStartRecInputMessage}
          InputMessageRecording={InputMessageRecording}
        /> :
        props.onActivce === 2 ?
          <BudgetForm
            key={3}
            aniamtion={aniamtion}
            onBudget={budgets}
            onTimeline={TimeLines}
            getValueHandler={getBudgetHandler}
            getTimeLineValueHandler={getTimeLineHandler}
            onCurrentForm={props.onCurrentForm}
          /> : <ReviewForm onCurrentForm={props.onCurrentForm} {...data} onSubmit={handleSubmit} onReactions={reactions} />


  useEffect(() => {
    setData({
      id: Math.random(),
      name: enteredName,
      email: enteredEmail,
      need: currentReactions,
      message: enteredMessage,
      budget: currentBudget,
      timeLine: currentTimeLine
    });
  }, [enteredName, currentReactions, enteredMessage, currentBudget, currentTimeLine]);

  return (
    <form className="feedback_form new_project">
      {contect}
    </form>
  )
}

export default NewProjectContent