import joke from '../assets/projects/joke.jpg';
import materials from '../assets/projects/materials.jpg';
import Portfolio from '../assets/projects/portfolio.jpg';
import Todomanagement from '../assets/projects/Todomanagement.jpg';
import weather from '../assets/projects/weather.jpg';

export const PROJECTS = [
  {
    title: 'JOKE - API',
    image: joke,
    description: 'A fully functional joke website with features like to run a joke and laugh.',
    technologies: ['Reactjs', 'Api'],
    visitLink: 'https://example.com/joke-api', 
    documentationLink: 'https://example.com/joke-api-docs' 
  },
  {
    title: 'SRKR - Materials',
    image: materials,
    description: 'A website for students of srkr engineering college,who can access the materials',
    technologies: ['HTML', 'CSS', 'Javascript'],
    visitLink: 'https://srkrmaterials.netlify.app/', 
    documentationLink: 'https://example.com/srkr-materials-docs' 
  },
  {
    title: 'Portfolio Website',
    image: Portfolio,
    description: 'A personal portfolio website showcasing projects, skills, and contact information.',
    technologies: ['React', 'Tailwindcss'],
    visitLink: 'https://example.com/portfolio', 
    documentationLink: 'https://example.com/portfolio-docs' 
  },
  {
    title: 'Todo management',
    image: Todomanagement,
    description: 'A platform for creating and using the daily works of a person.',
    technologies: ['React', 'css'],
    visitLink: 'https://example.com/todo-management', 
    documentationLink: 'https://example.com/todo-management-docs' 
  },
  {
    title: 'Weather-app',
    image: weather,
    description: 'A platform for creating and using the daily works of a person.',
    technologies: ['React', 'Api', 'css'],
    visitLink: 'https://example.com/weather-app', 
    documentationLink: 'https://example.com/weather-app-docs' 
  }
];

export const CONTACT = {
  address: 'Near State Bank of india,Atreyapuram',
  phoneNo: '9701087746',
  email: 'kalyanyatam09@gmail.com',
};
