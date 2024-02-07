import React from 'react'
import { useEffect, useRef } from "react";
import { CheckedIcon } from '../../../../../UI/Icons';
import { motion } from 'framer-motion';


function SingleRadioInput(props) {

  const reaction = useRef(null);
  const getReactionsHandler = () => {
    props.onGetReactions(reaction.current.value);
  };

  useEffect(() => {
    if(reaction.current.value === props.default ) {
      reaction.current.checked = true;
    };
  }, [props.default]);

  return (
    <motion.li
      initial={props.initial} 
      animate={props.animate}
      transition={{type: 'spring', duration: 1, bounce: .3, delay: !props.late ? `.${props.index}` : `1.${props.index}`}} 
    >
      <input className="d-none" ref={reaction} type='radio' name={props.type} value={props.id} id={props.id} onChange={getReactionsHandler}/>
      <label htmlFor={props.id}>
        <div className="react_cart flex position-realtive">
            {props.icon}
            {props.text} 
            <span><CheckedIcon/></span>
        </div>
      </label>
    </motion.li>
  )
}

export default SingleRadioInput