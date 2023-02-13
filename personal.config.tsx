import { BadgeRounded, BuildCircleRounded, CodeRounded, ConfirmationNumberRounded, DataObjectRounded, FitnessCenterRounded, PeopleRounded, SchoolRounded, SettingsRounded, SportsEsportsRounded } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

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
  detail: string | JSX.Element,
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
      detail: (<>React web application using vite as the bundler and compiler, dockerized and hosted on a high-availability Heroku dyno. - github.com<wbr />/BentAllenDesign<wbr />/portfolio-web</>),
    },
    {
      Icon: DataObjectRounded,
      name: "Cruisr",
      detail: "Full-stack React web app and Java Spring backend with a PostgreSQL database masked by a Hasura GraphQL layer. - Code available upon request",
    },
    {
      Icon: ConfirmationNumberRounded,
      name: "Schrödinger",
      detail: "Full-stack Discord ticket and raffle management bot with a backing PostgreSQL database deployed to a Heroku dyno. Actively in use by indie game studio Legio Vox Studios. - Code available upon request",
    },
    {
      Icon: PeopleRounded,
      name: "Hottos Crafting Company",
      detail: "Simple .NET Discord bot for Animal Crossing island visitor queue management deployed to an AWS EC2 instance. - Code unavailable",
    },
    {
      Icon: SportsEsportsRounded,
      name: "Loralai",
      detail: "5-month small-pod capstone game project for the Game Design Bachelor's program at Full Sail University. I specifically worked on gameplay and tools programming. - Code unavailable"
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
      company: 'Cognizant',
      location: 'Plano, TX',
      duration: ['June 2021', 'Present'],
      bullets: [
        "Worked in two development pods in an XP agile environment, with product teams working in an NX monorepo to manage micro deployments while safely sharing managed libs.",
        "Built two React TypeScript SPAs utilizing Apollo Client for GraphQL endpoint linking, client-side caching, query/mutation stateful hook generation, and global reactive var state management.",
        "Built a Node.js Apollo Server GraphQL user management remote schema which we layered with Hasura to manage role access, RESTful action mappings, and operation whitelisting in higher environments.",
        "Built an ASP.NET backend service utilizing the Azure Service Bus for asynchronous batch user event processing.",
        "Maintained client-mandated 80% code coverage across lines and branches in each of the above products and services.",
        "Managed the Azure pipeline and Helm configuration and lower environment deployment approvals for each of the above products and services.",
      ],
    },
    {
      Icon: SchoolRounded,
      title: 'Lab Instructor',
      company: 'Full Sail University',
      location: 'Winter Park, FL',
      duration: ['August 2020', 'June 2021'],
      bullets: [
        "Worked with dozens of new students on a monthly basis in Full Sail's Game Design bachelor's capstone project",
        "Built a .NET service to track the number of commits and individual non-whitespace changes to our Perforce server to award fair grading upon receiving deliverables on a per-student and per-team basis.",
        "Provided assistance in understanding early game design and development concepts.",
        "Acted as scrum master for many small pods using hybrid agile workflows with biweekly sprints."
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