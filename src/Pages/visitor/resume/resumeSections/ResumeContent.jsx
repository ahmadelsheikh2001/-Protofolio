import React from 'react'
import { useTranslation } from 'react-i18next'
import { SkillIconFour, SkillIconOne, SkillIconThree, SkillIConTTwo, Skills } from '../../../../UI/Icons'
import CardSkills from './CardSkills'
import Education from './Education'
import Experiance from './Experiance'

const ResumeContent = ({ experiancies, skills }) => {

  const {t, i18n} = useTranslation()

  return (
    <section className='resume-content'>
      <div className="left">
        <Experiance experiancies={experiancies} />
        <Education />
      </div>
      <div className="right">
        <h2 className='contentsectiontitle'><Skills />{t('Skills')}</h2>
        <CardSkills icon={<SkillIconOne />} title={t('Experience_Knowledge')} skills={skills?.exper || []} />
        <CardSkills icon={<SkillIConTTwo />}  title={t('Experience_Knowledge')} skills={skills?.softwares || []} />
        <CardSkills icon={<SkillIconThree />}  title={t('Experience_Knowledge')} skills={skills?.languages || []} />
        <CardSkills icon={<SkillIconFour />}  title={t('Experience_Knowledge')} skills={skills?.certifications || []} type='certifications' />
      </div>
    </section>
  )
}

export default ResumeContent