import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../../UI/Titles/SectionTitle/SectionTitle';
import { Container } from 'react-bootstrap'
import ResumeHeader from './resumeSections/ResumeHeader';
import ResumeContent from './resumeSections/ResumeContent';

import './resume.css';
import Workmates from './Workmates/Workmates';

const Resume = () => {

  const {t, i18n} = useTranslation();
  const [experiancies, setExperiancies] = useState([]);
  const [skills, setSkills] = useState([]);

  const currentExperiance = [
    {
      id: 1,
      logo: '',
      job: 'Digital Product Designer',
      comp: 'Salla',
      address: 'Saudi Arabia - Makkah',
      type: 'Full Time Remotly',
      date: '9/2021 – Present',
      desc: 'Working product designer in an Agile environment, Assisting in the ongoing product evolution, doing user research, identifying pain points, wire-framing, visual design, to reach our KPIs and metrics.'
    },
    {
      id: 2,
      logo: '',
      job: 'Freelancer',
      comp: 'ãN Design',
      type: 'Remotly',
      date: '5/2021 – Present',
      desc: 'My job is to create digital products that include an enjoyable user experience. I work as a freelancer with the owners of companies to create information architecture, wire-framing, and UI design.'
    },
    {
      id: 3,
      logo: '',
      job: 'UX Designer',
      comp: 'Baianat',
      address: 'Egypt - Maadi',
      type: 'Full Time',
      date: ' 11/2020 - 5/2021',
      desc: 'Responsible for creating products that have usability and ensuring a delightful user experience. Generated personas, user flows; specified user experience design through wireframes and testing.'
    },
    {
      id: 4,
      logo: '',
      job: 'UI/UX Designer',
      comp: 'Tech Steps',
      address: 'Egypt - Maadi',
      type: 'Full Time',
      date: '12/2019 – 11/2020',
      desc: 'I was responsible for creating digital products. Where I was sitting with stackholders to understand the requirements and work on them in an agile environment with the development team.'
    },
  ];

  const currentSkills = {
      exper: ['UX Strategy', 'Wireframes', 'Analysiz Data', 'User Research', 'Design System', 'Usability Testing', 'Micro Interaction', 'Rapid Prototyping', 'Interaction Design', 'Information Architecture'],
      softwares: ['Axure', 'Figma', 'Sketch', 'Illustrator', 'Balsamiq', 'Adobe XD', 'Photoshop', 'After effect', 'Principle App', 'Paper & Pencil'],
      languages: ['Arabic', 'English'],
      certifications: [
        {cert: 'User Experience Design', place: 'Udacity'},
        {cert: 'Product Manager', place: 'Udacity'},
        {cert: 'Product Analytics', place: 'Product School'}, 
      ]
    };

  useEffect(() => {
    setExperiancies(currentExperiance);
    setSkills(currentSkills);
  }, [])

  return (
    <>
      <div className="resume_page">
        <Container>
          <SectionTitle Title={t("Resume")} />
          <ResumeHeader />
          <ResumeContent experiancies={experiancies} skills={skills} />
        </Container>
        {/* <div className="resume-carousale"> */} {/*edit_khaled*/}
        {/* </div> */} {/*edit_khaled*/}
        <Workmates />
      </div>
    </>
  );
};

export default Resume;
