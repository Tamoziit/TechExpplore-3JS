import { iisf, iitb, bit, fetsu } from "../assets/images";
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
        title: "SIF - Space Hackathon 2023 Finalist | Indian International Science Festival, 2023",
        subject: "LULC & Economic Hotspots Detection",
        icon: iisf,
        iconBg: "#accbe1",
        date: "Dec 2023 - Jan 2024",
        points: [
            "Designed an interactive user interface using HTML5, CSS3 & JavaScript.",
            "The project unveiled interconnected patterns and hotspots in synergized landscape dynamics.",
            "It focussed on economic growth and environmental data.",
            "The interface accepts landform maps of a region as input and predicts potential hotspots for economic growth.",
            "It also analyzes landscape patterns and environmental data for informed decision-making."
        ],
    },
    {
        title: "Task Whiz 2023 | Techfest, IIT Bombay",
        subject: "Intelligent Task Management System",
        icon: iitb,
        iconBg: "#fbc3bc",
        date: "Nov 2023",
        points: [
            "Worked as a Web Developer in the \"Intelligent Task Management\" System project.",
            "The project implemented a Smart Task Allocation System.",
            "It included Predictive Task Prioritization features, Performance Analysis and Insights.",
            "It had an Integrated Sentiment Analysis capabilities."
        ],
    },
    {
        title: "Spider 4.0 : The Web Crawler | BIT Sindri",
        subject: "RedHope : Blood Bank-cum-Blood Donation Website",
        icon: bit,
        iconBg: "#b7e4c7",
        date: "Mar 2024 - May 2024",
        points: [
            "Created an Immersive user experience using React.js",
            "Provides the feature to search for a required blood group from a datapool of Blood banks.",
            "Book an appointment in a blood bank to donate blood.",
            "Consult with doctors having a wide range of specializations.",
            "Stay updated with latest events & awareness programs related to Blood Donation.",
            "Stay updated with latest events & awareness programs related to Blood Donation."
        ],
    },
    {
        title: "1st Runners up at Entropy 2024 | F.E.T.S.U. presents Srijan 2024, JU",
        subject: "Revolution in the EV Sector",
        icon: fetsu,
        iconBg: "#a2d2ff",
        date: "Mar 2024",
        points: [
            "Worked as CMO on a proposed business model \"Vidyut\".",
            "We aimed at mitigating prevalent problems with the present Lithium-ion batteries centric EV industry.",
            "Our proposed  soluttion was to introduce Zinc-Manganese batteries with Nano-Bolt charging facility."
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