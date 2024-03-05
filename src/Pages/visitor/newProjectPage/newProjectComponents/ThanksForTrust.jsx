import React from "react";
import { useTranslation } from "react-i18next";
import { HomeIcon } from "../../../../UI/Icons";
import { Container } from "react-bootstrap";

import "../../../visitor/errorPage/errorPage.css";
import "./thanksTrust.css";
import { Link } from "react-router-dom";

const ThanksForTrust = () => {
  const { t, i18n } = useTranslation();
  const icons = {
   
    comment: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_3968)">
          <path
            d="M0 11.247C0.144625 8.90703 0.970846 6.66052 2.37681 4.78444C3.78277 2.90835 5.707 1.48471 7.91228 0.689009C10.1176 -0.106688 12.5075 -0.239652 14.7874 0.30651C17.0674 0.852672 19.1377 2.05408 20.743 3.76263C22.3484 5.47118 23.4188 7.61218 23.8221 9.92167C24.2254 12.2312 23.944 14.6082 23.0127 16.7597C22.0814 18.9113 20.5408 20.7432 18.5809 22.0298C16.621 23.3163 14.3274 24.0012 11.983 24H5C3.67432 23.9987 2.40332 23.4715 1.46593 22.5341C0.528532 21.5967 0.0013237 20.3257 0 19V11.247ZM2 19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H11.983C13.3941 21.9994 14.7892 21.7013 16.0773 21.1253C17.3654 20.5493 18.5177 19.7083 19.459 18.657C20.4048 17.6063 21.1151 16.3655 21.5421 15.0178C21.9691 13.6701 22.1031 12.2467 21.935 10.843C21.6696 8.62895 20.6748 6.5662 19.1076 4.97994C17.5403 3.39367 15.4897 2.37412 13.279 2.08201C12.8478 2.02797 12.4136 2.00058 11.979 2.00001C9.64853 1.99366 7.3902 2.80792 5.6 4.30001C4.55447 5.16896 3.69629 6.24117 3.07747 7.45164C2.45865 8.66212 2.09209 9.98565 2 11.342V19Z"
            fill="#331C48"
          />
          <path
            d="M16 9H12C11.7348 9 11.4804 8.89464 11.2929 8.70711C11.1054 8.51957 11 8.26522 11 8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7H16C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8C17 8.26522 16.8946 8.51957 16.7071 8.70711C16.5196 8.89464 16.2652 9 16 9Z"
            fill="#331C48"
          />
          <path
            d="M8 11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11Z"
            fill="#331C48"
          />
          <path
            d="M8 15H16C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17H8C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16C7 15.7348 7.10536 15.4804 7.29289 15.2929C7.48043 15.1054 7.73478 15 8 15Z"
            fill="#331C48"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_3968">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="matrix(-1 0 0 1 24 0)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  };
  return (
    <Container>
      <section className="thanks_trust">
        <div>
          <img src="/assets/thanks-trust.svg" alt="" />
          <span>
            Thank you for your trust <br/> to work together
            <img src="/assets/love.svg" className="emoji" />
          </span>
        </div>
        <p>
          {icons.comment}
          {t("Try to go to home page")}
        </p>
        <ul>
          <li>
            <Link
              to="/home"
            >
              <HomeIcon/>
              {t("Home")}
            </Link>
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default ThanksForTrust;
