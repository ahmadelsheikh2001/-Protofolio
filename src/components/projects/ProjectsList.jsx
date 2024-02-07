import React from 'react';
import { NoDesignState } from '../../UI/Icons';
import SingleProject from './SingleProject';


const ProjectsList = ({ projects }) => {

  if(!projects.length) {
    return (<div className='center empty' style={{ margin: '20px 0' }}>
              <NoDesignState />
            </div>)
  }

  return (
    <div className="project_list_container">
      {projects.map(project => <SingleProject key={project.id} {...project}/>)}
   </div>
  );
};

export default ProjectsList