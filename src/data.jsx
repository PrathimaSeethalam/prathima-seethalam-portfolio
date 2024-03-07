import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: '/comfy-sloth-project.png',
    url: 'https://prathimas-store-comfy-sloth.netlify.app/',
    github: 'https://github.com/PrathimaSeethalam/comfy-sloth',
    title: 'E-Commerce Store',
    text: 'This is an E-Commerce Store application simplifies online shopping with a user-friendly interface and essential features. Utilizing React Router for smooth navigation and Context API for state management users can browse products, login securely using Auth0, and easily manage their cart. With context API, the checkout process is seamless, allowing swift additions and modifications to the cart. Integrated card payment feature using stripe ensures secure transactions, making shopping hassle-free on any device.',
  },
  {
    id: nanoid(),
    img: '/my-birthday-buddy.png',
    url: 'https://mybirthdaybuddy.netlify.app/',
    github: 'https://github.com/PrathimaSeethalam/Birthday-Buddy',
    title: 'Birthday Buddy Reminder',
    text: 'Reminds you of all the Birthdays you have today. You can set a reminder by uploading the details of all the birth dates you want to remember.The birthday reminder app helps users keep track of important birthdays and never miss a special occasion. With user-friendly features, it allows for easy input of birthdays and sends timely reminders to ensure celebrations are never forgotten.Simplifying the task of remembering birthdays, it enhances relationships and adds joy to every celebration.',
  },
  {
    id: nanoid(),
    img: '/my-color-generator.png',
    url: 'https://mycolorgeneratorapp.netlify.app',
    github: 'https://github.com/PrathimaSeethalam/myColorGenerator',
    title: 'Color Generator',
    text: 'The color generator application simplifies the process of exploring various shades of a chosen color. With a user-friendly interface, users input their desired color through a form and submit their selection. Upon submission, the application generates a table displaying different shades and tones of the chosen color, providing users with a comprehensive palette to explore. This tool is valuable for designers, artists, and anyone seeking inspiration for color schemes, allowing for effortless experimentation and customization.',
  }
  // {
  //   id: nanoid(),
  //   img: '../public/comfy-sloth-project.png',
  //   url: 'https://prathima-seethalam.netlify.app/',
  //   github: 'https://github.com/PrathimaSeethalam',
  //   title: 'Fourth project',
  //   text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  // },
  // {
  //   id: nanoid(),
  //   img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   url: 'https://prathima-seethalam.netlify.app/',
  //   github: 'https://github.com/PrathimaSeethalam',
  //   title: 'Fifth project',
  //   text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  // },
  // {
  //   id: nanoid(),
  //   img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   url: 'https://prathima-seethalam.netlify.app/',
  //   github: 'https://github.com/PrathimaSeethalam',
  //   title: 'Sixth project',
  //   text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  // },
];
