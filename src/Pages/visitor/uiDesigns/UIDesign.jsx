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

  const disptach = useDispatch()
  const data = useSelector((state) => state.content.design)
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
        <ProjectsList projects={filterdData}/>
      </Container>
      <Banner />
    </section>
  )
}

export default UIDesign