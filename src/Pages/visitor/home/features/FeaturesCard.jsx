import { useAnimation, motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import Lottie from 'react-lottie';

const FeaturesCard = props => {

  const animation = useAnimation();
  const [hover, setHover] = useState(false);
  
  useEffect(() => {
    if(props.inView) {
      animation.start({
        y:0,
        opacity: 1,
        transition: {
          duration: .6, delay: `.${props.index}`
        }
      });
    }else {
      animation.start({
        y: 1000,
        opacity: 0,
      })
    }
  }, [props.inView]);

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: props.animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(
    <motion.div 
      initial={{opacity: 0, y: 500}}
      animate={animation}
      className="feature_card side_border gray"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="num">{props.id}</span>
      <div className='feature_card_title flex'>
      {/* <Lottie options={defaultOptions}
              height={'fit-content'}
              width={'fit-content'}
              isStopped={!hover}
              isPaused={!hover}
              style={{margin: '0px', overflow: 'visible'}}
              /> */}

        {props.icon}
        <h4 data-text={props.title} className="feature_title">{props.title}</h4>
      </div>
    </motion.div>
  );
};

export default FeaturesCard;