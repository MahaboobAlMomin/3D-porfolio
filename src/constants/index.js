import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  Amazon,
  degoogled,
  whatsappAnalysis,
  threejs,
  school,
  highschool,
  degree,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Journey",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
];

const experiences = [
  {
    title: "Schooling",
    company_name: "Ramgram Secondary School",
    icon: school,
    iconBg: "#383E56",
    date: "2016",
    points: [
      "My school journey has been a transformative experience, excelling academically with good marks while actively participating in cricket and diverse extracurricular activities.",
      "Engaging in sports taught me teamwork and leadership, while the broader involvement cultivated discipline and adaptability.",
      "These experiences have molded me into a well - rounded individual, fueling my drive for success and continuous growth as I embrace new opportunities.",
    ],
  },
  {
    title: "A Level",
    company_name: "Chelsea International Academy",
    icon: highschool,
    iconBg: "#E6DEDD",
    date: "2016 - 2018",
    points: [
      "During my high school years, I embarked on a transformative journey of academic and personal growth.",
      "I focused on a diverse range of subjects, including computers, mathematics, sciences and english.",
      "Engaging in extracurricular activities like debate club and volunteering opportunities,",
     " I honed my communication and leadership skills.Moreover, I cultivated a passion for creative writing and discovered my knack for analytical thinking through scientific experiments.",
      "This well- rounded high school education laid a strong foundation for my future academic pursuits.",
    ],
  },
  {
    title: "Bachelor Degree in Computer Science & Engineering" ,
    company_name: "Dr. Ambedkar Institute Of Technology (VTU)",
    icon: degree,
    iconBg: "#383E56",
    date: "2019 - 2023",
    points: [
     " Pursuing a Bachelor's in Computer Science ignited my passion for technology and web development.",
      " Deep - diving into Programming languages(C, C++ , Python, Java), Data structure, Algorithms, Operating System, Computer Networks, and Database Management System. ",      "I honed my skills in front - end(HTML, CSS, JavaScript, Bootstrap, React / Redux / Thunk, Threejs, Tailwind) and back - end(Nodejs, Expressjs, PrismaORM, Postgress, MongoDB) development.",
      " I'm excited and eagerly contribute to the dynamic world of web technology, creating user - friendly interfaces and innovative web applications that impact lives positively.",
      "With an unwavering commitment to growth, I aim to shape the digital landscape, leveraging my skills and knowledge to thrive in the tech industry.",
    ],
  },
];

const testimonials = [

   {
    testimonial:
      "",
    image: "https://i.postimg.cc/d0MGCXxs/Linkedi-In.png",
    source_code_link:"https://www.linkedin.com/in/mahaboob-alam-momin/",
  },
  {
    testimonial:
      "",
    image: "https://i.postimg.cc/CKNpDyxk/git.png",
    source_code_link: "https://github.com/MahaboobAlMomin",
  },
 
  {
    testimonial:
      "",
    image: "https://i.postimg.cc/gjw0Ncxf/insta.png",
    source_code_link:"https://instagram.com/rawretrix?igshid=MzNlNGNkZWQ4Mg==",
  },
];

const projects = [
  {
    name: "DeGoogled Android OS",
    description:
      "It is a system based on the android, but all the Google mobile services and bloatware are eliminated.It provide privacy and security to users.",
     tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
    ],
    image: degoogled,
    source_code_link: "https://github.com/",
  },
  {
    name: "Amazon Clone",
    description:
      "Amazon clone is an ecommerce platform where businesses place their products for display, and users can shop from over a million products. It comes with user retention and user engaging features similar to the Amazon app.",
    tags: [
      {
        name: "React/Redux/Thunk",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "RESTAPI",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: Amazon,
    source_code_link: "https://github.com/MahaboobAlMomin/Amazon-Clone",
  },
  {
    name: "WhatsApp Analyzer",
    description:
      "It a data analysis-based engine where you can upload the WhatsApp chat in text format and generate a complete analysis report .",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: whatsappAnalysis,
    source_code_link: "https://github.com/MahaboobAlMomin/WhatsAppChatsAnalysis",
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
