import { useTranslation } from "react-i18next";
import { UserNameIcon, UserJobIcon, UserCommentIcon, InvalidInput, ExitInvalidInput, ValidInput } from "../../../UI/Icons";
import Input from "../../../UI/Inputs/Input";
import { motion } from 'framer-motion';
import MIC from "../../../UI/MIC";
import ScrollToTopButton from "../../../layout/visitor/scrollTopBtn/ScrollToTopButton";


const FeedbackInputs = props => {

  const {t, i18n} = useTranslation();

  const InputNameClasses = props.onInputNameError ? 'invalid input' : 'input';
  const InputJobClasses = props.onInputJobHasErro ? 'invalid input' : 'input';
  const InputCommentClasses = props.onInputCommentHasErro ? 'invalid input' : 'input';
  
  return (
    <>
      <motion.div 
        initial={props.initial}
        animate={props.animate}
        transition={{type: 'spring', duration: 1, bounce: .3, delay: .3}} 
        className="input_control"
      >
        <h2 className="flex"><UserNameIcon/>{t('input_title_one')}</h2>
        <div className="position-relative">
          <Input 
            input={{value: props.userName}} 
            type='text' onId='use-name' 
            placeHolder={`${t('Your-name')}`} 
            OnChange={props.onChangeNameHandler} 
            OnBlur={props.onBlureNameHandler} 
            class={`${InputNameClasses} ${props.onEnteredNameValid ? 'valid_input' : ''}`}
          />
          <div className="input_icons">
            {props.onInputNameError && <InvalidInput/>}
            {props.onEnteredNameValid && <ValidInput/>}

            {props.showMic === 'show' &&  <MIC onREC={props.onStartRecInputName} recording={props.InputNameRecording} />} 
          </div>
          {props.onInputNameError && <p className='error_input_prg flex'><ExitInvalidInput/>This field is not valid</p>}
        </div>
      </motion.div>
      <motion.div 
        initial={props.initial}
        animate={props.animate}
        transition={{type: 'spring', duration: 1, bounce: .3, delay: .4}} 
        className="input_control"
      >
        <h2 className="flex"><UserJobIcon/>{t('input_title_two')}</h2>
        <div className="position-relative">
          <Input
            input={{value: props.userJob}}
            type='text' onId='use-job'
            placeHolder={`${t('Your-job')}`}
            OnChange={props.onChangeJobHandler}
            OnBlur={props.onBlureJobHandler}
            class={`${InputJobClasses} ${props.onEnteredJobValid ? 'valid_input' : ''}`}
          />
          <div className="input_icons">
            {props.onInputJobHasErro && <InvalidInput/>}
            {props.onEnteredJobValid && <ValidInput/>}
            {props.showMic === 'show' &&  <MIC onREC={props.onStartRecInputJob} recording={props.InputJobRecording} />} 
          </div>
          {props.onInputJobHasErro && <p className='error_input_prg flex'><ExitInvalidInput/>This field is not valid</p>}
        </div>
      </motion.div>
      <motion.div
        initial={props.initial}
        animate={props.animate}
        transition={{type: 'spring', duration: 1, bounce: .3, delay: .6}}  
        className="input_control"
      >
        <h2 className="flex"><UserCommentIcon/>{t('input_title_three')}</h2>
        <div className="position-relative">
          <Input 
            input={{value: props.userComment}}
            type='text' onId='use-comment'
            placeHolder={`${t('Your-comment')}`}
            OnChange={props.onChangeCommentHandler}
            OnBlur={props.onBlureCommentHandler} 
            class={`${InputCommentClasses} ${props.onEnteredCommentValid ? 'valid_input' : ''}`}
          />
          <div className="input_icons">
            {props.onInputCommentHasErro && <InvalidInput/>}
            {props.onEnteredCommentValid && <ValidInput/>}
            {props.showMic === 'show' &&  <MIC onREC={props.onStartRecInputComment} recording={props.InputCommentRecording} />} 
          </div>
          {props.onInputCommentHasErro && <p className='error_input_prg flex'><ExitInvalidInput/>This field is not valid</p>}
        </div>
      </motion.div>
      <ScrollToTopButton/>
    </>
  );
};

export default FeedbackInputs;