import { motion } from 'framer-motion';

import skillData from '../assets/json/skillData.json';

import ThreeHtmlLogo from '../components/ThreeHtmlLogo'
import ThreeCssLogo from '../components/ThreeCssLogo'
import ThreeJsLogo from '../components/ThreeJsLogo'
import ThreeLogo from '../components/ThreeLogo'
import ThreeTsLogo from '../components/ThreeTsLogo'
import ThreeReactLogo from '../components/ThreeReactLogo'
import ThreeGitLogo from '../components/ThreeGitLogo'
import ThreeFigmaLogo from '../components/ThreeFigmaLogo'

import '../assets/css/components.css';
import '../assets/css/skill.css';

const zoomVariants = {
  initial: { opacity: 0, scale: 0.2, transition: { duration: 0 }},
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }},
  exit: { opacity: 0, scale: 0.2, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }},
};

const cardVariants = {
  offscreen: { y: 300, opacity: 0, },
  onscreen: { y: 50, opacity: 1, rotate: -10, transition: {   type: 'spring',   bounce: 0.4,   duration: 0.8, }, },
};

const threeComponents = {
  ThreeHtmlLogo,
  ThreeCssLogo,
  ThreeJsLogo,
  ThreeLogo,
  ThreeTsLogo,
  ThreeReactLogo,
  ThreeGitLogo,
  ThreeFigmaLogo,
};

function Card({ title, Component, i }) {

  return (
    <motion.div
      className={`card-container card-container-${i}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div className="splash" />
      <motion.div className="card" variants={cardVariants}>
        <div className="title">{title}</div>
        {Component ? <Component /> : title}
      </motion.div>
    </motion.div>
  );
}

function Skill() {
  return (
    <motion.div
      className="page-motion page-motion-skill"
      variants={zoomVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="sub sub_skill">
        <div className="scroll_wrap">
          <div className="skill">
            <div className="skill-card">
              {skillData.map(({ title, three }, i) => {
                const ThreeComponent = threeComponents[three] || null;

                return (
                  <Card
                    key={title}
                    i={i}
                    title={title}
                    Component={ThreeComponent}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
