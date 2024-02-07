import React, { useState } from 'react';
import { motion } from 'framer-motion';


const ButtonTransition = ({ children }) => {

  const [hover, setHover] = useState(false);


  return (
    <motion.div
    initial={{scale: 1.2}}
    animate={{ scale: hover ? 1.07 : 1}}
    transition={{ type: "spring", stiffness: 1000 }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    // className='center'
    >
      {children}
    </motion.div>
  )
}

export default ButtonTransition