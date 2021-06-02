import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const projects = [
  {
    id: nanoid(),
    img: 'hippocards.png',
    title: 'Hippocards',
    info: "This is a flashcards tool that I developed to help me when I'm studying for tech interviews and software engineering topics in general.",
    info2: '',
    url: 'https://hippocards.marciorasf.space',
    repo: 'https://github.com/marciorasf/hippocards-web',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'B3 Magical Formula',
    info: "Project based on Joel Greenblatt's book: The Little Book That Beats The Marked. My main intent on this project aws to help me on my investiment decisions.",
    info2:
      'It basically collects the stocks indicators and then run an rank algorithm. I made this rank algorithm generic, so another people can customize it.',
    url: '',
    repo: 'https://github.com/marciorasf/b3-magical-formula',
  },
  {
    id: nanoid(),
    img: 'docker-fundamentals.png',
    title: 'Docker Fundamentals',
    info: 'This is kind of a tutorial that I wrote while studying the Docker fundamentals. It contains the basic information to enable someone to start working with Docker.',
    info2:
      'The main motivation for this tutorial was to consolidate my own knowledge. Although, I hope it can help another person.',
    url: '',
    repo: 'https://github.com/marciorasf/docker-fundamentals',
  },
  {
    id: nanoid(),
    img: 'tic-tac-toe.png',
    title: 'Tic Tac Toe',
    info: 'A simple tic tac toe game. It has both multiplayer and singleplayer modes. The singleplayer mode has some different difficulties to choose. ',
    info2: "It's also a PWA so it can be saved on mobile devices to play offline.",
    url: 'https://tic-tac-toe.marciorasf.space',
    repo: 'https://github.com/marciorasf/tic-tac-toe',
  },
  {
    id: nanoid(),
    img: 'mcp.png',
    title: 'McCulloch-Pitts Model',
    info: 'An generic implementation of a McCulloch-Pitts model for building neural networks.',
    info2:
      'I implemented this model primarily to use on the artificial neural networks discipline. Then, I simplified it to help other people.',
    url: '',
    repo: 'https://github.com/marciorasf/MCP',
  },
];

const Projects = () => {
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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="My Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={750}
                    delay={250}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      {url ? (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || '#!'}
                        >
                          See Live
                        </a>
                      ) : (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}

                      {url && repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={750}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || repo || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
