export const projects = [
  {
    title: "Dota2 Random Card Generator",
    description:
      "Generates a random Dota 2 character as a card displaying basic information and stats. Data is grabbed from the Open Dota API using the 'GET /heroStats' call, then a hero is randomly selected and a card is then generated using that hero's information. A color theme is also determined by the three hero attributes agillity (green), intelligence (blue), and strength (red).",
    image: "/images/dota2_banner.png",
    alt: "Dota2 Random Card Generator",
    tags: ["Open Dota API", "JavaScript", "CSS"],
    source: "https://mtattrie.github.io/Dota-Card-Generator/",
    visit: "https://github.com/MTattrie/Dota-Card-Generator",
    id: 0,
  },
  {
    title: "Selenium Web Driver",
    description:
      "Example of a few Selenium automation tests. Tested against 'https://the-internet.herokuapp.com' on Chrome and Firefox. Utilizes Maven for dependencies.",
    image: "/images/seleniumLogo.png",
    tags: ["Selenium", "Java", "Eclipse IDE", "Maven"],
    visit: "https://github.com/MTattrie/HerokuAppTests",
    id: 1,
  },
  {
    title: "Jeopardy",
    description:
      "Project built using React, Material UI, and JService API. A web based game version of the hit tv show Jeopardy. Currently pulls 4 pre-determined categories from the JService API displays 4 questions under each category for the player to answer. The score is updated after each answer using hooks.",
    image: "/images/jeopardy.jpg",
    alt: "jeopardy",
    tags: ["React", "Material UI", "JService API", "JavaScript"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 2,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'BCIT Computer Systems Technology (CST) Graduate' },
  { year: 2018, text: 'TBA Digital QA Analyst contract' },
  { year: 2018, text: 'Ensemble Systems - Full-time Quality Assurance Specialist / QA Lead' },
  { year: 2020, text: 'New Prospects' },
];

export const AcomplishmentData = [
  { title: "QA Team Lead", text: 'Team of 4, launch 2 Roku Apps with major TV network.' },
  { title: "Testing Productivity", text: 'Standardized certification testing - 90% less failure rate' },
  { title: "BCIT Graduate", text: 'CST Diploma - Data Communication' }
];