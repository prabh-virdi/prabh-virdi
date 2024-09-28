var prjCount = 0;

$ = (e) => {
  return document.querySelector(e);
};

$$ = (e) => {
  return document.querySelectorAll(e);
};

const userInfo = {
  name: "PRABHSIMRAN SINGH",
  address: "rajavirdi2001@gmail.com",
  phone: "+91 7696453597",
  about: "Enthusiastic and dedicated Civil Engineer with hands-on experience in both planning and execution. Proficient in using a range of software tools, including AutoCAD, STAAD Pro, Microsoft Office, SAP NetWeaver, 3ds Max, V-Ray, and Adobe Photoshop. Possess good analytical skills and the ability to efficiently manage tasks and projects. Highly motivated to bring my technical expertise and passion for civil engineering to a dynamic and innovative team. Committed to staying updated with latest trends for efficient solutions.",
};

const toggleBtn = document.querySelector(".toggle-btn");
const lockIcon = document.querySelector(".icon i");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  if (toggleBtn.classList.contains("active")) {
    lockIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    lockIcon.classList.replace("fa-sun", "fa-moon");
  }
});

VanillaTilt.init(document.querySelector(".profile-pic"), {
  max: 10,
  speed: 200,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  reverse: true,
  glare: true,
  "max-glare": 0.1,
});

const testimonials = [
  {
    author: "Roneet Kumar",
    profession: "Front End Engineer at Morgan Stanley",
    img: "./assets/1.jfif",
    message: `Rupinder is a dear friend with whom I had pleasure to work on various exciting projects while we were completing our post graduate diploma at LaSalle College. He is super fun to work with and a great team player; moreover, he is a skilled programmer and has an eye for attention to detail. I can happily recommend Rupinder for Full-stack Software development roles.`,
  },
  {
    author: "Gagandeep Singh",
    profession: "Managing Director at Enrage Tech",
    img: "./assets/2.jfif",
    message: `He was a great asset for our company. The clients always appreciated his design and the functionality of the websites designed by him. He is a hard-working person who is committed to deadlines and also is a good human being.`,
  },
  {
    author: "Lucio Santilli",
    profession: "Lecturer at Collège LaSalle",
    img: "./assets/3.jfif",
    message: `I was pleased to have Rupinder in one of my classes. During that class, he was always curious, responsible, respectful, and was not shy to ask relevant questions. He excelled in the class. I strongly recommend him for any academic or professional setting.`,
  },
];

const education = [
  {
    course: "B-tech in Civil Engineering",
    institute: "I.K. Gujral Punjab Technical University",
    location: "Kapurthala, Punjab, India",
    year: "2019-2023",
  },
];

const experience = [
  {
    position: "Planning Engineer - S2 cadre",
    company: "Shapoorji Pallonji Engineering and Construction",
    duration: "Aug 2024 - present",
    details: `CLIENT - BCD BIHAR<br/>SITE – BUDDHA STUPA AND SAMAYAK, Vaishali, Bihar<br/>Planning Department<br/>
    • Developed detailed project plans and schedules for various construction activities, ensuring alignment with project goals and timelines.<br/>
    • Responsible for calculating accurate balance work for project completion.<br/>
    • Material procurement and tracking.<br/>
    • Monitored project progress and performance against established schedules and milestones.<br/>
    • Updated CTC based on project progress, new data, and changes in project scope.<br/>
    <br/>Execution Department:<br/>
    Monitored Construction of RCC Structures:<br/>
    • Oversaw the construction of RCC structures including foundation, rafts, columns, RCC walls, beams, slabs, and ramps.<br/>
    • Ensured adherence to design specifications and safety standards during construction activities.<br/>
    • Collaborated with contractors and team members to resolve technical issues and ensure timely completion.<br/>
    • Led the construction of a large ceremonial water body and a lotus pond surrounding the stupa.<br/>
    • Coordinated with team members to ensure efficient project execution and high-quality outcomes.<br/>
    <br/>Accurate Quantity Calculations:<br/>
    • Calculated precise quantities of reinforcement, formwork, concrete, etc., for RCC structures of the stupa for client billing.`,
  },
  {
    position: "Graduate Engineer Trainee",
    company: "Shapoorji Pallonji Engineering and Construction",
    duration: "Aug 2023 - Aug 2024",
    details: `CLIENT - BCD BIHAR<br/>SITE – BUDDHA STUPA AND SAMAYAK, Vaishali, Bihar<br/>Planning Department<br/>
    • Developed detailed project plans and schedules for various construction activities, ensuring alignment with project goals and timelines.<br/>
    • Responsible for calculating accurate balance work for project completion.<br/>
    • Material procurement and tracking.<br/>
    • Monitored project progress and performance against established schedules and milestones.<br/>
    • Updated CTC based on project progress, new data, and changes in project scope.<br/>
    <br/>Execution Department:<br/>
    Monitored Construction of RCC Structures:<br/>
    • Oversaw the construction of RCC structures including foundation, rafts, columns, RCC walls, beams, slabs, and ramps.<br/>
    • Ensured adherence to design specifications and safety standards during construction activities.<br/>
    • Collaborated with contractors and team members to resolve technical issues and ensure timely completion.<br/>
    • Led the construction of a large ceremonial water body and a lotus pond surrounding the stupa.<br/>
    • Coordinated with team members to ensure efficient project execution and high-quality outcomes.<br/>
    <br/>Accurate Quantity Calculations:<br/>
    • Calculated precise quantities of reinforcement, formwork, concrete, etc., for RCC structures of the stupa for client billing.`,
  },
];

