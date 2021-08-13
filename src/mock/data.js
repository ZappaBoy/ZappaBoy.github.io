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
    "I'm Federico Zappone, I'm a developer graduated in Computer Science at University of Molise (UNIMOL).",
  paragraphTwo:
    "I'm a full stack developer but mostly I develop Blockchain and Distributed Ledger Technologies with the Hyperledger Fabric platform.",
  paragraphThree:
    "I'm also very interested in automated trading and cryptocurrencies, in fact I'm the creator of JATB, a trading framework that helps trader to automate their strategies.",
  paragraphFour: 'Last but not least I like Bash scripting, Emacs and... ',
  paragraphFive: 'I use Arch (Linux) btw.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'genesy.png',
    title: 'Genesy Project',
    info: 'Italian blockchain platform for personal DNA and microbiome sequencing',
    info2:
      'Thanks to blockchain, cloud computing, and artificial intelligence, genomics a takes it to a new level',
    url: 'https://www.frontiersin.org/articles/10.3389/fbloc.2020.483227/full?utm_source=S-TWT&utm_medium=SNET&utm_campaign=ECO_FBLOC_XXXXXXXX_auto-dlvrit',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jatb.jpg',
    title: 'JATB',
    info: 'Just Another Trading Bot is an open-source framework created and developed by me.',
    info2:
      'JATB simplify the automatization of a trading strategy based on cryptocurrencies market.',
    url: '',
    repo: 'https://github.com/ZappaBoy/justanothertradingbot', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hyperledger.png',
    title: 'Hyperledger Projects',
    info: 'Most of my projects are permissioned Distributed Ledger based on Hyperledger Fabric.',
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
  email: 'f.zappone1@studenti.unimol.it',
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
      name: 'github',
      url: 'https://github.com/ZappaBoy',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
