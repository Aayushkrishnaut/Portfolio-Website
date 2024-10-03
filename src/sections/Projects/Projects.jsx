// import styles from './ProjectsStyles.module.css';
// import viberr from '../../assets/viberr.png';
// import freshBurger from '../../assets/fresh-burger.png';
// import hipsster from '../../assets/hipsster.png';
// import fitLift from '../../assets/fitlift.png';
// import ProjectCard from '../../common/ProjectCard';

// function Projects() {
//   return (
//     <section id="projects" className={styles.container}>
//       <h1 className="sectionTitle">Projects</h1>
//       <div className={styles.projectsContainer}>
//         <ProjectCard
//           src={viberr}
//           link="https://github.com/Aayushkrishnaut/AayushYadavPortfolio"
//           h3="My Porfolio "
//           // p="Streaming App"
//         />
//         <ProjectCard
//           src={freshBurger}
//           link="https://github.com/Aayushkrishnaut/NotesMaker"
//           h3="Notes Maker"
//           // p="Hamburger Restaurant"/

//         />
//         <ProjectCard
//           src={hipsster}
//           link="https://github.com/Aayushkrishnaut/RPS_game"
//           h3="RPS game"
//           // p="Glasses Shop"
//         />
//         {/* <ProjectCard
//           src={fitLift}
//           link="https://github.com/Ade-mir/company-landing-page-2"
//           h3="FitLift"
//           p="Fitness App"
//         /> */}
//       </div>
//     </section>
//   );
// }

// export default Projects;


import React from 'react';
import { useTheme } from '../../common/ThemeContext'; // Assuming you have a theme context set up

const ProjectCard = ({ title, image, description, githubLink, liveDemoLink }) => {
  const { theme } = useTheme(); // Assuming theme context is implemented

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full max-w-sm h-80 transition-colors duration-300`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-full text-sm transition-colors duration-300"
            onClick={() => window.open(githubLink, '_blank')}
          >
            GitHub
          </button>
          <button
            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-full text-sm transition-colors duration-300"
            onClick={() => window.open(liveDemoLink, '_blank')}
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      title: "Project One",
      image: "https://source.unsplash.com/random/400x300",
      description: "Better Communication with Each Other",
      githubLink: "https://github.com/your-repo/project-one",
      liveDemoLink: "https://project-one.netlify.app",
    },
    {
      title: "Project Two",
      image: "https://source.unsplash.com/random/400x300",
      description: "Stop Scrolling!",
      githubLink: "https://github.com/your-repo/project-two",
      liveDemoLink: "https://project-two.netlify.app",
    },
    {
      title: "Project Three",
      image: "https://source.unsplash.com/random/400x300",
      description: "Available now on the app",
      githubLink: "https://github.com/your-repo/project-three",
      liveDemoLink: "https://project-three.netlify.app",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2 text-gray-900 dark:text-gray-200">Projects</h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-8">Browse My Recent Work</p>
      <div className="flex flex-nowrap overflow-x-auto space-x-6 pb-6">
        {projects.map((project, index) => (
          <div key={index} className="flex-none">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
