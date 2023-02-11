import { BadgeRounded, BuildCircleRounded, CodeRounded, ConfirmationNumberRounded, DataObjectRounded, FitnessCenterRounded, PeopleRounded, SchoolRounded, SettingsRounded, SportsEsportsRounded } from "@mui/icons-material"
import { Badge, SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactNode } from "react"

export interface IMyExperience {
  title: string,
  company: string,
  location: string,
  duration: string[],
  bullets: string[],
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  },
}

export interface IMySkill {
  bullets: string[],
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  },
}

export interface IMyProject {
  name: string,
  detail: string,
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  },
}

export interface IMy {
  projects: IMyProject[],
  skills: { [key: string]: IMySkill },
  jobs: IMyExperience[],
  education: IMyExperience[],
  // certifications: IMyExperience[],
}

export const my: IMy = {
  projects: [
    {
      Icon: CodeRounded,
      name: "JOSHE",
      detail: "React web application using vite as the bundler and compiler, dockerized and hosted on a high-availability Heroku dyno. - https://github.com/BentAllenDesign/portfolio-web",
    },
    {
      Icon: DataObjectRounded,
      name: "Cruisr",
      detail: "Full-stack React web app and Java Spring backend with a PostgreSQL database masked by a Hasura GraphQL layer. - Code available upon request",
    },
    {
      Icon: ConfirmationNumberRounded,
      name: "Schrödinger",
      detail: "Full-stack Discord bot with PostgreSQL database deployed to a Heroku dyno. Actively in use by indie game studio Legio Vox Studios. - Code available upon request",
    },
    {
      Icon: PeopleRounded,
      name: "Hottos Crafting Company",
      detail: "Simple .NET Discord bot for Animal Crossing island visitor queue management deployed to an AWS EC2 instance. - Code unavailable",
    },
    {
      Icon: SportsEsportsRounded,
      name: "Loralai",
      detail: "5-month small-pod capstone game project for the Game Design Bachelor\'s program at Full Sail University. I specifically worked on gameplay and tools programming. - Code unavailable"
    }
  ],
  skills: {
    languages: {
      Icon: CodeRounded,
      bullets: [
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'C#',
        'Java',
        'C++',
        'Shell Script',
      ],
    },
    practices: {
      Icon: FitnessCenterRounded,
      bullets: [
        'Agile',
        'Scrum',
        'Extreme Programming',
        'Pair Programming',
        'Test Driven Development',
        'SOLID Principles',
        'Material Design Standards',
      ],
    },
    technologies: {
      Icon: BuildCircleRounded,
      bullets: [
        'ASP.NET',
        'Spring Framework',
        'Node.js',
        'Docker',
        'Kubernetes',
        'Git',
        'Perforce',
        'SVN',
        'Linux (Debian-based)',
        'NX',
        'AWS',
        'Azure',
        'Jenkins',
        'Veracode',
        'React',
        'MySQL',
        'PostgreSQL',
        'GraphQL',
        'Tailwindcss',
        'Unity',
        'Unreal Engine'
      ]
    }
  },
  jobs: [
    {
      Icon: SettingsRounded,
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
      ],
    },
    {
      Icon: SchoolRounded,
      title: 'Lab Instructor',
      company: 'Full Sail University',
      location: 'Winter Park, FL',
      duration: ['August 2020', 'June 2021'],
      bullets: [
        "Worked with a large number of new students on a monthly basis in Full Sail's Game Design bachelor's capstone project",
        "Provided assistance in understanding game design pre-production concepts",
        "Led many small teams through pseudo-agile production workflows with biweekly sprints"
      ],
    }
  ],
  education: [
    {
      Icon: BadgeRounded,
      title: 'Full Stack Engineer Certification',
      company: 'Southern Methodist University',
      location: 'Dallas, tx',
      duration: ['2020', '2021'],
      bullets: []
    },
    {
      Icon: SchoolRounded,
      title: 'Master of Science',
      company: 'Full Sail University',
      location: 'Winter Park, FL',
      duration: ['2019', '2020'],
      bullets: []
    },
    {
      Icon: SchoolRounded,
      title: 'Bachelor of Science',
      company: 'Full Sail University',
      location: 'Winter Park, FL',
      duration: ['2016', '2019'],
      bullets: []
    }
  ]
}