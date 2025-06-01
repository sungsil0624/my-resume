import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Python',
    },
    {
      title: 'HTML/CSS',
    },
  ],
};

const framwork: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'Angular',
    },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'Redis',
    },
    {
      title: 'Kubernetes',
    },
    {
      title: 'Linux',
    },
    {
      title: 'Docker',
    },
    {
      title: 'MySQL',
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Vim',
    },
    {
      title: 'Git',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Work Out',
    },
    {
      title: 'Joke Telling',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, infrastructure, framwork, tools, misc],
};

export default skill;
