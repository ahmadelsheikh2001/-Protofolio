
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../../UI/Titles/SectionTitle/SectionTitle';
import ProjectsList from '../../../components/projects/ProjectsList';
import { useState } from 'react';

import './caseStudy.css';
import { useTranslation } from 'react-i18next';
import Banner from '../../../layout/visitor/banner/Banner';

const CaseStudy = () => {

  const DUMMY_PROJECTS = [
    {
      id: '1',
      dataType: "case-study",
      type: "Case Study",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: "../../assets/Rectangle 5.png",
    },
    {
      id: '2',
      dataType: "case-study",
      type: "Case Study",
      title: "Modern Website",
      prg: "This is a design for a furniture sales website, you can search for what you want, choose the furniture you want and ship it to anywhere you want.",
      imgSrc: "../../assets/Rectangle 5.png",
    },
    {
      id: '3',
      dataType: "case-study",
      type: "Case Study",
      title: "Zaynah App",
      prg: "This is a design for a mobile application to sell plants, you can find everything you want from different types of plants and choose from them, then you can ship them to anywhere you want.",
      imgSrc: "../../assets/Rectangle 5.png",
    },
    {
      id: '4',
      dataType: "case-study",
      type: "Case Study",
      title: "Kotoby App",
      prg: "This is a case study that shows everything you've done to help readers read books easily and find what they want from books, as well as exchange books between people.",
      imgSrc: "../../assets/Rectangle 5.png",
    },
    {
      id: '5',
      dataType: "case-study",
      type: "Case Study",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: "../../assets/Rectangle 5.png",
    },
    {
      id: '6',
      dataType: "case-study",
      type: "Case Study",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: "../../assets/Rectangle 5.png",
    },
    {
      id: '7',
      dataType: "case-study",
      type: "Case Study",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: "../../assets/Rectangle 5.png",
    }
  ];

  const [cases, setCases] = useState([]);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    setCases(DUMMY_PROJECTS);
  }, [])

  return (
    <section className='project_Section'>
      <Container>
        <SectionTitle Title={t('Case Studies')} />
        <ProjectsList projects={cases} />
      </Container>
      <Banner />
    </section>
  );
};
export default CaseStudy;