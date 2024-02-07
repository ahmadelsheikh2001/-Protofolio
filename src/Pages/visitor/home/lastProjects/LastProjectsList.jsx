import { useRef, useState, useEffect } from "react";
import { motion } from 'framer-motion'; 
import SingleLastProject from './SingleLastProject';


const LastProjectsList = ({ projects }) => {
  
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [projects]);


  // ============================

  useEffect(() => {
    setElementTop(carousel.current.offsetTop)
  }, []);
  

  return (
    <div className="last_projects_container">

      <motion.div ref={carousel} whileTap={{cursor: 'grabbing'}}  className="carousel">

        <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className="inner-carousel">

          {projects.map((project, i) => 
          <SingleLastProject 
            index={i} 
            elementTop={elementTop}
            key={project.id} 
            {...project} 
          />)}
          
        </motion.div>
        
      </motion.div>

    </div>
  );
};

export default LastProjectsList;