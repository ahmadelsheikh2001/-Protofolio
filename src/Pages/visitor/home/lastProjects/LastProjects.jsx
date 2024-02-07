import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LastProjectsList from "./LastProjectsList";
import SectionTitle from "../../../../UI/Titles/SectionTitle/SectionTitle";

import './lastProjects.css';

const LastProjects = ({ projects }) => {

  const {t, i18n} = useTranslation();

  return (
    <section className="last_projects">
      <Container>
        <div style={{width: 'fit-content'}}>
          <SectionTitle Title={t('Last_Projetcs')}/>
        </div>
      </Container>
      <LastProjectsList projects={projects} />
    </section>
  );
};

export default LastProjects;