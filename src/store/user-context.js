import React from "react";


const UserContext = React.createContext({
  user: {},
  courses: [],
  appoinments: [], 
  purchases: [],
  newProjects: [],
  editName: ()=>{},
  editEmail: ()=>{},
  editNumber: ()=>{},
  editPassword: ()=>{},
});

export default UserContext;