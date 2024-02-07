import React, { useEffect, useState } from 'react'
import { useAnimation, motion } from 'framer-motion';


const ScrollTransition = ({ children, delay, classes, duration, elementTop }) => {

  const animation = useAnimation();
  const [inView, setInView] = useState(false);

  const scrollHandler = () => {

    const Position = window.scrollY + window.innerHeight;

    if(Position > elementTop + 100) {
      setInView(true);
    }else {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll',scrollHandler);
    
    return () => {
      window.removeEventListener('scroll',scrollHandler);
    }
  }, [inView])
  
  useEffect(() => {
    if(inView) {
      animation.start({
        y:0,
        opacity: 1,
        transition: {
          type: 'spring', duration: duration || 1.5 , delay: delay || 0
        }
      });
    }
    if(!inView) {
      animation.start({
        y: 1000,
        opacity: 0,
        transition: {
          duration: 0
        }
      })
    }
  }, [inView])

  return (
  <motion.div 
    initial={{y: 1000, opacity: 0}}
    animate={animation}
    className={`${classes ? classes : ''}`}
  >
    {children}
  </motion.div>
  )
}

export default ScrollTransition