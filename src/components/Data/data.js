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
      GitLink:"https://javascript-calender-app.netlify.app"
    },
    {
      id:2,
      image:FoodApp,
      tag:"React",
      Title:"Food Delivery App",
      description:"This Project is created using React appication to order food.data are managed with Context API and firebase database. Local storage in the browser is established to store data cart items.",
      GitLink:"https://jayalakshmi-23.github.io/ReactJs-Food-Delivery-App/"
    },
    {
      id:3,
      image:Mapty,
      tag:"Javascript",
      Title:"Mapty App",
      description:"A Map application is made with Vanilla JavaScript to store workouts such as running and cycling for the user in its desired locations and update it in geolocational website",
      GitLink:"https://javascript-mapty-app.netlify.app"
    },
    {
      id:4,
      image:OneNote,
      tag:"Javascript",
      Title:"One Note",
      description:"This application is created to save the quick informations. One Note App is created using HTML, CSS and Javascript. Data is managed in local storage and It performs deletion and edit operations.",
      GitLink:"https://javascript-one-note.netlify.app"
    },
    {
      id:5,
      image:Image,
      tag:"React",
      Title:"Calender",
      description:"Calender App is created using HTML, CSS, Javascript",
      GitLink:"https://javascript-mapty-app.netlify.app"
    },
    {
      id:6,
      image:Forkify,
      tag:"Javascript",
      Title:"Forkify App",
      description:"It is basic web application which is used as guide to cook one's favourite dish.In this website users can search over 1,00,000 recipes. this website is created using HTML, CSS, JavaScript etc,...",
      GitLink:"https://forkify-jayalakshmi.netlify.app"
    }
  ]