import React, { useRef, useState, useEffect, useTransition } from "react";
import {
  SingleIconOne,
  SingleIconThree,
  SingleIconTwo,
} from "../../../../UI/Icons";
import ScrollTransition from "../../../../UI/ScrollTransition";
import { useTranslation } from "react-i18next";

const SingleExperiance = ({ data }) => {
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setElementTop(ref?.current?.offsetTop - 100);
  }, []);

  const apiUrl = process.env.REACT_APP_API_URL

  return (
    <div ref={ref} style={{ marginBottom: "60px" }}>
      <div className="single_ex">
        <ScrollTransition elementTop={elementTop} classes="left">
          <img
            src={
              (data?.logo && apiUrl + data.logo) ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBbnmfP_d4MY99sPYJsWtaaP-g2C2dyNJWA&usqp=CAU"
            }
            alt="logo_company"
          />
        </ScrollTransition>
        <ScrollTransition elementTop={elementTop} delay={0.2} classes="right">
          <div className="job_and_comp flex">
            <SingleIconOne />
            <p>
              {i18n.language == "en" ? data?.job : data?.job_ar}
              <span> at </span>
              <a target="_blank" href={i18n.language == "en" ? data?.link : data?.link_ar}>
                {i18n.language == "en" ? data?.company : data?.company_ar}
              </a>
            </p>
          </div>
          <h5 className="address flex">
            <SingleIconTwo />
            {i18n.language == "en" && <> {data?.location} ({data?.jobType})</>}
            {i18n.language == "ar" && <> {data?.location_ar} ({data?.jobType_ar})</>}
          
          </h5>
          <span className="date flex">
            <SingleIconThree />
            {data?.start} / {data.end}
          </span>
          <p className="desc">{data?.desc}</p>
        </ScrollTransition>
      </div>
    </div>
  );
};

export default SingleExperiance;
