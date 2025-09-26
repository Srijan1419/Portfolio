// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';


export const SkillsInfo = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C', logo: cLogo },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'SQL', logo: mysqlLogo },
      { name: 'Tableau', logo: postmanLogo },
      { name: 'Excel', logo: figmaLogo },
    ],
  },
  {
    title: 'CS Fundamentals & OS',
    skills: [
      { name: 'OOP', logo: javaLogo },
      { name: 'DSA', logo: cppLogo },
      { name: 'Windows', logo: vscodeLogo },
      { name: 'Linux', logo: githubLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: agcLogo,
      role: "IT Intern",
      company: "Bharat Sanchar Nigam Limited (BSNL)",
      date: "May 2025 - July 2025",
      desc: "Designed IP addressing and subnetting schemes using Wireshark. Built and maintained a departmental website with HTML5, CSS3, JavaScript, Bootstrap. Assisted in server management, updates, security checks, and performance monitoring. Gained hands-on experience in network configuration, troubleshooting, and web development.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Wireshark",
        "Network Configuration",
        "Server Management",
        "Web Development",
      ],
    },
    {
      id: 1,
      img: webverseLogo,
      role: "Digital Marketing Manager (Internship)",
      company: "Oceans Fay",
      date: "August 2022 - September 2022",
      desc: "Executed digital marketing strategies, managed content creation, web design, and social media campaigns. Developed marketing materials and maintained online presence to enhance brand visibility and engagement.",
      skills: [
        "Digital Marketing",
        "Content Management",
        "Web Design",
        "Social Media",
        "HTML",
        "CSS",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Marketing Manager (Part-Time)",
      company: "Maple Ridge Institute",
      date: "March 2024 - May 2024",
      desc: "Led strategic marketing campaigns and operations management. Coordinated marketing initiatives, analyzed campaign performance, and implemented strategies to improve brand awareness and customer acquisition.",
      skills: [
        "Strategic Marketing",
        "Operations Management",
        "Campaign Management",
        "Analytics",
        "Brand Management",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Shri G.S. Institute of Technology & Science (SGSITS), Indore",
      date: "2022 - 2026",
      grade: "6.20 CGPA",
      desc: "Currently pursuing B.Tech in Information Technology from SGSITS, Indore under RGPV University. Gaining comprehensive knowledge in programming, data structures, algorithms, web development, database management, and software engineering. Actively participating in technical events, workshops, and projects that enhance practical skills in full-stack development, data analytics, and cloud technologies.",
      degree: "Bachelor of Technology - B.Tech (Information Technology)",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Joy Senior Secondary School, Vijay Nagar, Jabalpur",
      date: "2021",
      grade: "90.8%",
      desc: "Completed Class 12th education under CBSE board with excellent academic performance. Studied Physics, Chemistry, Mathematics, and Computer Science, building a strong foundation for engineering studies. Achieved outstanding results that paved the way for admission into a prestigious engineering institute.",
      degree: "CBSE Class XII - PCM with Computer Science",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Joy Senior Secondary School, Vijay Nagar, Jabalpur",
      date: "2019",
      grade: "91.8%",
      desc: "Completed Class 10th education under CBSE board with exceptional academic performance. Studied comprehensive curriculum including Science, Mathematics, and Computer Applications, demonstrating strong analytical and problem-solving abilities from an early age.",
      degree: "CBSE Class X - Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Indore Esports Community Website",
      description:
        "A comprehensive responsive website for the Indore gaming community featuring tournament listings, leaderboards, team profiles, and integrated gaming news API. Built to connect local gamers and provide a platform for competitive esports events with real-time updates and community engagement features.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
      github: "https://github.com/srijan1419/indore-esports-community",
      webapp: "https://indore-esports.netlify.app/",
    },
    {
      id: 1,
      title: "Deloitte Data Analyst Job Simulation",
      description:
        "Completed a comprehensive data analyst simulation through Forage, involving data cleaning, transformation, and analysis. Created interactive dashboards and detailed reports with actionable insights for business decision-making. Demonstrated proficiency in data visualization and statistical analysis techniques.",
      image: csprepLogo,
      tags: ["Data Analysis", "Excel", "Tableau", "Data Cleaning", "Dashboards"],
      github: "https://github.com/srijan1419/deloitte-data-simulation",
      webapp: "https://forage.com/virtual-internships/prototype/YPWCiGNTkr6QxcpEu/Data-Analytics",
    },
    {
      id: 2,
      title: "Deloitte Cyber Job Simulation",
      description:
        "Participated in a cybersecurity simulation focusing on threat detection and incident response. Analyzed security logs, identified suspicious behavior patterns, and developed comprehensive incident response measures. Enhanced understanding of cybersecurity principles and practical threat analysis.",
      image: movierecLogo,
      tags: ["Cybersecurity", "Log Analysis", "Incident Response", "Threat Detection"],
      github: "https://github.com/srijan1419/deloitte-cyber-simulation",
      webapp: "https://forage.com/virtual-internships/prototype/gf2aJbE7dBPDRJaYL/Cyber-Security",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my projects, skills, and professional experience. Built with React.js and Tailwind CSS, featuring smooth animations, dark theme design, and optimized performance. Includes contact form integration and mobile-responsive design.",
      image: npmLogo,
      tags: ["React JS", "Tailwind CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/srijan1419/portfolio",
      webapp: "https://srijan-singh.netlify.app/",
    },
    {
      id: 4,
      title: "Java Programming Projects",
      description:
        "Collection of Java programming projects demonstrating OOP concepts, data structures, and algorithms. Includes implementations of various design patterns, sorting algorithms, and problem-solving techniques. Achieved 4⭐ rating on HackerRank through consistent practice and optimization.",
      image: taskremLogo,
      tags: ["Java", "OOP", "Data Structures", "Algorithms"],
      github: "https://github.com/srijan1419/java-projects",
      webapp: "https://hackerrank.com/srijan1419",
    },
    {
      id: 5,
      title: "Python Data Analysis Projects",
      description:
        "Various Python projects focusing on data analysis, automation, and problem-solving. Includes data manipulation scripts, web scraping tools, and analytical solutions. Demonstrates proficiency in Python libraries and achieved 3⭐ rating on HackerRank.",
      image: githubdetLogo,
      tags: ["Python", "Data Analysis", "Pandas", "NumPy", "Automation"],
      github: "https://github.com/srijan1419/python-projects",
      webapp: "https://hackerrank.com/srijan1419",
    },
  ];
