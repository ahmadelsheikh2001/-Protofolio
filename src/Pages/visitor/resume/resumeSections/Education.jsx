import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SingleIconThree, SingleIconTwo, EducationIcon, GraduationIcon } from '../../../../UI/Icons'
import ScrollTransition from '../../../../UI/ScrollTransition';

const Education = () => {

  const {t, i18n} = useTranslation();
  const ref = useRef(null);
  const [elementTop, setElemenTop] = useState(0);

  useEffect(() => {
    setElemenTop(ref.current.offsetTop);
  }, []);

  return (
    <div ref={ref} className='experiance'>
      <h2 className='contentsectiontitle'><GraduationIcon />{t('Education')}</h2>
      <div className='single_ex'>
        <ScrollTransition elementTop={elementTop} classes="left">
          <img src='./assets/Ellipse 665.png' />
        </ScrollTransition>
        <ScrollTransition elementTop={elementTop} delay={.2} classes="right">
          <div className='job_and_comp flex'><EducationIcon /><p>Bachelor of Computer Science<span> at </span><a target='_blank' href='#'>Arab Open University</a></p></div>
          <h5 className='address flex'><SingleIconTwo />Egypt - Cairo</h5>
          <span className='date flex'><SingleIconThree />2014 – 2018</span>
        </ScrollTransition>
    </div>
    </div>
  )
}

export default Education