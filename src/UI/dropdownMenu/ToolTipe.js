import React from 'react';
import { motion } from 'framer-motion';

import './tooltip.css';

const ToolTipe = ({ children }) => {
  return (
    <motion.p
      className='tooltip d-none d-md-block'
      initial={{scale: 0, x: '-50%', y: '-100%', opacity: 0}}
      animate={{scale: 1, x: '-50%', y: '0%', opacity: 1}}
      exit={{scale: 0, x: '-50%', y: '-100%', opacity: 0}}
      // transition={{duration: .3}}
      transition={{ type: "spring", stiffness: 300 }}
    >
      { children }
    </motion.p>
  )
}

export default ToolTipe