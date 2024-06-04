import { nanoid } from 'nanoid';
import { FaAsymmetrik, FaDatabase, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';


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
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Azure',
    icon: <FaAsymmetrik className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'SQL',
    icon: <FaDatabase className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: '/comfy-sloth-project.png',
    url: 'https://ecommerce-store-prathima.netlify.app/',
    github: 'https://github.com/PrathimaSeethalam/Ecommerce-realtime',
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
  },
  {
    id: nanoid(),
    img: '/books-app.png',
    url: 'https://book-favs-app.netlify.app/',
    github: 'https://github.com/PrathimaSeethalam/book-favs-prathima',
    title: 'My Favorite Books App',
    text: 'This app has a list of your books and adds it to the favorites using context API.',
  },
  {
    id: nanoid(),
    img: '/backroads.png',
    url: 'https://backroads-product-design.netlify.app/',
    github: 'https://github.com/PrathimaSeethalam/backroads-ad',
    title: 'Explore Backroad Tours',
    text: 'This is a deisgn of the app to explore tours. It showcases a variety of featured tours and services a user can choose from. ',
  },
  {
    id: nanoid(),
    img: '/grocery-bud.png',
    url: 'https://grocery-bud-prathima.netlify.app/',
    github: 'https://github.com/PrathimaSeethalam/my-grocery-bud',
    title: 'My Grocery Buddy',
    text: 'Add your list of groceries to shop and delete them when your done! A fun way to track your grocery list.',
  },
  {
    id: nanoid(),
    img: '/diet.png',
    url: 'https://restaurant-app-ff54a.web.app',
    github: 'https://github.com/PrathimaSeethalam/restaurant-finder',
    title: 'Restaurant Finder',
    text: ' Find restaurants and dishes based on your calories and diet supplmenent requirements. Find a list of restaurants with enumerated dishes by uploading a pic of your favorite food',
  },
  {
    id: nanoid(),
    img: '/chatbot.png',
    url: 'https://aisummit-hack.netlify.app/',
    github: 'https://github.com/PrathimaSeethalam/AI-SUMMIT-HACKATHON-NYC',
    title: 'De-stress Chatbot',
    text: 'This AI chatbot provides a De - stress therapy for patients. Happily ease yor pain with this AI tool. ',
  },
  {
    id: nanoid(),
    img: '/posts.png',
    title: 'Posts MicroService',
    text: 'Making a posts service to post comments and trying to make it effecient..',
  }
];
