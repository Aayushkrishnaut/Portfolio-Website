import React from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

const skillCategories = [
  ['HTML', 'CSS', 'JavaScript', 'Node.js'],
  ['React.js', 'Next.js', 'Tailwind CSS'],
  ['Redux', 'Git']
];

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      {skillCategories.map((category, index) => (
        <React.Fragment key={index}>
          <div className={styles.skillList}>
            {category.map(skill => (
              <SkillList key={skill} src={checkMarkIcon} skill={skill} />
            ))}
          </div>
          {index < skillCategories.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </section>
  );
}

export default Skills;
