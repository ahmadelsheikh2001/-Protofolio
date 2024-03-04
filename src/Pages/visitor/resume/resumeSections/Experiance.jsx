import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LightIcon } from '../../../../UI/Icons';
import SingleExperiance from './SingleExperiance';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExperience } from '../../../../redux/slices/experience.slice';

const Experiance = ({ experiancies }) => {

  const dispatch = useDispatch()
  const experiences = useSelector((state) => state.experience.experience)
  const skills = useSelector((state) => state.experience.skills)
  useEffect(() => {
    dispatch(fetchExperience())
  }, [])

  const {t, i18n} = useTranslation();

  return (
    <div className='experiance'>
      <h2 className='contentsectiontitle'><LightIcon />{t('Work_Experience')}</h2>
      {experiences?.map(experiance => <SingleExperiance key={experiance._id} data={experiance}_ />)}
    </div>
  )
}

export default Experiance