const skills = [
  {
    cat_name: "BIMs",
    skills: [
      { name: "AutoCad", percentage: "85" },
      { name: "Stadd Pro", percentage: "60" },
      { name: "SAP Netweaver", percentage: "60" },
      { name: "3ds Max", percentage: "75" },
      { name: "Vray", percentage: "85" },
    ],
  },
  {
    cat_name: "Microsoft Excel",
    skills: [
      { name: "Excel", percentage: "80" },
      { name: "Powerpoint", percentage: "85" },
      { name: "Word", percentage: "80" },
    ],
  },
  {
    cat_name: "DESIGN",
    skills: [
      { name: "Adobe Photoshop", percentage: "70" },
      { name: "Adobe Illustrator", percentage: "65" },
      { name: "Adobe After Effects", percentage: "45" },
    ],
  },
];

const projects = [
  {
    name: "BUDDHA STUPA AND SAMAYAK, Vaishali Bihar",
    img: "./Images/8.jpg",
    desc: "GET at SPENC",
    link: "https://prabh-virdi.github.io/buddha-stupa/",
  },
];

// Initialize User
$(".name").innerText = userInfo.name;
$(".info").innerText = userInfo.about;

// Add Skills
const createSkill = (skill) => {
  const newSkill = `
  <div class="skill" data-aos="fade-right">
    <div class="level">
      <div class="name">${skill.name}</div>
      <div class="percentage">
        <div class="bar" style="width:${skill.percentage}%; position:relative"></div>
        <div class="buttonBar" title="${skill.percentage}%"></div>
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

// Initialize Education
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

// Initialize Work
experience.map((work) => {
  $(".work-list").innerHTML += `
  <div class="work">
    <div class="overlay">
      <div class="details">${work.details}</div>
    </div>
    <img src="./assets/work.png" height="80px" width="80px" alt="">
    <h2 class="duration">${work.duration}</h2>
    <h2 class="position">${work.position}</h2>
    <h2 class="company">${work.company}</h2>
  </div>`;
});

// Initialize Projects
projects.map((project) => {
  $(".projects").innerHTML += `
  <div class="project" style="background-image: url(${project.img})">
    <div class="overlay">
      <div class="prj-name">${project.name}</div>
      <a target="_blank" href="${project.link}">View</a>
    </div>
  </div>`;
});

// Profession animation creates typing animation
var professions = ["#Civil_Engineer"];

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
    var newSentence = CurrentSentence.split("").slice(0, x - 1).join("");
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

// Testimonials
const createTestimony = (testimony) => {
  const template = `<div class="testimony">
    <div class="message">"${testimony.message}"</div>
    <div class="details">
      <img src="${testimony.img}" alt="">
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

// Fixed event listener to use 'mouseover' correctly
document.querySelectorAll(".work .overlay").forEach((overlay) => {
  overlay.addEventListener("mouseover", () => {
    overlay.animate({ scrollTop: 0 }, 100);
  });
});
