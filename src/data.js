import * as icons from "simple-icons";

export const landingPage = {
  socials: [
    {
      slug: "siGmail",
      tooltip: "Gmail",
      link: "mailto:mpundli@ncsu.edu",
    },
    {
      slug: "siInstagram",
      tooltip: "Instagram",
      link: "https://www.instagram.com/makarandpundlik/",
    },
    {
      slug: "siGithub",
      tooltip: "GitHub",
      link: "https://github.com/MakarandPundlik",
    },
    {
      slug: "siStackoverflow",
      tooltip: "Stack Overflow",
      link: "https://stackoverflow.com/users/14190419/makarand",
    },
    {
      slug: "siLeetcode",
      tooltip: "leetcode",
      link: "https://leetcode.com/u/mak_coder/",
    },
  ],
  messages: [
    "Computer Science grad at NCSU",
    "Cloud native solution developer",
    "Data Structures and Algorithms",
  ],
};

export const about = {
  message:
    "I am Makarand, currently pursuing Master of Computer Science at North Carolina State University at Raleigh. I am currently working as a Research Scientist at IEC Lab @NCSU. I like to watch football ⚽, play Fortnite 🎮 and eat Pizza 🍕 when I am free. If you are studying at NCSU you can find me hanging out around Talley!",
};

export const skills = [
  {
    title: "Languages",
    options: [
      { slug: "siJavascript", tooltip: "JavaScript" },
      { slug: "siTypescript", tooltip: "TypeScript" },
      { slug: "siPython", tooltip: "Python" },
      { slug: "siRuby", tooltip: "Ruby" },
      { slug: "siHtml5", tooltip: "HTML5" },
      { slug: "siCss3", tooltip: "CSS3" },
    ],
  },
  {
    title: "Frameworks",
    options: [
      { slug: "siNodedotjs", tooltip: "NodeJs" },
      { slug: "siExpress", tooltip: "Express" },
      { slug: "siDjango", tooltip: "Django" },
      { slug: "siFlask", tooltip: "Flask" },
      { slug: "siServerless", tooltip: "Serverless" },
      { slug: "siReact", tooltip: "ReactJs" },
      { slug: "siAngular", tooltip: "Angular" },
      { slug: "siMui", tooltip: "Material UI" },
      { slug: "siBootstrap", tooltip: "BootStrap" },
    ],
  },
  {
    title: "Cloud and Tools",
    options: [
      { slug: "siAmazon", tooltip: "AWS" },
      { slug: "siDocker", tooltip: "Docker" },
      { slug: "siGit", tooltip: "Git" },
      { slug: "siGithub", tooltip: "GitHub" },
      {
        slug: "siJenkins",
        tooltip: "Jenkins",
      },
      { slug: "siJira", tooltip: "Jira" },
      { slug: "siAtlassian", tooltip: "Atlassian" },
    ],
  },
  {
    title: "Databases",
    options: [
      { slug: "siMongodb", tooltip: "Mongodb" },
      { slug: "siMysql", tooltip: "MYSQL" },
      { slug: "siElasticsearch", tooltip: "ElasticSearch" },
      { slug: "siAmazondynamodb", tooltip: "DynamoDb" },
      {
        slug: "siPostgresql",
        tooltip: "PostgreSql",
      },
      { slug: "siRedis", tooltip: "Redis" },
    ],
  },
];

export const education = [
  {
    school: "North Carolina State University",
    image: "./ncsu.png",
    degree: "Master of Computer Science",
    location: "Raleigh, North Carolina",
    gpa: "4/4",
    startDate: "2024-08-19T18:10:55.126Z",
    endDate: "",
    coursework:
      "Design and Analysis of Algorithms, Object Oriented Design and Development, Internet Protocols, Parallel Syatems and Software Engineering",
  },
  {
    school: "Pune Institute of Computer Technology",
    image: "./pict.png",
    degree: "Bachelor of Engineering",
    location: "Pune, India",
    gpa: "3.79/4",
    startDate: "2018-08-31T18:10:55.126Z",
    endDate: "2022-07-31T18:10:55.126Z",
    coursework:
      "Data Structures and Algorithms, Object Oriented Programming, Computer Networks, Artificial Intelligence",
  },
  {
    school: "Sir Parshurambhau College",
    degree: "Higher Secondary Education",
    image: "./spcollege.jpg",
    location: "Pune, India",
    gpa: "3.8/4",
    startDate: "2016-08-31T18:10:55.126Z",
    endDate: "2018-07-31T18:10:55.126Z",
    coursework: "Mathematics, Digital Electronics, Physics, Chemistry",
  },
];

