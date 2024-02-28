import React from "react";
import { useTranslation } from "react-i18next";
import { BriefIcon, BudgetIcon, PhoneIcon } from "../../../../UI/Icons";

import "./newSidebar.css";

function NewProjectSidebar(props) {
  const { t, i18n } = useTranslation();
  const lamb_img = {
    active_1: (
      <svg
        width="280"
        height="127"
        viewBox="0 0 280 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.13 99.26C30.5155 99.26 33.26 96.5155 33.26 93.13C33.26 89.7445 30.5155 87 27.13 87C23.7445 87 21 89.7445 21 93.13C21 96.5155 23.7445 99.26 27.13 99.26Z"
          fill="#FF9452"
        />
        <path d="M27.0056 0H26.3516V61.61H27.0056V0Z" fill="#C7C7C7" />
        <path
          d="M0 87.3261L2.14999 92.0451H51.218L53.355 87.3261L32.468 72.8701H20.89L0 87.3261Z"
          fill="#C9BED4"
        />
        <path
          d="M19.4434 58.9365L20.8944 72.8705H32.4684L33.9194 58.9365H19.4434Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M21.157 73.363L21 71.863L32.973 71L32.731 73.359L21.157 73.363Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M0.00683594 87.333L2.15085 92.045H51.2188L53.3628 87.333H0.00683594Z"
          fill="black"
        />
        <path
          d="M71.13 126.26C74.5155 126.26 77.26 123.515 77.26 120.13C77.26 116.744 74.5155 114 71.13 114C67.7445 114 65 116.744 65 120.13C65 123.515 67.7445 126.26 71.13 126.26Z"
          fill="#FF9452"
        />
        <path d="M71.531 0H70.877V89.901H71.531V0Z" fill="#C7C7C7" />
        <path
          d="M44.5254 115.619L46.6754 120.338H95.7434L97.8804 115.619L76.9934 101.156H65.4194L44.5254 115.619Z"
          fill="#C9BED4"
        />
        <path
          d="M63.9688 87.2275L65.4198 101.155H76.9938L78.4448 87.2275H63.9688Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M44.5312 115.618L46.6752 120.337H95.7502L97.8872 115.618H44.5312Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M65.4197 101.155L65.2627 99.655L77.2357 98.792L76.9937 101.151L65.4197 101.155Z"
          fill="black"
        />
        <path
          opacity="0.7"
          d="M209.13 99.26C212.516 99.26 215.26 96.5155 215.26 93.13C215.26 89.7445 212.516 87 209.13 87C205.744 87 203 89.7445 203 93.13C203 96.5155 205.744 99.26 209.13 99.26Z"
          fill="white"
        />
        <path d="M209.006 0H208.352V61.61H209.006V0Z" fill="#C7C7C7" />
        <path
          d="M182 87.3261L184.15 92.0451H233.218L235.355 87.3261L214.468 72.8701H202.89L182 87.3261Z"
          fill="#C9BED4"
        />
        <path
          d="M201.443 58.9365L202.894 72.8705H214.468L215.919 58.9365H201.443Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M203.157 73.363L203 71.863L214.973 71L214.731 73.359L203.157 73.363Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M182.007 87.333L184.151 92.045H233.219L235.363 87.333H182.007Z"
          fill="black"
        />
        <path
          opacity="0.7"
          d="M253.13 126.26C256.516 126.26 259.26 123.515 259.26 120.13C259.26 116.744 256.516 114 253.13 114C249.744 114 247 116.744 247 120.13C247 123.515 249.744 126.26 253.13 126.26Z"
          fill="white"
        />
        <path d="M253.531 0H252.877V89.901H253.531V0Z" fill="#C7C7C7" />
        <path
          d="M226.525 115.619L228.675 120.338H277.743L279.88 115.619L258.993 101.156H247.419L226.525 115.619Z"
          fill="#C9BED4"
        />
        <path
          d="M245.969 87.2275L247.42 101.155H258.994L260.445 87.2275H245.969Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M226.531 115.618L228.675 120.337H277.75L279.887 115.618H226.531Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M247.42 101.155L247.263 99.655L259.236 98.792L258.994 101.151L247.42 101.155Z"
          fill="black"
        />
      </svg>
    ),
    active_2: (
      <svg
        width="280"
        height="127"
        viewBox="0 0 280 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.13 99.26C30.5155 99.26 33.26 96.5155 33.26 93.13C33.26 89.7445 30.5155 87 27.13 87C23.7445 87 21 89.7445 21 93.13C21 96.5155 23.7445 99.26 27.13 99.26Z"
          fill="#FF9452"
        />
        <path d="M27.0056 0H26.3516V61.61H27.0056V0Z" fill="#C7C7C7" />
        <path
          d="M0 87.3261L2.14999 92.0451H51.218L53.355 87.3261L32.468 72.8701H20.89L0 87.3261Z"
          fill="#C9BED4"
        />
        <path
          d="M19.4434 58.9365L20.8944 72.8705H32.4684L33.9194 58.9365H19.4434Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M21.157 73.363L21 71.863L32.973 71L32.731 73.359L21.157 73.363Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M0.00683594 87.333L2.15085 92.045H51.2188L53.3628 87.333H0.00683594Z"
          fill="black"
        />
        <path
          d="M71.13 126.26C74.5155 126.26 77.26 123.515 77.26 120.13C77.26 116.744 74.5155 114 71.13 114C67.7445 114 65 116.744 65 120.13C65 123.515 67.7445 126.26 71.13 126.26Z"
          fill="#FF9452"
        />
        <path d="M71.531 0H70.877V89.901H71.531V0Z" fill="#C7C7C7" />
        <path
          d="M44.5254 115.619L46.6754 120.338H95.7434L97.8804 115.619L76.9934 101.156H65.4194L44.5254 115.619Z"
          fill="#C9BED4"
        />
        <path
          d="M63.9688 87.2275L65.4198 101.155H76.9938L78.4448 87.2275H63.9688Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M44.5312 115.618L46.6752 120.337H95.7502L97.8872 115.618H44.5312Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M65.4197 101.155L65.2627 99.655L77.2357 98.792L76.9937 101.151L65.4197 101.155Z"
          fill="black"
        />
        <path
          d="M209.13 99.26C212.516 99.26 215.26 96.5155 215.26 93.13C215.26 89.7445 212.516 87 209.13 87C205.744 87 203 89.7445 203 93.13C203 96.5155 205.744 99.26 209.13 99.26Z"
          fill="#FF9452"
        />
        <path d="M209.006 0H208.352V61.61H209.006V0Z" fill="#C7C7C7" />
        <path
          d="M182 87.3261L184.15 92.0451H233.218L235.355 87.3261L214.468 72.8701H202.89L182 87.3261Z"
          fill="#C9BED4"
        />
        <path
          d="M201.443 58.9365L202.894 72.8705H214.468L215.919 58.9365H201.443Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M203.157 73.363L203 71.863L214.973 71L214.731 73.359L203.157 73.363Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M182.007 87.333L184.151 92.045H233.219L235.363 87.333H182.007Z"
          fill="black"
        />
        <path
          opacity="0.7"
          d="M253.13 126.26C256.516 126.26 259.26 123.515 259.26 120.13C259.26 116.744 256.516 114 253.13 114C249.744 114 247 116.744 247 120.13C247 123.515 249.744 126.26 253.13 126.26Z"
          fill="white"
        />
        <path d="M253.531 0H252.877V89.901H253.531V0Z" fill="#C7C7C7" />
        <path
          d="M226.525 115.619L228.675 120.338H277.743L279.88 115.619L258.993 101.156H247.419L226.525 115.619Z"
          fill="#C9BED4"
        />
        <path
          d="M245.969 87.2275L247.42 101.155H258.994L260.445 87.2275H245.969Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M226.531 115.618L228.675 120.337H277.75L279.887 115.618H226.531Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M247.42 101.155L247.263 99.655L259.236 98.792L258.994 101.151L247.42 101.155Z"
          fill="black"
        />
      </svg>
    ),
    active_3: (
      <svg
        width="280"
        height="127"
        viewBox="0 0 280 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.13 99.26C30.5155 99.26 33.26 96.5155 33.26 93.13C33.26 89.7445 30.5155 87 27.13 87C23.7445 87 21 89.7445 21 93.13C21 96.5155 23.7445 99.26 27.13 99.26Z"
          fill="#FF9452"
        />
        <path d="M27.0056 0H26.3516V61.61H27.0056V0Z" fill="#C7C7C7" />
        <path
          d="M0 87.3261L2.14999 92.0451H51.218L53.355 87.3261L32.468 72.8701H20.89L0 87.3261Z"
          fill="#C9BED4"
        />
        <path
          d="M19.4434 58.9365L20.8944 72.8705H32.4684L33.9194 58.9365H19.4434Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M21.157 73.363L21 71.863L32.973 71L32.731 73.359L21.157 73.363Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M0.00683594 87.333L2.15085 92.045H51.2188L53.3628 87.333H0.00683594Z"
          fill="black"
        />
        <path
          d="M71.13 126.26C74.5155 126.26 77.26 123.515 77.26 120.13C77.26 116.744 74.5155 114 71.13 114C67.7445 114 65 116.744 65 120.13C65 123.515 67.7445 126.26 71.13 126.26Z"
          fill="#FF9452"
        />
        <path d="M71.531 0H70.877V89.901H71.531V0Z" fill="#C7C7C7" />
        <path
          d="M44.5254 115.619L46.6754 120.338H95.7434L97.8804 115.619L76.9934 101.156H65.4194L44.5254 115.619Z"
          fill="#C9BED4"
        />
        <path
          d="M63.9688 87.2275L65.4198 101.155H76.9938L78.4448 87.2275H63.9688Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M44.5312 115.618L46.6752 120.337H95.7502L97.8872 115.618H44.5312Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M65.4197 101.155L65.2627 99.655L77.2357 98.792L76.9937 101.151L65.4197 101.155Z"
          fill="black"
        />
        <path
          d="M209.13 99.26C212.516 99.26 215.26 96.5155 215.26 93.13C215.26 89.7445 212.516 87 209.13 87C205.744 87 203 89.7445 203 93.13C203 96.5155 205.744 99.26 209.13 99.26Z"
          fill="#FF9452"
        />
        <path d="M209.006 0H208.352V61.61H209.006V0Z" fill="#C7C7C7" />
        <path
          d="M182 87.3261L184.15 92.0451H233.218L235.355 87.3261L214.468 72.8701H202.89L182 87.3261Z"
          fill="#C9BED4"
        />
        <path
          d="M201.443 58.9365L202.894 72.8705H214.468L215.919 58.9365H201.443Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M203.157 73.363L203 71.863L214.973 71L214.731 73.359L203.157 73.363Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M182.007 87.333L184.151 92.045H233.219L235.363 87.333H182.007Z"
          fill="black"
        />
        <path
          d="M253.13 126.26C256.516 126.26 259.26 123.515 259.26 120.13C259.26 116.744 256.516 114 253.13 114C249.744 114 247 116.744 247 120.13C247 123.515 249.744 126.26 253.13 126.26Z"
          fill="#FF9452"
        />
        <path d="M253.531 0H252.877V89.901H253.531V0Z" fill="#C7C7C7" />
        <path
          d="M226.525 115.619L228.675 120.338H277.743L279.88 115.619L258.993 101.156H247.419L226.525 115.619Z"
          fill="#C9BED4"
        />
        <path
          d="M245.969 87.2275L247.42 101.155H258.994L260.445 87.2275H245.969Z"
          fill="#C9BED4"
        />
        <path
          opacity="0.1"
          d="M226.531 115.618L228.675 120.337H277.75L279.887 115.618H226.531Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M247.42 101.155L247.263 99.655L259.236 98.792L258.994 101.151L247.42 101.155Z"
          fill="black"
        />
      </svg>
    ),
  };
  const active = (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4114 0C7.36238 0 0 7.14931 0 15.9398C0 24.7302 7.36238 31.8795 16.4114 31.8795C25.4605 31.8795 32.8229 24.7229 32.8229 15.9398C32.8229 7.15663 25.4605 0 16.4114 0ZM25.5833 11.7434L15.0923 21.8489C14.7915 22.1429 14.3897 22.3109 13.969 22.3183C13.5484 22.3257 13.1409 22.172 12.8299 21.8887L7.28024 16.9758C6.96795 16.6953 6.77959 16.3023 6.75642 15.8832C6.73325 15.464 6.87716 15.0527 7.15663 14.7394C7.45549 14.4306 7.86236 14.2497 8.2918 14.2345C8.72124 14.2194 9.13986 14.3712 9.45976 14.6581L13.8611 18.5723L23.2387 9.46383C23.5515 9.15653 23.9725 8.98435 24.411 8.98435C24.8495 8.98435 25.2705 9.15653 25.5833 9.46383C25.7395 9.60975 25.864 9.78623 25.9492 9.9823C26.0343 10.1784 26.0783 10.3898 26.0783 10.6036C26.0783 10.8174 26.0343 11.0288 25.9492 11.2249C25.864 11.421 25.7395 11.5974 25.5833 11.7434Z"
        fill="white"
      />
    </svg>
  );

  const setOneDone =
    props.onActivce === 1 || props.onActivce === 2 || props.onActivce === 3;
  const seTwoDone = props.onActivce === 2 || props.onActivce === 3;
  const seThreeDone = props.onActivce === 3;
  // const Line = ({ position }) => {
  //   let lineStyle = {
  //     position: 'absolute',
  //     left: '87%',
  //     top: position === 'one' ? '55px' : (position === 'two' ? '202px' : '146px'),
  //   };

  //   // Media query for screen width less than or equal to 991px
  //   if (typeof window !== 'undefined' && window.innerWidth <= 991) {
  //     lineStyle = {
  //       position: 'absolute',
  //       left: '93%',
  //       height: position === 'one' ? '120px' : '135px',
  //       top: position === 'one' ? '123px' : '221px',
  //     };
  //   }

  //   return (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="2" viewBox="0 0 2 149" fill="none" style={lineStyle}>
  //       <path d="M1 0L1.00001 149" stroke="white" strokeDasharray="3 3" />
  //     </svg>
  //   );
  // };

  // const Line = ({ position }) => {
  //   const lineStyle = {
  //     position: 'absolute',
  //     left: '87%',
  //     top: position === 'one' ? '44px' : '202px',
  //   };

  //   return (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="2" height="149" viewBox="0 0 2 149" fill="none" style={lineStyle}>
  //       <path d="M1 0L1.00001 149" stroke="white" strokeDasharray="3 3" />
  //     </svg>
  //   );
  // };
  return (
    <div className="sidebar_newproject">
      {props.onActivce === 1 ? (
        lamb_img.active_1
      ) : props.onActivce === 2 ? (
        lamb_img.active_2
      ) : props.onActivce === 3 ? (
        lamb_img.active_3
      ) : (
        <svg
          width="280"
          height="127"
          viewBox="0 0 280 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.13 99.26C30.5155 99.26 33.26 96.5155 33.26 93.13C33.26 89.7445 30.5155 87 27.13 87C23.7445 87 21 89.7445 21 93.13C21 96.5155 23.7445 99.26 27.13 99.26Z"
            fill="#FF9452"
          />
          <path d="M27.0051 0H26.3511V61.61H27.0051V0Z" fill="#C7C7C7" />
          <path
            d="M0 87.3261L2.14999 92.0451H51.218L53.355 87.3261L32.468 72.8701H20.89L0 87.3261Z"
            fill="#C9BED4"
          />
          <path
            d="M19.4429 58.9365L20.8939 72.8705H32.4679L33.9189 58.9365H19.4429Z"
            fill="#C9BED4"
          />
          <path
            opacity="0.1"
            d="M21.157 73.363L21 71.863L32.973 71L32.731 73.359L21.157 73.363Z"
            fill="black"
          />
          <path
            opacity="0.1"
            d="M0.00683594 87.333L2.15085 92.045H51.2188L53.3628 87.333H0.00683594Z"
            fill="black"
          />

          <path
            opacity="0.7"
            d="M71.13 126.26C74.5155 126.26 77.26 123.515 77.26 120.13C77.26 116.744 74.5155 114 71.13 114C67.7445 114 65 116.744 65 120.13C65 123.515 67.7445 126.26 71.13 126.26Z"
            fill="white"
          />
          <path d="M71.531 0H70.877V89.901H71.531V0Z" fill="#C7C7C7" />
          <path
            d="M44.5259 115.619L46.6759 120.338H95.7439L97.8809 115.619L76.9939 101.156H65.4199L44.5259 115.619Z"
            fill="#C9BED4"
          />
          <path
            d="M63.9688 87.2275L65.4198 101.155H76.9938L78.4448 87.2275H63.9688Z"
            fill="#C9BED4"
          />
          <path
            opacity="0.1"
            d="M44.5322 115.618L46.6762 120.337H95.7512L97.8882 115.618H44.5322Z"
            fill="black"
          />
          <path
            opacity="0.1"
            d="M65.4202 101.155L65.2632 99.655L77.2362 98.792L76.9942 101.151L65.4202 101.155Z"
            fill="black"
          />
          <path
            opacity="0.7"
            d="M209.13 99.26C212.516 99.26 215.26 96.5155 215.26 93.13C215.26 89.7445 212.516 87 209.13 87C205.744 87 203 89.7445 203 93.13C203 96.5155 205.744 99.26 209.13 99.26Z"
            fill="white"
          />
          <path d="M209.005 0H208.351V61.61H209.005V0Z" fill="#C7C7C7" />
          <path
            d="M182 87.3261L184.15 92.0451H233.218L235.355 87.3261L214.468 72.8701H202.89L182 87.3261Z"
            fill="#C9BED4"
          />
          <path
            d="M201.443 58.9365L202.894 72.8705H214.468L215.919 58.9365H201.443Z"
            fill="#C9BED4"
          />
          <path
            opacity="0.1"
            d="M203.157 73.363L203 71.863L214.973 71L214.731 73.359L203.157 73.363Z"
            fill="black"
          />
          <path
            opacity="0.1"
            d="M182.007 87.333L184.151 92.045H233.219L235.363 87.333H182.007Z"
            fill="black"
          />
          <path
            opacity="0.7"
            d="M253.13 126.26C256.516 126.26 259.26 123.515 259.26 120.13C259.26 116.744 256.516 114 253.13 114C249.744 114 247 116.744 247 120.13C247 123.515 249.744 126.26 253.13 126.26Z"
            fill="white"
          />
          <path d="M253.531 0H252.877V89.901H253.531V0Z" fill="#C7C7C7" />
          <path
            d="M226.526 115.619L228.676 120.338H277.744L279.881 115.619L258.994 101.156H247.42L226.526 115.619Z"
            fill="#C9BED4"
          />
          <path
            d="M245.969 87.2275L247.42 101.155H258.994L260.445 87.2275H245.969Z"
            fill="#C9BED4"
          />
          <path
            opacity="0.1"
            d="M226.532 115.618L228.676 120.337H277.751L279.888 115.618H226.532Z"
            fill="black"
          />
          <path
            opacity="0.1"
            d="M247.42 101.155L247.263 99.655L259.236 98.792L258.994 101.151L247.42 101.155Z"
            fill="black"
          />
        </svg>
      )}

<div className="btns_container">
        <button
          disabled
          className={`form_btn ${props.onActivce === 0 ? "active" : ""} ${
            setOneDone ? "done" : ""
          }`}
          onClick={() => props.onCurrentForm(0)}
        >
          <div>
            <PhoneIcon />
            {t("Contact_info")}
          </div>
          {setOneDone ? (
            active
          ) : (
            <span>
              1
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                viewBox="0 0 2 149"
                className="Lineone"
                fill="none"
              >
                <path
                  d="M1 0L1.00001 149"
                  stroke="white"
                  strokeDasharray="3 3"
                />
              </svg>
            </span>
          )}
        </button>
        <button
          disabled
          className={`form_btn ${props.onActivce === 1 ? "active" : ""} ${
            seTwoDone ? "done" : ""
          }`}
          onClick={() => props.onCurrentForm(1)}
        >
          <div>
            <BriefIcon />
            {t("project_Brief")}
          </div>
          {seTwoDone ? (
            active
          ) : (
            <span>
              2
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                className="linetow"
                viewBox="0 0 2 149"
                fill="none"
              >
                <path
                  d="M1 0L1.00001 149"
                  stroke="white"
                  strokeDasharray="3 3"
                />
              </svg>
            </span>
          )}
        </button>
        {
          // Line({ position: 'two' })
        }

        <button
          disabled
          className={`form_btn ${props.onActivce === 2 ? "active" : ""} ${
            seThreeDone ? "done" : ""
          }`}
          onClick={() => props.onCurrentForm(2)}
        >
          <div>
            <BudgetIcon />
            {t("Budget_Timeline")}
          </div>
          {seThreeDone ? active : <span>3</span>}
        </button>
      </div>
    </div>
  );
}

export default NewProjectSidebar;