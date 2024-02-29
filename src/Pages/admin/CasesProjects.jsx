import React, { useEffect, useState } from 'react'
import AdminCards from '../../UI/Cards/AdminCards'
import UiProjectsList from '../../components/admin/projects/UiProjectsList'
import { useContext } from 'react';
import AdminContext from '../../store/admin-ctx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../../redux/slices/content.slice';

const CasesProjects = () => {
  const cases = useSelector((state)=>state.content.case)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchContent())
  },[])

  const ctx = useContext(AdminContext);
  const [projects, setProjects] = useState([]);

  const uiProjects = [
    {
      id: 1,
      img: '',
      name: 'تطبيق كار رينت',
      desc: 'هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ',
      liks: 245,
      date: '22 ديسمبر',
      show: false
    },
    {
      id: 2,
      img: '',
      name: 'تطبيق كار رينت',
      desc: 'هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ',
      liks: 245,
      date: '22 ديسمبر',
      show: true
    },
    {
      id: 3,
      img: '',
      name: 'تطبيق كار رينت',
      desc: 'هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ',
      liks: 245,
      date: '22 ديسمبر',
      show: false
    },
    {
      id: 4,
      img: '',
      name: 'تطبيق كار رينت',
      desc: 'هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ',
      liks: 245,
      date: '22 ديسمبر',
      show: true
    },
    {
      id: 5,
      img: '',
      name: 'تطبيق كار رينت',
      desc: 'هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ',
      liks: 245,
      date: '22 ديسمبر',
      show: false
    },
    {
      id: 6,
      img: '',
      name: 'تطبيق كار رينت',
      desc: 'هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ',
      liks: 245,
      date: '22 ديسمبر',
      show: false
    },
  ];
  
  useEffect(() => {  
    setProjects(uiProjects);
    ctx.setTitle('دراسة الحالات');  
  }, []);


  return (
    <AdminCards>
      <UiProjectsList setProjects={setProjects} projects={cases} designType={"case"}/>
    </AdminCards>
  )
}

export default CasesProjects