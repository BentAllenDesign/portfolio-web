export interface IMyExperience {
  title: string,
  company: string,
  location: string,
  duration: string[],
  bullets: string[],
}

export interface IMy {
  projects: {
    names: string[],
    bullets: string[],
  },
  knowledge: {
    languages: string[],
    practices: string[],
    technologies: string[],
  },
  jobs: IMyExperience[],
  education: IMyExperience[],
  certifications: IMyExperience[],
}

export const my: IMy = {
  projects: {
    names: [
      'JOSHE',
      'Cruisr',
      'Schrödinger',
      'Hottos Crafting Company',
      'Loralai'
    ],
    bullets: [
      'React web application using vite as the bundler and compiler, dockerized and hosted on a high-availability Heroku dyno - https://github.com/BentAllenDesign/portfolio-web',
      'Full-stack React web app and Java backend using Spring and Spring Data JPA. Completely mapped relational database using straight-up 100MB+ json files as the base. One of my proudest achievements - Code available upon request',
      'Full-stack Discord bot with PostgreSQL backing database deployed to a Heroku dyno. This bot handles awarding/removing user tickets as well as setting up raffles for said users to participate in. Actively being used by indie game studio Legio Vox Studios - Code available upon request',
      'Simple Discord bot for queue management. This was to support Animal Crossing: New Horizon players who wanted to set up a shop on their island for other players to come and trade crafting goods. This was to mitigate the intense loading times that the airport brought to the experience - Code unavailable',
      '5-month capstone game project for the Game Design bachelor\'s program at Full Sail University. We worked on a small team of 6 to create a simple puzzle-platformer using Ori and the Blind Forest as main reference. I specifically worked on gameplay and tools programming - Code owned by Full Sail and unavailable'
    ]
  },
  knowledge: {
    languages: [
      'JavaScript', 
      'TypeScript',
      'C#',
      'Java',
      'Shell Script',
      'C++',
      'HTML',
      'CSS'
    ],
    practices: [
      'Agile',
      'Scrum',
      'Extreme Programming',
      'Pair Programming',
      'Test Driven Development',
      'Clean Code Principles',
      'SOLID Principles',
      'Actionable Observability & Telemetry',
      'Material Design Standards',
    ],
    technologies: [
      'ASP.NET',
      'Spring Framework',
      'Node.js',
      'Docker',
      'Kubernetes',
      'Perforce',
      'SVN',
      'Git',
      'Linux (Debian-based)',
      'NX Monorepo',
      'AWS (Ask about specific services)',
      'Azure (Ask about specific services)',
      'Jenkins',
      'Veracode',
      'React.js (CRA / Vite)',
      'Angular',
      'MySQL',
      'PostgreSQL',
      'GraphQL',
      'Apollo Server/Client',
      'Tailwindcss'
    ]
  },
  jobs: [
    {
      title: 'Full Stack Engineer',
      company: 'Cognizant Technologies',
      location: 'Plano, TX',
      duration: ['June 2021', 'Present'],
      bullets: [
        "Built, tested, maintained, and deployed two React Typescript frontend web applications and a .NET asynchronous backend service with a client-mandated minimum 80% code coverage",
        "Consumed a GraphQL backend using Hasura as a security and remote schema stitch layer over our Axon-managed PostgreSQL datahub",
        "Used Apollo Client as the frontend GraphQL tool for secure typing, client-side caching, and global state management",
        "Extended our Node user security remote schema to add functionalities for batch CRUD user operations, sending out user invitations through SendGrid, and managing user roles granted to the AD principal",
        "Created dozens of versioned Flyway migrations to further expand our database tables, views, materialized views, functions, and triggers",
        "Developed and delivered knowledge transfers for a performant server-side pagination system used by several different teams delivered through React Context",
        "Created an ASP.NET topic and queue message processor listening to our Azure Service Bus using several APIM integrations",
        "Managed the production application's minor and major release coordination with product owners and business consultants, and provided relevant production support for any deployment issues that arose",
        "Worked with Azure Monitor and AppInsights using Open Telemetry standards to set up application trace event, page view, and exception behavior dashboards for 3 different platform teams"
      ]
    },
    {
      title: 'Lab Instructor - Game Design Bachelors',
      company: 'Full Sail University',
      location: 'Winter Park, FL',
      duration: ['Aug 2020', 'Jun 2021'],
      bullets: [
        "Worked with a large number of new students on a monthly basis in Full Sail's Game Design bachelor's capstone project",
        "Provided assistance in understanding game design pre-production concepts",
        "Led many small teams through pseudo-agile production workflows with biweekly sprints"
      ]
    },
  ],
  education: [
    {
      title: 'Full Stack Engineer Certification',
      company: 'Southern Methodist University',
      location: 'Dallas, tx',
      duration: ['2020', '2021'],
      bullets: []
    },
    {
      title: 'Master of Science - Game Design',
      company: 'Full Sail University',
      location: 'Winter Park, FL',
      duration: ['2019', '2020'],
      bullets: []
    },
    {
      title: 'Bachelor of Science - Game Design',
      company: 'Full Sail University',
      location: 'Winter Park, FL',
      duration: ['2016', '2019'],
      bullets: []
    }
  ],
  certifications: [

  ],
}