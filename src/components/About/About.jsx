import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import curriculumIt from '../assets/Federico_Zappone_it.pdf';
import curriculumEn from '../assets/Federico_Zappone_en.pdf';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive, resume } =
    about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne || ''}</p>
                <p className="about-wrapper__info-text">{paragraphTwo || ''}</p>
                <p className="about-wrapper__info-text">{paragraphThree || ''}</p>
                <p className="about-wrapper__info-text">{paragraphFour || ''}</p>
                <p className="about-wrapper__info-text">{paragraphFive || ''}</p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
                <div className="d-inline-flex align-content-center">
                  <span className="m-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={curriculumEn}
                    >
                      Curriculum (Eng)
                    </a>
                  </span>
                  <span className="m-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={curriculumIt}
                    >
                      Curriculum (Ita)
                    </a>
                  </span>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
