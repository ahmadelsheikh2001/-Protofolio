import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SingleIconThree, SingleIconTwo, EducationIcon, GraduationIcon } from '../../../../UI/Icons'
import ScrollTransition from '../../../../UI/ScrollTransition';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExperience } from '../../../../redux/slices/experience.slice';

const Education = () => {

  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const [elementTop, setElemenTop] = useState(0);

  useEffect(() => {
    setElemenTop(ref?.current?.offsetTop);
  }, []);

  const [data, setData] = useState()
  const dispatch = useDispatch()
  const education = useSelector((state) => state.experience.education)
  useEffect(() => {
    dispatch(fetchExperience())
  }, [])
  useEffect(() => {
    if (education.length) {
      setData(education[0])
    }
  }, [education])

  console.log(data);
  return (
    <div ref={ref} className='experiance'>
      <h2 className='contentsectiontitle'><GraduationIcon />{t('Education')}</h2>
      <div className='single_ex'>
        <ScrollTransition elementTop={elementTop} classes="left">
          <img src='./assets/Ellipse 665.png' />
        </ScrollTransition>
        <ScrollTransition elementTop={elementTop} delay={.2} classes="right">
          <div className='job_and_comp flex'><EducationIcon /><p>{i18n.language == "en" ? data?.certificate : data?.certificate_ar}<span> at </span><a target='_blank' href={i18n.language == "en" ? data?.company :data?.company_ar}>{i18n.language == "en" ? data?.collage : data?.collage_ar}</a></p></div>
          {/* <div className='job_and_comp flex'><EducationIcon /><p>Bachelor of Computer Science<span> at </span><a target='_blank' href='#'>Arab Open University</a></p></div> */}
          <h5 className='address flex'><SingleIconTwo />{i18n.language == "en" ? data?.location : data?.location_ar}</h5>
          <span className='date flex'><SingleIconThree />{data?.start} - {data?.end}</span>
        </ScrollTransition>
      </div>
    </div>
  )
}

export default Education