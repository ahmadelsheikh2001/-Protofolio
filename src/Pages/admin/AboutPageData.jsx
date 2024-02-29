import React, { useEffect, useState } from 'react'
import AdminCards from '../../UI/Cards/AdminCards'
import Compaines from '../../components/admin/companies/Compaines';
import Form from '../../components/admin/Form';
import { fetchExperience } from '../../redux/slices/experience.slice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAbout } from '../../redux/slices/about.slice';

const AboutPageData = () => {
  const [downloadedData, setDownloadedData] = useState({});
  const [downloadedCompany, setDownloadedCompany] = useState([]);
  const [downloadedCertificaties, setDownloadedCertificaties] = useState([]);

// Resources : =
  const resourceData = [
    {
      text: 'العنوان الرئيسي بالأنجليش',
      placeHolder: 'قم بإدخال العنوان بالأنجليش',
      id: 'title'
    },
    {
      text: 'العنوان الرئيسي بالعربي',
      placeHolder: 'قم بإدخال العنوان بالعربي',
      id: 'title_ar'
    },
    {
      text: 'المسمي الوظيفي بالأنجليش',
      placeHolder: 'قم بإدخال المسمي الوظيفي بالأنجليش',
      id: 'job'
    },
    {
      text: 'المسمي الوظيفي بالعربي',
      placeHolder: 'قم بإدخال المسمي الوظيفي بالعربي',
      id: 'job_ar'
    },
    {
      text: 'لينك المسمي الوظيفي بالأنجليش',
      placeHolder: 'قم بإدخال لينك المسمي الوظيفي بالأنجليش',
      id: 'job_link'
    },
    {
      text: 'لينك المسمي الوظيفي بالعربي',
      placeHolder: 'قم بإدخال لينك المسمي الوظيفي بالعربي',
      id: 'job_link_ar'
    },
    {
      text: 'أسم الشركة بالأنجليش',
      placeHolder: 'قم بإدخال أسم الشركة بالأنجليش',
      id: 'company'
    },
    {
      text: 'أسم الشركة بالعربي',
      placeHolder: 'قم بإدخال أسم الشركة بالعربي',
      id: 'company_ar'
    },
    {
      text: 'لينك الشركة بالأنجليش',
      placeHolder: 'قم بإدخال لينك الشركة بالأنجليش',
      id: 'company_link'
    },
    {
      text: 'لينك الشركة بالعربي',
      placeHolder: 'قم بإدخال لينك الشركة بالعربي',
      id: 'company_link_ar'
    },
    {
      text: 'وصف المقدمة بالأنجليش',
      placeHolder: 'قم بإدخال وصف المقدمة بالأنجليش',
      id: 'intro'
    },
    {
      text: 'وصف المقدمة بالعربي',
      placeHolder: 'قم بإدخال وصف المقدمة بالعربي',
      id: 'intro_ar'
    },
  ];
  const resourceData2 = [
    {
      text: 'لوجود الشركة',
      placeHolder: 'لوجود الشركة',
      id: 'logo',
      type: 'file'
    },
    {
      text: 'أسم الشركة بالأنجليش',
      placeHolder: 'قم بإدخال أسم الشركة بالأنجليش',
      id: 'company',
      type: 'text'
    },
    {
      text: 'أسم الشركة بالعربي',
      placeHolder: 'قم بإدخال أسم الشركة بالعربي',
      id: 'company_ar',
      type: 'text'
    },
    {
      text: 'لينك موقع الشركة بالأنجليش',
      placeHolder: 'قم بإدخال لينك موقع الشركة بالأنجليش',
      id: 'link',
      type: 'text'
    },
    {
      text: 'لينك موقع الشركة بالعربي',
      placeHolder: 'قم بإدخال لينك موقع الشركة بالعربي',
      id: 'link_ar',
      type: 'text'
    },
    {
      text: 'المسمي الوظيفي بالأنجليش',
      placeHolder: 'قم بإدخال المسمي الوظيفي بالأنجليش',
      id: 'job',
      type: 'text'
    },
    {
      text: 'المسمي الوظيفي بالعربي',
      placeHolder: 'قم بإدخال المسمي الوظيفي بالعربي',
      id: 'job_ar',
      type: 'text'
    },
    {
      text: 'تاريخ البداية في العمل',
      placeHolder: 'قم بإدخال تاريخ البداية',
      id: 'start',
      type: 'date'
    },
    {
      text: 'تاريخ النهاية في العمل',
      placeHolder: 'قم بإدخال تاريخ النهاية',
      id: 'end',
      type: 'date'
    },
  ];
  const resourceCertificate = [
    {
      text: 'لوجو الشهادة',
      placeHolder: 'لوجود الشهادة',
      id: 'logo',
      type: 'file'
    },
    {
      text: 'أسم الشهادة بالأنجليش',
      placeHolder: 'قم بإدخال أسم الشهادة بالأنجليش',
      id: 'certificate',
      type: 'text'
    },
    {
      text: 'أسم الشهادة بالعربي',
      placeHolder: 'قم بإدخال أسم الشهادة بالعربي',
      id: 'certificate_ar',
      type: 'text'
    }
  ];

  // CurrentData

  const currentData = 
  {
    enTitle: 'English Title',
    arTitle: 'العنوان بالعربى',
    enJob: 'developer',
    arJob: 'مطور',
  };
  const curretnCompany = [
    {
      id: 1,
      data:{
          enName: 'English Name',
          arName: 'أسم الشركة',
          logo: 'data:image/png;base64,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',
          enLink: 'enLink',
          arLink: 'arLink',
          enJob: 'enjob',
          arJob: 'arJob',
          start: '22/7/2020',
          end: '12/2/2019',
        }
    },
    {
      id: 2,
      data: {
          enName: 'comp2',
          arName: 'الشركة2',
          logo: 'data:image/png;base64,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',
          enLink: 'Link',
          arLink: 'Link',
          enJob: 'enjob',
          arJob: 'arJob',
          start: '22/7/2020',
          end: '12/2/2022',
        }
    },
    {
      id: 3,
      data: {
          enName: 'comp3',
          arName: 'الشركة3',
          logo: 'data:image/png;base64,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',
          enLink: 'Link',
          arLink: 'Link',
          enJob: 'enjob',
          arJob: 'arJob',
          start: '22/7/2020',
          end: '12/2/2022',
        }
    },
  ];
  const curretnCertificate = [
    {
      id: 1,
      data:{
          logo: 'data:image/jpeg;base64,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',
          lightFile: 'Light File',
          darkFile: 'Dark File',
        }
    }
  ];

  
  useEffect(() => {
    currentData && setDownloadedData(currentData);
    curretnCompany && setDownloadedCompany(curretnCompany);
    curretnCertificate && setDownloadedCertificaties(curretnCertificate);
  }, []);





  const dispatch = useDispatch()
  const experience = useSelector((state) => state.experience.experience)
  const certificate = useSelector((state) => state.experience.certificate)
  let about = useSelector((state) => state.about.data)
  console.log(experience);
  const [aboutDate, setAboutDate] = useState({})
  useEffect(() => {
    if (about.length) {
      setAboutDate(about[0])
    }
  }, [about])
  useEffect(() => {
    dispatch(fetchExperience())
    dispatch(fetchAbout())
  }, [])


  return (
    <>
    <AdminCards>
      <Form type='about_page' setData={setAboutDate} update={about.length ? true : false} data={aboutDate} resource={resourceData} />
    </AdminCards>
    <AdminCards>
      <Compaines type='about_page' certification="experience" resource={resourceData2} curretnCompany={experience} />
    </AdminCards>
    <AdminCards>
      <Compaines type='resume_page' certification='certificate' resource={resourceCertificate} curretnCompany={certificate} />
    </AdminCards>
    </>
  )
}

export default AboutPageData