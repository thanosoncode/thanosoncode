import nima from "../../public/projects/nimaanima.jpg";
import atlas from "../../public/projects/atlaschania.jpg";
import training from "../../public/projects/training-log.jpg";
import jobPerfectImg from "../../public/projects/jobPerfect.jpg";
import { TProject } from "./types";

export const nimaAnima: TProject = {
  name: "NimaAnima",
  image: nima,
  description: "E-commerce with custom CMS and payment integration",
  inProgress: true,
  stack: [
    "Next.js",
    "Typescript",
    "Stripe",
    "Redux-toolkit",
    "React-query",
    "React-hook-form",
    "Zod",
    "Next-auth",
    "TailwindCSS",
    "PrismaORM",
    "MongoDB",
  ],
  demoUrl: "https://nimaanima.vercel.app/",
  codeUrl: "https://github.com/thanosoncode/nimaanima",
};

export const atlasChania: TProject = {
  name: "Atlas Chania",
  image: atlas,
  description: "Gym website with blog and newsletter management",
  inProgress: false,
  stack: [
    "Next.js",
    "Typescript",
    "React-query",
    "Next-auth",
    "React-quill",
    "TailwindCSS",
    "PrismaORM",
    "MongoDB",
  ],
  demoUrl: "https://www.atlaschania.gr/",
  codeUrl: "https://github.com/thanosoncode/atlas-chania-test",
};

export const trainingLog: TProject = {
  name: "Training log",
  image: training,
  inProgress: false,
  description:
    "MERN app with user flows and data visualization to track workouts",
  stack: [
    "React.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "JWT",
    "React-query",
    "MaterialUI",
    "Recharts",
    "PrismaORM",
    "MongoDB",
  ],
  demoUrl: "https://traininglog.netlify.app/",
  codeUrl: "https://github.com/thanosoncode/training-log",
};

export const jobPerfect: TProject = {
  name: "JobPerfect",
  image: jobPerfectImg,
  inProgress: false,
  description:
    "Social media platform for job seekers and businesses in hospitality industry. Includes maps, user profiles, job listings, communication, payments.",
  stack: [
    "Next.js",
    "Typescript",
    "Stripe",
    "Redux-toolkit",
    "React-query",
    "React-hook-form",
    "Next-auth",
    "TailwindCSS",
    "Shadcn UI",
    "Resend",
    "Firebase",
    "PrismaORM",
    "MongoDB",
  ],
  demoUrl: "https://www.jobperfect.gr/",
  codeUrl: "",
};

export const experiences = [
  {
    title: "Front-end Engineer @ GWI",
    duration: "Mar 2022 - Present",
    bullets: [
      {
        start:
          "Building new microfrontends and features for the platform using",
        highlight: "React, Typescript and Single-spa",
        end: "",
      },
      {
        start: "Revamping and expanding the platform's",
        highlight: "in-house UI library in Storybook",
        end: "including documentation, accessibility enhancements, and an enhanced developer experience",
      },
      {
        start: "Achieving an",
        highlight: "85% codebase test coverage",
        end: "across multiple repositories using Jest and React-testing-library and Cypress",
      },
      {
        start: "Optimizing and extending existing code improving",
        highlight: "performance and readability",
        end: "",
      },
      {
        start: "Effectively collaborating in",
        highlight: "agile methodologies",
        end: "with stakeholders to achieve our goals",
      },
    ],
  },
  {
    title: "Freelance Software Engineer",
    duration: "Aug 2023 - Present",
    bullets: [
      {
        start: "Developing a full stack e-commerce with",
        highlight: "custom CMS and payment integration",
        end: "using Next.js, Typescript, Stripe, Redux-toolkit, React-query, PrismaORM, TailwindCSS",
      },
      {
        start: "Developed full stack gym website including",
        highlight: "blog and newsletter management",
        end: "for admins using Next.js, Typescript, Tailwind CSS, PrismaORM, Next-auth, React-quill, and Resend.",
      },
    ],
  },
  // {
  //   title: "Software Engineer @ Atlas Chania",
  //   duration: "May 2023 - Aug 2023",
  //   bullets: [
  //     {
  //       start: "Developed full stack gym website including",
  //       highlight: "blog and newsletter management",
  //       end: "for admins using Next.js, Typescript, Tailwind CSS, PrismaORM, Next-auth, React-quill, and Resend.",
  //     },
  //   ],
  // },
];
