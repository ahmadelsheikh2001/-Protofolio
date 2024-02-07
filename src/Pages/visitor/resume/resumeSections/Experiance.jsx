import React from 'react';
import { useTranslation } from 'react-i18next';
import { LightIcon } from '../../../../UI/Icons';
import SingleExperiance from './SingleExperiance';

const Experiance = ({ experiancies }) => {

  const {t, i18n} = useTranslation();

  return (
    <div className='experiance'>
      <h2 className='contentsectiontitle'><LightIcon />{t('Work_Experience')}</h2>
      {experiancies?.map(experiance => <SingleExperiance key={experiance.id} data={experiance} />)}
    </div>
  )
}

export default Experiance