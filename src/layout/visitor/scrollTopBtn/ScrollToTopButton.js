import React, { useEffect } from 'react';
import './YourStylesheet.css'; // Import your stylesheet
import { ArrowUpIcon } from '../../../UI/Icons';
const ScrollToTopButton = () => {
  useEffect(() => {
    // Scroll back to top

    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    const offset = 50;
    const duration = 550;

    const handleScroll = () => {
      const progressWrap = document.querySelector('.progress-wrap');
      if (window.scrollY > offset) {
        progressWrap.classList.add('active-progress');
      } else {
        progressWrap.classList.remove('active-progress');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleClick = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    const progressWrap = document.querySelector('.progress-wrap');
    if (progressWrap) {
      progressWrap.addEventListener('click', handleClick);
    }

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('scroll', handleScroll);
      if (progressWrap) {
        progressWrap.removeEventListener('click', handleClick);
      }
    };

  }, []);

  return (
    <>
 
      <div className="progress-wrap">
      
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>

      </div>
    </>
  );
}

export default ScrollToTopButton; 