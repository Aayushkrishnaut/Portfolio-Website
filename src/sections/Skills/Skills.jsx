// import styles from './SkillsStyles.module.css';
// import checkMarkIconDark from '../../assets/checkmark-dark.svg';
// import checkMarkIconLight from '../../assets/checkmark-light.svg';
// import SkillList from '../../common/SkillList';
// import { useTheme } from '../../common/ThemeContext';
// function Skills() {
//   const { theme } = useTheme();
//   const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
//   return (
//     <section id="skills" className={styles.container}>
//       <h1 className="sectionTitle">Skills</h1>
//       <div className={styles.skillList}>
//         <SkillList src={checkMarkIcon} skill="HTML" />
//         <SkillList src={checkMarkIcon} skill="CSS" />
//         <SkillList src={checkMarkIcon} skill="JavaScript" />
//         <SkillList src={checkMarkIcon} skill="Node.js" />
//       </div>
//       <hr />
//       <div className={styles.skillList}>
//         <SkillList src={checkMarkIcon} skill="React.js" />
//         <SkillList src={checkMarkIcon} skill="Next.js" /> 
// {/*         <SkillList src={checkMarkIcon} skill="Tailwind CSS" /> */}
//       </div>
//       <hr />
//       <div className={styles.skillList}>
// {/*         <SkillList src={checkMarkIcon} skill="Redux" />  */}
// {/*         <SkillList src={checkMarkIcon} skill="Webpack" />  */}
//         <SkillList src={checkMarkIcon} skill="Git" />
// {/*         <SkillList src={checkMarkIcon} skill="Jest" />  */}
//         <SkillList src={checkMarkIcon} skill="Tailwind" />  
//       </div>
//     </section>
//   );
// }
// export default Skills;



import React from 'react';
import { useTheme } from '../../common/ThemeContext';
import { WebhookIcon, Code, BookOpen, AtomIcon, PythonIcon, Briefcase, Cpu, Database, UserIcon } from 'lucide-react';
import './Skills.css';

const SkillButton = ({ icon: Icon, label }) => {
  const { theme } = useTheme();
  return (
    <button className={`skill-button ${theme}`}>
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-container">
        <SkillButton icon={WebhookIcon} label="Web Developer" />
        <SkillButton icon={Code} label="Coding" />
        <SkillButton icon={BookOpen} label="Learner" />
        <SkillButton icon={AtomIcon} label="React" />
        <SkillButton icon={PythonIcon} label="Python" />
        <SkillButton icon={Briefcase} label="Intern" />
        <SkillButton icon={Cpu} label="Tech Enthusiast" />
        <SkillButton icon={Database} label="Backend Developer" />
        <SkillButton icon={UserIcon} label="Introvert" />
      </div>
    </section>
  );
};

export default Skills;
