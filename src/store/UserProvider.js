import React, { useEffect, useState } from 'react'
import UserContext from './user-context'

const UserProvider = props => {

  const [userData, setUserData] = useState({});
  const [courses, setCourses] = useState([]);
  const [appoinments, setAppoinments] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [newProjects, setNewProjects] = useState([]);

  useEffect(() => {
    setUserData({
      name: 'Mostafa Kamel',
      email: 'mostafa@example.com',
      gender: 'male',
      phoneNumber: '0121032129',
      password: 1234567
    });
    
    setCourses([
      {name: 'T Plants. Website T Plants',prec: '30%'},
      {name: 'T Plants. Website T Plants',prec: '40%'},
      {name: 'T Plants. Website T Plants',prec: '80%'},
      {name: 'T Plants. Website T Plants',prec: '100%'}
    ]);

    setAppoinments([
      {date: 'sun, 03Frb', time: '09:00 am - 10:00 am', status: 'wating'},
      {date: 'sun, 03Frb', time: '09:00 am - 10:00 am', status: 'cancelled'},
      {date: 'sun, 03Frb', time: '09:00 am - 10:00 am', status: 'finished'},
      {date: 'sun, 03Frb', time: '09:00 am - 10:00 am', status: 'wating'},
    ]);

    setPurchases([
      {name: 'T Plants. Website', fileType: 'Adobe XD', productType: 'Full Product'},
      {name: 'T Plants. Website', fileType: 'Adobe XD', productType: 'Full Product'},
      {name: 'T Plants. Website', fileType: 'Adobe XD', productType: 'Full Product'}
    ]);

    setNewProjects([
      {budget: '1k - 2k', timeline: '1 - 2 month', type: 'App Design', status: 'wating'},
      {budget: '1k - 2k', timeline: '1 - 2 month', type: 'App Design', status: 'finished'},
      {budget: '1k - 2k', timeline: '1 - 2 month', type: 'App Design', status: 'cancelled'},
      {budget: '1k - 2k', timeline: '1 - 2 month', type: 'App Design', status: 'wating'},
    ])
  }, [])


  const changeNameHandler = newName => {
    setUserData({...userData, name: newName});
  };

  const changeEmail = newEmail => {
    setUserData({...userData, email: newEmail});
  };

  const changePhoneNumber = newNumber => {
    setUserData({...userData, phoneNumber: newNumber});
  };

  const changePassword = newPassword => {
    setUserData({...userData, password: newPassword});
  };


  return (
    <UserContext.Provider value={{
      user: userData,
      courses,
      appoinments,
      purchases,
      newProjects,
      editName: changeNameHandler,
      editEmail: changeEmail,
      editNumber: changePhoneNumber,
      editPassword: changePassword,
    }}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider