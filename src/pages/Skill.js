import { motion } from 'framer-motion';

const zoomCircleVariants = {
  initial: { opacity: 0, scale: 0.2, borderRadius: '50%', transition: { duration: 0 }},
  animate: { opacity: 1, scale: 1, borderRadius: '0%', transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }},
  exit: { opacity: 0, scale: 0.2, borderRadius: '50%', transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }},
};

function Skill() {
  return (
    <motion.div
      className="page-motion"
      variants={zoomCircleVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="sub sub_skill">
        <div className="scroll_wrap">
          <div className="skill">

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
