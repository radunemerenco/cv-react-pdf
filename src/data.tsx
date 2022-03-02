import React from "react";
import Text from "./components/CvDocument/elements/Text";

export type EnabledProjects = (keyof typeof projectsByName)[];

export const enabledProjectsAll: EnabledProjects = [
  'l20',
  'betfair',
  'fdc',
  'onPharma',
  'lawAndMediation',
  'vinnVinn',
  'sundose',
  'yload',
  'stylyze',
  'liteshell',
  'pmsDms',
];

export const enabledProjectsOnePage: EnabledProjects = [
  'l20',
  'yload',
  'stylyze'
]


export const projectsByName = {
  l20: {
    projectName: 'L20 - F4ID',
    from: 'Sep 2021',
    to: 'Present',
    title: 'Senior JavaScript Fullstack Developer',
    company: 'XoomWorks',
    clientProblem: 'The client, a UK based Startup backed by a successful NPO had issues with shady, evasive, misleading and purposefully unclear legal processes which lead to millions of dollars lost in the charity donation process.',
    achievements: [
      <><Text isBold>Increased the Face Recognition performance by more than 80% and precision by over 25%</Text> by successfully integrating AWS Rekognition Services.</>,
      <><Text isBold>Improved performance by 40%</Text> and  by reorganizing the code and designing an ecosystem based on microservices.</>,
      <><Text isBold>Ensured 100% transparency</Text> in the process of distributing money for sold goods by generating in depth reports on all the transactions and presenting them in human-readable insights from the database.</>,
    ],
    skills: ['JavaScript', 'NodeJS', 'PostgreSQL', 'ReactJS', 'Redux', 'Docker', 'AWS', 'Jenkins CI/CD', 'GitHub', 'Jira'],
  },
  betfair: {
    projectName: 'Betfair',
    from: 'Sep 2020',
    to: 'Sep 2021',
    title: 'Senior React Native Developer',
    company: 'XoomWorks',
    clientProblem: 'The client, a successful European online betting company, was struggling with a horribly slow app delivery time, which led to losing a lot of customers, due to having an enormous number of apps written in different technologies.',
    achievements: [
      <><Text isBold>Drastically reduced the mobile app development costs by 60%</Text> by identifying and implementing common parts in shareable React Native modules.</>,
      <><Text isBold>Solidified the marketing metrics by 100%</Text> by ensuring synchronisation between iOS and Android platforms by implementing the event loggers in a single place.</>,
    ],
    skills: ['TypeScript', 'React Native', 'Apple Pay', 'REST API', 'Google Analytics', 'Target Process'],
  },
  fdc: {
    projectName: 'Field Data Capture',
    from: 'Jun 2020',
    to: 'Sep 2020',
    title: 'Senior React Native Developer',
    company: 'Fortech',
    clientProblem: 'The client, an US based startup in the construction field, was constantly losing crucial data about the crew and equipment due to lacking an unified tracking system that works even without internet connection.',
    achievements: [
      <><Text isBold>Increased the client base by more than 2x</Text> by filling a niche in the market by providing offline capabilities and automatic synchronization on network reachability.</>,
      <><Text isBold>Reduced development time by more than 5x</Text> and highly increased data quality by designing and implementing a mobile oriented app with much better UX compared to out of the box solutions provided by the SAP platform.</>,
    ],
    skills: ['TypeScript', 'React Native', 'React', 'WebPack', 'SAP', 'OAuth', 'Styled Components'],
  },
  onPharma: {
    projectName: 'OnPharma!',
    from: 'Apr 2020',
    to: 'Jun 2020',
    title: 'Senior React Native Developer',
    company: 'BeeCoded',
    clientProblem: 'The client, an NPO backed by pharma specialists and companies, was trying to find an efficient way to help pharma students and specialists to improve their knowledge, but was failing to do so due to lacking a modern and efficient education method.',
    achievements: [
      <>Assured an increase in <Text isBold>client retention of over 40%</Text> by developing a highly efficient educational mobile app which includes a level based quiz game, together with news and donations based on user score.</>,
      <><Text isBold>Improved the customer engagement by 2x</Text> by designing a rock solid system to keep track of the acquired scores and ranking the users on a public leaderboard.</>,
    ],
    skills: ['React Native', 'Rest API', 'WebSocket', 'Socket.IO'],
  },
  lawAndMediation: {
    projectName: 'Law and mediation for everyone',
    from: 'Jan 2020',
    to: 'Apr 2020',
    title: 'Senior ReactJS Developer',
    // company: 'BeeCoded',
    clientProblem: 'The Client, a public association established for the purpose of defending and promoting the collective rights and interests of individuals, was struggling to reach out to people living in less favored areas like smaller villages, due to lacking a solution that would connect efficient communication, documentation and reporting needs.',
    achievements: [
      <><Text isBold>Increased reachability</Text> in less favored areas <Text isBold>by more than 30%</Text> by
        designing a simple yet rich web and mobile app where people connect with specialists in law and justice.</>,
      <><Text isBold>Reduced the costs and time of development by 3X</Text> by implementing a React Native codebase that
        will deploy on iOS, Android and WEB at the same time.</>,
      <><Text isBold>Increased the user base by 25%</Text> by improving the accessibility with a record audio
        functionality that allows the users to describe their problems with voice together with text.</>,
    ],
    skills: ['ReactJS', 'React Native', 'NextJS', 'SCSS', 'TypeScript', 'NodeJS', 'GraphQL', 'PostgreSQL', 'WebSocket', 'Socket.IO', 'Docker', 'AWS EC2', 'AWS RDS'],
  },
  vinnVinn: {
    projectName: 'VinnVinn',
    from: 'Apr 2019',
    to: 'Jan 2020',
    title: 'Senior React Native Developer',
    company: 'Innit AS',
    clientProblem: 'The client, one of the Top 3 sports equipment stores in Norway was losing a significant amount of money due to lacking organization for in store consultants ending with lots of lost customers.',
    achievements: [
      <><Text isBold>Significantly reduced customer waiting time by more than 60%</Text> and <Text>increased the in store sales by more than 30%</Text> by designing a system that will localize the client’s position in store and notify the targeted specialists instantly.</>,
    ],
    skills: ['React Native', 'Redux', 'React Animations', 'Stripe'],
  },
  sundose: {
    projectName: 'Sundose',
    from: 'Jan 2019',
    to: 'Apr 2019',
    title: 'Senior React Native Developer',
    company: 'ITCraftShip',
    clientProblem: 'The client, a laboratory that creates nutritional supplements and sells them directly to their clients, was having a hard time matching the custom supplements prepared with the client who ordered them due to lacking an automated system, keeping track manually on excel.',
    achievements: [
      <><Text isBold>Drastically improved the synchronisation process by 3X</Text> by designing a fully functional app to help clients easily order and keep track of their supplements by implementing periodic reminders to take the supplements.</>,
      <><Text isBold>Reduced the development costs by 40%</Text> and <Text isBold>doubled the sales</Text> by implementing a rock solid app deployed on iOS, Android and Web that included a subscription based system by estimating the most favourable date to automatically order the packages based on user behavior.</>,
    ],
    skills: ['ReactJS', 'React Native', 'React Animations', 'SCSS', 'PayU'],
  },
  yload: {
    projectName: 'Yload',
    from: 'Oct 2019',
    to: 'Oct 2021',
    title: 'Senior JavaScript Architect',
    company: 'Yload Global',
    clientProblem: 'The client, a successful startup in the logistics field, was losing significant amounts of money and falling behind the competition due to lacking expertise in organising the overall development process of the team.',
    achievements: [
      <><Text isBold>Secured investments worth over €500k</Text> in less than 6 months by catching potential investors
        trust and attention by building a highly-intuitive MVP.</>,
      <><Text isBold>Amassed more than 5k paying users bringing over €20k</Text> in monthly earnings in less than one
        year by designing an algorithm that automatically matches trucks to loads and improves the performance of the
        dispatcher</>,
      <>Boosted the development and deployment processes <Text isBold>by more than 3x</Text> their initial speed by
        including the Code of Conduct for the development department and automating the CI/CD pipelines</>
    ],
    skills: ['TypeScript', 'ReactJS', 'React Native', 'NodeJS', 'GraphQL', 'PostgreSQL', 'Docker', 'Jenkins CI/CD', 'GitLab', 'Jira'],
  },
  stylyze: {
    projectName: 'Stylyze',
    from: 'Jan 2017',
    to: 'Jan 2019',
    title: 'Senior ReactJS Developer',
    company: 'Fortech',
    clientProblem: 'The client, an important fashion and decor retail brand, was losing significant potential revenue and was failing to increase online sales due to using a basic unsuccessful recommendation system.',
    achievements: [
      <><Text isBold>Secured 5 profitable contracts worth over $500K</Text> by accurately identifying clients needs and
        designing and implementing POCs that were generating profits in the pilot phases.</>,
      <><Text isBold>Improved customer retention by 25%</Text> and <Text isBold>increased the number of signed contracts
        by 3x</Text> on the strength of engaging AI to replicate the human stylist and designing a SAAS and presenting
        the recommendations directly on the product pages.</>,
    ],
    skills: ['JavaScript', 'ReactJS', 'Redux', 'Java', 'MongoDB', 'TensorFlow', 'AWS', 'Jenkins CI/CD', 'BitBucket', 'Jira'],
  },
  liteshell: {
    projectName: 'Liteshell (AML Services)',
    from: 'Feb 2016',
    to: 'Dec 2016',
    title: 'AngularJS Developer',
    company: 'Fortech',
    clientProblem: 'The client, a fintech oriented startup, was missing out on the opportunity to earn additional revenue by selling relevant data about legal entities due to lacking an efficient data collecting system.',
    achievements: [
      <><Text isBold>Improved the reporting process by 10X</Text> by designing a system that automatically collects
        public data from multiple sources and countries and presents the information and entity relations in a human
        readable way.</>,
      <><Text isBold>Increased the reporting precision by 20%</Text> by designing a system that collects the public
        articles and identifies the emotional level in the context related to the entities and persons of interest.</>,
    ],
    skills: ['AngularJS', 'SCSS', 'Rest API', 'Elastic Search', 'Grunt', 'Bower', 'Twitter Bootstrap'],
  },
  pmsDms: {
    projectName: 'PMS and DMS integration',
    from: 'Apr 2014',
    to: 'Feb 2016',
    title: 'JavaScript Fullstack Developer',
    company: 'JMD Planet',
    clientProblem: 'The client, a petrol distribution company, was losing an important amount of information and was struggling with delayed task status updates due to lacking an automated status integrating system.',
    achievements: [
      <><Text isBold>Increase the internal processes performance by 20%</Text> by designing an intermediary solution
        that will update the project task status based on the statuses of the attached documents.</>,
      <><Text isBold>Ensured 100% synchronisation accuracy</Text> by replacing entirely the human interaction in the
        process.</>,
    ],
    skills: ['AngularJS', 'Java', 'Spring Framework', 'REST API', 'SCSS', 'Grunt', 'Bower', 'Twitter Bootstrap', 'EMC Documentum'],
  }
}
