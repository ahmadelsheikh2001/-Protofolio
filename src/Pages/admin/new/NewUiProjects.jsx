import React from 'react'
import { FileIcons, HeartIcon, LinkIcon, PaintIcon, PaperIcon } from '../../../UI/Icons';
import AddNewProject from './AddNewProject';

const NewUiProjects = ({ type, data }) => {

  const enResource = [
    {
      text: 'صورة التصميم بالأبيض',
      placeHolder: 'قم بإدخال الأسم بالأنجليش',
      id: 'enLightimg',
      type: 'file',
      tag: 'input',
      icon: 'icon',
      image: true
    },
    {
      text: 'صورة التصميم بالأسود',
      placeHolder: 'قم بإدخال الأسم بالأنجليش',
      id: 'enDarkimg',
      type: 'file',
      tag: 'input',
      icon: 'icon',
      image: true
    },
    {
      text: 'ملف التصميم بالأبيض',
      placeHolder: 'قم بإدخال الملف الأبيض',
      id: 'enLightFile',
      type: 'file',
      tag: 'input',
      icon: <FileIcons/>
    },
    {
      text: 'ملف التصميم بالأسود',
      placeHolder: 'قم بإدخال الملف بالأسود',
      id: 'enDarkFile',
      type: 'file',
      tag: 'input',
      icon: <FileIcons/>
    },
    {
      text: 'أسم التصميم',
      placeHolder: 'قم بإدخال الأسم بالأنجليش',
      id: 'enName',
      type: 'text',
      tag: 'input',
      icon: <HeartIcon/>
    },
    {
      text: 'نوع التصميم',
      placeHolder: 'قم بإختيار النوع بالأنجليش',
      id: 'enType',
      type: 'selectBox',
      tag: 'select',
      icon: <PaintIcon/>
    },
    {
      text: 'وصف التصميم',
      placeHolder: 'قم بكتابة الوصف',
      id: 'enDesc',
      type: 'textarea',
      tag: 'textarea',
      icon: <PaperIcon/>
    },
  ];
  const arResource = [
    {
      text: 'صورة التصميم بالأبيض',
      placeHolder: 'قم بإدخال الأسم بالعربي',
      id: 'arLightimg',
      type: 'file',
      tag: 'input',
      icon: 'icon',
      image: true
    },
    {
      text: 'صورة التصميم بالأسود',
      placeHolder: 'قم بإدخال الأسم بالعربي',
      id: 'arDarkimg',
      type: 'file',
      tag: 'input',
      icon: 'icon',
      image: true
    },
    {
      text: 'ملف التصميم بالأبيض',
      placeHolder: 'قم بإدخال الملف الأبيض',
      id: 'arLightFile',
      type: 'file',
      tag: 'input',
      icon: <FileIcons/>
    },
    {
      text: 'ملف التصميم بالأسود',
      placeHolder: 'قم بإدخال الملف بالأسود',
      id: 'arDarkFile',
      type: 'file',
      tag: 'input',
      icon: <FileIcons/>
    },
    {
      text: 'أسم التصميم',
      placeHolder: 'قم بإدخال الأسم بالعربي',
      id: 'arName',
      type: 'text',
      tag: 'input',
      icon: <HeartIcon/>
    },
    {
      text: 'نوع التصميم',
      placeHolder: 'قم بإختيار النوع بالعربي',
      id: 'arType',
      type: 'selectBox',
      tag: 'select',
      icon: 'icon'
    },
    {
      text: 'وصف التصميم',
      placeHolder: 'قم بكتابة الوصف',
      id: 'arDesc',
      type: 'textarea',
      tag: 'textarea',
      icon: <PaperIcon/>
    },
  ];
  const otherResource = [
    {
      text: 'لينك بيهانس',
      placeHolder: 'قم بإدخال لينك بيهانس',
      id: 'behanceLink',
      type: 'text',
      tag: 'input',
      icon: <LinkIcon/>
    },
    {
      text: 'قم بإدخال لينك دريبل',
      placeHolder: 'قم بإدخال لينك دريبل',
      id: 'deibbleLink',
      type: 'text',
      tag: 'input',
      icon: <LinkIcon/>
    },
    {
      text: 'لينك ثيم فورست',
      placeHolder: 'قم بإدخال لينك ثيم فورست',
      id: 'themeForest',
      type: 'text',
      tag: 'input',
      icon: <LinkIcon/>
    },
    {
      text: 'لينك ميديم',
      placeHolder: 'قم بإدخال لينك ميديم',
      id: 'meduimLink',
      type: 'text',
      tag: 'input',
      icon: <LinkIcon/>
    },
  ];

  return (
    <AddNewProject currentData={data || {}} type={type} enResource={enResource} arResource={arResource} otherResource={otherResource} />
  )
}

export default NewUiProjects