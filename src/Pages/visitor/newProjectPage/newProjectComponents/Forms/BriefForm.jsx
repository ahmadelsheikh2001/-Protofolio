import React from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowUpIcon, ExitInvalidInput, FormOneTitleIcon, InvalidInput, PaperIcon, ValidInput } from '../../../../../UI/Icons'
import SingleReaction from '../../../addFeedback/singleReaction';
import Input from '../../../../../UI/Inputs/Input';
import Button from '../../../../../UI/Buttons/Button';
import { motion } from 'framer-motion';

import '../../../addFeedback/addFeedback.css'
import MIC from '../../../../../UI/MIC';

function BriefForm(props) {
  console.log(props.getValueHandler);

  const {t, i18} = useTranslation();

  const InputMessageClasses = props.onInputJobHasErro ? 'invalid input' : 'input';

  
  let validBtn = false;
  if(props.onEnteredMessageIsValid) {
    validBtn = true;
  };


  //  ========== transition ========

  const init = {
    opacity: 0,
    y: 500
  }
  const animation = {
    opacity: 1,
    y: 0
  }

  return (
    <>
      <div className="inputs_reactions">
        <motion.h2 
        initial={init}
        animate={animation}
        transition={{type: 'spring', bounce: .3, duration: 1}}
        className="flex"
        >
          <FormOneTitleIcon/>{t('brief_title')}
          <motion.span
          initial={init}
          animate={animation}
          transition={{type: 'spring', bounce: .3, duration: 1, delay: 1.1}}
          style={{display: 'inline-block'}}>
            {t('choose_more_than_one')} 
          </motion.span>
        </motion.h2>
        <ul>
          {props.onReactions.map((react, i) => 
          <SingleReaction
            initial={init}
            animate={animation}
            index={i}
            type='project' 
            special={'Other'} 
            default={'Other'} 
            onGetReactions={props.getValueHandler} 
            key={react.id} 
            {...react}
          />)}
        </ul>
      </div>
      <div className="input_control">
        <motion.h2
          initial={init}
          animate={animation}
          transition={{type: 'spring', bounce: .3, duration: 1, delay: .75}}
          className="flex"
         >
          <PaperIcon/>{t('brief_title_2')}
        </motion.h2>
        <motion.div
          initial={init}
          animate={animation}
          transition={{type: 'spring', bounce: .3, duration: 1, delay: .85}}
          className="position-relative"
        >
          <Input 
            input={{value: props.userMessage}} 
            type='Message' onId='Message' 
            placeHolder={`${t('About_project')}`} 
            OnChange={props.onChangeMessageHandler} 
            OnBlur={props.onBlureMessageHandler} 
            class={`${InputMessageClasses} ${props.onEnteredMessageValid ? 'valid_input' : ''}`}
            autoComplete="off"
          />
          <div className="input_icons">
            {props.onInputMessageError && <InvalidInput/>}
            {props.onEnteredMessageValid && <ValidInput/>}
            {props.showMic === 'show' &&  <MIC onREC={props.onStartRecInputMessage} recording={props.InputMessageRecording} />} 
 
          </div>
          {props.onInputMessageError && <p className='error_input_prg flex'><ExitInvalidInput/>This field is not valid</p>}
        </motion.div>
      </div>
      <motion.div 
        initial={init}
        animate={animation}
        transition={{type: 'spring', bounce: .3, duration: 1, delay: 1}}
        className="form_btns flex"
      >
        <button onClick={() => props.onCurrentForm(0)} className='btn_back' type='button'>{t('Back')}<ArrowUpIcon/></button>
        <Button onClick={() => props.onCurrentForm(2)} data={{type: 'button'}} validation={validBtn} >{t('Continue')}<ArrowUpIcon/></Button>
      </motion.div>
    </>
  )
}

export default BriefForm