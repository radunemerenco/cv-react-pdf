import {ReactNode} from "react";

export type Skill = 'JavaScript'
  | 'NodeJS'
  | 'PostgreSQL'
  | 'ReactJS'
  | 'Redux'
  | 'Docker'
  | 'AWS'
  | 'Jenkins CI/CD'
  | 'GitHub'
  | 'Jira'
  | 'TypeScript'
  | 'React Native'
  | 'Apple Pay'
  | 'REST API'
  | 'Google Analytics'
  | 'Target Process'
  | 'React'
  | 'WebPack'
  | 'SAP'
  | 'OAuth'
  | 'Styled Components'
  | 'Rest API'
  | 'WebSocket'
  | 'Socket.IO'
  | 'NextJS'
  | 'SCSS'
  | 'GraphQL'
  | 'AWS EC2'
  | 'AWS RDS'
  | 'React Animations'
  | 'Stripe'
  | 'PayU'
  | 'GitLab'
  | 'Java'
  | 'MongoDB'
  | 'TensorFlow'
  | 'BitBucket'
  | 'AngularJS'
  | 'Elastic Search'
  | 'Grunt'
  | 'Bower'
  | 'Twitter Bootstrap'
  | 'Spring Framework'
  | 'Documentum';

export interface Project {
  projectName: string;
  from: string;
  to: string;
  title: string;
  company?: string;
  clientProblem: ReactNode;
  achievements: ReactNode[];
  skills: Skill[],
  isLastItem?: boolean;
}
