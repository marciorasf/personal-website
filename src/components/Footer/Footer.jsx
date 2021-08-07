import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { nanoid } from 'nanoid';

const footer = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/marciorasf',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/marciorasf/',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:marciorasf@gmail.com',
    },
  ],
};

const Footer = () => {
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Template developed by{' '}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>{' '}
          and modified by{' '}
          <a href="https://github.com/marciorasf" target="_blank" rel="noopener noreferrer">
            me
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
