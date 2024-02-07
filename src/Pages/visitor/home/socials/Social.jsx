import { useTranslation } from "react-i18next";
import { BehanceIcon, DribbleIcon, Facebook, Instagram, LinkedIn, Medium, Twitter } from "../../../../UI/Icons";
import ButtonTransition from "../../../../UI/Buttons/ButtonTransition";
import { motion } from 'framer-motion';

import './social.css';

const Social = () => {

  const {t, i18n} = useTranslation();

  const animation = {
    y: 0,
    opacity: 1
  }



  return (
    <section className='social_section container'>      
      <ul className="flex social_container">
        <motion.li
          initial={{opacity: 0, y: 100}}
          animate={animation}
          transition={{type: 'spring', duration: 1, delay: 1}}
        >
          <ButtonTransition>
            <a href="#" target='_blank' className='flex'>
              <BehanceIcon/>
              <p>{t('Behance')}</p>
            </a>
          </ButtonTransition>
        </motion.li>
        <motion.li
          initial={{opacity: 0, y: 100}}
          animate={animation}
          transition={{type: 'spring', duration: 1, delay: 1.2}}
        >
          <ButtonTransition>
            <a href="#" target='_blank' className='flex'>
              <DribbleIcon/>
              <p>{t('Dribbble')}</p>
            </a>
          </ButtonTransition>
        </motion.li>
        <motion.li
          initial={{opacity: 0, y: 100}}
          animate={animation}
          transition={{type: 'spring', duration: 1, delay: 1.4}}
        >
          <ButtonTransition> 
            <a href="#" target='_blank' className='flex'>
              <LinkedIn/>
              <p>{t('Linked_In')}</p>
            </a>
          </ButtonTransition>
        </motion.li>
        <motion.li
          initial={{opacity: 0, y: 100}}
          animate={animation}
          transition={{type: 'spring', duration: 1, delay: 1.6}}
        >
          <ButtonTransition>
            <a href="#" target='_blank' className='flex'>
              <Medium/>
              <p>{t('Medium')}</p>
            </a>
          </ButtonTransition>
        </motion.li>
        <motion.li
          initial={{opacity: 0, y: 100}}
          animate={animation}
          transition={{type: 'spring', duration: 1, delay: 1.8}}
        >
          <ButtonTransition>
            <a href="#" target='_blank' className='flex'>
              <Instagram/>
              <p>{t('Instagram')}</p>
            </a>
          </ButtonTransition>
        </motion.li>
        <motion.li
          initial={{opacity: 0, y: 100}}
          animate={animation}
          transition={{type: 'spring', duration: 1, delay: 2}}
        >
          <ButtonTransition>
            <a href="#" target='_blank' className='flex'>
              <Twitter/> 
              <p>{t('Twitter')}</p>
            </a>
          </ButtonTransition>
        </motion.li>
        <motion.li
          initial={{opacity: 0, y: 100}}
          animate={animation}
          transition={{type: 'spring', duration: 1, delay: 2.2}}
        >
         <ButtonTransition>
            <a href="#" target='_blank' className='flex'>
              <Facebook/>
              <p>{t('Facebook')}</p>
            </a>
          </ButtonTransition>
        </motion.li>
      </ul>
    </section>
  )
}

export default Social;