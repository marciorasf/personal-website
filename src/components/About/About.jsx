import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const about = {
  img: 'profile.png',
  paragraphOne:
    "I'm a software engineer currently working at Bume. My focus is to always become a better problem solver. Although I love programming, I think it's valuable only if it can solve problems.",
  paragraphTwo:
    "I have a solid Node.js + React.js stack knowledge combined to SQL or NoSQL databases. I also can also work with python and C. At the moment I'm focused in learning software engineering concepts, including: architecture, cloud computing, clean code, design patterns and deep OOP concepts.",
  paragraphThree:
    "Talking about my education, I have a electrical engineering undergraduate degree focused on software engineering at UFMG. Complementarily to that I'm always following tutorials and studying topics that I consider important by my own.",
  resume: '', // if no resume, the button will not show up
};

const About = () => {
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
            <Fade bottom duration={1000} delay={250} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={250} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <p className="about-wrapper__info-text">{paragraphThree}</p>
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
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
