import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Márcio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: 'Márcio',
  subtitle: ' ',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_alt.jpg',
  paragraphOne: '',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Flashcards',
    info: 'flashcards',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Stocks Sort',
    info: 'stocks sort',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tic-tac-toe.png',
    title: 'Tic Tac Toe',
    info: 'A simple tic tac toe game. It has both multiplayer and singlepalyer modes. The singleplayer mode has some different difficulties to choose. ',
    info2: "It's also a PWA so it can be saved on mobile devices to offline usage.",
    url: 'https://tic-tac-toe.marciorasf.space',
    repo: 'https://github.com/marciorasf/tic-tac-toe',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'MCP',
    info: 'mcp',
    info2: '',
    url: '',
    repo: 'https://github.com/marciorasf/MCP',
  },
  {
    id: nanoid(),
    img: 'docker-fundamentals.png',
    title: 'Docker Fundamentals',
    info: 'This is a kind of a tutorial that I wrote while studying the Docker fundamentals. It contains the basic information to enable someone start work with Docker.',
    info2:
      'The main motivation for this tutorial was to consolidate my own knowledge. Although, I hope it can help another person.',
    url: '',
    repo: 'https://github.com/marciorasf/docker-fundamentals',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'marciorasf@gmail.com',
};

// FOOTER DATA
export const footerData = {
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
