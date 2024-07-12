import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    musica,
    contact,
    css,
    redHope,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    nemesis,
    react,
    instaForNoobs,
    gpt,
    tailwindcss,
    blog,
    typescript,
    C,
    java,
    python,
    redis,
    postgres,
    linux,
    Docker,
    k8s,
    nginx,
    gcloud,
    vercel
} from "../assets/icons";

export const skills = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: postgres,
        name: "Postgres",
        type: "Database",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: Docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: k8s,
        name: "Kubernetes",
        type: "DevOps",
    },
    {
        imageUrl: nginx,
        name: "NGINX",
        type: "DevOps",
    },
    {
        imageUrl: gcloud,
        name: "Google Cloud",
        type: "Cloud Computing",
    },
    {
        imageUrl: C,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "java",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Programming Language",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "OS",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: vercel,
        name: "Vercel",
        type: "Deployment",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: nemesis,
        theme: 'btn-back-red',
        name: 'Nemesis - Online Real-time Chatting App',
        description: 'A small scale real-time online chatting platform to chat with friends and build a community. Frontend has been built using React.js, Tailwind CSS and Daisy UI, backend (with integrated web security protocols like password hashing, JWT, cookies, etc.) built using Node.js with Express.js, MongoDB and Socket.io.',
        link: 'https://nemesis-owrb.onrender.com/',
    },
    {
        iconUrl: instaForNoobs,
        theme: 'btn-back-pink',
        name: 'InstaForNoobs - Full-Stack Instagram Clone',
        description: 'A web application which works along the footsteps of the well-known social media site - Instagram, built using React.js for Frontend & Firebase for backend services (client-side authentication, database & storage).',
        link: 'https://insta-for-noobs.vercel.app/',
    },
    {
        iconUrl: gpt,
        theme: 'btn-back-yellow',
        name: 'MyGPT',
        description: 'An attempt to make a Text-based AI chatting website using OpenAI API’s GPT-3.5-turbo endpoint. Frontend build using Typescript with React.js and Material UI. Backend has been built using Node.js with Express.js, MongoDB, as well as Axios for seamless integration.',
        link: 'https://github.com/Tamoziit/MyGPT',
    },
    {
        iconUrl: blog,
        theme: 'btn-back-green',
        name: 'Containerized Blog Post app - Backend',
        description: 'A small scale production grade backend Blog Post app developed using Node.js with Express.js, Docker, MongoDB, Redis, Docker, Docker Hub, NGINX & Docker Swarm.',
        link: 'https://github.com/Tamoziit/DevOps-Docker',
    },
    {
        iconUrl: redHope,
        theme: 'btn-back-black',
        name: 'RedHope',
        description: 'A frontend-based project aimed at creating a Blood Donation & Blood Bank website, implemented using React.js with JavaScript, CSS3 & Python for generating artificial JSON data for the application.',
        link: 'https://redhope.onrender.com',
    },
    {
        iconUrl: musica,
        theme: 'btn-back-blue',
        name: 'Musica',
        description: 'A music streaming, reviewing & practicing website, built using HTML5, CSS3, JavaScript & “iTunes search” API. (Designed for desktops).',
        link: 'https://musica-music-app-reviews-practice.netlify.app/',
    }
];