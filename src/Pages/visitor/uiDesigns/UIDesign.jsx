import React, { useState, useEffect } from 'react';
import UIHeader from './UIHeader';
import { Container } from "react-bootstrap";
import ProjectsList from '../../../components/projects/ProjectsList';

import './uiDesign.css';
import Banner from '../../../layout/visitor/banner/Banner';
import { fetchContent } from '../../../redux/slices/content.slice';
import { useDispatch, useSelector } from 'react-redux';

const UIDesign = () => {

  const [currentTab, setCurrentTab] = useState("all");
  const [currentProjects, setCurrentProjects] = useState([]);

  // ########## Duuuumyyyyy Fucken Arrrrrrraaaaaay ##############


  const All = [
    {
      id: 'ui-website-1',
      dataType: "website",
      type: "Website",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-website-2',
      dataType: "website",
      type: "Website",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-website-3',
      dataType: "website",
      type: "Website",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-mobile-1',
      dataType: "mobile-app",
      type: "Mobile App",
      title: "Modern Website",
      prg: "This is a design for a furniture sales website, you can search for what you want, choose the furniture you want and ship it to anywhere you want.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-mobile-2',
      dataType: "mobile-app",
      type: "Mobile App",
      title: "Modern Website",
      prg: "This is a design for a furniture sales website, you can search for what you want, choose the furniture you want and ship it to anywhere you want.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-mobile-3',
      dataType: "mobile-app",
      type: "Mobile App",
      title: "Modern Website",
      prg: "This is a design for a furniture sales website, you can search for what you want, choose the furniture you want and ship it to anywhere you want.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-mobile-4',
      dataType: "mobile-app",
      type: "Mobile App",
      title: "Modern Website",
      prg: "This is a design for a furniture sales website, you can search for what you want, choose the furniture you want and ship it to anywhere you want.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-dashboard-1',
      dataType: "dashboard",
      type: "Dashboard",
      title: "Kotoby App",
      prg: "This is a case study that shows everything you've done to help readers read books easily and find what they want from books, as well as exchange books between people.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-dashboard-2',
      dataType: "dashboard",
      type: "Dashboard",
      title: "Kotoby App",
      prg: "This is a case study that shows everything you've done to help readers read books easily and find what they want from books, as well as exchange books between people.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-dashboard-3',
      dataType: "dashboard",
      type: "Dashboard",
      title: "Kotoby App",
      prg: "This is a case study that shows everything you've done to help readers read books easily and find what they want from books, as well as exchange books between people.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-micro-1',
      dataType: "micro_interactions",
      type: "Micro Interactions",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-micro-2',
      dataType: "micro_interactions",
      type: "Micro Interactions",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: './assets/images.jpg',
    },
  ];
  const Website = [
    {
      id: 'ui-website-1',
      dataType: "website",
      type: "Website",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-website-2',
      dataType: "website",
      type: "Website",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-website-3',
      dataType: "website",
      type: "Website",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: './assets/images.jpg',
    },
  ];
  const Apps = [
    {
      id: 'ui-mobile-1',
      dataType: "mobile-app",
      type: "Mobile App",
      title: "Modern Website",
      prg: "This is a design for a furniture sales website, you can search for what you want, choose the furniture you want and ship it to anywhere you want.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-mobile-2',
      dataType: "mobile-app",
      type: "Mobile App",
      title: "Modern Website",
      prg: "This is a design for a furniture sales website, you can search for what you want, choose the furniture you want and ship it to anywhere you want.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-mobile-3',
      dataType: "mobile-app",
      type: "Mobile App",
      title: "Modern Website",
      prg: "This is a design for a furniture sales website, you can search for what you want, choose the furniture you want and ship it to anywhere you want.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-mobile-4',
      dataType: "mobile-app",
      type: "Mobile App",
      title: "Modern Website",
      prg: "This is a design for a furniture sales website, you can search for what you want, choose the furniture you want and ship it to anywhere you want.",
      imgSrc: './assets/images.jpg',
    },
  ];
  const Dashboard = [
    {
      id: 'ui-dashboard-1',
      dataType: "dashboard",
      type: "Dashboard",
      title: "Kotoby App",
      prg: "This is a case study that shows everything you've done to help readers read books easily and find what they want from books, as well as exchange books between people.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-dashboard-2',
      dataType: "dashboard",
      type: "Dashboard",
      title: "Kotoby App",
      prg: "This is a case study that shows everything you've done to help readers read books easily and find what they want from books, as well as exchange books between people.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-dashboard-3',
      dataType: "dashboard",
      type: "Dashboard",
      title: "Kotoby App",
      prg: "This is a case study that shows everything you've done to help readers read books easily and find what they want from books, as well as exchange books between people.",
      imgSrc: './assets/images.jpg',
    },
  ];
  const Micro = [
    {
      id: 'ui-micro-1',
      dataType: "micro_interactions",

      type: "Micro Interactions",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: './assets/images.jpg',
    },
    {
      id: 'ui-micro-2',
      dataType: "micro_interactions",
      type: "Micro Interactions",
      title: "E-courses",
      prg: "This is a case study of redesigning the Egyptian Railways website. I have done the UX Design to solve user problems and to create good design and ease of use of the website.",
      imgSrc: './assets/images.jpg',
    },
  ];


  useEffect(() => {
    setCurrentProjects(
      currentTab === 0 ? All :
        currentTab === 1 ? [] :
          currentTab === 2 ? Apps :
            currentTab === 3 ? Dashboard : Micro
    );
  }, [currentTab]);

  const disptach = useDispatch()
  const data = useSelector((state) => state.content.data)
  useEffect(() => {
    disptach(fetchContent())
  }, [])

  let filterdData = data
  if (currentTab != "all") {
    filterdData = filterdData.filter((ele) => ele.designType == currentTab)
  }

  return (
    <section className='project_Section ui'>
      <Container>
        <UIHeader setCurrentTab={setCurrentTab} currentTab={currentTab} />
        <ProjectsList projects={filterdData} />
      </Container>
      <Banner />
    </section>
  )
}

export default UIDesign