export const experience = [
  {
    image: "./ncsu.png",
    position: "Research Intern",
    data: "I am currently building WebAplus in collaboration with Carnegie Mellon University",
    dates: "Jan 2025 - Present",
  },
  {
    image: "./nice.webp",
    position: "Software Engineer",
    data: " I designed a high-performance bulk file upload API backend using TypeScript, optimized AWS Lambda Authorizer performance by 25% through caching.",
    dates: "July 2022 - July 2024",
  },
  {
    image: "./imatmi.gif",
    position: "Project Intern",
    dates: "August 2021 - Apr 2022",
    data: "Designed and developed full stack web application for students with dyslexia. I also engineered a geo location based matching algorithm for efficient student and mentor pairing. ",
  },
];

export const projects = [
  {
    image: "./packtravel.png",
    title: "Pack Travel",
    data: "Most of the university students do not have a car to travel off-campus and rely mostly on the Wolfline. But what if someone wants to travel outside Wolfline's limit? Well... why not collaborate on PackTravel to travel off-campus by a cab, rental car, etc.",
    techStack: [
      {
        slug: "siGithub",
        tooltip: "GitHub",
        link: "https://github.com/GradHackersGuild/PackTravel-Old",
      },
      { slug: "siDjango", tooltip: "Django" },
      { slug: "siHtml5", tooltip: "HTML5" },
      { slug: "siCss3", tooltip: "CSS3" },
      { slug: "siJavascript", tooltip: "JavaScript" },
      { slug: "siMongodb", tooltip: "Mongodb" },
    ],
  },
  {
    image: "./imatmi.gif",
    title: "The Art of Success",
    data: "The Art of Success is a full-stack web application built using the MERN stack. It serves as a platform to connect dyslexic students with specialized mentors using a matching algorithm. The platform ensures complete anonymity during chat sessions and provides parents with the ability to monitor their child’s progress through a secure login system.",
    techStack: [
      {
        slug: "siGithub",
        tooltip: "GitHub",
        link: "https://github.com/MakarandPundlik/covidtracker",
      },
      { slug: "siNodedotjs", tooltip: "NodeJs" },
      { slug: "siExpress", tooltip: "Express" },
      { slug: "siReact", tooltip: "ReactJs" },
      { slug: "siMui", tooltip: "Material UI" },
      { slug: "siRedis", tooltip: "Redis" },
      { slug: "siMongodb", tooltip: "Mongodb" },
    ],
  },
  {
    image: "./covid.webp",
    title: "Covid 19 Tracker",
    data: "The COVID-19 Tracker is a dynamic and interactive web application. It provides real-time visualization of COVID-19 cases and deaths worldwide by fetching data from the World Health Organization (WHO) API.",
    techStack: [
      {
        slug: "siGithub",
        tooltip: "GitHub",
        link: "https://github.com/MakarandPundlik/covidtracker",
      },
      { slug: "siReact", tooltip: "ReactJs" },
      { slug: "siBootstrap", tooltip: "BootStrap" },
    ],
  },
  {
    image: "./moviemood.gif",
    title: "Movie Mood",
    data: "Movie Mood is a personalized movie recommendation platform that matches suggestions to your mood, eliminating endless scrolling. Powered by an advanced Mood-Based Recommendation Algorithm, it brings the perfect movie to your screen instantly.",
    techStack: [
      {
        slug: "siGithub",
        tooltip: "GitHub",
        link: "https://github.com/GradHackersGuild/CSC-510-Movie-Mood",
      },
      { slug: "siFlask", tooltip: "Flask" },
      { slug: "siHtml5", tooltip: "HTML5" },
      { slug: "siCss3", tooltip: "CSS3" },
      { slug: "siJavascript", tooltip: "JavaScript" },
      { slug: "siMysql", tooltip: "MYSQL" },
    ],
  },
];

// icons.siServerless;
