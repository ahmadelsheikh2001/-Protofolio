import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import AppContext from '../../../store/app-context';
import Hero from './hero/Hero';
import Social from './socials/Social'; 
import LastProjects from './lastProjects/LastProjects';
import Features from './features/Features';
import Services from './services/Services';
import Companies from './companies/Companies';
import Testimonials from './testimonials/Testimonials';
import Banner from '../../../layout/visitor/banner/Banner'; 

import './home.css';
import SomeWorks from './someWorks/SomeWorks';

const Home = () => {

  const ctx = useContext(AppContext);
  const [job, setJob] = useState({});
  const [comp, setComp] = useState({});
  const [companies, setCompanies] = useState([]);
  
  const DUMMY_COMPS = [
    {
      id: 1,
      name: 'Comp1',
      logo: './assets/images.jpg',
      href: '#'
    },
    {
      id: 2,
      name: 'Comp2',
      logo: './assets/images.jpg',
      href: '#'
    },
    {
      id: 3,
      name: 'Comp3',
      logo: './assets/images.jpg',
      href: '#'
    },
    {
      id: 4,
      name: 'Comp4',
      logo: './assets/images.jpg',
      href: '#'
    },
    {
      id: 5,
      name: 'Comp5',
      logo: './assets/images.jpg',
      href: '#'
    }
  ];


  useEffect(() => {
    setJob({
      en: {
        name: 'Digital Product Designer',
        url: '#'
      },
      ar: {
        name: 'مصمم منتجات رقمية',
      
      }
    });

    setComp({
      en: {
        name: 'Salla',
        url: '#'
      },
      ar: {
        name: 'سلة ',
       
      }
    });


    setCompanies(DUMMY_COMPS);

  }, []);

  let currentJob = ctx.lang === 'en' ? job.en : job.ar;
  let currentComp = ctx.lang === 'en' ? comp.en : comp.ar;


  return (
    <>
      <Hero comp={currentComp} job={currentJob} />
      <Social />
      <LastProjects />
      <Features />
      <Services />
      <SomeWorks />
      <Companies companies={companies} />
      <Testimonials />
      <Banner />
    </>
  )
}

export default Home