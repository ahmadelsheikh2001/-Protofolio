import React, { useRef, useState, useEffect } from "react";
import {
  SingleIconOne,
  SingleIconThree,
  SingleIconTwo,
} from "../../../../UI/Icons";
import ScrollTransition from "../../../../UI/ScrollTransition";

const SingleExperiance = ({ data }) => {
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    setElementTop(ref?.current?.offsetTop - 100);
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: "60px" }}>
      <div className="single_ex">
        <ScrollTransition elementTop={elementTop} classes="left">
          <img
            src={
              data?.logo ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBbnmfP_d4MY99sPYJsWtaaP-g2C2dyNJWA&usqp=CAU"
            }
            alt="logo_company"
          />
        </ScrollTransition>
        <ScrollTransition elementTop={elementTop} delay={0.2} classes="right">
          <div className="job_and_comp flex">
            <SingleIconOne />
            <p>
              {data?.job}
              <span> at </span>
              <a target="_blank" href="#">
                {data?.comp}
              </a>
            </p>
          </div>
          <h5 className="address flex">
            <SingleIconTwo />
            {data?.address} ({data?.type})
          </h5>
          <span className="date flex">
            <SingleIconThree />
            {data?.date}
          </span>
          <p className="desc">{data?.desc}</p>
        </ScrollTransition>
      </div>
    </div>
  );
};

export default SingleExperiance;
