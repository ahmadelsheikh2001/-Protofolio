import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { BehanceIcon, DribbleIcon, Facebook, Instagram, LinkedIn, Medium, Twitter } from "../../../../UI/Icons";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from "framer-motion";

const SocialSection = () => {

  const SocialSection = useRef();
  const {t, i18n} = useTranslation();
  const [height, setHeight] = useState(0);
  const { ref, inView } = useInView();
  const animation = useAnimation();

  // useEffect(() => {
  //   Aos.init({
  //     duration: 600,
  //    dataAosEasing: "ease-in-sine"
  //   });
  //   return () => {};
  // },[])


  
  useEffect(() => {
    if(inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 2
        }
      })
    }else if(!inView) {
      animation.start({
        y: 100,
        opacity: 0,
      })
    }
  }, [inView])

  return (
    
    <ul 
      className="flex social_container"
    >
      <li>
        <a href="#" target='_blank' className='flex'>
          <BehanceIcon/>
          <p>{t('Behance')}</p>
        </a>
      </li>
      <li>
        <a href="#" target='_blank' className='flex'>
          <DribbleIcon/>
          <p>{t('Dribbble')}</p>
        </a>
      </li>
      <li>
        <a href="#" target='_blank' className='flex'>
          <LinkedIn/>
          <p>{t('Linked_In')}</p>
        </a>
      </li>
      <li>
        <a href="#" target='_blank' className='flex'>
          <Medium/>
          <p>{t('Medium')}</p>
        </a>
      </li>
      <li>
        <a href="#" target='_blank' className='flex'>
          <Instagram/>
          <p>{t('Instagram')}</p>
        </a>
      </li>
      <li>
        <a href="#" target='_blank' className='flex'>
          <Twitter/> 
          <p>{t('Twitter')}</p>
        </a>
      </li>
      {/* <li>
        <a href="#" target='_blank' className='flex'>
          <Facebook/>
          <p>{t('Facebook')}</p>
        </a>
      </li> */}
    </ul>
  );
};

export default SocialSection;