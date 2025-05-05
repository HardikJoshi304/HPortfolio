
const logotext = "Hardik";
const meta = {
    title: "Hardik Joshi",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Hardik Joshi",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "There are only two hard things in Computer Science: cache invalidation and naming things.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: " Hardworking and motivated IT professional with a strong academic foundation, including a PGDCSA (Postgraduate Diploma in Computer Science Applications) and hands-on experience in front-end technologies such as PHP, HTML, CSS, and JavaScript. Skilled in web development and client training, gained through internships and an IT Assistant role where I successfully guided clients on specialized software. Eager to leverage technical expertise and problem-solving skills to contribute to innovative IT projects.",
};

const skills = [{
        name: "React JS",
        value: 80,
    },
    {
        name: "MongoDB",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "PHP",
        value: 90,
    },
    {
        name: "Jquery",
        value: 70,
    },
    {
        name: "Tailwind CSS",
        value: 80,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Passionate about designing seamless UI/UX for responsive web and mobile apps using modern tools like Figma, React.js, and Tailwind CSS.",
    },
    {
        title: "Web Mobile Apps",
        description: "Experienced in building modern, responsive web applications using React.js, Node.js, and MongoDB with a clean, user-focused design approach.",
    },
    {
        title: "Graphic Design",
        description: "Skilled in creating visually compelling graphics, brochures, and digital content that align with brand identity and engage target audiences.",
    },
];

const dataportfolio = [{
        img: require('./assets/jobapp.png'),
        description: "Track every step of your job hunt journey — from application to offer — all in one place",
        link: "https://job-app-snowy.vercel.app/",
        style: { width: "100%", height: "100%", objectFit: "cover" },
    },

];

const contactConfig = {
    YOUR_EMAIL: "hardikjoshi304h@gmail.com",
    YOUR_FONE: "9537341720",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
