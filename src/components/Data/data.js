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
      description:"Calender App is created using HTML, CSS, Javascript",
      GitLink:"https://javascript-calender-app.netlify.app"
    },
    {
      id:2,
      image:FoodApp,
      tag:"React",
      Title:"Food Delivery App",
      description:"Food Delivery app App is created using React Js with firebase database",
      GitLink:"https://jayalakshmi-23.github.io/ReactJs-Food-Delivery-App/"
    },
    {
      id:3,
      image:Mapty,
      tag:"Javascript",
      Title:"Mapty App",
      description:"Mapty App is created using HTML, CSS, Javascript",
      GitLink:"https://javascript-mapty-app.netlify.app"
    },
    {
      id:4,
      image:OneNote,
      tag:"Javascript",
      Title:"One Note",
      description:"One Note App is created using HTML, CSS, Javascript",
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
      description:"Forkify App is created using HTML, CSS, Javascript",
      GitLink:"https://forkify-jayalakshmi.netlify.app"
    }
  ]