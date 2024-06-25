var prjCount = 0;

$ = (e) => {
  return document.querySelector(e);
};

$$ = (e) => {
  return document.querySelectorAll(e);
};

const userInfo = {
  name: "RUPINDER PAL SINGH",
  address: "rupindervirdi96@gmail.com",
  phone: "+1(438)998-1746",
  about:
    " Versatile full-stack web developer with a passion for creating seamless user experiences. Skilled in both front-end and back-end technologies, I thrive on problem-solving and delivering high-quality solutions. Committed to staying updated with the latest trends for innovative and efficient web development. ",
};

const testimonials = [
  {
    author: "Roneet Kumar",
    profession: "Front End Engineer at Morgan Stanley",
    img: "./assets/1.jfif",
    message: `Rupinder is a dear friend with whom i had pleasure to
    work on various exciting projects while we were completing our post graduate diploma at
    LaSalle College.
    He is super fun to work with and a great team player, moreover he is a skilled
    programmer and has an eye for attention to detail.
    I can happily recommend Rupinder for Full-stack Software development roles.`,
  },
  {
    author: "Gagandeep Singh",
    profession: "Managing Director at Enrage Tech",
    img: "./assets/2.jfif",
    message: `He was a great asset for our company. The clients always appreciated his design and the functionality of the websites designed by him. He is a hard working person who is commited to deadlines and also is good human being.`,
  },
  {
    author: "Lucio Santilli",
    profession: "Lecturer at Collège LaSalle",
    img: "./assets/3.jfif",
    message: `I was pleased to have Rupinder in one of my classes. During that class, he was always curious, responsible, respectful and was not shy to ask relevant questions. He excelled in the class. I strongly recommend him for any academic or professional setting.`,
  },
];

const education = [
  {
    course: "PG Diploma in Web Programming",
    institute: "College Lasalle",
    location: "Quebec, Canada",
    year: "2020",
  },
  {
    course: "Bachelors in Computer Science",
    institute: "Guru Nanak Dev University",
    location: "Amritsar, India",
    year: "2017",
  },
];

const experience = [
  {
    position: "Front End Web Developer",
    company: "LGS, an IBM company (BELL)",
    duration: "Jan 2022 - Present",
    details: `I am working on a part of a web application to change from MVC code to a react application. I am working on development of various features new and existing. Working with multiple repositories on Bitbucket. Rest of my responsibilities include:<br/>
     • Developing new user-facing features.<br/>
     • Updating Jira trackers for agile environment and team management<br/>
     • Writing efficient code for flexibility and agility of the product.<br/>
     • Assuring that all user input is validated before submitting to back-end<br/>
     • Solving high scale defects in existing applications.<br/>
     • Working with a pretty complex source code handled on bitbucket using Github.<br/>,
     • Collaborating with all team members and stakeholders<br/>`,
  },
  {
    position: "Assistant Professor",
    company: "ISI College",
    duration: "Nov 2020 - Jan 2021",
    details:
      "Assisted Professor Roneet Kumar at ISI College for teaching Javascript to students. I was assigned to prepare presentations to explain various aspects of the languages theoretically and practically. At many moments I was able to gain a lot of knowledge from the students as well.",
  },
  {
    position: "Front End Web Developer",
    company: "Enrage Tech",
    duration: "2015 - 2018",
    details: `I was responsible for implementing visual elements that were visible from the computer users vantage point within various web applications. I combined the art of design with the science of programming.<br/>
    Rest of my tasks included:<br/>
     • Develop new user-facing features<br/>
     • Build reusable code and libraries for future use<br/>
     • Ensure the technical feasibility of UI/UX designs<br/>
     • Optimize application for maximum speed and scalability<br/>
     • Assure that all user input is validated before submitting to back-end<br/>
     • Collaborate with other team members and stakeholders`,
  },
];

const skills = [
  {
    cat_name: "WEB_TECHS",
    skills: [
      { name: "REACT.js", percentage: "90" },
      { name: "TAILWIND", percentage: "65" },
      { name: "NEXT.js", percentage: "85" },
      { name: "VUE.js", percentage: "85" },
      { name: "SCSS", percentage: "75" },
      { name: "ANGULAR.js", percentage: "85" },
      { name: "HTML", percentage: "95" },
      { name: "CSS", percentage: "75" },
    ],
  },
  {
    cat_name: "DATABASE",
    skills: [
      {
        name: "MONGO-DB",
        percentage: "75",
      },
      {
        name: "POSTGRE-SQL",
        percentage: "75",
      },
      {
        name: "PLSQL",
        percentage: "82",
      },
      {
        name: "SQL",
        percentage: "84",
      },
      {
        name: "FIREBASE",
        percentage: "80",
      },
    ],
  },
  {
    cat_name: "BACKEND",
    skills: [
      { name: "NODE.js", percentage: "89" },
      { name: "EXPRESS.js", percentage: "92" },
      { name: "NEST.js", percentage: "82" },
      { name: "NODEMAILER.js", percentage: "82" },
    ],
  },
  {
    cat_name: "DESIGN",
    skills: [
      { name: "FIGMA", percentage: "70" },
      { name: "ADOBE XD", percentage: "65" },
    ],
  },
  {
    cat_name: "VERSION_CONTROL ",
    skills: [
      { name: "GITHUB", percentage: "90" },
      { name: "BITBUCKET", percentage: "90" },
      { name: "GIT", percentage: "88" },
    ],
  },
];

