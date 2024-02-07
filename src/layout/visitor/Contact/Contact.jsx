import { useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BehanceIcon, DribbleIcon, Facebook, HiIcon, Instagram, LinkedIn, Medium, Twitter } from "../../../UI/Icons";
import SingleSocial from "./SingleSocial";

import './Contact.css';

const Contact = () => {
  
  const {t,  i18n} = useTranslation();
  const [hover, setHover] = useState(false);

  const socialIcons = [
    {
      id: 1,
      icon: <BehanceIcon/>,
      text: t('Behance')
    },
    {
      id: 2,
      icon: <DribbleIcon/>,
      text: t('Dribbble')
    },
    {
      id: 3,
      icon: <LinkedIn/>,
      text: t('Linked_In')
    },
    {
      id: 4,
      icon: <Medium/>,
      text: t('Medium')
    },
    {
      id: 5,
      icon: <Instagram/>,
      text: t('Instagram')
    },
    {
      id: 6,
      icon: <Twitter/>,
      text: t('Twitter')
    },
    {
      id: 7,
      icon: <Facebook/>,
      text: t('Facebook')
    },
  ]


  return (
    <section className="contact_section">
      <div className="wrapper-contact">
        <div className="wave-contact"></div>
      </div>
      <Container>
        <div className="flex" style={{justifyContent: 'center', flexDirection: 'column'}}>
          <h5>{t("Let's_Connect_me")}</h5>
          <div className="flex"><p>{t("Contact_p")}</p><HiIcon/></div>
        </div>
        <ul className="social_contact">
          {socialIcons.map(icon => <SingleSocial key={icon.id} {...icon}/>)}
        </ul>
        <footer className="footer">
        2024 All rights reserved. – Designed by Mostafa & Coded by Omar
        </footer>
      </Container>
    </section>
  );
};
export default Contact;