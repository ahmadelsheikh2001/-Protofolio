import { useEffect, useRef } from "react";
import { CheckedIcon } from "../../../UI/Icons";
import { motion } from 'framer-motion';

const SingleReaction = props => {

  const reaction = useRef(null);

  const getReactionsHandler = () => {

    if(reaction.current.value === props.special && reaction.current.checked) {
      document.querySelectorAll('input').forEach(input => input.checked = false);
      reaction.current.checked = true
    }else {
     document.querySelectorAll('input').forEach(input => {
        if(input.value === props.special) {
          input.checked = false
        }
      });
    };

    props.onGetReactions(reaction.current.value);
  };

  useEffect(() => {
    if(reaction.current.value === props.default ) {
      reaction.current.checked = true;
    };
  }, []);



  return (
    <motion.li
      initial={props.initial} 
      animate={props.animate}
      transition={{type: 'spring', duration: 1, bounce: .3, delay: `.${props.index}`}} 
    >
      <input className="d-none" ref={reaction} type='checkbox' value={props.id} id={props.id} onChange={getReactionsHandler}/>
      <label htmlFor={props.id}>
        <div className="react_cart flex position-realtive">
            {props.type === 'project' ? props.icon : <img src={props.icon} alt='icon'/>}
            {props.text} 
            <span><CheckedIcon/></span>
        </div>
      </label>
    </motion.li>
  );
};

export default SingleReaction;