import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'marciorasf', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '@marciorasf personal website', // e.g: Welcome to my website
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
  paragraphOne: 'eu ',
  paragraphTwo: 'sou',
  paragraphThree: 'marciorasf',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Flashcards',
  //   info: 'flashcards',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Stocks Sort',
  //   info: 'stocks sort',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
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
