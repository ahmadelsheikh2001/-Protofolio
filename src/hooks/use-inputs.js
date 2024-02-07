import { useContext, useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AppContext from "../store/app-context";

const useInput = (checkTheValue, defaultValue) => {

    const ctx = useContext(AppContext);
    const [enteredValue, setEnteredValue] = useState(defaultValue || '');
    const [inputIsTouched, setInputIsTouched] = useState(false);
    const enteredValueIsValid = checkTheValue(enteredValue);
    const [rec, setRec] = useState(false);
    const errorInput = !enteredValueIsValid && inputIsTouched;
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    useEffect(() => {
        if(!defaultValue) {
            return;
        }else {
            setEnteredValue(defaultValue);
        }
    }, [defaultValue]);
    


    const onChangeHandler = e => {
        setEnteredValue(e.target.value);
        setInputIsTouched(true);
    };

    const onBlurHandler = () => {
        setInputIsTouched(true);
    };

    const resetInput = () => {
        setInputIsTouched(false);        
        setEnteredValue('');
    };

    const onStartRec = () => setRec(prev => !prev);

    const showMic = browserSupportsSpeechRecognition && ctx.lang === 'en' ? 'show' : ''

    useEffect(() => {
        setEnteredValue(transcript)
    }, [transcript]);

    useEffect(() => {
        if(rec) {
            SpeechRecognition.startListening({continuous: true})
        } else if(!rec) {
            SpeechRecognition.stopListening();
        }
    }, [rec])

    return {
        value: enteredValue,
        enteredValueIsValid,
        error: errorInput,
        onChangeHandler,
        onBlurHandler,
        resetInput,
        showMic,
        onStartRec,
        rec,
    };

};

export default useInput;