import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SkillIconFour, SkillIconOne, SkillIconThree, SkillIConTTwo, Skills } from '../../../../UI/Icons'
import CardSkills from './CardSkills'
import Education from './Education'
import Experiance from './Experiance'
import { fetchExperience } from '../../../../redux/slices/experience.slice'
import { useDispatch, useSelector } from 'react-redux'

const ResumeContent = ({ experiancies }) => {

  const {t, i18n} = useTranslation()
  const dispatch = useDispatch()
  const skills = useSelector((state) => state.experience.skills)
  const program = useSelector((state) => state.experience.program)
  const language = useSelector((state) => state.experience.language)
  let certificate = useSelector((state) => state.experience.certificate)
  certificate = certificate.filter((ele)=>ele.name)
  
  
  console.log(certificate);
  useEffect(() => {
    dispatch(fetchExperience())
  }, [])

  return (
    <section className='resume-content'>
      <div className="left">
        <Experiance/>
        <Education />
      </div>
      <div className="right">
        <h2 className='contentsectiontitle'><Skills />{t('Skills')}</h2>
        <CardSkills icon={<SkillIconOne />} title={t('Experience_Knowledge')} data={skills} skills={skills || []} />
        <CardSkills icon={<SkillIConTTwo />}  title={t('Softwares')} data={program} skills={skills || []} />
        <CardSkills icon={<SkillIconThree />}  title={t('Languages')} data={language} skills={skills || []} />
        <CardSkills icon={<SkillIconFour />}  title={t('Certifications')}data={certificate}  skills={skills || []} type='certifications' />
      </div>
    </section>
  )
}

export default ResumeContent