const projects = [
  {
    name: "MINGLE",
    img: "./assets/mingle.png",
    desc: "Facebook-clone is a website similar to facebook providing some important features as facebook. This app is built by me as my final project for college. This app has similar design to facebook and some of the features are same too.",
    link: "https://mingle-app-virdi.onrender.com/",
  },
  {
    name: "STREET SAVER",
    img: "./assets/streetSaver.png",
    desc: "Issues tracker is an application that could be a help to the society to improve the condition of roads. This application allows any user to report any potholes or bumps found on the street.",
    link: "https://street-saver.onrender.com/",
  },
  {
    name: "HANGMAN",
    img: "./assets/hangman.png",
    desc: "The classic game made with react providing a great design and additional features on the way. Like anyone can add additional categories and register their score to the wall of fame.",
    link: "https://rupindervirdi96.github.io/hangman",
  },
];

//Initialize User
$(".name").innerText = userInfo.name;
$(".info").innerText = userInfo.about;

var y = 0;

//Add Skills
const createSkill = (skill) => {
  const newSkill = `
  <div class="skill" data-aos="fade-right">
    <div class="level">
      <div class="name">${skill.name}</div>
      <div class="percentage">
        <div class="bar" style="width:${skill.percentage}%; position:relative"></div>
        <div class="buttonBar" title=${skill.percentage}%></div>
      </div>
    </div>
  </div>`;
  return newSkill;
};
const createCats = (cat, skills) => {
  const skillCat = `
  <div class="skillCat">
    <h3>${cat}</h3>
  ${skills.map((skill) => createSkill(skill)).join("")}
  </div>`;
  return skillCat;
};
skills.map((skill) => {
  $(".skills").innerHTML += createCats(skill.cat_name, skill.skills);
});

//Initialize Education
education.map((edu) => {
  $(".education-list").innerHTML += `
  <div class="education">
  <img src="./assets/education.png" height="80px" width="80px" alt="">
  <h2 class="duration">${edu.year}</h2>
  <h2 class="course">${edu.course}</h2>
  <h2 class="institute">${edu.institute}</h2>
  <h2 class="location">${edu.location}</h2>
</div>`;
});

//Initialize Work
experience.map((work) => {
  $(".work-list").innerHTML += `
  <div class="work">
  <div class="overlay" >
              <div class="details">${work.details}</div>
  </div>
  <img src="./assets/work.png" height="80px" width="80px" alt="">
  <h2 class="duration">${work.duration}</h2>
  <h2 class="position">${work.position}</h2>
  <h2 class="company">${work.company}</h2>
</div>`;
});

//Initialize Projects
projects.map((project) => {
  $(".projects").innerHTML += `
          <div class="project" style="background-image: url(${project.img})">
            <div class="overlay" >
              <div class="prj-name">${project.name}</div>
              <a target="_blank" href="${project.link}">View</a>
            </div>
          </div>
  `;
});

//Profession animation
var professions = [
  "#FrontEndWebDeveloper",
  "#FullStackWebDeveloper",
  "#DesignEnthusiast",
  "#Teacher",
];

var x = 0;
var sentenceNumber = 0;
var CurrentSentence = professions[sentenceNumber];
var rewind = false;

var intervalWrite = setInterval(write, 100);
var intervalRemove = setInterval(() => {}, 100);

function write() {
  if (x < CurrentSentence.length && !rewind) {
    $(".professionName").innerText += CurrentSentence[x];
    x++;
  } else {
    clearInterval(intervalWrite);
    setTimeout(() => {
      intervalRemove = setInterval(remove, 100);
    }, 400);
  }
}

function remove() {
  if (x > 0) {
    var newSentence = CurrentSentence.split("")
      .slice(0, x - 1)
      .join("");
    $(".professionName").innerText = newSentence;
    x--;
  } else {
    clearInterval(intervalRemove);
    if (sentenceNumber < professions.length - 1) {
      sentenceNumber++;
    } else {
      sentenceNumber = 0;
    }
    CurrentSentence = professions[sentenceNumber];
    intervalWrite = setInterval(write, 100);
  }
}

$(".copyright span").innerText = new Date().getFullYear();

//Testimonials
const createTestimony = (testimony) => {
  const template = `<div class="testimony">
<div class="message">"${testimony.message}"</div>
<div class="details">
  <img src="${testimony.img}"   alt="">
  <div class="about">
    <div class="author">${testimony.author}</div>
    <div class="prof">${testimony.profession}</div>
  </div>
</div>
</div>`;
  return template;
};

testimonials.map((testimony) => {
  $(".testimonials").innerHTML += createTestimony(testimony);
});

// document.querySelector(".overlay").onclick = () => console.log("abc");
document
  .querySelectorAll(".work .overlay")
  .forEach((x) =>
    x.addEventListener("onmouseover", () =>
      document.querySelector(".work .overlay").animate({ scrollTop: 0 }, 100)
    )
  );
