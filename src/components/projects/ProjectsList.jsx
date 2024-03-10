import React, { useEffect } from 'react';
import { NoDesignState } from '../../UI/Icons';
import SingleProject from './SingleProject';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../../redux/slices/content.slice';


const ProjectsList = ({projects}) => {
  console.log(projects);

  if (!projects?.length) {
    return (<div className='center empty' style={{ margin: '20px 0' }}>
      <NoDesignState />
    </div>)
  }

  return (
    <div className="project_list_container">
      {projects.map(project => <SingleProject key={project._id} {...project} />)}
    </div>
  );
};

export default ProjectsList