import Image from "../../Assets/2.png";
import OneNote from "../../Assets/4.png";
import FoodApp from "../../Assets/foodapp.PNG";
import Forkify from "../../Assets/forkify.PNG";
import Mapty from "../../Assets/maptyapp.PNG";
import Calender from "../../Assets/calender.jpg";


export const heroData = [
  {
    id:1,
    title:'Home',
    link:'home',
},
{
    id:2,
    title:'About Me',
    link:'about',
},
{
  id:3,
  title:'Summary',
  link:'Resume',
},
{
  id:4,
    title:'Portfolio',
    link:'portfolio',
},
{
    id:5,
    title:'Contact',
    link:'contact',
}
]
 export const tags = [
    {
    id:"1",
    name:"All",
    urlparaName:"All"
  },
  {
    id:"2",
    name:"Javascript",
    urlparaName:"Javascript"
  },
  {
    id:"3",
    name:"React",
    urlparaName:"React"
  }
  ];
  
 export const portfolio = [
    {
      id:1,
      image:Calender,
      tag:"Javascript",
      Title:"Calender",
      description:"The JavaScript Calender is a control to display date and days of the week. It provides month, year and decade view options to quickly navigate to the desired date. HTML, CSS and JavaScript is supported to enhance this application.",
      tech:["HTML","CSS","JavaScript"],
      GitLink:"https://javascript-calender-app.netlify.app"
    },
    {
      id:2,
      image:FoodApp,
      tag:"React",
      Title:"Food Delivery App",
      description:"An interactive e-commerce platform built with ReactJS and Tailwind CSS that uses browser Local Storage for robust cart state persistence and handles live menu data via custom Firebase context configurations.",
      tech:["React","Firebase","Tailwind CSS","React Router"],
      GitLink:"https://jayalakshmi-23.github.io/ReactJs-Food-Delivery-App/"
    },
    {
      id:3,
      image:Mapty,
      tag:"Javascript",
      Title:"Mapty App",
      description:"A Map application is made with Vanilla JavaScript to store workouts such as running and cycling for the user in its desired locations and update it in geolocational website",
      tech:["JavaScript","OOP","Geolocation","Leaflet"],
      GitLink:"https://javascript-mapty-app.netlify.app"
    },
    {
      id:4,
      image:OneNote,
      tag:"Javascript",
      Title:"One Note",
      description:"This application is created to save the quick informations. One Note App is created using HTML, CSS and Javascript. Data is managed in local storage and It performs deletion and edit operations.",
      tech:["HTML","CSS","JavaScript","LocalStorage"],
      GitLink:"https://javascript-one-note.netlify.app"
    },
    {
      id:5,
      image:Image,
      tag:"React",
      Title:"Calender",
      description:"Calender App is created using HTML, CSS, Javascript",
      tech:["HTML","CSS","JavaScript"],
      GitLink:"https://javascript-mapty-app.netlify.app"
    },
    {
      id:6,
      image:Forkify,
      tag:"Javascript",
      Title:"Forkify App",
      description:"A modern recipe web application hosting over 1,000,000 dishes. Built with HTML, SCSS, JavaScript and Parcel, it dynamically scales ingredient amounts relative to the user-selected serving size.",
      tech:["HTML","SCSS","JavaScript","Parcel"],
      GitLink:"https://forkify-jayalakshmi.netlify.app"
    }
  ]