import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "I'm Federico Zappone", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Learn more about me', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Federico Zappone',
  subtitle: "I'm a developer",
  cta: 'Learn more about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm Federico Zappone, I'm a developer with Master's Degree in Software Systems Security.",
  paragraphTwo:
    "I'm a full stack developer and a co-founder of Just Another S.R.L and BB-SMILE S.R.L.",
  paragraphThree:
    "I'm also very interested in Blockchain and Distributed Ledger Technologies, automated trading and cryptocurrencies, in fact I'm the creator of JATB, a trading framework that helps trader to automate their strategies.",
  paragraphFour: 'Last but not least I like Bash scripting, Emacs and... ',
  paragraphFive: 'I use Arch (Linux) btw.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'justanother.png',
    title: 'Just Another S.R.L.',
    info: 'Just Different, Another Experience',
    info2:
      'Just Another is an Italian IT company focused on find and develop high-quality software solutions. We are focused on Artifical Intelligence and innovative technologies.',
    url: 'https://justanother.cloud/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jatb.png',
    title: 'JATB',
    info: 'Just Another Trading Bot is an open-source framework created and developed by me.',
    info2:
      'JATB simplify the automatization of a trading strategy based on cryptocurrencies market.',
    url: '',
    repo: 'https://github.com/Just-Another-Organization/JA-Trading-Bot', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hyperledger.png',
    title: 'Hyperledger Projects',
    info: 'I worked on permissioned Distributed Ledger based on Hyperledger Fabric.',
    info2:
      'Hyperledger is an open source community focused on developing a suite of stable frameworks, tools and libraries for enterprise-grade blockchain deployments.',
    url: 'https://www.researchgate.net/profile/Remo-Pareschi/publication/350013522_What_is_your_Distributed_HyperLedger/links/604b62da299bf1f5d8417324/What-is-your-Distributed-HyperLedger.pdf',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: "Let's talk",
  email: 'f.zappone1.job@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/federico-zappone-532722174',
    },
    {
      id: nanoid(),
      name: 'heart',
      url: 'https://github.com/sponsors/zappaboy',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ZappaBoy',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
