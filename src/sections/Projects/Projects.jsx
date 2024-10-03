import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/notes.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Aayushkrishnaut/AayushYadavPortfolio"
          h3="My Porfolio "
          // p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Aayushkrishnaut/NotesMaker"
          h3="Notes Maker"
          // p="Hamburger Restaurant"/

        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Aayushkrishnaut/RPS_game"
          h3="RPS game"
          // p="Glasses Shop"
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
